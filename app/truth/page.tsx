"use client";

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./truth.module.css";
import { useTranslation } from "../../hooks/useTranslation";
import { COOKIE_KEY, DEFAULT_LANG, type Lang } from "../../i18n";

export default function TruthHubPage() {
  const router = useRouter();
  const t = useTranslation();
  
  const [currentLang, setCurrentLang] = useState<Lang>(DEFAULT_LANG);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const cookie = document.cookie
      .split("; ")
      .find((x) => x.startsWith(COOKIE_KEY + "="));
    if (cookie) {
      setCurrentLang(cookie.split("=")[1] as Lang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = currentLang === "en" ? "zh" : "en";
    document.cookie = `${COOKIE_KEY}=${nextLang}; path=/; max-age=31536000`;
    window.location.reload();
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, mass: 1 },
    },
  };

  const scamTypes = [
    {
      id: "investment",
      title: t("scam_investment_title"),
      desc: t("scam_investment_desc"),
      colorClass: styles.themeInvestment,
      path: "/investment-test", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
    },
    {
      id: "romance",
      title: t("scam_romance_title"),
      desc: t("scam_romance_desc"),
      colorClass: styles.themeRomance,
      path: "/romance-test",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
    },
    {
      id: "job-offer",
      title: t("scam_job_title"),
      desc: t("scam_job_desc"),
      colorClass: styles.themeJob,
      path: "/job-offer-test",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
    },
    {
      id: "authority",
      title: t("scam_authority_title"),
      desc: t("scam_authority_desc"),
      colorClass: styles.themeAuthority,
      path: "/authority-test",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      id: "cooperation",
      title: t("scam_cooperation_title"),
      desc: t("scam_cooperation_desc"),
      colorClass: styles.themeCooperation,
      path: "/cooperation-test",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <main className={styles.container}>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.topNav}
      >
        <button onClick={() => router.push("/breathing")} className={styles.backButton}>
          {t("truth_back_btn")}
        </button>

        {mounted && (
          <button onClick={toggleLanguage} className={styles.langButton}>
            <span className={styles.globeIcon}>🌍</span>
            {currentLang === "en" ? "中文" : "EN"}
          </button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className={styles.header}
      >
        <h1 className={styles.title}>{t("truth_hub_title")}</h1>
        <p className={styles.subtitle}>{t("truth_hub_subtitle")}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.listContainer}
      >
        {scamTypes.map((scam) => (
          <motion.div
            key={scam.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02, x: 5 }} 
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(scam.path)}
            className={`${styles.card} ${scam.colorClass}`}
          >
            <div className={styles.iconBox}>{scam.icon}</div>
            <div className={styles.textContent}>
              <h2 className={styles.cardTitle}>{scam.title}</h2>
              <p className={styles.cardDesc}>{scam.desc}</p>
            </div>
            <div className={styles.chevron}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className={styles.footer}
      >
        {/* 💥 下載按鈕已移除，僅保留隱私權連結 */}
        <div className={styles.privacyLinkWrapper}>
          <a href="/privacy" className={styles.privacyLink}>
            {t("privacy_title")}
          </a>
        </div>

        {/* --- 整合：關於我們連結 --- */}
        <div className={styles.aboutLinkWrapper}>
          <a href="/about" className={styles.aboutLink}>
            {t("footer.about")}
          </a>
        </div>
      </motion.div>
    </main>
  );
}