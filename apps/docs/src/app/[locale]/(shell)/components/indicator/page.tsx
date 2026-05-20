import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import s from "@/styles/docs.module.css";

type UseCaseItem = { key: string; title: string; desc: string };

const SPINNER_IMAGES: Record<string, string> = {
  button: "/images/components/indicator/Spinner Button.png",
  dropdown: "/images/components/indicator/Spinner Dropdown.png",
  "file-upload": "/images/components/indicator/Spinner File Uplaod.png",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({
    locale,
    namespace: "ds.components-indicator.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/components/indicator`,
      languages: {
        "en-US": "/en/components/indicator",
        "ko-KR": "/ko/components/indicator",
        "x-default": "/en/components/indicator",
      },
    },
  };
}

export default async function IndicatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ds.components-indicator",
  });

  const spinnerUseCase = t.raw("spinner.useCase.items") as UseCaseItem[];

  return (
    <div className={s.page}>
      <h2 className={s.pageTitle}>{t("hero.title")}</h2>
      <p className={s.pageDescription}>{t("hero.desc")}</p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("components.title")}</h3>
      <p className={s.sectionSubtext}>{t("components.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Components.png" alt="Indicator Components" />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("components.caption")}
      </p>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("spinner.title")}</h3>
      <p className={s.sectionSubtext}>{t("spinner.desc")}</p>

      <h4 className={s.typeHeading}>{t("spinner.anatomy.title")}</h4>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Spinner Anatomy.png" alt="Spinner Anatomy" />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("spinner.anatomy.caption")}
      </p>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("spinner.variants.title")}</h3>
      <div className={s.previewRow}>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Spinner Type.png" alt="Spinner Type" />
          </div>
          <h4 className={s.typeHeading}>{t("spinner.variants.type.title")}</h4>
          <p className={s.typeSubtext}>{t("spinner.variants.type.desc")}</p>
        </div>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Spinner Duration.png" alt="Spinner Duration" />
          </div>
          <h4 className={s.typeHeading}>{t("spinner.variants.duration.title")}</h4>
          <p className={s.typeSubtext}>{t("spinner.variants.duration.desc")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("spinner.useCase.title")}</h3>
      <div className={s.grid3col}>
        {spinnerUseCase.map((item) => (
          <div key={item.key} className={s.gridCard}>
            <div className={s.previewBoxBg}>
              <img src={SPINNER_IMAGES[item.key]} alt={item.title} />
            </div>
            <p className={s.gridCardTitle}>{item.title}</p>
            <p className={s.gridCardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <hr className={s.divider} />

      <h3 className={s.sectionHeading}>{t("progressBar.title")}</h3>
      <p className={s.sectionSubtext}>{t("progressBar.desc")}</p>
      <div className={s.previewBox}>
        <img src="/images/components/indicator/Progress Bar.png" alt="Progress Bar" />
      </div>
      <p className={s.caption}>{t("progressBar.caption")}</p>

      <div className={s.sectionGap} />

      <h4 className={s.typeHeading}>{t("progressBar.anatomy.title")}</h4>
      <div className={s.previewBox}>
        <img
          src="/images/components/indicator/Progress Bar Anatomy.png"
          alt="Progress Bar Anatomy"
        />
      </div>
      <p className={s.caption} style={{ whiteSpace: "pre-line" }}>
        {t("progressBar.anatomy.caption")}
      </p>

      <div className={s.sectionGap} />

      <h3 className={s.sectionHeading}>{t("progressBar.variants.title")}</h3>
      <div className={s.previewRow}>
        <div>
          <div className={s.previewBoxBg}>
            <img
              src="/images/components/indicator/Progress Bar State.png"
              alt="Progress Bar State"
            />
          </div>
          <h4 className={s.typeHeading}>{t("progressBar.variants.state.title")}</h4>
          <p className={s.typeSubtext}>{t("progressBar.variants.state.desc")}</p>
        </div>
        <div>
          <div className={s.previewBoxBg}>
            <img src="/images/components/indicator/Progress Bar Size.png" alt="Progress Bar Size" />
          </div>
          <h4 className={s.typeHeading}>{t("progressBar.variants.size.title")}</h4>
          <p className={s.typeSubtext}>{t("progressBar.variants.size.desc")}</p>
        </div>
      </div>

      <h3 className={s.sectionHeading}>{t("progressBar.useCase.title")}</h3>
      <div className={s.previewBox}>
        <img
          src="/images/components/indicator/Progress Bar Usecase.png"
          alt="Progress Bar Usecase"
        />
      </div>
      <h4 className={s.typeHeading}>{t("progressBar.useCase.exportPdf.title")}</h4>
      <p className={s.typeSubtext}>{t("progressBar.useCase.exportPdf.desc")}</p>
    </div>
  );
}
