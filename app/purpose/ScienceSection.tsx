"use client";

import React, { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import NeuralNetwork from '../components/NeuralNetwork';

export default function ScienceSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="min-h-screen bg-black" />;

  return (
    <section className="relative w-full bg-[#050505]">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        <NeuralNetwork 
          className="w-full h-full opacity-60" 
          particleCount={70}           
          connectionDistance={160}    
          nodeColor="rgba(167, 139, 250, 0.8)" 
          lineColor="rgba(129, 140, 248, 0.4)" 
        />
      </div>

      <div className="relative z-10 w-full px-6 py-32 md:px-24 flex flex-col items-center -mt-[100vh]">
        <div className="max-w-4xl w-full space-y-16">
          
          <div className="text-center mb-40 pt-20">
            <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-widest text-purple-200">
              科學篇：大腦的「物理劫持」現場
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.2em]">
              解析「杏仁核劫持」如何癱瘓你的判斷力
            </p>
          </div>
          
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            人類大腦在接收外部資訊時，有一條極快的「原始快捷路徑」。當詐騙訊息中的威脅或誘惑出現時，資訊會繞過理性分析中心，直接送達警報中心「杏仁核」。
          </ScrollReveal>

          <div className="border-l-4 border-red-600 pl-8 my-16 bg-red-950/20 py-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-red-300 text-2xl font-bold leading-relaxed">
              這就是生理上的「杏仁核劫持」。
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            杏仁核偵測到急迫威脅，為了生存，它會立即搶奪大腦的控制權。它發送訊號切斷與前額葉皮質的聯繫。前額葉是你的「理性指揮官」，一旦斷線，你將喪失邏輯推理與情緒調節的能力。
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            緊接著，交感神經爆發，你的心跳會加速，血壓飆升。呼吸變得淺快且斷續，這會導致大腦含氧量不穩，讓焦慮感惡性循環。
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            詐騙集團透過持續的電話轟炸、語氣壓迫、時限倒數，讓你的杏仁核始終處於「劫持狀態」，不讓前額葉有任何重新連線的機會。在這種物理性的腦亂狀態下，任何人都可能像木偶一樣，交出帳戶與密碼。
          </ScrollReveal>

          <div className="border-l-4 border-emerald-500 pl-8 my-16 bg-emerald-950/20 py-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-emerald-300 text-2xl font-bold leading-relaxed">
              打破劫持的唯一方式，是強制作動「副交感神經」。
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            神經科學證明，長而慢的「深呼吸」能透過迷走神經向大腦發送關鍵訊號。這個訊號會告訴杏仁核：「威脅已解除」。只有當心跳平緩下來，副交感神經才能奪回控制權，讓你的理性指揮官重新上線運作。
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            「回息」的定位，本質上是一個神經系統防護盾。它透過科學的呼吸節奏，在劫持發生的瞬間，幫你爭取那關鍵的 30 秒。這 30 秒不是為了讓你思考，而是為了讓你的大腦「重新開機」，找回判斷權。
          </ScrollReveal>

          <div className="mt-32 pb-20 text-center space-y-4">
            <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-3xl font-black text-blue-400">
              被騙不是你的錯，是因為大腦被劫持了。
            </ScrollReveal>
            <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-3xl font-black text-blue-400">
              回息，幫你奪回大腦。
            </ScrollReveal>
          </div>

          <div className="h-[50vh]" /> 

        </div>
      </div>
    </section>
  );
}