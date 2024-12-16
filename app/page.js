"use client";
import Index from "@/components/Index";
import Layout from "@/layouts/layout";
import { AuthProvider } from "@/context/authContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../output.css";
import { wrapper } from "@/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

import dynamic from "next/dynamic";
// import Layout from "@/layouts/layout";
import React from "react";
import withProtectedRoute from "@/components/WithProtectedRoute";
// import withProtectedRoute from "@/components/WithProtectedRoute"; // No dynamic import

const MusicGeneration = dynamic(() => import("@/components/VideoGeneration"), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    document.title = "MHT AI | Music Generation";
    console.log(document.title);
  }, []);

  // useEffect(() => {
  //   window.location.reload();
  // }, [])

  return (
    <Layout>
      <MusicGeneration />
    </Layout>
  );
};

export default withProtectedRoute(Home);
