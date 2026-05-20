import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import AboutClient from "./AboutClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "about.meta" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "profile",
    },
    alternates: {
      canonical: `/${locale}/portfolio/about`,
      languages: {
        "en-US": "/en/portfolio/about",
        "ko-KR": "/ko/portfolio/about",
        "x-default": "/en/portfolio/about",
      },
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}
