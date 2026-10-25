"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GhostCursor = dynamic(() => import("@/components/ghost-cursor"), {
  ssr: false,
});

/**
 * The GhostCursor effect is decorative. It is loaded only on devices with a
 * fine pointer and is fully disabled for people who prefer reduced motion.
 */
export function GhostCursorField() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return (
    <GhostCursor
      color="#b9a8ff"
      style={{ opacity: 0.55 }}
      brightness={0.65}
      trailLength={18}
      inertia={0.42}
      bloomStrength={0.35}
      bloomRadius={0.65}
      bloomThreshold={0}
      grainIntensity={0.03}
      maxDevicePixelRatio={0.55}
      fadeDelayMs={300}
      fadeDurationMs={800}
    />
  );
}
