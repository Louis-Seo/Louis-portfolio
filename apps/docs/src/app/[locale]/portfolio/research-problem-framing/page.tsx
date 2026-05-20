import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ResearchProblemFramingClient from "./ResearchProblemFramingClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "case.research-problem-framing.meta",
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "article",
    },
    alternates: {
      canonical: `/${locale}/portfolio/research-problem-framing`,
      languages: {
        "en-US": "/en/portfolio/research-problem-framing",
        "ko-KR": "/ko/portfolio/research-problem-framing",
        "x-default": "/en/portfolio/research-problem-framing",
      },
    },
  };
}

export default function ResearchProblemFramingPage() {
  return <ResearchProblemFramingClient />;
}
