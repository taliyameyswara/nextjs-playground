"use client";

import { Button } from "@/components/ui/button";
import { useBeginnerStore } from "@/stores/useBeginnerStore";
import { useShallow } from "zustand/shallow";

export default function CounterButton() {
  // rerender karena manggil semua state yg ada di beginner store
  // const { count, increment, decrement } = useBeginnerStore();

  // pakai useShallow biar ga rerender
  const { count, increment, decrement } = useBeginnerStore(
    useShallow((state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
    }))
  );
  return (
    <div className="mt-2 flex gap-2 items-center">
      <Button onClick={decrement} className="size-7 text-xl">
        -
      </Button>
      <span>{count}</span>
      <Button onClick={increment} className="size-7 text-xl">
        +
      </Button>
    </div>
  );
}
