import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <p>{t("title")}</p>
    </div>
  );
}
