import type { Metadata } from "next";
import FinalBooklet from "@/components/FinalBooklet";

// Private prep booklet: not linked from the site and excluded from search engines.
export const metadata: Metadata = {
  title: "Final round prep · Whiteshield",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function FinalPage() {
  return <FinalBooklet />;
}
