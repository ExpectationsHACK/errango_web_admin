import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../ui/header";
import Sidebar from "../ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Errango",
  description: "Errango Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Header />
        <div className="flex space-x-5  min-h-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
