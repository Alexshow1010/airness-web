"use client";

import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ParticleBackground from '../components/ParticleBackground';

export default function OriginSectionEn() {
  return (
    <section className="relative w-full bg-[#050505]">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="relative z-10 w-full px-6 py-32 md:px-24 flex flex-col items-center -mt-[100vh]">
        <div className="max-w-4xl w-full space-y-16">
          
          <div className="text-center mb-32 pt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent">
              The Origin & Core of AIRNESS
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 tracking-widest font-light">
              From recognizing scams to restoring your ultimate judgment.
            </p>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            In this era of information explosion and endless social media feeds, anti-fraud is no longer a niche need—it's a daily challenge for everyone. Whether it's investment fraud, romance scams, or AI-generated deepfakes, scammers precisely target our anxiety, loneliness, and information gaps.
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            The true origin of AIRNESS stems from a deeper realization: People don't get scammed because they are foolish or greedy. They fall victim because, under immense pressure, panic, and emotional imbalance, they slowly lose their ability to judge.
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10} textClassName="text-red-400 font-bold text-2xl my-16 tracking-widest text-center">
            This is the most terrifying aspect of scams.
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            What scammers truly steal isn't initially your money; it's your right to judge, your right to act, and your sense of stability. When dragged into a high-pressure rhythm and forced to make rapid decisions, your brain isn't thinking normally. It's gradually losing composure under coercion. This is why victims often say afterward, "I don't know why I believed them."
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            AIRNESS is positioned as an "Anti-Fraud Rhythm System." Its goal is to help you stabilize yourself before analyzing the situation. It doesn't lecture you; it pulls you back from the chaotic, panic-stricken state where your breathing has lost its rhythm.
          </ScrollReveal>

          <div className="border-l-4 border-blue-500 pl-6 my-20">
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-blue-300 text-3xl font-bold tracking-wider leading-relaxed">
              Axis 1: The first step in anti-fraud is not fighting the enemy, but stabilizing yourself.
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            The issue isn't just "Do you know this is a scam?" but rather "When panic sets in, can you still judge if it's a scam?" AIRNESS acts as a buffer zone between you and the risk, giving you the space to pause, doubt, and survive the trap.
          </ScrollReveal>

          <div className="border-l-4 border-purple-500 pl-6 my-20">
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-purple-300 text-3xl font-bold tracking-wider leading-relaxed">
              Axis 2: We don't manufacture fear; we build discernment.
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            AIRNESS doesn't want you living in constant anxiety where "everything is a scam." Instead, it helps you establish a stable, structured ability to read risks and analyze tactics without the overwhelming stress.
          </ScrollReveal>

          <div className="border-l-4 border-emerald-500 pl-6 my-20">
            <ScrollReveal baseOpacity={0} blurStrength={8} textClassName="text-emerald-300 text-3xl font-bold tracking-wider leading-relaxed">
              Axis 3: We aren't just saving people; we are helping them take back their hijacked autonomy.
            </ScrollReveal>
          </div>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            AIRNESS is an entry point for rebuilding. A portal to temporarily detach from scam risks, step out of the chaos, and return to absolute clarity. 
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} blurStrength={10}>
            You are not stupid, and you are not beyond help. You were simply dragged out of your own rhythm. Now, pause. Stabilize. Slowly take back your breath, your attention, and your judgment. AIRNESS is here to help you find yourself again.
          </ScrollReveal>

          <div className="h-[40vh]" /> 

        </div>
      </div>
    </section>
  );
}