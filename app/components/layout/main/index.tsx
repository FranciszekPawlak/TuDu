"use client";

import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import Providers from "../../providers/Providers";
import Main from "./Main";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js", { scope: "/" })
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);

  return (
    <Providers>
      <Navbar />
      <div className="flex items-start pt-16">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </Providers>
  );
}
