"use client";

import { Flowbite } from "flowbite-react";
import { PropsWithChildren } from "react";
import theme from "../../../lib/helpers/flowbiteTheme";
import { SidebarProvider } from "@/lib/context/SidebarContext";
import SessionProvider from "./SessionProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <Flowbite theme={{ theme }}>
        <SidebarProvider>{children}</SidebarProvider>
      </Flowbite>
    </SessionProvider>
  );
};

export default Providers;
