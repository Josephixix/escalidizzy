"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      // Initialize Lenis
      lenisRef.current = new Lenis({
        duration: 1.2,          // scroll duration (lower = faster)
        easing: (t) => t,       // easing function
        lerp: 0.1,              // smoothness/inertia (0.1 = smooth)
        infinite: false,        // optional: infinite scroll
      });

      // RAF loop
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }, []);

  return <>{children}</>;
}
