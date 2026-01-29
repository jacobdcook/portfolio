import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Cook | Software Developer & Cybersecurity",
  description:
    "Software developer focused on building secure, AI-driven solutions. MS Cybersecurity student at WGU, CompTIA Security+ certified.",
  openGraph: {
    title: "Jacob Cook | Software Developer & Cybersecurity",
    description:
      "Software developer focused on building secure, AI-driven solutions.",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
