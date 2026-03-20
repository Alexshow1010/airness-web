"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './about.module.css';

// 💥 這裡請引入你專案中用來抓取 locales 的 Hook 或 Context
// 例如: import { useTranslation } from 'react-i18next';
// 這裡我先模擬你的 i18n 邏輯，請依你的實際情況調整
import zh from '../../locales/zh.json';
import en from '../../locales/en.json';
import { useState } from 'react';

export default function AboutPage() {
  const router = useRouter();
  
  // 💥 這裡替換成你實際的語言狀態管理
  const [lang, setLang] = useState<'zh' | 'en'>('zh'); 
  const t = lang === 'zh' ? zh : en;

  // 輔助函式：用來將 JSON 裡的 <br/> 轉換成實際的 HTML 換行
  const renderHTML = (text: string) => {
    return { __html: text };
  };

  return (
    <main className={styles.container}>
      
      {/* 頂部導覽列 */}
      <div className={styles.nav}>
        <button 
          onClick={() => router.push('/truth')}
          className="text-gray-400 hover:text-white transition-colors tracking-widest text-sm flex items-center gap-2"
        >
          <span>←</span> {t.about.back}
        </button>
        <button 
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          className="px-4 py-1.5 border border-white/20 hover:bg-white/10 rounded-full text-xs tracking-widest transition-colors uppercase"
        >
          {lang === 'zh' ? 'ENGLISH' : '中文'}
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.contentWrapper}
      >
        <h1 className={styles.title}>{t.about.title}</h1>

        <div>
          <p className={styles.paragraph} dangerouslySetInnerHTML={renderHTML(t.about.p1)} />
          <p className={styles.paragraph} dangerouslySetInnerHTML={renderHTML(t.about.p2)} />
          <p className={styles.paragraph} dangerouslySetInnerHTML={renderHTML(t.about.p3)} />
          
          <div className={styles.highlightQuote}>
            <p className={styles.paragraph} dangerouslySetInnerHTML={renderHTML(t.about.p4)} />
          </div>
          
          <p className={`${styles.paragraph} ${styles.warningText}`} dangerouslySetInnerHTML={renderHTML(t.about.p5)} />
          
          <p className={`${styles.paragraph} font-bold text-white text-2xl mt-8`} dangerouslySetInnerHTML={renderHTML(t.about.p6)} />
          
          <p className={styles.paragraph} dangerouslySetInnerHTML={renderHTML(t.about.p7)} />
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className={styles.paragraph} dangerouslySetInnerHTML={renderHTML(t.about.p8)} />
            <p className={`${styles.paragraph} ${styles.soulText}`} dangerouslySetInnerHTML={renderHTML(t.about.p9)} />
          </div>

          <div className={styles.actionBlock}>
            <span dangerouslySetInnerHTML={renderHTML(t.about.breathe)} />
            <span dangerouslySetInnerHTML={renderHTML(t.about.think)} />
            <span dangerouslySetInnerHTML={renderHTML(t.about.decide)} />
          </div>
        </div>
      </motion.div>
    </main>
  );
}