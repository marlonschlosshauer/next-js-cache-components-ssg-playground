import { getPokemon } from "@/api/pokemon";
import { connection } from "next/server";
import { getIdxs } from "@/lib/idx";
import { Slider } from "../Slider/Slider";
import { Card } from "../Card/Card";
import { FC } from "react";

const ENTRIES = 15;

export interface PopularProps {
  currentId: string;
}

export const Popular: FC<PopularProps> = async ({ currentId }) => {
  await connection();

  const data = await Promise.all(
    getIdxs(ENTRIES, [+currentId]).map(getPokemon),
  );

  if (!data) {
    return null;
  }

  return (
    <section>
      <h2>Also popular:</h2>
      <Slider>
        {data
          .filter((p) => !!p)
          .map((p, k) => (
            <Card.Basic key={k} {...p} />
          ))}
      </Slider>
    </section>
  );
};

export const PopularFallback = () => {
  return (
    <section>
      <h2>Also popular:</h2>
      <Slider>
        {Array(ENTRIES)
          .fill(null)
          .map((_, key) => (
            <Card.Skeleton key={key} />
          ))}
      </Slider>
    </section>
  );
};
