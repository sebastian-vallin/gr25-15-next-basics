import CreatePostButton from "@/components/create-post-button";
import PostCard from "@/components/post-card";
import { prisma } from "@/lib/prisma";

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Posts</h1>
      <CreatePostButton />

      <p className="hidden lg:block hover:underline">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        veniam rerum asperiores, quidem odit deserunt minus quam in nemo eaque.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
