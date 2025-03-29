import React from "react";

const Comments = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <div className="p-2 rounded-lg bg-gray-900 border border-gray-800">
        Ini adalah komentar
      </div>
    </div>
  );
};

export default Comments;
