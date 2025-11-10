import AboutText from "./about-text";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1 className="font-bold text-4xl">About Page</h1>

      <AboutText />

      <div className="flex gap-4">
        <Link href="/">Back to Home</Link>

        <Link href="https:/google.com/">Google</Link>

        <Link
          href={{
            pathname: "/",
            search: "msg=hello",
          }}
        >
          Test
        </Link>
      </div>
    </div>
  );
}
