"use client";
import UserSettings from "@/components/UserSettings";
import Profile from "@/components/profile";
import Layout from "@/layouts/layout";
import React from "react";
import withProtectedRoute from "@/components/WithProtectedRoute";
import { useEffect } from "react";

// export const metadata = {
//   title: "User Settings",
//   content: "text/html",
//   openGraph: {
//     title: "User Settings",
//     content: "text/html",
//   },
// };

const page = () => {
  useEffect(() => {
    document.title = "Music Generation | MHT MUSIC AI";
  });

  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default withProtectedRoute(page);
