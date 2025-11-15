import { getPokemonLink } from "@/lib/link";
import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import { FC, ViewTransition } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import clsx from "clsx";

const Basic: FC<Pokemon> = ({ name, sprites, id }) => {
  return (
    <ViewTransition name={id.toString()}>
      <Link href={getPokemonLink(id)} className={styles.wrapper}>
        <article className={styles.content}>
          <Image
            src={sprites.front_default}
            alt={name}
            width={200}
            height={200}
            className={styles.image}
          />
          <p className={styles.name}>{name}</p>
        </article>
      </Link>
    </ViewTransition>
  );
};

const Skeleton = () => (
  <div className={styles.wrapper}>
    <div className={clsx(styles.content, "skeleton-animation")}>
      <div className={styles.image} />
      <p className={styles.fallback} />
    </div>
  </div>
);

export const Card = {
  Basic,
  Skeleton,
};
