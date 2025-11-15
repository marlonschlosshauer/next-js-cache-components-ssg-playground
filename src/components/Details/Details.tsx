import { getPokemon } from "@/api/pokemon";
import { FC } from "react";
import { Card } from "../Card/Card";
import styles from "./Details.module.css";

export interface DetailsProps {
  id: string;
}

export const Basic: FC<DetailsProps> = async ({ id }) => {
  const data = await getPokemon(id);

  if (!data) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <Card.Basic {...data} />
    </section>
  );
};

export const Skeleton: FC = () => {
  return (
    <section className={styles.wrapper}>
      <Card.Skeleton />
    </section>
  );
};

export const Details = {
  Basic,
  Skeleton,
};
