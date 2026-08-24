import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#16161A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jacobdcook.com"),
  title: "Jacob Cook – Detection Engineer | Security Automation",
  description:
    "Detection engineering and security automation. Reducing alert noise, building reliable triage, designing threat-aware systems. MS Cybersecurity @ WGU. CompTIA SecurityX, CSIE.",
  manifest: "/manifest.json",
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
      className={spaceMono.variable}
      suppressHydrationWarning
    >
      <head>
        <style>{`
          :root {
            --font-geist-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            --font-cabinet: 'Freight Sans Pro', 'Akzidenz Grotesk', 'Benton Sans', system-ui, sans-serif;
          }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
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
