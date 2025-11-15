"use client";

import {
  Children,
  FC,
  PropsWithChildren,
  startTransition,
  useState,
} from "react";
import styles from "./Slider.module.css";

export interface SliderProps {
  show?: number;
}

export const Slider: FC<PropsWithChildren<SliderProps>> = ({
  show = 4,
  children,
}) => {
  const [idx, setIdx] = useState(0);

  const count = Children.count(children);

  const onNext = () =>
    startTransition(() => setIdx((idx) => Math.min(idx + 1, count - 1)));
  const onPrev = () =>
    startTransition(() => setIdx((idx) => Math.max(idx - 1, 0)));

  const startIdx = idx;
  const endIdx = idx + show;

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <button onClick={onPrev} className={styles.button}>
          {"<"}
        </button>
        <button onClick={onNext} className={styles.button}>
          {">"}
        </button>
      </header>
      <ul
        className={styles.content}
        style={{
          gridTemplateColumns: `repeat(${show}, 1fr)`,
        }}
      >
        {Children.toArray(children)
          .slice(startIdx, endIdx)
          .map((child, key) => (
            <li key={key}>{child}</li>
          ))}
      </ul>
      <footer className={styles.footer}>
        <p>
          {idx} / {count}
        </p>
      </footer>
    </section>
  );
};
