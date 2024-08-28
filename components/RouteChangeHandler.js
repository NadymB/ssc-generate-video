"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteChangeHandler() {
  const pathname = usePathname();
  useEffect(() => console.log("pathname test:", pathname), [pathname]);
  return null;
}
