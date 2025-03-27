import { JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import getSettings from "@/queries/getSettings";

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const setting = await getSettings();
  return {
    title: {
      template: `%s | ${setting.title}`,
      default: `My app`,
    },
    description: setting.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased container mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
