import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Lang } from "@/lib/dictionaries";

export const metadata: Metadata = {
  title: "FBWebVie | Webentwicklung aus Wien",
  description: "Ich baue moderne Websites die Kunden überzeugen.",
};

export async function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }];
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";

  return (
    <html lang={lang}>
      <body className="flex flex-col min-h-screen">
        <Navbar lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
