import Link from "next/link";
import classes from "./page.module.css";
import { Suspense } from "react";
import MealsLoading from "./loading";
import Meals from "@/components/meals/Meals";

export const metadata = {
  title: "All meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it by yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
export default MealsPage;
