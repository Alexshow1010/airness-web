"use client";

import { motion, Variants } from "framer-motion";
import styles from "./romance.module.css";
// 引入翻譯 Hook
import { useTranslation } from "../../hooks/useTranslation";

export default function RomanceScamPage() {
  const t = useTranslation();

  const springVariant: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.96, rotateX: 8 },
    visible: {
      opacity: 1, y: 0, scale: 1, rotateX: 0,  
      transition: { type: "spring", stiffness: 65, damping: 15, mass: 1.5 },
    },
  };

  return (
    <main className={styles.container}>
      <motion.div initial="hidden" animate="visible" variants={springVariant} className={styles.header}>
        <div className={styles.tag}>{t("rom_tag")}</div>
        <h1 className={styles.title}>
          {t("page_title_1")}<br />{t("page_title_2")}
        </h1>
        <p className={styles.subtitle}>{t("page_subtitle")}</p>
      </motion.div>

      <div className={styles.contentWrapper} style={{ perspective: "1000px" }}>
        
        <motion.article 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={springVariant} whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className={styles.card}
        >
          <h2>{t("rom_c1_h2")}</h2>
          <p>{t("rom_c1_p1")}</p>
          <p>{t("rom_c1_p2")} <strong>{t("rom_c1_strong")}</strong></p>
        </motion.article>

        <motion.article 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={springVariant} whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className={styles.card}
        >
          <h2>{t("rom_c2_h2")}</h2>
          <p>{t("rom_c2_p1")}</p>
          <p>{t("rom_c2_p2")} <strong>{t("rom_c2_strong")}</strong></p>
        </motion.article>

        <motion.article 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={springVariant} whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className={styles.card}
        >
          <h2>{t("rom_c3_h2")}</h2>
          <p>{t("rom_c3_p1")}</p>
          <p>{t("rom_c3_p2")} <strong>{t("rom_c3_strong")}</strong></p>
        </motion.article>

      </div>
    </main>
  );
}