import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

async function PostPage(props: PageProps<"/posts/[postId]">) {
  const params = await props.params;
  const postId = parseInt(params.postId);
  if (isNaN(postId)) {
    notFound();
  }

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-4xl">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostPage;
