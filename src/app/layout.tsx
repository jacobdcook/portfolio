import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Cook – SOC Analyst | Cybersecurity",
  description:
    "Aspiring SOC analyst focused on threat detection and SIEM monitoring. MS Cybersecurity student at WGU, CompTIA Security+ certified.",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
