import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jacob Cook – Detection & Security Automation | Cybersecurity",
  description:
    "Detection engineering, threat hunting, and security automation. MS Cybersecurity @ WGU. CompTIA SecurityX, CSIE. SIEM, SOAR, identity detection.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jacob Cook – Detection & Security Automation | Cybersecurity",
    description:
      "Detection engineering, threat hunting, and security automation. MS Cybersecurity @ WGU.",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
