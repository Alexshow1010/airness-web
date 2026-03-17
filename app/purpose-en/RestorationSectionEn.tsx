"use client";

import React, { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import NeuralMesh from '../components/NeuralMesh';

export default function RestorationSectionEn() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="min-h-screen bg-black" />;

  return (
    <section className="relative w-full bg-[#050505]">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        <NeuralMesh />
      </div>

      <div className="relative z-10 w-full px-6 py-32 md:px-24 flex flex-col items-center -mt-[100vh]">
        <div className="max-w-4xl w-full space-y-16">
          
          <div className="text-center mb-40 pt-20">
            <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-widest text-blue-300">
              The Restoration: Deconstructing the 5 Stages
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.2em]">
              Hit the nervous system's stop button before rationality falls.
            </p>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            When an amygdala hijack occurs, your rationality doesn't disappear; it simply goes "offline." The first step to restoration is understanding how scammers systematically push your nervous system toward collapse. Every perfect scam follows a precise psychological evolution of 5 stages.
          </ScrollReveal>

          <div className="border-l-4 border-blue-900 pl-8 mt-16 mb-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-blue-400 text-2xl font-bold tracking-widest">
              Stage 1: Contact & Probing (The Bait)
            </ScrollReveal>
          </div>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            A call from "customer service," an SMS about an account anomaly, or a perfect stranger on a dating app. In this stage, scammers are just testing your defenses. Your prefrontal cortex (the rational center) is still functioning normally, and your brain is relatively calm.
          </ScrollReveal>

          <div className="border-l-4 border-blue-700 pl-8 mt-16 mb-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-blue-300 text-2xl font-bold tracking-widest">
              Stage 2: Emotional Arousal (Edge of Hijack)
            </ScrollReveal>
          </div>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            They use tone and context to precisely strike your "fear" or "greed." They tell you you're about to be arrested for money laundering, or offer a risk-free insider tip. Your heart rate slightly accelerates, the sympathetic nervous system prepares to activate, and the amygdala gathers threat signals.
          </ScrollReveal>

          <div className="my-20 bg-blue-950/30 border border-blue-800 p-8 rounded-lg shadow-[0_0_30px_rgba(30,58,138,0.2)]">
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-white text-xl md:text-2xl font-bold leading-relaxed mb-6">
              [Defense Breaker: The Golden Window for AIRNESS]
            </ScrollReveal>
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-gray-300 leading-relaxed">
              Stages 1 and 2 are your ONLY golden window to regain control. When you feel your heart skip a beat and your emotions waver, take a deep, long breath immediately. The physical act of deep exhalation forces the parasympathetic nervous system to engage, directly blocking the amygdala's hijack sequence. If you stabilize your heart rate here, your rationality stays online, and the scam ends right now.
            </ScrollReveal>
          </div>

          <div className="border-l-4 border-purple-700 pl-8 mt-16 mb-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-purple-400 text-2xl font-bold tracking-widest">
              Stage 3: Urgency & Isolation (Full Hijack)
            </ScrollReveal>
          </div>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            If you don't hit the brakes in the first two stages, the scammers close the net. "Don't hang up," "Don't tell your family," "You have 10 minutes." Under extreme time pressure and isolation, the amygdala fully takes over. Your prefrontal cortex is completely severed. You lose the ability to verify facts and become a biological machine programmed to obey.
          </ScrollReveal>

          <div className="border-l-4 border-red-700 pl-8 mt-16 mb-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-red-400 text-2xl font-bold tracking-widest">
              Stage 4: Behavioral Manipulation (Puppet State)
            </ScrollReveal>
          </div>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            In a state of high-panic neurological chaos, seeking "safety" or "threat removal," you completely submit to their commands. Go to the ATM, hand over banking details, deliver cash. The physical control of your body has been entirely handed over to the hacker on the phone.
          </ScrollReveal>

          <div className="border-l-4 border-gray-600 pl-8 mt-16 mb-8">
            <ScrollReveal baseOpacity={0} blurStrength={6} textClassName="text-gray-400 text-2xl font-bold tracking-widest">
              Stage 5: The Truth & Trauma (Rationality Returns)
            </ScrollReveal>
          </div>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            Once the money is gone, the scammer vanishes. The external threat instantly dissipates, your parasympathetic nervous system naturally kicks in, your heart slows, and blood flows back to the prefrontal cortex. Rationality finally reconnects. Looking at the chat logs full of obvious flaws, you are hit with intense self-doubt: "How could I be so stupid?"
          </ScrollReveal>

          <div className="mt-32 pb-20 text-center space-y-6">
            <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-2xl font-light text-gray-300">
              You are not stupid. You just missed the golden window to break the neurological hijack.
            </ScrollReveal>
            <ScrollReveal baseOpacity={0} blurStrength={12} textClassName="text-3xl md:text-4xl font-black text-blue-400">
              AIRNESS helps you hit the brakes of rationality in Stage 1.
            </ScrollReveal>
          </div>

          <div className="h-[50vh]" /> 

        </div>
      </div>
    </section>
  );
}