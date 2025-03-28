"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Favorite,
  useAddFavorites,
  useFavorites,
} from "@/stores/useBeginnerStore";
import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import ItemList from "./item-list";
import { Skeleton } from "@/components/ui/skeleton";

export default function InputFavoriteItem() {
  const [inputValue, setInputValue] = useState("");

  const addFavorite = useAddFavorites();
  const favorites = useFavorites();

  const handleAddFavorite = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newFavorite: Favorite = { item: inputValue };
    addFavorite(newFavorite);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleAddFavorite} className="flex gap-2">
        <Input
          placeholder="Tambah item favoritmu.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">
          <Plus className="size-4" size={"sm"} />
        </Button>
      </form>

      {favorites.length === 0 ? (
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ) : (
        <ItemList />
      )}
    </>
  );
}
