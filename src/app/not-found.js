import Link from "next/link";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404 Error</h1>
      <p>Page not found</p>
      <Link href={"/"} className="back">
        Back to Home page
      </Link>
    </main>
  );
}

export default NotFound;
