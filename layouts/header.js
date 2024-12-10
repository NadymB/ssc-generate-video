"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import screenfull from "screenfull";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { logOut } from "@/redux/actions/authenAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadProfile } from "@/redux/actions/authenAction";

// import UserBilling from "@/public/svg/";

const data = [
  {
    title: "Quản Lý User",
    pathname: "/user-management/",
    img: "/svg/community.svg",
  },
  {
    title: "Quản Lý Team",
    pathname: "/team-management/",
    img: "@/public//svg/community.svg",
  },
  {
    title: "Quản Lý Group",
    pathname: "/group-management/",
    img: "/svg/community.svg",
  },
];

const ex_routes = [
  "/user-management/",
  "/team-management/",
  "/group-management/",
  "/profile/",
];

export default function Header({ searchToggle }) {
  // Light/Dark switcher
  const [skin, setSkin] = useState("dark");
  const [isFullscreen, setIsFullscreen] = useState(false);
  // const { logout, user } = useAuth();
  const { profile: user } = useSelector((state) => {
    return {
      profile: state?.authenReducer?.profile,
    };
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname(); // get router info

  const toggleSkin = () => {
    const newSkin = skin === "light" ? "dark" : "light";
    setSkin(newSkin);
  };

  useEffect(() => {
    // Check if running in the browser (client side)
    if (typeof window !== "undefined") {
      // Update local storage and document attribute
      localStorage.setItem("frenify_skin", skin);
      if (skin == "dark") {
        document.documentElement.classList.add("dark");
        console.log("dark skin");
      } else {
        document.documentElement.classList.remove("dark");
        console.log("darkSkin");
      }

      document.documentElement.setAttribute("data-techwave-skin", skin);
    }
  }, [skin]);

  // Full Screen Handler
  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  const handleLogin = useCallback(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  const handleFullscreenChange = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  useEffect(() => {
    // Fullscreen handlers
    if (screenfull.isEnabled) {
      screenfull.on("change", handleFullscreenChange);
    }
    handleLogin();
    console.log(user);

    return () => {
      if (screenfull.isEnabled) {
        screenfull.off("change", handleFullscreenChange);
      }
    };
  }, []);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header className="techwave_fn_header dark:bg-black_background">
        <div className="header__left">
          <div className="fn__token_info">
            <div className="group__list d-flex mx-auto">
              {!ex_routes.includes(pathname) & (user?.group != "EMPLOYEE") &&
                data.slice(0, 4).map((item, i) => (
                  <Link
                    href={`${item.pathname}`}
                    className="fn__tooltip menu__item d-flex align-items-center justify-content-between"
                    title={item.title}
                    key={i}
                  >
                    <span className="icon">
                      <img
                        src="/svg/community.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </span>

                    <span className="text ms-2">{item.title}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="header__right">
          <div className="fn__nav_bar">
            <div className="bar__item bar__item_fullscreen">
              <a
                className={`item_opener fn__tooltip ${
                  isFullscreen ? "full_screen" : ""
                }`}
                title="Full Screen"
                onClick={toggleFullscreen}
              >
                <img
                  src="/svg/fullscreen.svg"
                  alt=""
                  className="fn__svg f_screen"
                />
                <img
                  src="/svg/smallscreen.svg"
                  alt=""
                  className="fn__svg s_screen"
                />
              </a>
            </div>

            <div className="bar__item bar__item_skin">
              <a
                className="item_opener fn__tooltip"
                title="Dark/Light"
                onClick={toggleSkin}
              >
                <img
                  src={skin === "light" ? "/svg/sun.svg" : "/svg/moon.svg"}
                  alt=""
                  className="fn__svg dark_mode"
                />
                <img
                  src={skin === "light" ? "/svg/moon.svg" : "/svg/sun.svg"}
                  alt=""
                  className="fn__svg light_mode"
                />
              </a>
            </div>
            {/* !Site Skin (bar item) */}
            {/* User (bar item) */}
            <Menu as="div" className="bar__item bar__item_user opened">
              <Menu.Button
                as="nav"
                id="Button3"
                className="user_opener fn__tooltip"
                title="User Profile"
              >
                <img src="/img/user/user_2.webp" alt="" />
              </Menu.Button>
              <Menu.Items as="div" className="item_popup" data-position="right">
                <div className="user_profile">
                  <div className="user_img">
                    <img src="/img/user/user_2.webp" alt="" />
                  </div>
                  <div className="user_info">
                    <h2 className="user_name">
                      <span>{user?.group}</span>
                    </h2>
                    <p>
                      <Link
                        href="/mailto:cadmail@gmail.com"
                        className="user_email"
                      >
                        {/* cadmail@gmail.com */}
                        {user?.email}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="user_nav">
                  <ul>
                    <li>
                      <Link href="/profile">
                        <span className="icon">
                          <img
                            src="/svg/person.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Hồ Sơ</span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/user-settings">
                        <span className="icon">
                          <img
                            src="/svg/setting.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/user-billing">
                        <span className="icon">
                          <img
                            src="/svg/billing.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Billing</span>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="#" onClick={handleLogout}>
                        <span className="icon">
                          <img
                            src="/svg/logout.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Đăng Xuất</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Menu.Items>
            </Menu>
            {/* !User (bar item) */}
          </div>
        </div>
        {/* !Header right: navigation bar */}
      </header>
    </>
  );
}
