import { getDictionary, Lang } from "@/lib/dictionaries";
import { ImprintPage } from "@/components/sections/imprint-page";  

export default async function Imprint({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ImprintPage dict={dict} />;
}
