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
  title: "Jacob Cook – SOC & Detection | Cybersecurity",
  description:
    "SOC-focused security engineer. MS Cybersecurity @ WGU. CompTIA Security+, CySA+, PenTest+, SecurityX. SIEM, detection, and incident response.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jacob Cook – SOC & Detection | Cybersecurity",
    description:
      "Threat detection, SIEM, and detection engineering. MS Cybersecurity @ WGU.",
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
