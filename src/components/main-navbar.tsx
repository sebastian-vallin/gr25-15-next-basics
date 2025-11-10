import Link from "next/link";

export default function MainNavbar() {
  return (
    <nav className="p-4 bg-neutral-50 border-b border-b-neutral-300">
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
