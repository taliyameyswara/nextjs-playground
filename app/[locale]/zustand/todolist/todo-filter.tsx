"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TodoFilterProps {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

export default function TodoFilter({
  currentFilter,
  onFilterChange,
}: TodoFilterProps) {
  return (
    <div className="flex justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onFilterChange("all")}
        className={cn(
          currentFilter === "all" &&
            "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        All
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onFilterChange("active")}
        className={cn(
          currentFilter === "active" &&
            "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Active
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onFilterChange("completed")}
        className={cn(
          currentFilter === "completed" &&
            "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Completed
      </Button>
    </div>
  );
}
