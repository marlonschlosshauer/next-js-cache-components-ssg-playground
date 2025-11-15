import { Details } from "@/components/Details/Details";
import Popular, { Fallback } from "@/components/Popular/Popular";
import { Suspense } from "react";

export default async function IdPage({ params }: PageProps<"/pokemon/[id]">) {
  const { id } = await params;
  return (
    <>
      <Details id={id} />
      <Suspense fallback={<Fallback />}>
        <Popular currentId={id} />
      </Suspense>
    </>
  );
}
