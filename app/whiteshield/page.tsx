import type { Metadata } from "next";
import Effects from "@/components/Effects";
import WhiteshieldCase from "@/components/WhiteshieldCase";

// Private interview page: not linked from the site and excluded from search engines.
export const metadata: Metadata = {
  title: "Nada Ahmed × Whiteshield",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function WhiteshieldPage() {
  return (
    <>
      <Effects />
      <WhiteshieldCase />
    </>
  );
}
