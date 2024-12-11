"use client";
import React, { useEffect, useState } from "react";
import { imageToSvg } from "/components/Utilities";
import Footer from "./footer";
import Header from "./header";
import Left from "./left";
import GenSettingsLeft from "./genSettingsLeft";
import Search from "./search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import "../output.css";
import AlertNotification from "@/components/AlertNotification";
import { alertAction } from "@/redux/actions/alertAction";

export default function Layout({ children, leftMenu }) {
  const pathname = usePathname(); // get router info

  const [forceStop, setForceStop] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setForceStop(true);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      imageToSvg();
    }, 2000);

    if (leftMenu) {
      document.querySelector(".techwave_fn_wrapper");
      // .classList.add("fn__has_sidebar");
    }
  }, []);

  const [leftmenu, setLeftmenu] = useState(false);
  const [mobileMenu, setMobiletmenu] = useState(false);
  const activeTrueFalse = () => {
    setLeftmenu(!leftmenu);
    document.querySelector(".toggleMenu").classList.toggle("panel-opened");
  };
  const activeMobileMenu = () => {
    setMobiletmenu(mobileMenu);
    document
      .querySelector(".toggleMenu")
      .classList.toggle("mobile-panel-opened");
  };

  const [OpenSearch, setOpenSearch] = useState(false);
  const searchToggle = () => {
    setOpenSearch(!OpenSearch);
  };
  const { visibility } = useSelector((state) => {
    return {
      visibility: state?.alertReducer?.visibility,
    };
  });

  useEffect(() => {
    let timeout; // Declare timeout variable

    if (visibility === true) {
      timeout = setTimeout(() => {
        dispatch(alertAction({ visibility: false }));
      }, 2000);
    }

    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, [visibility]);
  return (
    <div className="relative h-full w-full  dark:bg-black_background bg-white">
      {/* Moving Submenu */}
      {visibility && <AlertNotification></AlertNotification>}

      <div className="h-full dark:bg-black_background bg-white">
        {/* <Search OpenSearch={OpenSearch} searchToggle={searchToggle} /> */}

        <Header searchToggle={searchToggle} />

        {pathname === "/music-generation/" || pathname === "/" ? (
          <GenSettingsLeft
            activeTrueFalse={activeTrueFalse}
            activeMobileMenu={activeMobileMenu}
          />
        ) : (
          <Left
            activeTrueFalse={activeTrueFalse}
            activeMobileMenu={activeMobileMenu}
          />
        )}

        <div className="techwave_fn_content h-[calc(100%-100px)] dark:bg-black_background bg-white">
          <Toaster position="top-center" />
          {React.cloneElement(children, { forceStop, setForceStop })}

          <Footer />
        </div>
      </div>
    </div>
  );
}
