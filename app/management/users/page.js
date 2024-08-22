"use client";

import { useEffect } from "react";
import UserManagementTest from "@/components/UserManagementTest";
// import Layout from "../../../layouts/layout";
import Layout from "@/layouts/layout"
import React from "react";
import withProtectedRoute from "@/components/WithProtectedRoute";

const Page = () => {
  useEffect(() => {
    document.title = "Music Generation | Techwave NextJs";
  }, []);

  return (
    <Layout leftMenu>
      <UserManagementTest />
    </Layout>
  );
};

export default withProtectedRoute(Page);
