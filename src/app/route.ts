import { getIdx } from "@/lib/idx";
import { getPokemonLink } from "@/lib/link";
import { redirect } from "next/navigation";

export const GET = () => {
  redirect(getPokemonLink(getIdx()));
};
