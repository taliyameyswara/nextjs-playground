"use client";
import { createComment } from "@/queries/actions";
import { useActionState } from "react";

const initialState = {
  error: "",
};

const CommentForm = () => {
  const [state, formAction, pending] = useActionState(
    createComment,
    initialState
  );

  return (
    <section>
      <h2 className="text-lg font-semibold">Add Comments</h2>
      <form action={formAction} className="flex flex-col gap-2 w-72">
        {state?.error && (
          <div className="text-red-500 text-sm">{state.error}</div>
        )}
        <textarea
          name="comment"
          className="h-40 bg-gray-900 border border-gray-800 rounded-lg p-2 "
          placeholder="Write your comment here"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white rounded-lg px-4 py-1.5 w-full"
          disabled={pending}
        >
          Kirim
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
