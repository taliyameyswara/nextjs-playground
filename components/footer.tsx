import getSettings from "@/queries/getSettings";

export async function Footer() {
  const settings = await getSettings();
  return (
    <footer className="border-t border-gray-700 py-2 mt-2">
      <p>
        Copyright &copy; 2021 | {settings.title} | {settings.description}
      </p>
    </footer>
  );
}
