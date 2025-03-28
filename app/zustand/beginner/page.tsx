import Counter from "./(counter)/counter";
import FavoriteList from "./(favorite)/favoritelist";
import Username from "./(username)/username";

export default function BeginnerPage() {
  return (
    <>
      <h1 className="text-xl">Beginner Zustand</h1>
      <p className="text-gray-400 mb-2">This is a beginner Zustand example.</p>

      <div className="grid lg:grid-cols-4 gap-4">
        <Counter />
        <Username />
        <FavoriteList />
      </div>
    </>
  );
}
