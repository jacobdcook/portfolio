import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Jacob Cook – Detection Engineer | Security Automation",
  description:
    "Detection engineering and security automation. Reducing alert noise, building reliable triage, designing threat-aware systems. MS Cybersecurity @ WGU. CompTIA SecurityX, CSIE.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Jacob Cook – Detection Engineer | Security Automation",
    description:
      "Detection engineering and security automation. Building reliable triage paths and threat-aware systems.",
    type: "website",
    url: "https://jacobdcook.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jacob Cook – Detection Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Cook – Detection Engineer | Security Automation",
    description:
      "Detection engineering and security automation. Building reliable triage paths and threat-aware systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
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
      <body className="bg-canvas-light dark:bg-canvas-dark text-text-primary dark:text-white antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
