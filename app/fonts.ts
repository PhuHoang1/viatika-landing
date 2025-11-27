import localFont from "next/font/local";

export const aktivGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/AktivGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aktiv",
});
