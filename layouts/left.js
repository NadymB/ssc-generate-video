"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const data = [
  {
    title: "Music Generation",
    pathname: "/",
    img: "../svg/image.svg",
  },

  {
    title: "Users",
    pathname: "/user-management/",
    img: "..//svg/community.svg",
  },
  {
    title: "Teams",
    pathname: "/team-management/",
    img: "..//svg/community.svg",
  },
  {
    title: "Groups",
    pathname: "/group-management/",
    img: "..//svg/community.svg",
  },

  // {
  //   title: "Home",
  //   pathname: "/",
  //   img: "../svg/home.svg",
  // },
  // {
  //   title: "Community Feed",
  //   pathname: "/community-feed",
  //   img: "..//svg/community.svg",
  // },
  // {
  //   title: "Personal Feed",
  //   pathname: "/personal-feed",
  //   img: "../svg/person.svg",
  //   counter: 48,
  // },
  // {
  //   title: "Finetuned Models",
  //   pathname: "/models",
  //   img: "../svg/cube.svg",
  // },
  // {
  //   title: "Image Generation",
  //   pathname: "/image-generation",
  //   img: "../svg/image.svg",
  // },
  // {
  //   title: "Music Generation (test)",
  //   pathname: "/music-generation",
  //   img: "../svg/image.svg",
  // },
  // {
  //   title: "AI Chat Bot",
  //   pathname: "/ai-chat-bot",
  //   img: "../svg/chat.svg",
  // },
  // {
  //   title: "Pricing",
  //   pathname: "/pricing",
  //   img: "../svg/dollar.svg",
  // },
  // {
  //   title: "Documentation",
  //   pathname: "/documentation",
  //   img: "",
  // },
  // {
  //   title: "FAQ",
  //   pathname: "/faq",
  //   img: "",
  // },
  // {
  //   title: "Change Log",
  //   pathname: "/changelog",
  //   img: "",
  //   counter: (
  //     <>
  //       <span className="fn__sup">(4.1.2)</span>
  //     </>
  //   ),
  // },
  // {
  //   title: "Contact Us",
  //   pathname: "/contact",
  //   img: "",
  // },
  // {
  //   title: "Home #2",
  //   pathname: "/index-2",
  //   img: "",
  // },
  // {
  //   title: "Log Out",
  //   pathname: "/sign-in",
  //   img: "../svg/logout.svg",
  // },
];

export default function Left({ activeTrueFalse, activeMobileMenu }) {
  const pathname = usePathname();
  const { profile: user } = useSelector((state) => {
    return {
      profile: state?.authenReducer?.profile,
    };
  });
  const [isToggle, setToggle] = useState(false);
  const toggleHandle = () => setToggle(!isToggle);

  return (
    <>
      <div className="techwave_fn_leftpanel bg-black_background ">
        <div className="mobile_extra_closer" />
        {/* logo (left panel) */}
        <div className="leftpanel_logo">
          <Link href="/" className="fn_logo">
            <span className="full_logo">
              <img
                src="../img/mht-ai-logo-5.jpg"
                alt=""
                className="desktop_logo"
                style={{ width: "100px", height: "100px" }}
              />
              <img
                src="../img/logo-retina-full.png"
                alt=""
                className="retina_logo"
              />
            </span>
            <span className="short_logo">
              <img
                src="../img/logo-desktop-mini.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="../img/logo-retina-mini.png"
                alt=""
                className="retina_logo"
              />
            </span>
          </Link>
          {/* <a
            className="fn__closer fn__icon_button desktop_closer"
            onClick={activeTrueFalse}
          >
            <img src="../svg/arrow.svg" alt="" className="fn__svg" />
          </a> */}
          <a
            className="fn__closer fn__icon_button mobile_closer"
            onClick={activeMobileMenu}
          >
            <img src="../svg/arrow.svg" alt="" className="fn__svg" />
          </a>
        </div>
        {/* !logo (left panel) */}
        {/* content (left panel) */}
        <div className="leftpanel_content">
          {/* #1 navigation group */}
          <div className="nav_group">
            <h2 className="group__title">Tools</h2>
            <ul className="group__list">
              {data.slice(0, 1).map((item, i) => (
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
                    <span className="text">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* !#1 navigation group */}

          {/* #2 navigation group */}
          {user?.group != "EMPLOYEE" && (
            <div className="nav_group">
              <h2 className="group__title">Management</h2>
              <ul className="group__list">
                {data.slice(1, 4).map((item, i) => (
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
              </ul>
            </div>
          )}

          {/* !#2 navigation group */}

          {/* #3 navigation group */}
          {/* <div className="nav_group">
            <h2 className="group__title">Support</h2>
            <ul className="group__list">
              {data.slice(7, 8).map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.pathname}
                    className={`fn__tooltip menu__item ${
                      pathname === item.pathname ? " active" : ""
                    }`}
                    title={item.title}
                  >
                    <span className="icon">
                      <img src={item.img} alt="" className="fn__svg" />
                    </span>
                    <span className="text">{item.title}</span>
                  </Link>
                </li>
              ))}

              <li
                className={`menu-item-has-children ${isToggle ? "closed" : ""}`}
              >
                <a
                  className="fn__tooltip menu__item"
                  title="FAQ & Help"
                  onClick={toggleHandle}
                >
                  <span className="icon">
                    <img src="../svg/question.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">FAQ &amp; Help</span>
                  <span className="trigger">
                    <img src="../svg/arrow.svg" alt="" className="fn__svg" />
                  </span>
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: `${isToggle ? "block" : "none"}` }}
                >
                  {data.slice(7, 12).map((item, i) => (
                    <li key={i}>
                      <Link href={item.pathname}>
                        <span
                          className={`text ${
                            item.pathname === pathname ? "active" : ""
                          }`}
                        >
                          {item.title}
                          {item.counter}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {data.slice(12, 13).map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.pathname}
                    className={`text ${
                      item.pathname === pathname ? "active" : ""
                    }`}
                    title={item.title}
                  >
                    <span className="icon">
                      <img src={item.img} alt="" className="fn__svg" />
                    </span>
                    <span className="text">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          {/* !#3 navigation group */}
        </div>
        {/* !content (left panel) */}
      </div>
    </>
  );
}
