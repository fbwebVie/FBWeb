import { getDictionary, Lang } from "@/lib/dictionaries";
import { ServicesPage } from "@/components/sections/services-page";

export default async function Services({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ServicesPage dict={dict} lang={lang} />;
}
