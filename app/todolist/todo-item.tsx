import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useTodoStore } from "@/stores/useTodoStore";
import { Todo } from "@/types/Todo";
import { Check, Pencil, Trash2, X } from "lucide-react";
import React, { useState } from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, updateTodo, deleteTodo } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  return (
    <div className="flex items-center p-4">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
        className="mr-2"
      />

      {isEditing ? (
        <>
          <div className="flex flex-1 items-center gap-2">
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="flex-1"
              autoFocus
            />

            <Button
              onClick={() => {
                updateTodo(todo.id, editValue);
                setIsEditing(false);
              }}
              disabled={editValue.trim() === ""}
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setIsEditing(false);
                setEditValue(todo.title);
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <label
            htmlFor={`todo-${todo.id}`}
            className={cn(
              "flex-1 cursor-pointer text-sm",
              todo.completed && "text-muted-foreground line-through"
            )}
          >
            {todo.title}
          </label>
          <div className="flex gap-1">
            <Button
              variant={"ghost"}
              onClick={() => {
                setIsEditing(true);
                setEditValue(todo.title);
              }}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant={"ghost"} onClick={() => deleteTodo(todo.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
