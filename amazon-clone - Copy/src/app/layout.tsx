import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AmazonHeader } from "@/components/AmazonHeader";
import { AmazonFooter } from "@/components/AmazonFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
  description: "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmazonHeader />
        <main className="min-h-screen bg-gray-100">
          {children}
        </main>
        <AmazonFooter />
      </body>
    </html>
  );
}
