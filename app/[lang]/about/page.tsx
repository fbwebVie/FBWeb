import { getDictionary, Lang } from "@/lib/dictionaries";
import { AboutPage } from "@/components/sections/about-page";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function About({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";
  const dict = getDictionary(lang);

  return <AboutPage dict={dict} lang={lang} />;
}
