import { getPokemon } from "@/api/pokemon";
import { FC } from "react";
import { cacheLife } from "next/cache";
import { Card } from "../Card/Card";
import { Timestamp } from "../Timestamp/Timestamp";
import styles from "./Details.module.css";

export interface DetailsProps {
  id: string;
}

export const Details: FC<DetailsProps> = async ({ id }) => {
  "use cache";
  cacheLife("max");

  const data = await getPokemon(id);

  if (!data) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <Card.Basic {...data} />
      <Timestamp />
    </section>
  );
};
