import getPosts from "@/queries/getPosts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const posts = await getPosts();

  return (
    <div>
      <h1 className="mb-2">Post Page</h1>

      <div className="flex gap-4 items-center">
        {posts.map((post) => (
          <article
            key={post.id}
            className="mb-4 bg-gray-900 border border-gray-800 w-fit p-4 rounded-xl"
          >
            <h2>{post.title}</h2>
            <Link
              href={`/posts/${post.slug}`}
              className="text-pink-400 hover:underline"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
