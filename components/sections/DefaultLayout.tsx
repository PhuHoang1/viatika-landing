"use client";

import type React from "react";
import HeroFrame from "../sections/HeroFrame";
import Footer from "../sections/footer";
import GsapAnimations from "../sections/GsapAnimations";
type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex flex-col overflow-hidden banner">
      <GsapAnimations />
      <HeroFrame />

      <main className="main">
        {children}
      </main>

      <Footer />
    </div>
  );
}
