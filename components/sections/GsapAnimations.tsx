"use client";

import type React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ==================== GLOBAL SCROLL ANIMATIONS ==================== */

type AnimConfig = {
  baseClass: string; // "anim-fade-up"
  from: gsap.TweenVars;
  scroll?: Partial<ScrollTrigger.Vars>;
  stepDelay?: number;
};

const ANIMATIONS: AnimConfig[] = [
  {
    baseClass: "anim-fade-up",
    from: { y: 40, opacity: 0 },
    scroll: { start: "top 80%" },
    stepDelay: 0.1,
  },
  {
    baseClass: "anim-fade-left",
    from: { x: -40, opacity: 0 },
    scroll: { start: "top 80%" },
    stepDelay: 0.1,
  },
  {
    baseClass: "anim-fade-right",
    from: { x: 40, opacity: 0 },
    scroll: { start: "top 80%" },
    stepDelay: 0.1,
  },
];

export default function GsapAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==================== SCROLL ANIMATIONS ====================
      ANIMATIONS.forEach(({ baseClass, from, scroll, stepDelay = 0.1 }) => {
        const selector = `[class*="${baseClass}"]`;
        const els = gsap.utils.toArray<HTMLElement>(selector);

        els.forEach((el) => {
          const match = el.className.match(new RegExp(`${baseClass}-(\\d+)`));

          let delay = 0;
          if (match && match[1]) {
            const step = parseInt(match[1], 10);
            delay = step * stepDelay;
          }

          gsap.from(el, {
            ...from,
            duration: 0.8,
            ease: "power3.out",
            delay,
            scrollTrigger: {
              trigger: el,
              toggleActions: "play none none reverse",
              ...scroll,
            },
          });
        });
      });
    });

    // ==================== HOVER BUTTON EFFECT ====================
    const buttons = gsap.utils.toArray<HTMLElement>(".button");

    const instances = buttons
      .map((btn) => {
        const span = btn.querySelector("span");
        if (!span) return null;

        const tl = gsap.timeline({ paused: true });

        tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
        tl.set(span, { yPercent: 150 });
        tl.to(span, { duration: 0.2, yPercent: 0 });

        const handler = () => tl.play(0);

        btn.addEventListener("mouseenter", handler);

        return { btn, tl, handler };
      })
      .filter(Boolean) as {
      btn: HTMLElement;
      tl: gsap.core.Timeline;
      handler: () => void;
    }[];

    // ==================== MOBILE FLOAT MENU ====================
    const menuIcon = document.getElementById(
      "mobile-menu-icon"
    ) as HTMLElement | null;
    const floatMenu = document.querySelector<HTMLElement>(".float-menu");
    const closeBtn = floatMenu?.querySelector<HTMLElement>(".close");
    const menuItems = floatMenu?.querySelectorAll<HTMLLIElement>("li");

    let menuTl: gsap.core.Timeline | null = null;

    if (menuIcon && floatMenu && menuItems && menuItems.length > 0) {
      // timeline mở menu
      menuTl = gsap.timeline({
        paused: true,
        reversed: true, // bắt đầu ở trạng thái đóng
        onReverseComplete: () => {
          floatMenu.classList.remove("active");
        },
      });

      menuTl
        .add(() => {
          floatMenu.classList.add("active");
        })
        .from(
          menuItems,
          {
            x: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
          },
          0
        );

      const openHandler = () => {
        if (!menuTl) return;
        // nếu đang reversed thì play từ đầu
        if (menuTl.reversed()) {
          menuTl.play();
        }
      };

      const closeHandler = () => {
        if (!menuTl) return;
        menuTl.reverse();
      };

      menuIcon.addEventListener("click", openHandler);
      closeBtn?.addEventListener("click", closeHandler);

      // cleanup phần mobile menu
      return () => {
        ctx.revert();

        instances.forEach(({ btn, tl, handler }) => {
          btn.removeEventListener("mouseenter", handler);
          tl.kill();
        });

        if (menuTl) {
          menuTl.kill();
          menuTl = null;
        }

        menuIcon.removeEventListener("click", openHandler);
        closeBtn?.removeEventListener("click", closeHandler);
      };
    }

    // cleanup default (trường hợp không tìm thấy menu)
    return () => {
      ctx.revert();
      instances.forEach(({ btn, tl, handler }) => {
        btn.removeEventListener("mouseenter", handler);
        tl.kill();
      });
    };
  }, []);

  return null;
}

/* ==================== SPLIT HEADING (WORD BY WORD) ==================== */

type SplitHeadingProps = {
  children: string;
  className?: string;
};

export function SplitHeading({ children, className = "" }: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = children;

    // xoá nội dung cũ
    el.innerHTML = "";

    // tách từ và giữ khoảng trắng
    const words = text.trim().split(/\s+/);

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.display = "inline-block";
      el.appendChild(span);

      if (i !== words.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });

    const spans = el.querySelectorAll("span");

    gsap.from(spans, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, [children]);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
