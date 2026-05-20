import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import PortfolioHomeClient from "./PortfolioHomeClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "home.meta" });

  return {
    title: { absolute: t("title") },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: {
        "en-US": "/en/portfolio",
        "ko-KR": "/ko/portfolio",
        "x-default": "/en/portfolio",
      },
    },
  };
}

export default function PortfolioPage() {
  return <PortfolioHomeClient />;
}
