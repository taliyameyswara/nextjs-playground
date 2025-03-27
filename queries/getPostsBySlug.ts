import { Post } from "@/types/Post";

const getPostsBySlug = async (slug: string): Promise<Post> => {
  const res = await fetch(`http://localhost:3001/posts?slug=${slug}`);
  const [posts] = await res.json();
  return posts;
};

export default getPostsBySlug;
