import getSettings from "@/queries/getSettings";
import Navbar from "./navbar";
import { Suspense } from "react";

const Header = async () => {
  const settings = getSettings();

  return (
    <header className="border-b border-gray-700 py-2 mb-2">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar settingsPromise={settings} />
      </Suspense>
    </header>
  );
};

export default Header;
