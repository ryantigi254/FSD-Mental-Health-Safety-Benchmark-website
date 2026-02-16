"use client";

import { useEffect } from "react";

export default function ForceHeroOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hero = document.getElementById("hero");
    if (!hero) return;

    window.history.replaceState(null, "", "#hero");
    hero.scrollIntoView({ block: "start" });
  }, []);

  return null;
}

