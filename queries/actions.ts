"use server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createComment(prevData: any, formData: FormData) {
  // const response = await fetch('/api/comments', {
  //     method: 'POST',
  //     body: formData
  // });
  // return await response.json();
  // console.log(formData.get("comment"));
  const comment = formData.get("comment") as string;

  if (!comment) {
    return {
      error: "Comment cannot be empty",
    };
  }
}

export async function createLike(postId: string) {
  // fake delay
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));

  console.log("like, postId: ", postId);
}
