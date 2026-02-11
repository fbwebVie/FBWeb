import { getDictionary, Lang } from "@/lib/dictionaries";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Contact } from "@/components/sections/contact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <Services dict={dict} />
      <ProjectsPreview dict={dict} lang={lang} />
      <Contact dict={dict} />
    </>
  );
}
