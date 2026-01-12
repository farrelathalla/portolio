import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Farrel Athalla Putra | Software Engineer & AI Developer",
    template: "%s | Farrel Athalla Putra",
  },
  description:
    "Software Engineer and UI/UX Designer at Institut Teknologi Bandung (ITB). Building intelligent applications with AI, Machine Learning, and full-stack development. Experienced in Next.js, React, Python, and Data Science.",
  keywords: [
    "Farrel Athalla Putra",
    "Farrel Athalla",
    "Software Engineer",
    "UI/UX Designer",
    "AI Developer",
    "Machine Learning",
    "Data Science",
    "Full Stack Developer",
    "ITB",
    "Institut Teknologi Bandung",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Farrel Athalla Putra" }],
  creator: "Farrel Athalla Putra",
  publisher: "Farrel Athalla Putra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farrel.me",
    siteName: "Farrel Athalla Putra",
    title: "Farrel Athalla Putra | Software Engineer & AI Developer",
    description:
      "Software Engineer and UI/UX Designer building intelligent applications with AI, Machine Learning, and full-stack development.",
    images: [
      {
        url: "https://farrel.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Farrel Athalla Putra - Software Engineer & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farrel Athalla Putra | Software Engineer & AI Developer",
    description:
      "Software Engineer and UI/UX Designer building intelligent applications with AI, Machine Learning, and full-stack development.",
    images: ["https://farrel.me/og-image.png"],
    creator: "@farrelathalla",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://farrel.me"),
  alternates: {
    canonical: "https://farrel.me",
  },
  verification: {
    google: "EEEsNjkO-u_7W9Vhn9iFiMfmYDdf7vsQpRmP_dZPyKM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="antialiased bg-white text-stone-900 dark:bg-[#050505] dark:text-stone-400 font-sans selection:bg-stone-200 dark:selection:bg-stone-800">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
