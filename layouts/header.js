"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import screenfull from "screenfull";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/authContext";
// import UserBilling from "/";

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
  const { logout, user } = useAuth();
  const router = useRouter();
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
      document.documentElement.setAttribute("data-techwave-skin", skin);
    }
  }, [skin]);

  // Full Screen Handler
  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };

  const handleFullscreenChange = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  useEffect(() => {
    // Fullscreen handlers
    if (screenfull.isEnabled) {
      screenfull.on("change", handleFullscreenChange);
    }

    return () => {
      if (screenfull.isEnabled) {
        screenfull.off("change", handleFullscreenChange);
      }
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header className="techwave_fn_header">
        {/* Header left: token information */}
        <div className="header__left">
          <div className="fn__token_info">
            {/* <span className="token_summary">
              <span className="count">120</span>
              <span className="text">
                Tokens
                <br />
                Remain
              </span>
            </span> */}
            {/* <Link href="/pricing" className="token_upgrade techwave_fn_button">
              <span>Upgrade</span>
            </Link> */}

            {/* <ul className="group__list">
              {data.slice(0, 4).map((item, i) => (
                <li key={i}>
                  <Link
                    href={`${item.pathname}`}
                    className={`fn__tooltip menu__item ${
                      item.pathname === pathname ? "active" : ""
                    }`}
                    title={item.title}
                  >
                    <span className="icon">
                      <img src={item.img} alt="" className="fn__svg" />
                    </span>
                    <span className="text">
                      {item.title}
                      {item.counter && (
                        <span className="count">{item.counter}</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul> */}
            <div className="group__list d-flex mx-auto">
              {!ex_routes.includes(pathname) & (user?.group != "EMPLOYEE") &&
                data.slice(0, 4).map((item, i) => (
                  <Link
                    href={`${item.pathname}`}
                    className="fn__tooltip menu__item d-flex align-items-center justify-content-between"
                    title={item.title}
                  >
                    <span className="icon">
                      <img
                        src="/svg/community.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </span>
                    {/* <span>Management</span>
                     */}
                    <span className="text ms-2">
                      {/* User Management */}
                      {item.title}
                      {/* {item.title} */}
                      {/* {item.counter && <span className="count">{item.counter}</span>} */}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        {/* /Header left: token information */}
        {/* Header right: navigation bar */}
        <div className="header__right">
          <div className="fn__nav_bar">
            {/* Search (bar item) */}
            {/* <div className="bar__item bar__item_search">
              <a
                className="item_opener fn__tooltip"
                title="Search"
                onClick={searchToggle}
              >
                <img src="/svg/search.svg" alt="" className="fn__svg" />
              </a>
              <div className="item_popup" data-position="right">
                <input type="text" placeholder="Search" />
              </div>
            </div> */}
            {/* !Search (bar item) */}
            {/* Notification (bar item) */}
            {/* <Menu
              as="div"
              className="bar__item bar__item_notification has_notification opened"
            >
              <Menu.Button
                as="nav"
                id="Button1"
                className="item_opener fn__tooltip"
                title="Notifications"
              >
                <img src="/svg/bell.svg" alt="" className="fn__svg" />
              </Menu.Button>
              <Menu.Items as="div" className="item_popup" data-position="right">
                <div className="ntfc_header">
                  <h2 className="ntfc_title">Notifications</h2>
                  <Link href="/notifications">View All</Link>
                </div>
                <div className="ntfc_list">
                  <ul>
                    <li>
                      <p>
                        <Link href="/notification-single">
                          Version 4.1.2 has been launched
                        </Link>
                      </p>
                      <span>34 Min Ago</span>
                    </li>
                    <li>
                      <p>
                        <Link href="/notification-single">
                          Video Generation has been released
                        </Link>
                      </p>
                      <span>12 Apr</span>
                    </li>
                    <li>
                      <p>
                        <Link href="/notification-single">
                          Terms has been updated
                        </Link>
                      </p>
                      <span>12 Apr</span>
                    </li>
                  </ul>
                </div>
              </Menu.Items>
            </Menu> */}
            {/* !Notification (bar item) */}
            {/* Full Screen (bar item) */}
            <div className="bar__item bar__item_fullscreen">
              <a
                className={`item_opener fn__tooltip ${isFullscreen ? "full_screen" : ""
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
            {/* !Full Screen (bar item) */}
            {/* Language (bar item) */}
            {/* <Menu as="div" className="bar__item bar__item_language opened">
              <Menu.Button
                as="nav"
                id="Button2"
                className="item_opener fn__tooltip"
                title="Language"
              >
                <img src="/svg/language.svg" alt="" className="fn__svg" />
              </Menu.Button>
              <Menu.Items as="div" className="item_popup" data-position="right">
                <ul>
                  <li>
                    <span className="active">English</span>
                  </li>
                  <li>
                    <Link href="#">Spanish</Link>
                  </li>
                  <li>
                    <Link href="#">French</Link>
                  </li>
                </ul>
              </Menu.Items>
            </Menu> */}
            {/* !Language (bar item) */}
            {/* Site Skin (bar item) */}
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
