import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nada Ahmed — 0→1 AI Product Manager",
  description:
    "Hands-on AI & Growth Product Manager who builds what she designs. Case studies, shipped tools and a live product-thinking simulator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
