import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from 'sonner'

import "./globals.css";
import "../global/styles/main.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lifting Weight Club",
  description: "Lifting Weight Club - Gym membership and management",
  keywords: ["fitness", "gym", "workout", "health", "membership", 
    "dumbell", "coach training", "gym padang", "calisthenic", "calisthenic gym", 
    "barbel", ""
  ],
  authors: [{ name: "Althaf", url: "https://github.com/Althaf671" }],
  openGraph: {
    title: "Lifting Weight Club",
    description: "Lifting Weight Club - Gym membership and management",
    url: "",
    images: [
      { url: "", width: 1200, height: 1200 }
    ],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  },
  category: "fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Toaster closeButton richColors position="top-right"  expand={false} />
        {children}
      </body>
    </html>
  );
}
