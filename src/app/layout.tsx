import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.metadataBase),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  openGraph: {
    title: siteContent.seo.ogTitle,
    description: siteContent.seo.ogDescription,
    images: [siteContent.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: siteContent.seo.twitterCard,
    title: siteContent.seo.ogTitle,
    description: siteContent.seo.ogDescription,
    images: [siteContent.seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-fsd-blue-deep focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
