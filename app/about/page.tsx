"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './about.module.css';

// 引入語系檔
import zh from '../../locales/zh.json';
import en from '../../locales/en.json';
import { useState } from 'react';

export default function AboutPage() {
  const router = useRouter();
  
  // 語言狀態管理
  const [lang, setLang] = useState<'zh' | 'en'>('zh'); 
  const t = lang === 'zh' ? zh : en;

  // 輔助函式：處理 HTML 換行
  const renderHTML = (text: string | undefined) => {
    return { __html: text || "" };
  };

  return (
    <main className={styles.container}>
      
      {/* 頂部導覽列 */}
      <div className={styles.nav}>
        <button 
          onClick={() => router.push('/truth')}
          className="text-gray-400 hover:text-white transition-colors tracking-widest text-sm flex items-center gap-2 cursor-pointer"
        >
          <span>←</span> {t.about.back}
        </button>
        <button 
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          className="px-4 py-1.5 border border-white/20 hover:bg-white/10 rounded-full text-xs tracking-widest transition-colors uppercase cursor-pointer"
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

        <div className="space-y-6">
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

          {/* ================= 專案價值聲明 (致 Google 審核員) ================= */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-8 border border-[#10B981]/30 bg-[#10B981]/5 rounded-2xl text-left shadow-2xl"
          >
            <h3 className="text-[#10B981] font-black tracking-widest text-lg mb-6 flex items-center gap-2">
              <span className="text-2xl">🛡️</span> {t.about.statement_title}
            </h3>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-normal">
              <p className="flex gap-2">
                <span className="text-[#10B981] flex-shrink-0">●</span>
                <span dangerouslySetInnerHTML={renderHTML(t.about.statement_1)} />
              </p>
              <p className="flex gap-2">
                <span className="text-[#10B981] flex-shrink-0">●</span>
                <span dangerouslySetInnerHTML={renderHTML(t.about.statement_2)} />
              </p>
              <p className="flex gap-2">
                <span className="text-[#10B981] flex-shrink-0">●</span>
                <span dangerouslySetInnerHTML={renderHTML(t.about.statement_3)} />
              </p>
            </div>
          </motion.div>

          <div className={styles.actionBlock}>
            <span className="font-black" dangerouslySetInnerHTML={renderHTML(t.about.breathe)} />
            <span className="font-black" dangerouslySetInnerHTML={renderHTML(t.about.think)} />
            <span className="font-black" dangerouslySetInnerHTML={renderHTML(t.about.decide)} />
          </div>
        </div>
      </motion.div>
    </main>
  );
}