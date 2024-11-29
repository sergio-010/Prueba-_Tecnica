import type { Metadata } from "next";

import localFont from "next/font/local";


import UIProvider from "@/context/ui/ProviderUi";

import "./globals.css";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prueba Técnica",
  description: "Dashboard para registros de marcas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UIProvider>
          <div className="w-full h-screen flex">
            <SideBar />
            <main className="grow h-full overflow-y-auto ">
              <Navbar />
              <div className="p-4">
                {children}
              </div>
            </main>
          </div>
          <Toaster />
        </UIProvider>
      </body>
    </html>
  );
}
