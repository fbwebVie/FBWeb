import { getDictionary, Lang } from "@/lib/dictionaries";
import { PrivacyPage } from "@/components/sections/privacy-page";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Privacy({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";
  const dict = getDictionary(lang);

  return <PrivacyPage dict={dict} />;
}
