import { getDictionary, Lang } from "@/lib/dictionaries";
import { ContactPage } from "@/components/sections/contact-page";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ContactPage dict={dict} lang={lang} />;
}
