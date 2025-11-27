import type { Metadata } from "next";
import { IBM_Plex_Sans, Albert_Sans } from "next/font/google";
import { aktivGrotesk } from "./fonts";
import "./globals.css";

const geistIBM = IBM_Plex_Sans({
  variable: "--font-imb",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistAlbert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  // domain của bạn – nếu khác thì đổi lại ở đây
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "Viatika – Complete Crypto Abstraction",
    template: "%s | Viatika",
  },
  description:
    "Viatika abstracts 100% of the crypto complexity for enterprises, enabling seamless x402 adoption without reconciliation chaos.",

  keywords: [
    "Viatika",
    "x402",
    "crypto abstraction",
    "enterprise crypto",
    "payments",
  ],

  openGraph: {
    title: "Viatika – Complete Crypto Abstraction",
    description:
      "Unlock the power of x402 with enterprise-grade security, control, and zero crypto complexity.",
    url: "/",
    siteName: "Viatika",
    type: "website",
    images: [
      {
        url: "/logo.png", // nhớ đặt file này trong /public
        width: 1200,
        height: 630,
        alt: "Viatika – Complete Crypto Abstraction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Viatika – Complete Crypto Abstraction",
    description:
      "Enterprise-ready crypto abstraction with seamless x402 integration.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/icon.png", // bạn đã có icon.png trong /app (Next sẽ map sang /public nếu cần)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistIBM.variable} ${geistAlbert.variable} ${aktivGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
