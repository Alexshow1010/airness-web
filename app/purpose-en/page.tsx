"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PurposeENPage() {
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
          onClick={() => router.push("/purpose")}
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
          中文
        </button>
      </div>

      <h1 style={{ fontSize: "2.6rem", fontWeight: "700", marginBottom: "10px" }}>
        Scams don’t fool you — they hijack your brain.
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "60px", fontSize: "1.2rem" }}>
        Slow down, and your brain turns back on.
      </p>

      {/* Red Brain Section */}
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
          src="/brains/en_red.png"
          alt="Emotional Hijack Brain"
          width={450}
          height={280}
          style={{ borderRadius: "12px" }}
        />

        <div style={{ textAlign: "left", maxWidth: "420px" }}>
          <h2 style={{ fontSize: "1.9rem", color: "#ff4d4d", fontWeight: "700" }}>
            When fear spikes, your brain gets hijacked.
          </h2>

          <ul style={{ fontSize: "1.2rem", lineHeight: "2rem", marginTop: "10px" }}>
            <li>Amygdala takes over</li>
            <li>Critical thinking shuts down</li>
            <li>Scammers strike when urgency hits</li>
          </ul>
        </div>
      </div>

      {/* Blue Brain Section */}
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
            Deep breathing gives your judgment back.
          </h2>

          <ul style={{ fontSize: "1.2rem", lineHeight: "2rem", marginTop: "10px" }}>
            <li>Prefrontal cortex reactivates</li>
            <li>Your attention returns to you</li>
            <li>The scammer’s pressure loses power</li>
          </ul>
        </div>

        <Image
          src="/brains/en_blue.png"
          alt="Calm Analysis Brain"
          width={450}
          height={280}
          style={{ borderRadius: "12px" }}
        />
      </div>

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
          Your reaction isn’t your fault — it’s the nervous system’s autopilot.
          <br />
          Just 10 seconds of deep breathing restores control.
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
        Start 10-Second Breathing →
      </button>
    </div>
  );
}
