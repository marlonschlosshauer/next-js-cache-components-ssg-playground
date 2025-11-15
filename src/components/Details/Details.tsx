import { getPokemon } from "@/api/pokemon";
import { FC } from "react";
import { Card } from "../Card/Card";
import styles from "./Details.module.css";
import { Stats } from "../Stats/Stats";

export interface DetailsProps {
  id: string;
}

export const Details: FC<DetailsProps> = async ({ id }) => {
  const data = await getPokemon(id);

  if (!data) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <Card.Basic {...data} />
      <Stats {...data} />
    </section>
  );
};
