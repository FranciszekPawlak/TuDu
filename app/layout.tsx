import "./globals.css";
import Navbar from './components/layout/navbar/Navbar'
import Sidebar from './components/layout/sidebar/Sidebar'
import { Metadata } from "next";
import Providers from "./components/providers/Providers";

export const metadata: Metadata = {
  title: "TuduTudu",
  description: "Jedzie pociąg",
};

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
              <main
                className="overflow-y-auto relative w-full h-full bg-gray-900 ml-0 md:ml-16 lg:ml-64"
              >
                {children}
              </main>
            </div>
          </Providers>
      </body>
    </html>
  );
}