"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/home/Nav";
import HeroIntro from "@/components/home/HeroIntro";
import Sidebar from "@/components/home/Sidebar";
import MobileTabs from "@/components/home/MobileTabs";

export default function GlobalChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showSidebar = pathname === "/" || pathname === "/work";

  const hasOwnHeader =
    pathname === "/about" ||
    pathname === "/testimonials" ||
    pathname.startsWith("/work/");

  if (hasOwnHeader) {
    return <>{children}</>;
  }

  return (
    <>
      <Nav />
      <div className="mx-6 md:mx-10 border-b border-white/10" />
      {isHome && (
        <div className="px-6 md:px-10 pt-6 md:pt-10">
          <HeroIntro />
        </div>
      )}
      {showSidebar && <MobileTabs />}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {showSidebar && (
          <div className="hidden md:block">
            <Sidebar />
          </div>
        )}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </>
  );
}
