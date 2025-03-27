import { JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import getSettings from "@/queries/getSettings";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Script from "next/script";
import { ReactScan } from "@/components/react-scan";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://unpkg.com/react-scan/dist/auto.global.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased container mx-auto`}
      >
        <ReactScan />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
