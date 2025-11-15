import { getPokemon } from "@/api/pokemon";
import { connection } from "next/server";
import { Card, CardFallback } from "./Card";
import { Timestamp } from "./Timestamp";

export const Popular = async () => {
  await connection();

  const data = await getPokemon(Math.floor(Math.random() * 100).toString());

  if (!data) {
    return null;
  }

  return (
    <section>
      <h2>Also popular:</h2>
      <Card data={data} />
      <Timestamp />
    </section>
  );
};

export const PopularFallback = () => {
  return (
    <section>
      <h2>Also popular:</h2>
      <CardFallback />
    </section>
  );
};
