import { getDictionary, Lang } from "@/lib/dictionaries";
import { AboutPage } from "@/components/sections/about-page";

export default async function About({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <AboutPage dict={dict} lang={lang} />;
}
