"use client";

import { createLike } from "@/queries/actions";
import { useTransition } from "react";

const LikeButton = ({ postId }: { postId: string }) => {
  //   const [pending, setPending] = useState(false);

  const [pending, startTransition] = useTransition();

  async function handleLike() {
    // setPending(true);
    startTransition(async () => {
      await createLike(postId);
    });
    // await createLike();
  }

  return (
    <button
      onClick={handleLike}
      className="rounded-lg bg-gray-800 border border-gray-700/90 p-1 px-2.5 w-fit text-sm mt-2"
    >
      {pending ? "Liking..." : "Like ❤️"}
    </button>
  );
};

export default LikeButton;
