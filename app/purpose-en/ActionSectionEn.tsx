"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // 記得要引進 router

export default function ActionSectionEn() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-[#050505]">
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-[#050505]" />

      <div className="relative z-10 w-full px-6 py-20 flex flex-col items-center -mt-[100vh]">
        <div className="max-w-5xl w-full text-center text-white">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
            Scams don't fool you — they hijack your brain.
          </h1>
          <p className="text-xl md:text-2xl opacity-70 mb-20">
            Slow down, and your brain turns back on.
          </p>

          {/* 第一組（紅腦） */}
          <div className="flex flex-wrap justify-center items-start gap-16 mb-24">
            <Image
              src="/brains/red.png"
              alt="Panic Brain"
              width={450}
              height={280}
              className="rounded-xl shadow-2xl"
            />
            <div className="text-left max-w-md">
              <h2 className="text-3xl font-bold text-[#ff4d4d] mb-4">
                When fear spikes, your brain gets hijacked.
              </h2>
              <ul className="text-xl leading-loose list-disc list-inside">
                <li>Amygdala takes over</li>
                <li>Critical thinking shuts down</li>
                <li>Scammers strike when urgency hits</li>
              </ul>
            </div>
          </div>

          {/* 第二組（藍腦） */}
          <div className="flex flex-wrap-reverse justify-center items-start gap-16 mb-24">
            <div className="text-right max-w-md">
              <h2 className="text-3xl font-bold text-[#4da6ff] mb-4">
                Deep breathing gives your judgment back.
              </h2>
              <ul className="text-xl leading-loose list-none">
                <li>Prefrontal cortex reactivates</li>
                <li>Your attention returns to you</li>
                <li>The scammer's pressure loses power</li>
              </ul>
            </div>
            <Image
              src="/brains/blue.png"
              alt="Calm Brain"
              width={450}
              height={280}
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* 💥 補回來的提醒框與導航按鈕 (英文版) */}
          <div className="mx-auto max-w-2xl p-8 rounded-2xl bg-[#7850ff]/25 shadow-[0_0_25px_rgba(150,100,255,0.55)] mb-10">
            <p className="text-xl leading-relaxed">
              Your reaction isn't your fault; it's your nervous system on autopilot.
              <br />
              Take 10 seconds to breathe deeply, and your brain will regain control.
            </p>
          </div>

          <button
            onClick={() => router.push("/breathing")}
            className="mb-32 bg-[#007bff] hover:bg-[#0056b3] text-white px-10 py-5 rounded-full text-xl font-semibold cursor-pointer transition-all transform hover:scale-105"
          >
            Start 10-Second Breathing Exercise →
          </button>

        </div>
      </div>
    </section>
  );
}