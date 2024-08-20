import UserManagement from "@/components/UserManagement";
import UserManagementTest from "@/components/UserManagementTest";
import Layout from "@/layouts/layout";
import React from "react";

export const metadata = {
  title: "Music Generation",
  content: "text/html",
  openGraph: {
    title: "Music Generation",
    content: "text/html",
  },
};

export default function page() {
  return (
    <Layout leftMenu>
      <UserManagementTest />
    </Layout>
  );
}
