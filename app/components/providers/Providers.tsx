'use client'
import { Flowbite } from "flowbite-react";
import { FC, PropsWithChildren } from "react"
import theme from '../../../lib/helpers/flowbiteTheme'
import { SidebarProvider } from "@/lib/context/SidebarContext";

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <Flowbite theme={{ theme }}>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </Flowbite>
    )
}

export default Providers;