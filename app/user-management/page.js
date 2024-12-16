"use client";

import { useEffect } from "react";
import UserManagementTest from "@/components/UserManagementTest";
// import Layout from "../../../layouts/layout";
import Layout from "@/layouts/layout";
import React from "react";
import withProtectedRoute from "@/components/WithProtectedRoute";
import UserDataTable from "@/components/UserDataTable";

const Page = () => {
  useEffect(() => {
    document.title = "Music Generation | MHT MUSIC AI";
  }, []);

  return (
    <Layout leftMenu>
      {/* <UserManagementTest /> */}
      <UserDataTable />
    </Layout>
  );
};

export default withProtectedRoute(Page);
