import type { Metadata } from "next";
import HugoBooklet from "@/components/HugoBooklet";

// Private prep booklet: not linked from the site and excluded from search engines.
export const metadata: Metadata = {
  title: "Prep booklet · Hugo Zlotowski",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function HugoBookletPage() {
  return <HugoBooklet />;
}
