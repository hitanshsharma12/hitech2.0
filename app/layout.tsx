import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi-Tech Services | Premium Digital Solutions",
  description:
    "Transform your business with cutting-edge websites and digital solutions. Professional web development for cafes, gyms, salons, and local businesses.",
  keywords: [
    "web development",
    "digital agency",
    "business website",
    "professional design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
        suppressHydrationWarning
      >
        <body className="min-h-screen font-sans antialiased bg-background text-foreground">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}