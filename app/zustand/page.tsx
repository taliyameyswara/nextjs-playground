import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts",
};

const zustand = [
  {
    id: 1,
    title: "Beginner Stuff",
    description: "This is a beginner Zustand example. For learning purposes.",
    link: "beginner",
    type: "beginner",
  },
  {
    id: 2,
    title: "Todolist",
    description: "This is a simple Todo List app. Using persist.",
    link: "todolist",
    type: "beginner",
  },
];

export default async function ZustandPage() {
  return (
    <div>
      <h1 className="mb-4 text-xl">Zustand Learning Page</h1>

      <div className="grid grid-cols-4 gap-4 items-center h-full">
        {zustand.map((zus) => (
          <article
            key={zus.id}
            className="mb-4 bg-gray-900 border border-gray-800 p-4 rounded-xl h-full flex flex-col justify-between"
          >
            <h2>{zus.title}</h2>
            <p className="text-sm text-gray-400">{zus.description}</p>
            <Link
              href={`/zustand/${zus.link}`}
              className="text-pink-400 hover:underline text-sm"
            >
              See more
              <ArrowRight className="inline ml-1 size-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
