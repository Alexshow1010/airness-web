"use client";

import React, { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import NeuralNetwork from '../components/NeuralNetwork';

export default function ScienceSectionEn() {
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
          
          <div className="text-center mb-40">
            <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-widest text-purple-200">
              The Science: A Physical Brain Hijack
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.2em]">
              How the "Amygdala Hijack" paralyzes your judgment.
            </p>
          </div>
          
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            The human brain has a primitive, lightning-fast shortcut for processing information. When a scam message presents a severe threat or an irresistible temptation, the data bypasses your rational analysis center and goes straight to the alarm center: the Amygdala.
          </ScrollReveal>

          <div className="border-l-4 border-red-600 pl-8 my-16 bg-red-950/20 py-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-red-300 text-2xl font-bold leading-relaxed">
              This is the physiological phenomenon known as the "Amygdala Hijack."
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            Detecting an urgent threat, the amygdala seizes control of the brain for survival. It severs communication with the Prefrontal Cortex—your "rational commander." Once disconnected, you physically lose the capacity for logical reasoning and emotional regulation.
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            Immediately, the sympathetic nervous system explodes. Your heart rate accelerates, blood pressure spikes, and your breathing becomes shallow and fragmented. This causes erratic oxygen levels in the brain, creating a vicious cycle of anxiety.
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            Scammers use relentless bombardment, oppressive tones, and ticking clocks to keep your amygdala in a perpetual state of hijack, denying your prefrontal cortex any chance to reconnect. In this state of neurological chaos, anyone can become a puppet and hand over their passwords.
          </ScrollReveal>

          <div className="border-l-4 border-emerald-500 pl-8 my-16 bg-emerald-950/20 py-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-emerald-300 text-2xl font-bold leading-relaxed">
              The only way to break the hijack is to forcefully activate the parasympathetic nervous system.
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            Neuroscience proves that long, slow "deep breathing" sends a critical signal to the brain via the vagus nerve. This signal tells the amygdala: "The threat has passed." Only when your heart rate stabilizes can the parasympathetic nervous system regain control and bring your rational commander back online.
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            AIRNESS acts as your neurological shield. Through scientifically paced breathing rhythms, it buys you the crucial 30 seconds the moment a hijack occurs. Those 30 seconds aren't for thinking; they are for "rebooting" your brain to reclaim your judgment.
          </ScrollReveal>

          <div className="mt-32 pb-20 text-center space-y-4">
            <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-3xl font-black text-blue-400">
              Being scammed isn't your fault; your brain was hijacked.
            </ScrollReveal>
            <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-3xl font-black text-blue-400">
              AIRNESS helps you take it back.
            </ScrollReveal>
          </div>

          <div className="h-[50vh]" /> 

        </div>
      </div>
    </section>
  );
}