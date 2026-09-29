"use client";
import React, { useState } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div style={{ visibility: showSplash ? "hidden" : "visible" }}>
        {children}
      </div>
    </>
  );
}
