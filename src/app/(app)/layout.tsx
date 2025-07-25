import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://viyaga.com"),
  title: "Viyaga Enterprises | Global Software Development Company",
  description:
    "Viyaga Enterprises is a global software development company specializing in modern web and mobile app solutions. We empower businesses with scalable, secure, and performance-driven technology.",
  keywords: [
    "Viyaga Enterprises",
    "Global Software Development",
    "Web Development Company",
    "Mobile App Development",
    "Custom Software Solutions",
    "MERN Stack Experts",
    "Next.js Development",
    "Rust Development",
    "Tech Partner for Startups",
    "Full Stack Development Company",
    "SaaS Development",
    "Cross-Platform Apps",
  ],
  authors: [{ name: "Mohankumar R", url: "https://viyaga.com" }],
  creator: "Viyaga Enterprises",
  publisher: "Viyaga Enterprises",
  robots: "index, follow",
  openGraph: {
    title:
      "Viyaga Enterprises | Custom Software Development for the Modern Web",
    description:
      "Viyaga Enterprises builds high-performance, scalable web and mobile applications for businesses across the globe.",
    url: "https://viyaga.com",
    siteName: "Viyaga Enterprises",
    images: [
      {
        url: "https://viyaga.com/logo/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Viyaga Enterprises - Global Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo/logo-v.svg",
    shortcut: "/favicon.ico",
    apple: "/logo/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster />
          <SpeedInsights/>
        </ThemeProvider>
      </body>
    </html>
  );
}