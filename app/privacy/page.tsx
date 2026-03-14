"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./privacy.module.css";
import { useTranslation } from "../../hooks/useTranslation";

export default function PrivacyPage() {
  const router = useRouter();
  const t = useTranslation();

  return (
    <main className={styles.container}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.topNav}
      >
        <button onClick={() => router.back()} className={styles.backButton}>
          ← {t("truth_back_btn").replace("← ", "")} {/* 借用之前的翻譯，稍微過濾一下箭頭 */}
        </button>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.contentWrapper}
      >
        <h1 className={styles.title}>{t("privacy_title")}</h1>
        <p className={styles.date}>{t("privacy_date")}</p>

        <section className={styles.section}>
          <h2>{t("privacy_sec1_title")}</h2>
          <p>{t("privacy_sec1_p")}</p>
        </section>

        <section className={styles.section}>
          <h2>{t("privacy_sec2_title")}</h2>
          <p>{t("privacy_sec2_p")}</p>
        </section>

        <section className={styles.section}>
          <h2>{t("privacy_sec3_title")}</h2>
          <p>{t("privacy_sec3_p")}</p>
        </section>

        <section className={styles.section}>
          <h2>{t("privacy_sec4_title")}</h2>
          <p>{t("privacy_sec4_p")}</p>
        </section>
      </motion.article>
    </main>
  );
}