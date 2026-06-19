import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white border-b">

      <h1 className="text-3xl font-bold text-yellow-500">
        SecUerd
      </h1>

      <div className="flex gap-8 font-medium">
        <Link href="/">Home</Link>

        <Link href="/join-waitlist">
          Join Waitlist
        </Link>

        <Link href="/professionals">
          Professionals In ED
        </Link>

        <Link href="/about">
          About Community
        </Link>
      </div>

    </nav>
  );
}