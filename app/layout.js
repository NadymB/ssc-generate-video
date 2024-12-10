"use client";
import "./globals.css";
import "../public/css/plugins.css";
import "../public/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Heebo, Work_Sans } from "next/font/google";
import { AuthProvider } from "@/context/authContext";
import { icons } from "antd/es/image/PreviewGroup";
import { RouteChangeHandler } from "@/components/RouteChangeHandler";
import { wrapper } from "@/redux/store"; // Import the wrapper
import { Provider } from "react-redux";

function RootLayout({ children }) {
  const store = wrapper.useStore();
  return (
    <Provider store={store}>
      <html lang="en" className="toggleMenu">
        <body>
          {children}
          <RouteChangeHandler />
        </body>
      </html>
    </Provider>
  );
}

// Wrap the RootLayout with the Redux wrapper
export default RootLayout;
