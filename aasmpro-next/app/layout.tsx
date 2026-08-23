import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ross Amiri",
  description: "Ross Amiri - Senior Software Engineer",
  authors: [{ name: "Ross Amiri" }],
  keywords: [
    "Ross Amiri",
    "Developer",
    "Web Developer",
    "Python",
    "Django",
    "Full-Stack",
    "GitHub",
    "React",
    "Tailwind",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ross Amiri",
    description: "Senior Software Engineer - Portfolio & Resume",
    url: "https://aasmpro-next.vercel.app",
    siteName: "Ross Amiri",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fonts.fontawesome.min.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="/fonts.jbm.css"
          as="style"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
