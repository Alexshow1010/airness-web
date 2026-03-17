"use client";

import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ParticleBackground from '../components/ParticleBackground';

export default function OriginSection() {
  return (
    <section className="relative w-full bg-[#050505]">
      
      {/* 1. 背景 Sticky 區塊：淡淡呼吸粒子背景 */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* 2. 文字內容區塊：-mt-[100vh] 浮在粒子上方 */}
      <div className="relative z-10 w-full px-6 py-32 md:px-24 flex flex-col items-center -mt-[100vh]">
        <div className="max-w-4xl w-full space-y-16">
          
          {/* 大標題 */}
          <div className="text-center mb-32 pt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent">
              回息 / AIRNESS 的起源與軸心
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 tracking-widest font-light">
              從防詐騙、辨識詐騙手法，到幫人找回判斷力的反詐工具
            </p>
          </div>

          {/* 1. 起源開篇 */}
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            在這個資訊爆炸、社群泛濫、詐騙手法不斷翻新的時代，防詐騙 已經不是少數人的需求，而是每一個人都必須面對的日常課題。不論是 投資詐騙、感情詐騙、或是 AI 詐騙訊息，它們都在用不同形式滲入生活。詐騙集團精準攻擊人的焦慮、孤單與資訊落差。
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            回息真正的起源，來自一個更深的問題：很多人不是因為笨或貪心而被詐騙，而是在壓力、恐慌與情緒失衡之中，慢慢失去了自己的判斷力。
          </ScrollReveal>

          {/* 2. 可怕之處 */}
          <ScrollReveal baseOpacity={0} blurStrength={10} textClassName="text-red-400 font-bold text-2xl my-16 tracking-widest text-center">
            這正是詐騙最可怕的地方。
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            詐騙集團真正奪走的，往往不是金錢，而是人的判斷權、行動權與穩定感。當一個人被帶進高壓節奏，他的大腦其實不是在正常思考，而是在一種被壓迫、被催促的狀態下，逐漸喪失冷靜。這也是為什麼受害者事後常說：「我當下不知道為什麼會相信」。
          </ScrollReveal>

          {/* 3. 定位與名字意義 */}
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            回息更深的定位，是一個幫助使用者先穩住自己，再重新看清局勢的「反詐騙節律系統」。回息，代表的是：把亂掉的節奏找回來，把被奪走的思考能力慢慢拉回來，把注意力重新帶回自己身上。
          </ScrollReveal>

          {/* 4. 軸心一 - 藍色光 */}
          <div className="border-l-4 border-blue-500 pl-6 my-20">
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-blue-300 text-3xl font-bold tracking-wider leading-relaxed">
              這就是回息/AIRNESS 的第一個軸心：防詐騙的第一步，不是先對外對抗，而是先對內回穩。
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            問題不是只有「你知不知道這是詐騙」，而是「當你慌了，你還能不能用正常狀態判斷這是不是詐騙」。因此，回息更像是一個站在人與風險之間的緩衝層，多一層停頓、多一層讓自己活下來的空間。
          </ScrollReveal>

          {/* 5. 軸心二 - 紫色光 */}
          <div className="border-l-4 border-purple-500 pl-6 my-20">
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-purple-300 text-3xl font-bold tracking-wider leading-relaxed">
              回息/AIRNESS 的第二個軸心：我們不是在製造恐懼，而是在建立辨識力。
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            回息不希望放大焦慮，而是幫使用者理解詐騙手法分析。它的目的不是要讓人永遠活在神經緊繃裡，而是幫人建立一套更穩定、更有結構的風險判讀能力。
          </ScrollReveal>

          {/* 6. 軸心三 - 綠色光 */}
          <div className="border-l-4 border-emerald-500 pl-6 my-20">
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-emerald-300 text-3xl font-bold tracking-wider leading-relaxed">
              回息/AIRNESS 的第三個軸心：我們不是在救人，我們是在幫人把被奪走的判斷權與行動權拿回來。
            </ScrollReveal>
          </div>

          {/* 7. 重建系統入口 */}
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            回息是一個讓人先穩住的入口。一個讓人從詐騙風險中暫時抽離的入口，一個讓人從混亂回到清醒的入口。
          </ScrollReveal>

          {/* 8. 對自救者的陪伴 */}
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            你不是笨，你也不是沒救。你只是暫時被帶離了自己的節奏。現在，先停一下。先穩住。先把呼吸、注意力、判斷力，慢慢拿回來。
          </ScrollReveal>

          {/* 9. 起源總結 */}
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            回息是從人的跌落感開始，從被詐騙者的痛感開始。它想真正補上這個時代最缺的一層：在詐騙發生之前，幫人先穩住自己；在判斷快被奪走時，幫人守住那條最後的線。
          </ScrollReveal>

          {/* 10. 軸心與總結 */}
          <ScrollReveal baseOpacity={0} blurStrength={10} textClassName="mb-20">
            回息/AIRNESS 的軸心始終很清楚：它不是靠恐嚇留住使用者，不是靠資訊轟炸讓人更混亂。回息，不只是提醒你不要被騙。回息，是幫你把自己找回來。
          </ScrollReveal>

          <div className="h-[40vh]" /> 

        </div>
      </div>
    </section>
  );
}