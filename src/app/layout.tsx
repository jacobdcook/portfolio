import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jacob Cook – SOC Analyst | Cybersecurity",
  description:
    "Aspiring SOC analyst focused on threat detection and SIEM monitoring. MS Cybersecurity student at WGU, CompTIA Security+ certified.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jacob Cook – SOC Analyst | Cybersecurity",
    description:
      "Aspiring SOC analyst focused on threat detection and SIEM monitoring.",
    type: "website",
    url: "https://jacobdcook.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
