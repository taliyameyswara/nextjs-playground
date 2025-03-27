"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodoStore } from "@/stores/useTodoStore";
import { PlusCircle } from "lucide-react";
import React, { FormEvent, useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoStore();

  // console.log("TodoForm rendered");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1"
        />
        <Button type="submit">
          <PlusCircle className="size-4" />
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
