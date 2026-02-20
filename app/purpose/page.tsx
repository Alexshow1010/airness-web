"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PurposePage() {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Language Switch */}
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button
          onClick={() => router.push("/purpose-en")}
          style={{
            padding: "8px 16px",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "20px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          ENGLISH
        </button>
      </div>

      {/* 主標題 */}
      <h1 style={{ fontSize: "2.6rem", fontWeight: "700", marginBottom: "10px" }}>
        詐騙不是你笨，是你的神經被劫持了。
      </h1>
      <p style={{ opacity: 0.7, marginBottom: "60px", fontSize: "1.2rem" }}>
        慢下來，大腦就會重新亮起來。
      </p>

      {/* 第一組（紅腦） */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "60px",
          marginBottom: "80px",
          flexWrap: "wrap",
        }}
      >
        <Image
          src="/brains/red.png"
          alt="紅色恐慌大腦"
          width={450}
          height={280}
          style={{ borderRadius: "12px" }}
        />

        <div style={{ textAlign: "left", maxWidth: "420px" }}>
          <h2 style={{ fontSize: "1.9rem", color: "#ff4d4d", fontWeight: "700" }}>
            恐慌時，你的大腦其實被接管了。
          </h2>

          <ul style={{ fontSize: "1.2rem", lineHeight: "2rem", marginTop: "10px" }}>
            <li>杏仁核暴衝，情緒接管大腦</li>
            <li>判斷力暫時被切斷</li>
            <li>詐騙利用你「急著做決定」的瞬間</li>
          </ul>
        </div>
      </div>

      {/* 第二組（藍腦） */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "60px",
          marginBottom: "90px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ textAlign: "right", maxWidth: "420px" }}>
          <h2 style={{ fontSize: "1.9rem", color: "#4da6ff", fontWeight: "700" }}>
            深呼吸，能讓你奪回判斷權。
          </h2>

          <ul style={{ fontSize: "1.2rem", lineHeight: "2rem", marginTop: "10px" }}>
            <li>前額葉重新啟動，恢復判斷力</li>
            <li>注意力回到自己身上</li>
            <li>詐騙節奏瞬間失效</li>
          </ul>
        </div>

        <Image
          src="/brains/blue.png"
          alt="藍色冷靜大腦"
          width={450}
          height={280}
          style={{ borderRadius: "12px" }}
        />
      </div>

      {/* 小提醒 */}
      <div
        style={{
          margin: "0 auto 30px auto",
          padding: "18px 30px",
          borderRadius: "14px",
          background: "rgba(120, 80, 255, 0.25)",
          boxShadow: "0 0 25px rgba(150, 100, 255, 0.55)",
          maxWidth: "650px",
        }}
      >
        <p style={{ fontSize: "1.3rem", lineHeight: "2rem" }}>
          你的反應不是你的錯，而是神經系統的自動模式。
          <br />
          只要花 10 秒深呼吸，大腦會重新拿回控制權。
        </p>
      </div>

      <button
        onClick={() => router.push("/breathing")}
        style={{
          marginTop: "10px",
          backgroundColor: "#007bff",
          padding: "16px 34px",
          borderRadius: "30px",
          border: "none",
          fontSize: "1.3rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        開始 10 秒呼吸練習 →
      </button>
    </div>
  );
}
