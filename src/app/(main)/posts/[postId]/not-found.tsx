"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

type Params = Awaited<PageProps<"/posts/[postId]">["params"]>;

export default function NotFound() {
  const params = useParams<Params>();
  return (
    <div className="pt-4 text-center space-y-3">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p>Could not find post with id {params.postId}</p>

      <Button asChild>
        <Link href="/posts">Return to list</Link>
      </Button>
    </div>
  );
}
