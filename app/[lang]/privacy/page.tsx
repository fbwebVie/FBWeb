import { getDictionary, Lang } from "@/lib/dictionaries";
import { PrivacyPage } from "@/components/sections/privacy-page";
export default async function Privacy({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <PrivacyPage dict={dict} />;
}
