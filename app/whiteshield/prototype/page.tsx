import type { Metadata } from "next";
import CareerNavProto from "@/components/CareerNavProto";

// Private interview prototype: not linked from the public site and excluded from search engines.
export const metadata: Metadata = {
  title: "Career Navigator · concept prototype by Nada Ahmed",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function PrototypePage() {
  return <CareerNavProto />;
}
