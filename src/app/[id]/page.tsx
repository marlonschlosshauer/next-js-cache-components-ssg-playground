import { Details } from "@/components/Details/Details";
import { Popular } from "@/components/Popular/Popular";

export default async function IdPage({ params }: PageProps<"/[id]">) {
  const { id } = await params;
  return (
    <>
      <Details.Basic id={id} />
      <Popular.Basic id={id} />
    </>
  );
}
