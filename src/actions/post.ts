"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Not a server action
function test() {
  console.log();
}

export async function createPost() {
  await new Promise((r) => setTimeout(r, 2000));

  const post = await prisma.post.create({
    data: {
      title: "Another Post",
      content: "Created from a server function!",
    },
  });

  console.log(post);

  // revalidatePath("/");
  revalidatePath("/posts");

  return post;
}
