"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- 動態定義 ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

// --- ICA Cases Database (EN) 💥 已同步最新 8 張不破圖的抽象材質網址 ---
const icaCases = [
  {
    title: "US Romance Scam: Severing the Crime Chain",
    reality: "81-year-old Glenda started as a romance scam victim, later dragged into becoming a money mule.<br/><br/>Once her brain was hijacked, she was pulled deep into the abyss.<br/>She eventually pleaded guilty to two federal charges in 2021.<br/>She didn't set out to commit a crime; she was used by an online lover, ultimately handing herself over to a criminal syndicate.",
    ica: "If at that moment, instead of trusting that 'online lover,' she had **refused** to open an account, **refused** to receive and transfer funds.<br/><br/>The path cut off wouldn't just be the money flow, but her own journey to indictment.<br/>The pain and heartbreak might remain, but the criminal liability and guilty pleas would never have begun.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "UK Cross-Border Phone Scam: Refusing to be a Puppet",
    reality: "A single phone call, and the victim 'lost everything.'<br/><br/>At least three elderly victims were drained of their life savings, two even losing their homes.<br/>Worse yet, some victims were later coerced into helping scam others.<br/>Police likened this to modern slavery—people pushed into becoming someone else's tool.",
    ica: "If at that moment, instead of following the authoritative voice step by step.<br/><br/>He had just hung up, sought third-party verification, and **forced the plug open**.<br/>The path cut off wouldn't just be 'getting scammed,' but the endless abyss of losing a home, continuous manipulation, and being dragged into scamming the next victim.",
    image: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "UK Crypto Scam: Stopping the Final Mortgage",
    reality: "Trapped in a crypto scam, he was told 'you need to pay more to withdraw your funds.'<br/><br/>To fill the hole, he took out loans and remortgaged his house.<br/>His brain hijacked by panic and sunk costs, he didn't even believe the bank's warnings.<br/>In the end, he even lost his marriage.",
    ica: "If at that moment, instead of paying that 'final unlock fee.'<br/><br/>He had stopped right there, **taken a deep breath, and refused** to throw more money in.<br/>The initial loss might still be there, but the downward spiral of 'gambling the whole family to fix a hole' could have been forcibly stopped.",
    image: "/UKCryptoScam.png"
  },
  {
    title: "UK Money Mule Scam: The Blacklist Price of Quick Cash",
    reality: "Young people thought they just landed a commission-based job, or were just helping a friend withdraw cash twice.<br/><br/>Later, their accounts were frozen. Years later, they found themselves on a National Fraud Database, blocked from even opening new accounts.<br/>During that time, they couldn't eat, couldn't sleep, living in constant fear.",
    ica: "If at that moment, they hadn't lent out their accounts or treated 'quick cash' as a part-time gig.<br/><br/>By just **pulling the plug** at the first step, the path cut off would be frozen bank accounts, financial blacklists, and long-term credit damage.<br/>Refuse the first step, and the filth that follows can never touch you.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Australia Sextortion Case: Releasing the Corner of Panic",
    reality: "A 17-year-old boy was backed into a corner by panic after facing image-based extortion (sextortion).<br/>The only note left in his pocket read: 'I made a huge mistake. I'm sorry.'<br/><br/>Over the past decade, many young people whose lives hadn't even begun chose to end them because they swallowed their momentary shame alone.",
    ica: "If at that moment, he had refused to keep responding, refused to pay, refused to let the threats dictate his next move.<br/><br/>Even if he just spoke to one more person, the path most likely loosened would be the dead end of **treating a momentary panic as the end of an entire life**.<br/>As long as you don't surrender completely in that moment, there's always another exit later.",
    image: "/AustraliaSextortion.png"
  },
  {
    title: "Thailand Family Tragedy: Extreme Family Collapse",
    reality: "A husband bore massive debt after co-signing for a friend.<br/>The wife tried to help by taking loans to fill the gap, only to be scammed.<br/><br/>Under extreme debt and despair, the husband suffered a mental breakdown, killed his wife and two young sons, and attempted suicide.<br/>The scam didn't just swallow one person; it dragged an entire family into the abyss.",
    ica: "If at that moment, the family hadn't believed 'one more loan will fix the previous hole.'<br/><br/>Instead, they **forced a stop**, refusing to bet their hope on another opaque opportunity.<br/>The path blocked wouldn't just be new debt, but the trajectory of an entire family being dragged into extreme collapse.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Korea 'Jeonse' Deposit Scam: The Dead End Pushed to the Limit",
    reality: "To afford Seoul's exorbitant housing deposits, victims faced a systematic scam.<br/><br/>Deposits couldn't be recovered, houses were auctioned off, yet the loan pressure remained.<br/>This wasn't typical greed, but normal life pushed step-by-step into long-term debt and despair.<br/>Multiple young victims chose death under this extreme pressure.",
    ica: "If at that moment, there were earlier systemic checks, or a stronger personal stop-loss mechanism.<br/><br/>If someone had plainly said, 'If you can't get the deposit back, you still have to carry the loan.'<br/>The path most likely loosened would be the dead end that **pushes people until they can't go on**.<br/>This isn't blaming the victim, but seeing the divergence point at the cliff's edge.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Cambodia Job Scam: The Cause & Effect of the Scam Factory",
    reality: "Thinking they were looking for a job, they walked into an abandoned scam park holding tens of thousands of people.<br/><br/>Inside were fake banks, fake police stations, fake uniforms, and scripts.<br/>Many were lured in by fake jobs, then forced into scamming others under near-coercive conditions.<br/>From job seekers, they became controlled, exploited parts of a criminal machine.",
    ica: "If at that moment, he wasn't rushing to grab 'high overseas pay, room and board included' as an apparent exit.<br/><br/>But paused, verified, and **refused** to send himself over first.<br/>The path cut off wouldn't just be the scam job itself, but an entire life trapped inside a criminal machine.",
    image: "/CambodiaJobScam.png"
  }
];

