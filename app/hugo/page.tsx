import type { Metadata } from "next";
import HugoCase from "@/components/HugoCase";

// Private interview page: not linked from the site and excluded from search engines.
export const metadata: Metadata = {
  title: "Nada Ahmed × Whiteshield · Hugo",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function HugoPage() {
  return <HugoCase />;
}
