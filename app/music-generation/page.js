"use client";

import { useEffect } from "react";
// import MusicGeneration from "@/components/MusicGeneration"; // No need to dynamically import
import dynamic from "next/dynamic";
import Layout from "@/layouts/layout";
import React from "react";
import withProtectedRoute from "@/components/WithProtectedRoute";
// import withProtectedRoute from "@/components/WithProtectedRoute"; // No dynamic import

const MusicGeneration = dynamic(() => import("@/components/MusicGeneration"), {
  ssr: false,
});

const page = () => {
  useEffect(() => {
    document.title = "Music Generation | Techwave NextJs";
  }, []);

  return (
    <Layout leftMenu>
      <MusicGeneration />
    </Layout>
  );
};

// export default withProtectedRoute(Page);

export default withProtectedRoute(page);
// export default page;
