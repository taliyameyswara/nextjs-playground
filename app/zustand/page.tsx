import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts",
};

const zustand = [
  { id: 1, title: "Todolist", link: "todolist", type: "beginner" },
  { id: 2, title: "Beginner Stuff", link: "beginner", type: "beginner" },
];

export default async function ZustandPage() {
  return (
    <div>
      <h1 className="mb-2">Post Page</h1>

      <div className="flex gap-4 items-center">
        {zustand.map((zus) => (
          <article
            key={zus.id}
            className="mb-4 bg-gray-900 border border-gray-800 w-fit p-4 rounded-xl"
          >
            <h2>{zus.title}</h2>
            <Link
              href={`/posts/${zus.link}`}
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
