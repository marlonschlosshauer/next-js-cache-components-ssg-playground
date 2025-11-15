import { Suspense } from "react";
import styles from "./layout.module.css";

export default function PokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.wrapper}>
      <Suspense>{children}</Suspense>
    </main>
  );
}
