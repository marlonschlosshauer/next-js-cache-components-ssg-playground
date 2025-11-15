import { Pokemon } from "@/types/pokemon";
import { cacheLife } from "next/cache";

export const getPokemon = async (id: string) => {
  "use cache";

  cacheLife("max");

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    return;
  }

  return response.json() as Promise<Pokemon>;
};
