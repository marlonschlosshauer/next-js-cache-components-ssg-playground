import { getPokemon } from "@/api/pokemon";
import { FC } from "react";
import { Card } from "./Card";
import { cacheLife } from "next/cache";

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
    <section className="flex flex-col gap-4">
      <Card data={data} />
    </section>
  );
};
