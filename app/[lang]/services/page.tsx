import { getDictionary, Lang } from "@/lib/dictionaries";
import { ServicesPage } from "@/components/sections/services-page";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Services({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";
  const dict = getDictionary(lang);

  return <ServicesPage dict={dict} lang={lang} />;
}
