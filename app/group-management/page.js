"use client"

import GroupManagement from "@/components/GroupManagement";
import withProtectedRoute from "@/components/WithProtectedRoute";
// import Layout from "@/layouts/layout";
// import Layout from "../../../layouts/layout";
import Layout from "@/layouts/layout";
import React, {useEffect} from "react";

// export const metadata = {
//   title: "Music Generation",
//   content: "text/html",
//   openGraph: {
//     title: "Music Generation",
//     content: "text/html",
//   },
// };

const Page = () => {
  useEffect(() => {
    document.title = "Music Generation | MHT MUSIC AI";
  }, []);

  return (
    <Layout leftMenu>
      <GroupManagement />
    </Layout>
  );
}

export default withProtectedRoute(Page)