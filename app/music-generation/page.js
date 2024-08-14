import MusicGeneration from "@/components/MusicGeneration";
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
      <MusicGeneration />
    </Layout>
  );
}
