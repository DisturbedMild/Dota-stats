import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import MainNavigation from "@components/navigation/MainNavigation";
import ReactQueryProvider from "@/common/utils/ReactQueryProvider";
import {APIContextProvider} from "@/common/context/api-context";

const roboto = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dota Stats",
  description: "Dota 2 statistics",
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <body className={roboto.className}>
    <MainNavigation/>
    <ReactQueryProvider>
      <APIContextProvider>
        <main className="container mx-auto">{children}</main>
      </APIContextProvider>
    </ReactQueryProvider>
    <footer className="mt-8">
      <div className="container mx-auto py-2 text-white">
        @Copyright Vladyslav Dmytrenko 2024.
      </div>
    </footer>
    </body>
    </html>
  );
}
