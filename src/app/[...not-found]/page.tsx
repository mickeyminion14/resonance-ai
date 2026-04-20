import Link from "next/link";

export default function NotFoundCatchAll() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-center">Not Found</h1>
        <p className="text-sm text-gray-500 text-center">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="text-sm text-blue-500 text-center mt-4">
          Go back to the home page
        </Link>
      </div>
    </>
  );
}
