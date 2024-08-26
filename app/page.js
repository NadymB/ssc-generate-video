"use client";
import Index from "@/components/Index";
import Layout from "@/layouts/layout";
import { AuthProvider } from "@/context/authContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
// import Layout from "@/layouts/layout";
import React from "react";
import withProtectedRoute from "@/components/WithProtectedRoute";
// import withProtectedRoute from "@/components/WithProtectedRoute"; // No dynamic import

const MusicGeneration = dynamic(() => import("@/components/MusicGeneration"), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    document.title = "Music Generation | Techwave NextJs";
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

// export default function Home() {
//   const router = useRouter();

//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     router.push("/music-generation");
//   //   }
//   // }, [router]);
//   return (
//     <Layout>
//       <MusicGeneration />
//     </Layout>
//   );
// }
