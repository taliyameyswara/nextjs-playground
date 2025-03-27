import { Settings } from "@/types/Settings";

const getSettings = async (): Promise<Settings> => {
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 1000);
  // });

  const res = await fetch("http://localhost:3001/settings");
  const settings = await res.json();

  return settings;
};

export default getSettings;
