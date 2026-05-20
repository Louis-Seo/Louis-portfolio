import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("common");
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 80px",
        textAlign: "center",
        gap: 16,
      }}
    >
      <p
        style={{
          fontSize: 13,
          letterSpacing: "0.08em",
          color: "var(--text-tertiary)",
          textTransform: "uppercase",
        }}
      >
        404
      </p>
      <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em" }}>
        Page not found
      </h1>
      <Link
        href="/portfolio"
        style={{
          marginTop: 12,
          fontSize: 14,
          color: "var(--text-primary)",
          textDecoration: "underline",
          textUnderlineOffset: 4,
        }}
      >
        {t("actions.backToProjects")}
      </Link>
    </main>
  );
}
