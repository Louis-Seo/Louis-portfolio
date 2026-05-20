import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ButtonClient from "./ButtonClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-button.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/button`,
      languages: {
        "en-US": "/en/components/button",
        "ko-KR": "/ko/components/button",
        "x-default": "/en/components/button",
      },
    },
  };
}

export default function ButtonPage() {
  return <ButtonClient />;
}
