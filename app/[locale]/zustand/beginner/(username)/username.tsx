import InputUsername from "./input";

export default function Username() {
  return (
    <div className="mb-4 bg-gray-900 border border-gray-800 p-4 rounded-xl h-full flex flex-col justify-between">
      <h1 className="font-semibold"> Username Change 🙂‍↕️</h1>
      <p>Update username based on input</p>
      <InputUsername />
    </div>
  );
}
