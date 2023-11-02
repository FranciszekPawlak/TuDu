'use client'
import "./globals.css";
import Navbar from './components/layout/navbar/Navbar'
import Sidebar from './components/layout/sidebar/Sidebar'
import Providers from "./components/providers/Providers";
import Main from "./components/layout/main/Main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 antialiased min-h-screen">
          <Providers>
            <Navbar />
            <div className="flex items-start pt-16">
              <Sidebar />
              <Main>
                {children}
              </Main>
            </div>
          </Providers>
      </body>
    </html>
  );
}