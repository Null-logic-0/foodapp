import Link from "next/link";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404 Error</h1>
      <p>The meal not found</p>
      <Link href={"/meals"} className="back">
        Back to Meals page
      </Link>
    </main>
  );
}

export default NotFound;
