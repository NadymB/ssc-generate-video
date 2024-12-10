"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const withProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const { token: authToken } = useSelector((state) => {
      return {
        token: state?.authenReducer?.token,
      };
    });
    const router = useRouter();

    useEffect(() => {
      if (!authToken) {
        router.push("/sign-in");
      }
    }, [authToken, router]);

    // If the user is authenticated, render the WrappedComponent
    // Otherwise, render null while the redirection is in progress
    return authToken ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;
