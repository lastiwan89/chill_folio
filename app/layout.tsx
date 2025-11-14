import type { Metadata } from "next";
import { Open_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/footer";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-cute",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "chillrains",
  description: "Developer Portfolio by chillrains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${openSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
