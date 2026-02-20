"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
    setTimeout(() => router.push("/purpose"), 3500);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 1.5s ease-in-out",

        // 加粗 + 白色 + 輕微字距強化存在感
        color: "#ffffff",
        fontSize: "2.3rem",
        fontWeight: "700",
        letterSpacing: "0.12rem",
      }}
    >
      回息 / AIRNESS
    </div>
  );
}
