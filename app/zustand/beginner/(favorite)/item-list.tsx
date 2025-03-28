import { useFavorites } from "@/stores/useBeginnerStore";

export default function ItemList() {
  const favorites = useFavorites();
  if (favorites.length === 0) {
    throw new Promise((resolve) => setTimeout(resolve, 4000));
  }
  return (
    <>
      <ul>
        {favorites.map((fav, i) => (
          <li key={i}>
            {i + 1}. {fav.item}
          </li>
        ))}
      </ul>
    </>
  );
}
