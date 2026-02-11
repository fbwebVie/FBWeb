import { getDictionary, Lang } from "@/lib/dictionaries";
import { ProjectsPage } from "@/components/sections/projects-page";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ProjectsPage dict={dict} lang={lang} />;
}
