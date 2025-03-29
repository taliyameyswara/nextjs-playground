"use client";

import { Settings } from "@/types/Settings";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { use } from "react";

const Navbar = ({
  settingsPromise,
}: {
  settingsPromise: Promise<Settings>;
}) => {
  const settings = use(settingsPromise);
  const t = useTranslations("HomePage");
  return (
    <>
      <h1 className="text-2xl">{settings.title}</h1>
      <nav className="text-pink-400">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/posts" className="mr-2">
          {t("posts")}
        </Link>
        <Link href="/zustand" className="mr-2">
          Zustand
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
