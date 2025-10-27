export const generateStaticParams = () => {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ];
};

export default async function IdPage({ params }: PageProps<"/pokemon/[id]">) {
  "use cache";

  const { id } = await params;
  return (
    <section>
      <h1>Pokemone with id {JSON.stringify(id)}:</h1>
    </section>
  );
}
