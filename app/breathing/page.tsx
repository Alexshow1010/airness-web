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
      </div>

      {/* 下一頁按鈕 */}
      <Link href="/truth" className={styles.nextBtn}>
        下一頁 →
      </Link>
    </main>
  );
}
