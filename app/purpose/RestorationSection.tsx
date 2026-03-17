"use client";

import React, { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import NeuralMesh from '../components/NeuralMesh';

export default function RestorationSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="min-h-screen bg-black" />;

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white px-6 py-32 md:px-24 flex flex-col items-center relative overflow-hidden">
      
      {/* 背景 UI (目前先保留，等文字確認後我們再來優化這塊) */}
      <NeuralMesh />

      <div className="max-w-4xl w-full space-y-16 relative z-10">
        
        {/* 大標題 */}
        <div className="text-center mb-40 pt-20">
          <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-widest text-blue-300">
            修復篇：拆解詐騙五階段
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.2em]">
            在理智墜落前，按下神經系統的停止鍵
          </p>
        </div>

        {/* 前言 */}
        <ScrollReveal baseOpacity={0} blurStrength={10}>
          當杏仁核劫持發生時，你的理性不是消失了，而是「暫時離線」。修復的第一步，是看懂詐騙集團如何一步步誘導你的神經系統走向崩潰。所有完美的騙局，都精準遵循著「詐騙五階段」的心理演化。
        </ScrollReveal>

        {/* 階段一 */}
        <div className="border-l-4 border-blue-900 pl-8 mt-16 mb-8">
          <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-blue-400 text-2xl font-bold tracking-widest">
            第一階段：接觸與試探（拋出誘餌）
          </ScrollReveal>
        </div>
        <ScrollReveal baseOpacity={0} blurStrength={10}>
          一通自稱客服的電話、一封帳戶異常的簡訊、或是一個交友軟體上的完美陌生人。這個階段，詐騙集團只是在測試你的防備心。此時你的前額葉（理性中心）還在正常運作，大腦處於相對冷靜的狀態。
        </ScrollReveal>

        {/* 階段二 */}
        <div className="border-l-4 border-blue-700 pl-8 mt-16 mb-8">
          <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-blue-300 text-2xl font-bold tracking-widest">
            第二階段：情緒喚醒（劫持邊緣）
          </ScrollReveal>
        </div>
        <ScrollReveal baseOpacity={0} blurStrength={10}>
          他們會用語氣或情境，精準打擊你的「恐懼」或「貪婪」。告訴你涉及洗錢即將被捕，或是告訴你一個穩賺不賠的限時內線。你的心跳開始微微加速，交感神經準備啟動，杏仁核正在搜集威脅訊號。
        </ScrollReveal>

        {/* 核心破除機制 (Highlight) */}
        <div className="my-20 bg-blue-950/30 border border-blue-800 p-8 rounded-lg shadow-[0_0_30px_rgba(30,58,138,0.2)]">
          <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-white text-xl md:text-2xl font-bold leading-relaxed mb-6">
            【防線破除點：回息的最佳時機】
          </ScrollReveal>
          <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-gray-300 leading-relaxed">
            第一與第二階段，是你奪回主控權的唯一黃金窗口。當你感覺到心跳漏拍、情緒開始波動時，立刻進行一次深長的「呼吸」。物理性的深吐氣會強制作動副交感神經，直接阻斷杏仁核的劫持程序。只要在這兩階段穩住心跳，理智就不會斷線，騙局就在此終止。
          </ScrollReveal>
        </div>

        {/* 階段三 */}
        <div className="border-l-4 border-purple-700 pl-8 mt-16 mb-8">
          <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-purple-400 text-2xl font-bold tracking-widest">
            第三階段：製造急迫與孤立（全面劫持）
          </ScrollReveal>
        </div>
        <ScrollReveal baseOpacity={0} blurStrength={10}>
          如果你在前兩個階段沒有踩下煞車，詐騙集團會立刻收網。「不准掛電話」、「不要告訴家人」、「只剩最後十分鐘」。在極端的時間壓迫與資訊孤立下，杏仁核全面接管大腦。你的前額葉皮質徹底斷線，喪失了查證與邏輯思考的能力，淪為只能聽命行事的生物本能機。
        </ScrollReveal>

        {/* 階段四 */}
        <div className="border-l-4 border-red-700 pl-8 mt-16 mb-8">
          <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-red-400 text-2xl font-bold tracking-widest">
            第四階段：行為誘導與榨取（木偶狀態）
          </ScrollReveal>
        </div>
        <ScrollReveal baseOpacity={0} blurStrength={10}>
          在高度恐慌的神經混亂狀態下，你為了尋求「安全感」或「解除威脅」，會完全服從對方的指令。去 ATM 操作、交出網路銀行帳密、面交現金。此時的你，身體的行動權已經完全交給了電話那頭的駭客。
        </ScrollReveal>

        {/* 階段五 */}
        <div className="border-l-4 border-gray-600 pl-8 mt-16 mb-8">
          <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-gray-400 text-2xl font-bold tracking-widest">
            第五階段：真相揭曉與創傷（理智回歸）
          </ScrollReveal>
        </div>
        <ScrollReveal baseOpacity={0} blurStrength={10}>
          當錢被轉走，對方消失。外界的急迫性威脅瞬間解除，你的副交感神經自然啟動，心跳逐漸平緩，前額葉皮質重新獲得供血。這時，理智終於重新連線。你看著那些破綻百出的對話紀錄，會感到強烈的自我懷疑與羞恥：「我怎麼會這麼笨？」
        </ScrollReveal>

        {/* 結語 */}
        <div className="mt-32 pb-20 text-center space-y-6">
          <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-2xl font-light text-gray-300">
            你不是笨，你只是錯過了阻斷神經劫持的黃金時間。
          </ScrollReveal>
          <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-3xl md:text-4xl font-black text-blue-400">
            回息，就是在第一階段，幫你踩住理智的煞車。
          </ScrollReveal>
        </div>

        <div className="h-[50vh]" /> 

      </div>
    </div>
  );
}