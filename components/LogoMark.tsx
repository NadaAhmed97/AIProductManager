"use client";

import { useEffect, useRef, useState } from "react";

// Company icon with a monogram fallback if the image can't load
// (also catches load errors that happened before React hydrated).
export default function LogoMark({ src, name }: { src: string; name: string }) {
  const img = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white/90 text-[11px] font-bold text-ink">
      {failed ? (
        name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2)
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={img} src={src} alt="" width={28} height={28} onError={() => setFailed(true)}
          className="h-full w-full object-contain p-0.5 grayscale transition group-hover:grayscale-0" />
      )}
    </span>
  );
}
