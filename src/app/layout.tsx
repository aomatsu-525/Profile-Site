import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Zen Maru Gothic（禅まる Gothic）- 日本語フォント
const zenMaruGothic = localFont({
  src: [
    {
      path: "../../public/fonts/Zen_Maru_Gothic/ZenMaruGothic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Zen_Maru_Gothic/ZenMaruGothic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Zen_Maru_Gothic/ZenMaruGothic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Zen_Maru_Gothic/ZenMaruGothic-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-zen-maru-gothic",
  display: "swap",
});

const hachiMaruPop = localFont({
  src: [
    {
      path: "../../public/fonts/Hachi_Maru_Pop/HachiMaruPop-Regular.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-hachi-maru-pop",
  display: "swap",
});

export const metadata: Metadata = {
  title: "紅葉兎羽 のプロフィールサイト",
  description: "紅葉兎羽 のプロフィールサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zenMaruGothic.variable} ${hachiMaruPop.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
