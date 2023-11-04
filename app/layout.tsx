import type { Metadata } from "next";

import "./globals.css";

import React from "react";
import Layout from "./components/layout/main";

export const metadata: Metadata = {
  title: "tudu",
  description: "tudu app",
  other: { "theme-color": "#ffffff" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-gray-900 antialiased min-h-screen">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
