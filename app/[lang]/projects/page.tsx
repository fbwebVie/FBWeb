import { getDictionary, Lang } from "@/lib/dictionaries";
import { ProjectsPage } from "@/components/sections/projects-page";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Projects({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = langParam === "en" ? "en" : "de";
  const dict = getDictionary(lang);

  return <ProjectsPage dict={dict} lang={lang} />;
}
