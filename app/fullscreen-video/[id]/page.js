"use client";

import withProtectedRoute from "@/components/WithProtectedRoute";
import Layout from "@/layouts/layout";
import dynamic from "next/dynamic";

import React, { useEffect } from "react";

const FullscreenVideo = dynamic(() => import("@/components/FullscreenVideo"), {
  ssr: false,
});

const page = () => {
  // const router = useRouter();
  // const { id } = router.query;

  useEffect(() => {
    document.title = "Music Generation | MHT MUSIC AI";
  }, []);

  return (
    <Layout leftMenu>
      <FullscreenVideo
      // videoId={id}
      />
    </Layout>
  );
};

export default withProtectedRoute(page);
