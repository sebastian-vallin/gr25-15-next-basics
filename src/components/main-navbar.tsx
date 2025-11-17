import Link from "next/link";
import { Button } from "./ui/button";

export default function MainNavbar() {
  return (
    <nav className="p-4 bg-secondary border-b border-b-border">
      <ul className="flex gap-2">
        <li>
          <Button asChild variant="link">
            <Link href="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/posts">Posts</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
