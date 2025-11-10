async function BlogPostPage(props: PageProps<"/blog/[slug]/[postId]">) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  // await prisma.post.findUnique({ where: { id: params.postId }})

  // prisma.post.findMany({
  //  where: { title: { contains: searchParams.q } }
  // });

  // prisma.$queryRaw`SELECT * FROM "posts" WHERE title=${query}`;

  console.log({
    params,
    searchParams,
  });

  return (
    <div>
      <h1 className="font-bold text-4xl">Nested Blog Post Page</h1>
      <h2>Slug: {params.slug}</h2>
      <h2>Post ID: {params.postId}</h2>
    </div>
  );
}

export default BlogPostPage;
