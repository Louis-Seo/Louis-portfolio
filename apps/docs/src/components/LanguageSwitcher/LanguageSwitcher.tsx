"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
  size?: "default" | "compact";
}

type DocumentWithVT = Document & {
  startViewTransition?: (cb: () => void) => unknown;
};

export default function LanguageSwitcher({ size = "default" }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common.language");
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(() => {
      const apply = () => router.replace(pathname, { locale: next });
      const doc = typeof document !== "undefined" ? (document as DocumentWithVT) : null;
      if (doc?.startViewTransition) {
        doc.startViewTransition(apply);
      } else {
        apply();
      }
    });
  };

  return (
    <nav
      aria-label={t("label")}
      className={`${styles.switcher} ${size === "compact" ? styles.compact : ""}`}
      data-pending={pending || undefined}
    >
      {routing.locales.map((code, index) => {
        const active = code === locale;
        return (
          <span key={code} className={styles.item}>
            {index > 0 && (
              <span className={styles.divider} aria-hidden="true">
                ·
              </span>
            )}
            <button
              type="button"
              aria-current={active ? "true" : undefined}
              className={styles.button}
              data-active={active || undefined}
              onClick={() => switchTo(code)}
              disabled={pending}
            >
              {t(code)}
            </button>
          </span>
        );
      })}
    </nav>
  );
}
