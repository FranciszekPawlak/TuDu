'use client'
import { Flowbite } from "flowbite-react";
import { FC, PropsWithChildren } from "react"
import theme from '../../../lib/helpers/flowbiteTheme'
import { SidebarProvider } from "@/lib/context/SidebarContext";
import SessionProvider from '../client/SessionProvider'

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <SessionProvider>
            <Flowbite theme={{ theme }}>
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </Flowbite>
        </SessionProvider>
    )
}

export default Providers;