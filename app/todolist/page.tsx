"use client";

import { useTodoStore } from "@/stores/useTodoStore";
import TodoForm from "./todo-form";
import TodoItem from "./todo-item";
import { useState } from "react";
import TodoFilter from "./todo-filter";

export default function TodolistPage() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const { todos } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="max-w-xl">
      <h1 className="text-lg font-medium">Todolist Page</h1>
      <p className="text-pink-200">Practicing zustand state management</p>
      <div className="space-y-6 mt-2">
        <TodoForm />

        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

        <div className="rounded-md border">
          {filteredTodos.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground">
              No todos found.{" "}
              {filter === "all"
                ? "Add some tasks!"
                : "Try changing your filter."}
            </div>
          ) : (
            <div className="divide-y">
              {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          {todos.filter((todo) => !todo.completed).length} items left
        </div>
      </div>
    </div>
  );
}
