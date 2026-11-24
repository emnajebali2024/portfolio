"use client";

import { useEffect, useState } from "react";
import { Text } from "@once-ui-system/core";
import styles from "./home.module.scss";

const focuses = [
  "Full-stack development",
  "DevOps and cloud delivery",
  "AI and machine learning",
  "Data-driven products",
];

export function FocusTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % focuses.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <Text variant="heading-default-l" onBackground="brand-medium" aria-live="polite">
      <span key={index} className={styles.ticker}>
        {focuses[index]}
      </span>
    </Text>
  );
}
