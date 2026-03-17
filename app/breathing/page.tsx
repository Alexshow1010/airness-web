"use client";

import BreathCanvas from "../components/breathing/BreathCanvas";
import styles from "./breathing.module.css";
import Link from "next/link";

export default function BreathingPage() {
  return (
    <main className={styles.container}>
      <BreathCanvas />

      <div className={styles.hint}>
        吸氣 4 秒・停留 2 秒・吐氣 6 秒
        <br />
        <span style={{ fontSize: "0.85em", opacity: 0.8 }}>
          Inhale 4s · Hold 2s · Exhale 6s
        </span>
      </div>

      {/* 下一頁按鈕 */}
      <Link href="/truth" className={styles.nextBtn}>
        下一頁 Next →
      </Link>
    </main>
  );
}