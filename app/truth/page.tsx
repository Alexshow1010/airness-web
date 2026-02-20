"use client";

import styles from "./truth.module.css";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../hooks/useTranslation";

export default function TruthPage() {
  const router = useRouter();
  const t = useTranslation();

  return (
    <main className={styles.container}>
      {/* Main Title */}
      <h1 className={styles.title}>
        {t("title_main").split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </h1>

      <p className={styles.subtitle}>{t("subtitle_main")}</p>

      {/* 投資詐騙 */}
      <div className={styles.section}>
        <div className={styles.category}>{t("investment.category")}</div>

        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.card}>
            {t(`investment.lines.${i}`).split("\n").map((line, k) => (
              <span key={k}>
                {line}
                <br />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* 感情詐騙 */}
      <div className={styles.section}>
        <div className={styles.category}>{t("romance.category")}</div>

        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.card}>
            {t(`romance.lines.${i}`).split("\n").map((line, k) => (
              <span key={k}>
                {line}
                <br />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* 冒充機關 */}
      <div className={styles.section}>
        <div className={styles.category}>{t("impersonation.category")}</div>

        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.card}>
            {t(`impersonation.lines.${i}`).split("\n").map((line, k) => (
              <span key={k}>
                {line}
                <br />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className={styles.buttonGroup}>
        <button
          className={styles.primaryButton}
          onClick={() => router.push("/purpose")}
        >
          {t("button_home")}
        </button>

        <a
          href="https://play.google.com/store/apps/details?id=com.airenss.rebreath&pcampaignid=web_share"
          target="_blank"
          className={styles.playButton}
        >
          下載回息 AIRNESS（Android）
        </a>
      </div>
    </main>
  );
}
