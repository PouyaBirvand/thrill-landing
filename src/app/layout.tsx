import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Thrill Affiliates | The Ultimate Streaming Partnership Program",
  description:
    "Join Thrill Affiliates and maximize your earnings as a streaming partner. Get custom bonuses, real-time tracking, zero negative carryover, and flexible commission plans. Sign up today and grow your audience with the best casino affiliate program.",
  keywords: [
    "affiliate program",
    "casino affiliate",
    "streaming partnership",
    "affiliate marketing",
    "custom bonuses",
    "CPA hybrid model",
    "affiliate tracking",
    "gaming affiliates",
    "earn money streaming",
    "Thrill affiliates",
  ],
  openGraph: {
    title: "Thrill Affiliates | The Ultimate Streaming Partnership Program",
    description:
      "Stream, earn, and grow with Thrill Affiliates. Built for affiliates with transparent deals, custom bonuses, and real-time payouts. Join now and take your streaming career to the next level.",
    url: "https://your-domain.com",
    siteName: "Thrill Affiliates",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thrill Affiliates - Streaming Partnership",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thrill Affiliates | The Ultimate Streaming Partnership Program",
    description:
      "Maximize your profits with Thrill Affiliates. Get access to custom bonuses, CPA/hybrid models, and fast payouts. The affiliate program built for streamers.",
    images: ["https://your-domain.com/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/thrill.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={` ${oxanium.className} overflow-x-hidden bg-body`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
