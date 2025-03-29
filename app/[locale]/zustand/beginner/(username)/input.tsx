"use client";
import { Input } from "@/components/ui/input";
import {
  // useBeginnerStore,
  useUpdateUsername,
  useUsername,
} from "@/stores/useBeginnerStore";
import { ChangeEvent } from "react";

export default function InputUsername() {
  // ini rerender
  // const { username, updateUsername } = useBeginnerStore();

  // ini ga rapi
  // const username = useBeginnerStore((state) => state.username);
  // const updateUsername = useBeginnerStore((state) => state.updateUsername);

  const username = useUsername();
  const updateUsername = useUpdateUsername();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newUsername = event?.target.value;
    updateUsername(newUsername);
  };
  return (
    <div>
      <Input placeholder="Input namamu disini..." onChange={handleChange} />
      <p className="my-1">maka dia akan tampil disini 👇</p>
      <h1 className="text-lg text-center bg-gray-500/30 rounded-lg p-2">
        {username ? username : "Taliya"}
      </h1>
    </div>
  );
}
