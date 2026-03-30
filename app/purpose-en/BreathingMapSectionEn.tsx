"use client";

import React from 'react';
import { motion } from "framer-motion";
import NeuralBackground from '../components/NeuralBackground';

export default function BreathingMapSectionEn() {
  return (
    <NeuralBackground className="py-32 px-6 min-h-screen w-full relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-white relative z-10"
      >
        
        {/* Header */}
        <header className="mb-16 text-center border-b border-white/20 pb-8">
          <h2 className="text-sm tracking-[0.3em] text-gray-400 mb-4 uppercase">Chapter 08</h2>
          <h1 className="text-4xl md:text-5xl font-black tracking-widest leading-tight mb-6 uppercase">
            AIRNESS Breathing Map
          </h1>
          <p className="text-xl md:text-2xl text-[#ff4d4d] font-medium leading-relaxed">
            Clarifying the act of breathing. Unpacking the actual interface between autonomic nerves and the brain, grounded in science.
          </p>
        </header>

        {/* Content Block 1: Intro */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <p>
            Other people's campaigns are just information; this is your brain's state-switching interface. We won't list fancy names here, but rather organize an understandable, science-based breathing map.
          </p>
          <p>
            If you lay out all breathing methods, there are many names, many schools, and a lot of packaging. But the underlying principles are not that chaotic. Most breathing methods fundamentally touch upon these few things: **how the autonomic nervous system switches, how carbon dioxide changes, whether the diaphragm is working properly, whether attention has returned to the body, and whether the breathing rhythm has restabilized.** One of the most solid research conclusions currently is that <strong className="text-white">slow and regular breathing</strong>, especially close to **5–6 breaths** per minute, is often associated with higher Heart Rate Variability (HRV) and better baroreceptor reflex; while some practices favoring long exhalations are particularly effective at pulling the body back from hyperarousal to a relatively stable state.
          </p>
          <p>
            This piece aims to achieve one simple thing: **organize the rhythms, usages, potential impacts, and underlying principles of different breathing methods into a comprehensible map.** Some methods are suitable for first aid during anxiety, panic, and scams; some are suitable for long-term stress stability and pre-sleep slowdown; some are more helpful for mechanical breathing function; and some favor stimulation, awakening, or are not even suitable for many people to practice casually. If these differences are not clarified, breathing methods can easily be written off as mystical folklore.
          </p>
        </div>

        {/* Content Block 2: What Does Breathing Truly Change */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase">What Does Breathing Truly Change?</h3>
          
          <div className="space-y-6">
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">1. It touches your autonomic nervous system</strong> 
              The reason slow breathing often makes people feel "stable" is not a myth. Studies show that when breathing slows down to close to 6 times per minute, respiratory sinus arrhythmia and the baroreceptor reflex become more pronounced, and cardiovascular rhythms are more likely to enter a state close to resonance. Simply put, **heartbeat, blood pressure, and breathing start to work on roughly the same beat**. This is why slow breathing is often used for stress management, HRV biofeedback, and emotional regulation.
            </p>
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">2. It touches your carbon dioxide levels</strong> 
              Not every breath should be as deep as possible. If breathing is too fast, too deep, or too prolonged, CO₂ may be blown off too much, showing a tendency towards hypocapnia, subsequently causing dizziness, numbness in hands, heart palpitations, blurred vision, or even fainting. This is why many high-ventilation breathwork methods, while powerful, cannot be considered a daily tool suitable for everyone. Reviews of high-ventilation practices state that these methods involve sympathetic activation, changes in cerebral blood flow, a tendency towards alkalosis, and neuroexcitability changes, meaning their safety boundaries are significantly narrower than general slow breathing.
            </p>
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">3. It touches your attention and emotions</strong> 
              Breathing is not just ventilation; it is also **a way to pull attention back to the body**. Diaphragmatic breathing studies show that after training, it can improve sustained attention, reduce negative emotions, and lower cortisol responses after stress. This means the effects of breathing methods are not just about making you "less nervous," but potentially allowing your attention, feelings, and physiological load to slowly restabilize together.
            </p>
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">4. It also touches your breathing mechanics</strong> 
              For some people, emotional problems don't appear first; rather, **the breathing pattern itself becomes chaotic**: too shallow, too fast, only using the upper chest, not exhaling completely, or feeling the chest tighten with each inhalation. Methods like diaphragmatic breathing and pursed-lip breathing work not only on the nerves but by actually changing the inhalation/exhalation mode, exhalation time, small airway pressure, and respiratory muscle division. Pursed-lip breathing, in particular, relates in COPD and asthma studies to reducing breathing frequency, reducing dynamic hyperinflation, and improving oxygenation and activity tolerance.
            </p>
          </div>
        </div>

        {/* Content Block 3: Stabilizing Breathing */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase">I. Stabilizing Breathing: Pulling You Back</h3>
          
          <div className="space-y-4 border-l-4 border-[#4da6ff] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#4da6ff] mb-2 uppercase">1) Slow Breathing / Resonance Breathing / Coherent Breathing</h4>
            <p className="text-base text-gray-300">
              The most common approach is to pace breathing at <strong className="text-white">5–6 breaths per minute</strong>, such as inhaling for 5 seconds and exhaling for 5 seconds, or inhaling for 4 and exhaling for 6. The most stable benefit of these methods is that they don't rely on stimulation, but on **rhythm formatting**. Studies have long indicated that around this frequency is most conducive to better HRV and baroreflex performance.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> High stress, pre-sleep, pre-work, pre-meeting, when emotions easily drift, or as a daily foundational practice.</p>
            <p className="text-sm text-gray-400"><strong>Core Principle:</strong> Not just inhaling more air, but adjusting breathing rhythms to a speed that the cardiovascular system can easily accommodate.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#4da6ff] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#4da6ff] mb-2 uppercase">2) Extended Exhalation</h4>
            <p className="text-base text-gray-300">
              If you only remember one thing, let it be this: **Many people aren't incapable of inhaling; they are incapable of exhaling well.** Inhaling for 4, exhaling for 6; or inhaling for 4, exhaling for 8; any version where "exhalation is longer than inhalation" fundamentally helps downshift the system. In Stanford’s studies, practices favoring long exhalations (like cyclic sighing) actually performed better than mindfulness meditation in emotional improvement and breathing rate reduction.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Feeling rushed, high heart rate, chest tightness, or wishing to take a step back from physiological high alert.</p>
            <p className="text-sm text-gray-400"><strong>Core Principle:</strong> The exhalation phase inherently correlates with heart rate reduction and system convergence.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#4da6ff] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#4da6ff] mb-2 uppercase">3) Physiological Sighing / Cyclic Sighing</h4>
            <p className="text-base text-gray-300">
              This approach is simple: **Inhale once, then take a small secondary sip of air, then slowly exhale for a long time.** It's not a mystical technique, but a structured approach to the "sigh" that the body naturally uses to reset breathing. In a 2023 randomized study, 5 minutes of daily cyclic sighing performed exceptionally well in improving mood and reducing physiological arousal.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> During a scam, on the edge of panic, about to spiral out of control, or when you need to immediately interrupt a downward slide.</p>
            <p className="text-sm text-gray-400"><strong>Core Principle:</strong> It re-expands collapsed lung alveoli while using a long exhalation to pull down excessively high arousal.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#4da6ff] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#4da6ff] mb-2 uppercase">4) Box Breathing</h4>
            <p className="text-base text-gray-300">
              The most common pattern is 4-4-4-4: Inhale 4 seconds, hold 4 seconds, exhale 4 seconds, hold 4 seconds. While its research volume isn't as thick as slow breathing, its clear rhythm makes it highly suitable for **capturing the beat**. Instead of a "healing myth," it's a simple tactical stabilization method.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> High mental noise, pre-work, pre-public speaking, or needing to pull attention back quickly.</p>
            <p className="text-sm text-gray-400"><strong>Core Principle:</strong> A clear rhythm gives attention a place to land and prevents breathing from running completely chaotic.</p>
          </div>
        </div>

        {/* Content Block 4: Functional Breathing */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase">II. Functional Breathing: Fixing the Mechanics</h3>
          
          <div className="space-y-4 border-l-4 border-[#06B6D4] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#06B6D4] mb-2 uppercase">5) Diaphragmatic Breathing / Abdominal Breathing</h4>
            <p className="text-base text-gray-300">
              This is often talked to death, but it's the most worthy of proper practice. The true focus is not whether the belly expands, but **whether breathing has returned to diaphragmatic dominance, rather than relying on the chest and shoulders**. Studies show it correlates with better attention and lower cortisol.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Shallow breathing, constant shoulder shrugging, panting after speaking, or chest tightness under stress.</p>
            <p className="text-sm text-gray-400"><strong>Core Principle:</strong> Pulling back the primary respiratory muscle to reduce shallow-fast breathing and upper chest compensation.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#06B6D4] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#06B6D4] mb-2 uppercase">6) Pursed-Lip Breathing</h4>
            <p className="text-base text-gray-300">
              This is a trick that people who pant heavily will feel deeply. The approach is nasal inhalation, slightly pursed lips, and slowly exhaling the air. Clinically, this connects most with COPD and shortness of breath because it produces a slight positive end-expiratory pressure, preventing small airways from collapsing too early.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Easily winded during activity, exhalation feels stuck, or wanting to gasp for air when panting.</p>
            <p className="text-sm text-gray-400"><strong>Core Principle:</strong> Not inhaling more, but making sure you **exhale more completely**.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#06B6D4] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#06B6D4] mb-2 uppercase">7) Buteyko Method</h4>
            <p className="text-base text-gray-300">
              Buteyko is often misunderstood as a "breath-holding method," but it is actually closer to **reducing excessive hyperventilation, bringing breathing volume down to match physiological needs**. It essentially addresses one question: **Are you frequently inhaling too much, too urgently, and too forcefully?**
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Tendency to hyperventilate, respiratory anxiety, always feeling like you can't get enough air, yet feeling worse after taking huge gasps.</p>
            <p className="text-sm text-gray-400"><strong>Core Principle:</strong> Reducing unnecessary large-volume breathing to prevent CO₂ from dropping too low.</p>
          </div>
        </div>

        {/* Content Block 5: Traditional Breathing */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase">III. Traditional Breathing: Structured Rhythmic Practices</h3>
          
          <div className="space-y-4 border-l-4 border-[#9CA3AF] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#9CA3AF] mb-2 uppercase">8) Alternate Nostril Breathing / Nadi Shodhana</h4>
            <p className="text-base text-gray-300">
              The characteristic of this method is **switching**. Inhale through one nostril, exhale through the other, and alternate. Research generally leans positive regarding cardiopulmonary parameters and autonomic regulation. Its advantage lies in combining rhythm, nasal breathing, and attentional switching.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Wishing to quiet down, but needing more than just counting beats.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#9CA3AF] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#9CA3AF] mb-2 uppercase">9) Bhramari / Humming Bee Breath</h4>
            <p className="text-base text-gray-300">
              After inhalation, you exhale with a steady humming sound. It combines **slow breathing, long exhalation, vocal vibration, and nasal breathing**. Studies indicate humming significantly increases nasal nitric oxide release and can positively affect HRV and stress indicators.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Pre-sleep, restlessness, noisy mind, or wanting to slow down breathing without it feeling too dry.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#9CA3AF] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#9CA3AF] mb-2 uppercase">10) Liuzijue / Six Healing Sounds</h4>
            <p className="text-base text-gray-300">
              This involves using specific pronunciations to accompany slow exhalations and movements. The advantage is that for people unaccustomed to purely static breathing, **sound and movement help ground the breath more easily.**
            </p>
          </div>

          <div className="space-y-4 border-l-4 border-[#9CA3AF] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#9CA3AF] mb-2 uppercase">11) Yijinjing & 12) Baduanjin</h4>
            <p className="text-base text-gray-300">
              These shouldn't be viewed purely as breathing methods. They are integration systems of **slow movement, posture control, breathing cooperation, and attentional focus**. The impact comes from the entire rhythmic movement system working together, proving that the body often needs to slow down first before the breath can truly follow.
            </p>
          </div>
        </div>

        {/* Content Block 6: Stimulating Breathing */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase">IV. Stimulating Breathing: Know When to Use Them</h3>
          
          <div className="space-y-4 border-l-4 border-[#EF4444] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#EF4444] mb-2 uppercase">13) Wim Hof Method</h4>
            <p className="text-base text-gray-300">
              This method is highly popularized but often misused. It is not a typical relaxing breath, but **hyperventilation + breath-holding + cold exposure**. It forcibly stimulates the system through gas changes rather than soothing it via rhythm, meaning the risk of dizziness or fainting is much higher.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Physiological stimulation training. Not for daily stabilization or scam-induced panic.</p>
          </div>

          <div className="space-y-4 border-l-4 border-[#EF4444] pl-6 py-2 mb-8">
            <h4 className="text-xl font-bold text-[#EF4444] mb-2 uppercase">14) Kapalabhati & 15) Bhastrika</h4>
            <p className="text-base text-gray-300">
              These involve rapid, active, abdominal-driven exhalations. They affect autonomic nerves and brainwaves, leaning heavily towards **awakening and stimulation** rather than soothing.
            </p>
            <p className="text-sm text-gray-400"><strong>Suitable Contexts:</strong> Daytime refreshment or structured yoga practices. Unsuitable as a first-line response to severe anxiety.</p>
          </div>
        </div>

        {/* Content Block 7: How to Choose */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase">V. How to Choose for Different Purposes?</h3>
          
          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">1. "During a scam, mind chaotic, heart racing"</h4>
            <p className="text-base text-gray-300">Avoid stimulating types. Use: Cyclic Sighing, Extended Exhalation (Inhale 4/Exhale 6), or Box Breathing.</p>
            <p className="text-sm text-gray-400"><strong>Goal:</strong> You don't need magic; you just need to prevent the next step from happening.</p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">2. "High daily stress, autonomic nerves easily disrupted"</h4>
            <p className="text-base text-gray-300">Prioritize: Slow/Resonance Breathing (5-6 breaths/min), Diaphragmatic Breathing, Bhramari.</p>
            <p className="text-sm text-gray-400"><strong>Goal:</strong> Daily 5-10 minute foundation to build baseline stability.</p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">3. "Shallow breathing, shoulder shrugging, feeling air-starved"</h4>
            <p className="text-base text-gray-300">Prioritize: Diaphragmatic Breathing, Buteyko concepts, Extended Exhalation.</p>
            <p className="text-sm text-gray-400"><strong>Goal:</strong> Fix the mechanical breathing pattern that is actively working against you.</p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">4. "Panting easily on exertion, COPD, unsmooth exhalation"</h4>
            <p className="text-base text-gray-300">Prioritize: Pursed-Lip Breathing, Diaphragmatic Breathing, Liuzijue.</p>
            <p className="text-sm text-gray-400"><strong>Goal:</strong> Ensure air is effectively exhaled to prevent air trapping in the lungs.</p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">5. "Pre-sleep slowdown, noisy mind"</h4>
            <p className="text-base text-gray-300">Prioritize: Extended Exhalation, Slow Breathing, Bhramari, Baduanjin.</p>
            <p className="text-sm text-gray-400"><strong>Goal:</strong> Convergence and down-shifting the nervous system.</p>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">6. "Daytime refreshment, seeking stimulation"</h4>
            <p className="text-base text-gray-300">Only then consider: Kapalabhati, Bhastrika, Wim Hof.</p>
            <p className="text-sm text-gray-400"><strong>Goal:</strong> Conditional stimulation with strict safety boundaries.</p>
          </div>
        </div>

        {/* Content Block 8: Safety & Conclusion */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase">VI. Safety Boundaries & Final Thoughts</h3>
          
          <div className="space-y-4 mb-8">
            <p className="text-base text-gray-300">
              If you are a beginner, the NCCIH warning is direct: **Do not start with forceful breathing.** This includes fast, high-ventilation practices. Furthermore, high-ventilation exercises should never be done in water, while driving, standing, or bathing, as dizziness and fainting are serious risks.
            </p>
            <p className="text-base text-gray-300">
              Ultimately, knowing more breathing methods doesn't make you superior. What matters is knowing what you are trying to achieve. When trying to pull yourself back from chaos, use long exhalations and cyclic sighs. When fixing your mechanics, use diaphragmatic and pursed-lip breathing.
            </p>
            <p className="text-base text-gray-300 font-bold text-[#ffaa00]">
              Most of the time, the greatest value of breathing isn't turning you into a superhuman. It's ensuring that in your most chaotic moments, you can still pull yourself back, just a little bit.
            </p>
          </div>
        </div>

        {/* SEO & References */}
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-500 bg-black/40 p-6 rounded-2xl">
          <h4 className="text-gray-400 font-bold mb-4 uppercase tracking-widest">Sources & Scientific Basis</h4>
          <p className="mb-4 leading-relaxed">
            This article is grounded in experimental research, reviews, and safety guidelines from PMC, ScienceDirect, NCBI, Cell, Cochrane, and NCCIH. While these methods may originate from ancient traditions, this piece structures them as rhythmic tools comprehensible to modern science, avoiding mystical terminology. Any breathing practice involves changes in carbon dioxide, autonomic regulation, and psychological states.
          </p>
          
          {/* 💥 19條完整原文獻歸位 💥 */}
          <ul className="space-y-2 break-all">
            <li>[1] The physiological effects of slow breathing: https://pmc.ncbi.nlm.nih.gov/articles/PMC5709795/?utm_source=chatgpt.com</li>
            <li>[2] High ventilation breathwork practices: https://www.sciencedirect.com/science/article/pii/S0149763423004220?utm_source=chatgpt.com</li>
            <li>[3] Effect of Diaphragmatic Breathing: https://pmc.ncbi.nlm.nih.gov/articles/PMC5455070/?utm_source=chatgpt.com</li>
            <li>[4] Pursed-lip Breathing - StatPearls: https://www.ncbi.nlm.nih.gov/books/NBK545289/?utm_source=chatgpt.com</li>
            <li>[5] Brief structured respiration practices (Cyclic Sighing): https://www.cell.com/cell-reports-medecine/fulltext/S2666-3791(22)00474-8?utm_source=chatgpt.com</li>
            <li>[6] Breathing Practices for Stress: https://pmc.ncbi.nlm.nih.gov/articles/PMC10741869/?utm_source=chatgpt.com</li>
            <li>[7] Cochrane - Breathing exercises for asthma: https://www.cochrane.org/evidence/CD001277_breathing-exercises-asthma?utm_source=chatgpt.com</li>
            <li>[8] Natural Therapies Review 2024 – Buteyko: https://www.health.gov.au/sites/default/files/2025-03/natural-therapies-review-2024-buteyko-evidence-evaluation.pdf?utm_source=chatgpt.com</li>
            <li>[9] Effects of Alternate Nostril Breathing: https://pmc.ncbi.nlm.nih.gov/articles/PMC8378456/?utm_source=chatgpt.com</li>
            <li>[10] Induction of nitric oxide via humming: https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0301268&utm_source=chatgpt.com</li>
            <li>[11] Bhramari Pranayama: https://pmc.ncbi.nlm.nih.gov/articles/PMC8377171/?utm_source=chatgpt.com</li>
            <li>[12] Liuzijue in stable COPD: https://pmc.ncbi.nlm.nih.gov/articles/PMC7557061/?utm_source=chatgpt.com</li>
            <li>[13] Efficacy of Yijinjing: https://pmc.ncbi.nlm.nih.gov/articles/PMC11997817/?utm_source=chatgpt.com</li>
            <li>[14] Effects of Yi Jin Jing: https://europepmc.org/article/med/39526251?utm_source=chatgpt.com</li>
            <li>[15] Baduanjin Qigong: https://pmc.ncbi.nlm.nih.gov/articles/PMC5359459/?utm_source=chatgpt.com</li>
            <li>[16] Kapalabhati autonomic changes: https://pmc.ncbi.nlm.nih.gov/articles/PMC8963645/?utm_source=chatgpt.com</li>
            <li>[17] Effect of Bhastrika Pranayama: https://pmc.ncbi.nlm.nih.gov/articles/PMC11953524/?utm_source=chatgpt.com</li>
            <li>[18] Effects of Various Prāṇāyāma: https://pmc.ncbi.nlm.nih.gov/articles/PMC5382821/?utm_source=chatgpt.com</li>
            <li>[19] NCCIH - Yoga Effectiveness and Safety: https://www.nccih.nih.gov/health/yoga-effectiveness-and-safety?utm_source=chatgpt.com</li>
          </ul>
        </div>

      </motion.div>
    </NeuralBackground>
  );
}