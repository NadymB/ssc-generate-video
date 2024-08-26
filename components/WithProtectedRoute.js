"use client";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const withProtectedRoute = (WrappedComponent) => {
  return (props) => {
    // const { authToken } = useAuth();
    const { authToken, login } = useAuth();
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
