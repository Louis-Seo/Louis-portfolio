import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectHero from "@/components/portfolio/ProjectHero/ProjectHero";
import ContentSection from "@/components/portfolio/ContentSection/ContentSection";
import SectionHeader from "@/components/portfolio/SectionHeader/SectionHeader";
import StatGrid from "@/components/portfolio/StatGrid/StatGrid";
import styles from "./page.module.css";

const DEDICATED_PAGES = new Set([
  "design-system",
  "zoomable-worker",
  "zoomable-wind",
  "nearthwind-mobile",
  "dnk-rp",
  "research-problem-framing",
  "invest-manager",
]);

export function generateStaticParams() {
  return getAllProjectSlugs()
    .filter((slug) => !DEDICATED_PAGES.has(slug))
    .map((slug) => ({ projectSlug: slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project || DEDICATED_PAGES.has(projectSlug)) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <ProjectHero
        label={project.hero.label}
        title={project.hero.title}
        description={project.hero.description}
        meta={project.hero.meta}
      />

      {/* Overview */}
      <ContentSection>
        <SectionHeader label="Overview" title="Summary" />
        <p className={styles.prose}>{project.summary}</p>
      </ContentSection>

      {/* Problem + Goal */}
      <ContentSection alternate>
        <SectionHeader label="Context" title="Problem & Goal" />
        <div className={styles.twoCol}>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Problem</h3>
            <p className={styles.prose}>{project.problem}</p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Goal</h3>
            <p className={styles.prose}>{project.goal}</p>
          </div>
        </div>
      </ContentSection>

      {/* Responsibilities */}
      <ContentSection>
        <SectionHeader label="Role" title="Responsibilities" />
        <ul className={styles.list}>
          {project.responsibilities.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Process */}
      <ContentSection alternate>
        <SectionHeader label="Process" title="How I Worked" />
        <div className={styles.processGrid}>
          {project.process.map((step, i) => (
            <div key={step} className={styles.processStep}>
              <span className={styles.processNumber}>{String(i + 1).padStart(2, "0")}</span>
              <p className={styles.processText}>{step}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Gallery Placeholder */}
      <ContentSection>
        <SectionHeader label="Work" title="Selected Screens" />
        <div className={styles.galleryGrid}>
          <div className={styles.galleryPlaceholder} />
          <div className={styles.galleryPlaceholder} />
          <div className={styles.galleryPlaceholder} />
        </div>
      </ContentSection>

      {/* Outcome */}
      <ContentSection alternate>
        <SectionHeader label="Result" title="Outcome" description={project.outcome} />
        <StatGrid items={project.impactMetrics} />
      </ContentSection>
    </div>
  );
}
