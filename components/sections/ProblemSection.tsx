"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // gsap.context giúp dễ cleanup trong React
    const ctx = gsap.context(() => {
      gsap.from(".the-problem-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".the-problem",   // tới section này thì chạy
          start: "top 80%",          // khi top của section chạm 80% viewport
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup khi unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="the-problem min-h-screen flex items-center justify-center"
    >
      <div>
        <h4 className="the-problem-title text-2xl font-bold">
          Đây là phần The Problem
        </h4>
        <p className="mt-4 max-w-xl">
          Nội dung mô tả vấn đề ở đây...
        </p>
      </div>
    </section>
  );
}
