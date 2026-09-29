import type { Metadata } from "next";
import GlobalChrome from "@/components/home/GlobalChrome";
import SplashWrapper from "@/components/home/SplashWrapper";
import {  monoFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dammy Olayiwola's Portfolio",
  description:
    "Portfolio of Oluwadamilola, a product designer and design leader.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monoFont.variable}`}>
      <body className="font-sans bg-black text-white">
        <SplashWrapper>
          <GlobalChrome>{children}</GlobalChrome>
        </SplashWrapper>
      </body>
    </html>
  );
}
