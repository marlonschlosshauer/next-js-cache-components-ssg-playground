import { Details } from "@/components/Details";
import { Popular, PopularFallback } from "@/components/Popular";
import { Suspense } from "react";

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
  const { id } = await params;
  return (
    <>
      <Details id={id} />
      <Suspense fallback={<PopularFallback />}>
        <Popular />
      </Suspense>
    </>
  );
}
