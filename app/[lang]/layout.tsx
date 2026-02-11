import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Lang } from "@/lib/dictionaries";

export const metadata: Metadata = {
  title: "[AGENTUR] | Webentwicklung aus Wien",
  description: "Wir bauen moderne Websites die Kunden überzeugen.",
};

export async function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

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
