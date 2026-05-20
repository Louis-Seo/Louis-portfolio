import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import DnkRpClient from "./DnkRpClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "case.dnk-rp.meta" });

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
      canonical: `/${locale}/portfolio/dnk-rp`,
      languages: {
        "en-US": "/en/portfolio/dnk-rp",
        "ko-KR": "/ko/portfolio/dnk-rp",
        "x-default": "/en/portfolio/dnk-rp",
      },
    },
  };
}

export default function DnkRpPage() {
  return <DnkRpClient />;
}
