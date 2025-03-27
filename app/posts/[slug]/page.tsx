import getPostsBySlug from "@/queries/getPostsBySlug";
import CommentForm from "./comment-form";
import LikeButton from "./like-button";
import Comments from "./comments";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostsBySlug(slug);

  return {
    title: post.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostsBySlug(slug);

  console.log(post);

  return (
    <div className="space-y-4">
      <article>
        <h1 className="text-lg font-semibold">Post detail page</h1>
        <div className="bg-gray-900 border border-gray-800 w-fit p-4 rounded-xl">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <LikeButton postId={post.id} />
        </div>
      </article>

      <CommentForm />

      <h2 className="text-lg font-semibold">Comments</h2>
      <Suspense fallback={"Loading comments..."}>
        <Comments />
      </Suspense>
    </div>
  );
}
