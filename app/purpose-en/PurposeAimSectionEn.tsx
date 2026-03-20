"use client";

import { motion } from "framer-motion";
import NeuralBackground from "../components/NeuralBackground";

export default function PurposeAimSectionEn() {
  return (
    <NeuralBackground className="py-32 px-6 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-white"
      >
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">
            The Purpose of AIRNESS:<br className="md:hidden" /><span className="text-[#4da6ff]">Why Information Overload Cannot Stop Hijacking?</span>
          </h2>
          <p className="text-xl opacity-80 leading-relaxed">
            This isn't another public service announcement. We are installing a "brake pad" directly into your brain.
          </p>
        </div>

        {/* Content Block 1 */}
        <div className="space-y-8 text-lg md:text-xl opacity-80 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <p>
            There is already more than enough anti-fraud information out there. Search the word "scam," and the first pages all look the same: the latest tricks, the total amount lost, the types of fraud, and how many were arrested recently.
          </p>
          <p>
            It's not that no one is doing this. People are, and they do it a lot. But the question is—with all this effort, why aren't the scams stopping? Because the real problem was never a lack of information. It's that in the few minutes when a person is rushed, threatened, and emotionally hooked, they have zero capacity to use that information.
          </p>
          <p>
            Scams aren't a simple test of "what you know." They intentionally mess up your mind first, forcing you to make decisions in the chaos. Cramming more information often doesn't help; it just leaves people more panicked, more confused, and less able to judge.
          </p>

          <div className="border-l-4 border-[#ff4d4d] pl-6 py-6 bg-[#ff4d4d]/10 rounded-r-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-[#ff4d4d]">What truly needs addressing is not the volume of data, but the state of the human.</h3>
            <p className="text-lg leading-relaxed mb-4">
              Even those in charge of public awareness, legal experts, and systemic regulators can be scammed in a weak moment. This alone proves: Information does not equal clarity. Knowing is not doing.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What we are missing is not another article telling you to "be careful." We need an interface that forces you to slow down in the heat of the moment, to see the contradictions, and to take back your right to judge. Because in a state of panic, you don't need more data. You need to STOP.
            </p>
            
            <div className="text-3xl md:text-4xl font-black tracking-widest animation-pulse-color">
              DEEP BREATH. THINK. REFUSE.
            </div>
          </div>

          <p>
            These three steps sound incredibly simple, but the real challenge is—can you execute them while being manipulated?
          </p>
        </div>

        {/* Content Block 2 */}
        <div className="space-y-8 text-lg md:text-xl opacity-80 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-16 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-4">What's truly terrifying about a scam isn't just the money.</h3>
          <p>
            What a scam destroys is never just the numbers in your bank account. It destroys a person's judgment, their trust, the order of their life, and sometimes, their entire existence. People are scammed into crushing debt. Families break apart. Victims become terrified of trusting anyone ever again. Some, after falling in, get dragged into a deeper cycle, transitioning from victims to cogs in the scam machine itself.
          </p>
          <p>
            This is why scams cannot simply be treated as an "awareness campaign" issue. It's not a mere cognitive error. It's a matter of life and death, something that ruins a lifetime.
          </p>
          <p>
            When something becomes this severe yet continues to replicate, expand, and evolve, it's no longer just an issue of single bad actors. It involves: <span className="text-[#4da6ff] font-semibold">gaps in platform moderation, the amplification of traffic algorithms, blind spots in law enforcement, structural profit margins</span>, and the human weaknesses most easily exploited under pressure.
          </p>
          <p>
            Over time, scams form a symbiotic structure. Like a computer virus and antivirus software—the virus won't disappear on its own. Unless the system fundamentally changes, it will only mutate and return. Therefore, the core solution shouldn't be chasing new tricks. It must return to the absolute fundamental: <strong className="text-white">How do we make people snap back to clarity and face the immediate manipulation intuitively?</strong>
          </p>
        </div>

        {/* Conclusion */}
        <div className="mt-12 text-center p-8 md:p-14 bg-[#ffaa00]/10 rounded-3xl border border-[#ffaa00]/30 w-full backdrop-blur-lg shadow-[0_0_40px_rgba(255,170,0,0.15)] flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What this site aims to do is not to be just another anti-fraud info hub.
          </h2>
          <p className="text-xl opacity-90 mb-6 leading-relaxed max-w-3xl">
            We are not here to repeat the tired phrase, "There are many scams, be careful," that everyone has already heard. What we truly aim to achieve is something far more direct:
          </p>
          <p className="text-2xl md:text-3xl font-black text-white mb-8 border-b-2 border-white/20 pb-6 inline-block">
            When you are about to be dragged away, we help you snap yourself back.
          </p>
          <p className="text-lg opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Not increasing fear, but reducing chaos. Not making you memorize facts, but helping you regain a shred of clarity, judgment, and the power to refuse in those most dangerous minutes. Often, people are not defeated by how clever the scam is, but by the moment they "didn't have time to stop." Once you manage to stop, everything changes.
          </p>
          
          <div className="text-4xl md:text-6xl lg:text-7xl font-black text-[#ffaa00] tracking-widest animation-pulse-color mt-4">
            <span className="special-color block md:inline mb-4 md:mb-0">BREATHE. </span>
            <span className="special-color block md:inline mb-4 md:mb-0">THINK. </span>
            <span className="special-color block md:inline">REFUSE.</span>
          </div>
        </div>

      </motion.div>
    </NeuralBackground>
  );
}