import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const AlertNotification = () => {
  const { message, state, visibility } = useSelector((state) => {
    return {
      message: state?.alertReducer?.message,
      state: state?.alertReducer?.state,
      visibility: state?.alertReducer?.visibility,
    };
  });
  return (
    <div className="mt-2  left-0 right-0 fixed z-10 adm-toast-main adm-toast-main-icon">
      <div className="adm-toast-icon">
        {state === "success" ? (
          <img src="/svg/success.svg" alt="error" width="24" height="25" />
        ) : (
          <img src="/svg/error.svg" alt="error" width="24" height="25" />
        )}
      </div>
      <div className="adm-auto-center">
        <div className="adm-auto-center-content">{message}</div>
      </div>
    </div>
  );
};

export default AlertNotification;
