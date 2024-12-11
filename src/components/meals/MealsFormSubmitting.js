"use client";
import { useFormStatus } from "react-dom";

function MealsFormSubmitting() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Is Saving..." : "Save"}
    </button>
  );
}

export default MealsFormSubmitting;
