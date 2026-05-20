import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ZoomableWindClient from "./ZoomableWindClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "case.zoomable-wind.meta",
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
      canonical: `/${locale}/portfolio/zoomable-wind`,
      languages: {
        "en-US": "/en/portfolio/zoomable-wind",
        "ko-KR": "/ko/portfolio/zoomable-wind",
        "x-default": "/en/portfolio/zoomable-wind",
      },
    },
  };
}

export default function ZoomableWindPage() {
  return <ZoomableWindClient />;
}
