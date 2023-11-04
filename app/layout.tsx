"use client";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Providers from "./components/providers/Providers";
import Main from "./components/layout/main/Main";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        {/* <meta name="theme-color" content="#ffffff" /> */}
      </Head>{" "}
      <body className="bg-gray-900 antialiased min-h-screen">
        <Providers>
          <Navbar />
          <div className="flex items-start pt-16">
            <Sidebar />
            <Main>{children}</Main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
