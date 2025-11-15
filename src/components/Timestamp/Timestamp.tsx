const getTime = async () => new Date().toISOString();

export const Timestamp = async () => {
  const time = await getTime();
  return <p>Rendered at {time}</p>;
};
