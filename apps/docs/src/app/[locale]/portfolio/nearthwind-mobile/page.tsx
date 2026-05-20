import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import NearthwindMobileClient from "./NearthwindMobileClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "case.nearthwind-mobile.meta",
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
      canonical: `/${locale}/portfolio/nearthwind-mobile`,
      languages: {
        "en-US": "/en/portfolio/nearthwind-mobile",
        "ko-KR": "/ko/portfolio/nearthwind-mobile",
        "x-default": "/en/portfolio/nearthwind-mobile",
      },
    },
  };
}

export default function NearthwindMobilePage() {
  return <NearthwindMobileClient />;
}
