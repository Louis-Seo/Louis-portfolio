import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import InvestManagerClient from "./InvestManagerClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "case.invest-manager.meta",
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
      canonical: `/${locale}/portfolio/invest-manager`,
      languages: {
        "en-US": "/en/portfolio/invest-manager",
        "ko-KR": "/ko/portfolio/invest-manager",
        "x-default": "/en/portfolio/invest-manager",
      },
    },
  };
}

export default function InvestManagerPage() {
  return <InvestManagerClient />;
}
