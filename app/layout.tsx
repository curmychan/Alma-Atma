import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alma Atma Network",
    template: "%s | Alma Atma Network"
  },
  description: site.description,
  openGraph: {
    title: "Alma Atma Network",
    description: site.description,
    url: site.url,
    siteName: "Alma Atma Network",
    type: "website",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "Alma Atma Network logo" }]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
