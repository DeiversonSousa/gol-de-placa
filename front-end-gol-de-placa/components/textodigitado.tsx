"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TextoDigitado({ palavras }: { palavras: string[] }) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: palavras,
      typeSpeed: 100,
      startDelay: 0,
      loop: true,
    });

    return () => typed.destroy();
  }, [palavras]);

  return <span ref={el} />;
}