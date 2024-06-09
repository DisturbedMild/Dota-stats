import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MainNavigation from "@components/navigation/mainNavigation";
import ReactQueryProvider from "@/utils/ReactQueryProvider";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={roboto.className}>
        <MainNavigation />
        <ReactQueryProvider>
          <main className="container mx-auto">{children}</main>
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
