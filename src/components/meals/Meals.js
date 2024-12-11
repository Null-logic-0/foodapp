"use server";
import { getMeals } from "@/lib/meals";

import MealsGrid from "./MealsGrid";

async function Meals() {
  const meals = await getMeals();
  return (
    <>
      <MealsGrid meals={meals} />
    </>
  );
}

export default Meals;
