import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@components/navigation/mainNavigation";
import ReactQueryProvider from "@/utils/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
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
