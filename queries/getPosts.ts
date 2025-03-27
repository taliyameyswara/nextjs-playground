import { Post } from "@/types/Post";

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("http://localhost:3001/posts");
  const post = await res.json();
  return post;
};

export default getPosts;
