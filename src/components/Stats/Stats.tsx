import { Pokemon } from "@/types/pokemon";
import { FC } from "react";
import styles from "./Stats.module.css";

export const Stats: FC<Pokemon> = (data) => (
  <code className={styles.wrapper}>{JSON.stringify(data)}</code>
);
