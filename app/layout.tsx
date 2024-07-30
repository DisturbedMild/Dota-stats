import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { APIContextProvider } from "@/common/context/api-context";
import ReactQueryProvider from "@/common/utils/ReactQueryProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

const interFont = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dota Stats",
  description: "Dota 2 statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.className}>
        <Header />
        <ReactQueryProvider>
          <APIContextProvider>
            <main className="container mx-auto">{children}</main>
          </APIContextProvider>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
