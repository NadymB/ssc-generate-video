"use client"

import TeamManagement from "@/components/TeamManagement";
// import Layout from "@/layouts/layout";
// import Layout from "../../../layouts/layout";
import Layout from "@/layouts/layout";
import React, {useEffect} from "react";
import withProtectedRoute from "@/components/WithProtectedRoute";

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
      <TeamManagement />
    </Layout>
  );
}

export default withProtectedRoute(Page)