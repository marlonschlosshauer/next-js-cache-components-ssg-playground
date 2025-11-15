const MAX_POKEMON_ID = 400;

export const getIdx = (banned: number[] = []): string => {
  const available = Array(MAX_POKEMON_ID)
    .fill(null)
    .map((_, key) => key)
    .filter((key) => !banned.includes(key));

  return available[
    Math.floor(Math.random() * 1000) % available.length
  ].toString();
};

export const getIdxs = (count: number, banned: number[] = []) => {
  return Array(count)
    .fill(null)
    .reduce((acc, _) => [...acc, +getIdx([...acc, ...banned])], [] as number[]);
};
