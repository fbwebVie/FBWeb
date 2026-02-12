import { getDictionary, Lang } from "@/lib/dictionaries";
import { ContactPage } from "@/components/sections/contact-page";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Contact({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";
  const dict = getDictionary(lang);

  return <ContactPage dict={dict} lang={lang} />;
}
