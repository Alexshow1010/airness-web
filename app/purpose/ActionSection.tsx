"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ActionSection() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-black" />

      <div className="relative z-10 w-full px-6 py-20 flex flex-col items-center -mt-[100vh]">
        <div className="max-w-5xl w-full text-center text-white">
          
          {/* 這裡已經沒有按鈕了，畫面乾乾淨淨 */}

          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
            詐騙不是你笨，是你的神經被劫持了。
          </h1>
          <p className="text-xl md:text-2xl opacity-70 mb-20">
            慢下來，大腦就會重新亮起來。
          </p>

          <div className="flex flex-wrap justify-center items-start gap-16 mb-24">
            <Image
              src="/brains/red.png"
              alt="紅色恐慌大腦"
              width={450}
              height={280}
              className="rounded-xl shadow-2xl"
            />
            <div className="text-left max-w-md">
              <h2 className="text-3xl font-bold text-[#ff4d4d] mb-4">
                恐慌時，你的大腦其實被接管了。
              </h2>
              <ul className="text-xl leading-loose list-disc list-inside">
                <li>杏仁核暴衝，情緒接管大腦</li>
                <li>判斷力暫時被切斷</li>
                <li>詐騙利用你「急著做決定」的瞬間</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap-reverse justify-center items-start gap-16 mb-24">
            <div className="text-right max-w-md">
              <h2 className="text-3xl font-bold text-[#4da6ff] mb-4">
                深呼吸，能讓你奪回判斷權。
              </h2>
              <ul className="text-xl leading-loose list-none">
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
              className="rounded-xl shadow-2xl"
            />
          </div>

          <div className="mx-auto max-w-2xl p-8 rounded-2xl bg-[#7850ff]/25 shadow-[0_0_25px_rgba(150,100,255,0.55)] mb-10">
            <p className="text-xl leading-relaxed">
              你的反應不是你的錯，而是神經系統的自動模式。
              <br />
              只要花 10 秒深呼吸，大腦會重新拿回控制權。
            </p>
          </div>

          <button
            onClick={() => router.push("/breathing")}
            className="mb-32 bg-[#007bff] hover:bg-[#0056b3] text-white px-10 py-5 rounded-full text-xl font-semibold cursor-pointer transition-all transform hover:scale-105"
          >
            開始 10 秒呼吸練習 →
          </button>

        </div>
      </div>
    </section>
  );
}