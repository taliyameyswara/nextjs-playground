import InputFavoriteItem from "./input-item";

export default function FavoriteList() {
  return (
    <div className="mb-4 bg-gray-900 border border-gray-800 p-4 rounded-xl h-full flex flex-col justify-between">
      <h1 className="font-semibold"> Favorite List 🩷</h1>
      <p>Mau belajar mengelola array di state</p>

      <InputFavoriteItem />
    </div>
  );
}
