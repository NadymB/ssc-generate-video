import "./globals.css";
import "../public/css/plugins.css";
import "../public/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Heebo, Work_Sans } from "next/font/google";
import { AuthProvider } from "@/context/authContext";
import { icons } from "antd/es/image/PreviewGroup";

const heebo = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const worksans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "Techwave NextJs | %s",
    // content:'text/html',
    default: "Techwave | React NextJs Personal Portfolio Templage", // a default is required when creating a template
  },
  name: "description",
  
  content: "MHT MUSIC AI GENERATOR",
  openGraph: {
    title: "MHT MUSIC AI GENERATOR",
    description: "MHT MUSIC AI GENERATOR",
  },
  author: [
    { name: "Thinh" },
    { name: "Nguyen Huy", url: "https://thinhprotein.com" },
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  httpEquiv: "Content-Type",
  charset: "utf-8",
  icons: {
    icon: "../../public/img/mht-ai-logo-5.jpg", // Path to your favicon file
  },
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" className="toggleMenu"
        
      >
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
