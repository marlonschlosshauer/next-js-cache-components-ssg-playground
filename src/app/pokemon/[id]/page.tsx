import { Details } from "@/components/Details/Details";
import { Popular, PopularFallback } from "@/components/Popular/Popular";
import { Suspense, ViewTransition } from "react";

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
    <ViewTransition>
      <Details id={id} />
      <Suspense fallback={<PopularFallback />}>
        <Popular currentId={id} />
      </Suspense>
    </ViewTransition>
  );
}
