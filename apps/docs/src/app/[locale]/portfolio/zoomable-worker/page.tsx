import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ZoomableWorkerClient from "./ZoomableWorkerClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "case.zoomable-worker.meta",
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
      canonical: `/${locale}/portfolio/zoomable-worker`,
      languages: {
        "en-US": "/en/portfolio/zoomable-worker",
        "ko-KR": "/ko/portfolio/zoomable-worker",
        "x-default": "/en/portfolio/zoomable-worker",
      },
    },
  };
}

export default function ZoomableWorkerPage() {
  return <ZoomableWorkerClient />;
}