export default function ICASectionEn() {
  return (
    <section className="w-full min-h-screen bg-[#06030d] text-white p-6 md:p-10 relative overflow-hidden font-sans">
      
      {/* 💥 Removed the top-left floating AIM / ICA tag to prevent overlapping with the back button */}
      
      {/* ================= CHAPTER HEADER & INTRO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[800px] mx-auto text-center mt-28 mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-6 uppercase leading-tight">
          Chapter 6: If I Had Refused
        </h1>
        
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent mb-10"></div>
        
        <div className="text-gray-400 text-lg md:text-xl leading-relaxed tracking-wide space-y-5 text-left md:text-center px-4 font-normal">
          <p className="text-white font-bold tracking-widest">ICA is not about fantasizing you can always escape unscathed.</p>
          <p>It only forces you to look at that critical divergence:<br/>If the same thing happens again, can I refuse at that moment, and stop that machine from starting.</p>
          <p>Because many of the worst consequences don't start after the event is over.<br/>They've already lined up the moment you almost believed, almost wired the money, almost thought 'I'll just try it this once.'</p>
          <p className="text-sm opacity-60 uppercase tracking-widest pt-5">
            ( Compilation of Cause & Effect Parallel Universe Observations from Global Real Cases )
          </p>
        </div>
      </motion.div>

      {/* ================= Case List (EN) ================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {icaCases.map((icaCase, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full rounded-2xl p-0.5 bg-gradient-to-br from-[#EF4444]/20 via-[#10B981]/10 to-black/30 border border-white/5 shadow-inner backdrop-blur-sm group overflow-hidden"
          >
            <div className="w-full p-6 space-y-6 h-full flex flex-col">
              
              <div className="w-full flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                  <img src={icaCase.image} alt={icaCase.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white tracking-widest flex-1 leading-tight text-center sm:text-left">
                  {icaCase.title}
                </h2>
              </div>
              
              <div className="w-full h-px bg-white/10"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                
                {/* Destiny A: Reality Fruit (Dark/Dark Red) */}
                <div className="space-y-4 rounded-xl p-5 border border-[#EF4444]/10 bg-black/40 shadow-xl relative overflow-hidden group/a">
                  <div className="absolute inset-0 bg-red-950/10 opacity-30 group-hover/a:opacity-100 transition-opacity duration-500 -z-10 [mask-image:radial-gradient(circle_at_center,white,transparent)]"></div>
                  <h3 className="text-sm uppercase tracking-widest text-[#EF4444] font-black">
                    Destiny A / Reality Fruit
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed tracking-wide font-normal" dangerouslySetInnerHTML={{ __html: icaCase.reality }}></p>
                </div>
                
                {/* Destiny B: ICA Divergence (Bright/Emerald Green) */}
                <div className="space-y-4 rounded-xl p-5 border border-[#10B981]/20 bg-[#10B981]/5 shadow-2xl transition-all group/b overflow-hidden">
                  <div className="absolute inset-0 bg-[#10B981]/5 opacity-100 -z-10 [mask-image:radial-gradient(circle_at_center,white,transparent)] pulse-slow"></div>
                  <h3 className="text-sm uppercase tracking-widest text-[#10B981] font-black flex items-center gap-2">
                    Destiny B / ICA Divergence <span className="text-lg">🌿</span>
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed tracking-wide font-normal" dangerouslySetInnerHTML={{ __html: icaCase.ica }}></p>
                </div>
                
              </div>
              
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* ================= FINAL PULL THE PLUG BUTTON ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full text-center mt-32 mb-20"
      >
        <div className="text-gray-500 text-sm tracking-widest uppercase mb-6">
          Refusing isn't just about this step, but the entire chain of consequences about to crush you.
        </div>
        <button className="px-10 py-5 bg-[#10B981]/10 hover:bg-[#10B981]/20 backdrop-blur-md border-2 border-[#10B981]/30 rounded-full font-black text-[#10B981] tracking-widest text-xl transition-all cursor-pointer shadow-inner pulse">
          BREATHE. THINK. REFUSE.
        </button>
      </motion.div>

    </section>
  );
}