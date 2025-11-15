import { getPokemon } from "@/api/pokemon";
import { connection } from "next/server";
import { getIdxs } from "@/lib/idx";
import { Card } from "../Card/Card";
import { FC } from "react";
import styles from "./Popular.module.css";

const ENTRIES = 3;

export interface PopularProps {
  id: string;
}

export const Basic: FC<PopularProps> = async ({ id: currentId }) => {
  await connection();

  const data = await Promise.all(
    getIdxs(ENTRIES, [+currentId]).map(getPokemon),
  );

  if (!data) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <h2>Also popular:</h2>
      <ul className={styles.content}>
        {data
          .filter((p) => !!p)
          .map((pokemon, key) => (
            <li key={key}>
              <Card.Basic {...pokemon} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export const Skeleton = () => (
  <section className={styles.wrapper}>
    <h2>Also popular:</h2>
    <ul className={styles.content}>
      {Array(ENTRIES)
        .fill(0)
        .map((_, key) => (
          <li key={key}>
            <Card.Skeleton />
          </li>
        ))}
    </ul>
  </section>
);

export const Popular = {
  Basic,
  Skeleton,
};
