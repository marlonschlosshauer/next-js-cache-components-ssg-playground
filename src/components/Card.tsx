/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

export const Card: FC<any> = ({ data }) => {
  const { name, sprites } = data;
  return (
    <article className="flex flex-col gap-4">
      <img
        alt={name}
        src={sprites.front_default}
        className="w-[200px] h-[200px]"
      />
      <p>{name}</p>
    </article>
  );
};

export const CardFallback = () => (
  <article className="flex flex-col gap-4">
    <div className="bg-gray-500 w-[200px] h-[200px]" />
    <p className="bg-gray-500 w-[140px] h-[16px]" />
  </article>
);
