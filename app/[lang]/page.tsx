import { getDictionary, Lang } from "@/lib/dictionaries";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Contact } from "@/components/sections/contact";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";
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
