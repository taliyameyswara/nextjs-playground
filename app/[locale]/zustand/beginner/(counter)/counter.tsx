import CounterButton from "./button";

export default function Counter() {
  return (
    <div className="mb-4 bg-gray-900 border border-gray-800 p-4 rounded-xl h-full">
      <h1 className="font-semibold"> Counter App 🔢</h1>
      <p>Baru banget belajar state management, jadi belajarnya counter app</p>
      <CounterButton />
    </div>
  );
}
