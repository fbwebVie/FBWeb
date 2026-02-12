import { getDictionary, Lang } from "@/lib/dictionaries";
import { ImprintPage } from "@/components/sections/imprint-page";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Imprint({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";
  const dict = getDictionary(lang);

  return <ImprintPage dict={dict} />;
}
