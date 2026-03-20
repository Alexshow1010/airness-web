"use client";

import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";

export default function MissionSection() {
  return (
    <NeuralBackground className="min-h-[70vh] flex items-center justify-center px-6 border-b border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center text-white flex flex-col items-center"
      >
        {/* 大標：清楚說明我們到底是幹嘛，我們是做什麼 */}
        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-wide">
          回息：<br/>
          <span className="text-[#4da6ff]">狀態切換與判斷權回復器。</span>
        </h1>
        
        {/* 長篇文字：定位差異與核心初衷 */}
        <div className="w-full text-left space-y-8 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md mb-12">
          <p className="text-lg md:text-xl opacity-80 leading-relaxed">
            這不是另一個政府宣導站。
          </p>
          <p className="text-lg md:text-xl opacity-80 leading-loose">
            資訊不夠，並不能阻止劫持。台灣NCC都有負責詐騙資訊宣導的業務，光是個二月就有46億被詐騙金額。塞再多資訊，很多時候不是幫助，而只是讓人更慌、更亂、更無法判斷。詐騙不是知不知道的問題，是那瞬間你能不能「說不」的問題。
          </p>
          
          <div className="border-l-4 border-[#ff4d4d] pl-6 py-2">
            <h3 className="text-xl font-bold mb-3 text-[#ff4d4d]">別人是在告訴你詐騙很多。你是在讓使用者的大腦重新接回來。</h3>
            <p className="text-lg opacity-80 leading-relaxed">
              政府站、宣導站、警語站，大多都在做「告知」、「提醒小心」。但真正人在被騙那一刻，根本不是不知道「要小心」。而是他被催促、被情緒勾住、大腦太快，來不及停。
            </p>
          </div>

          <p className="text-lg md:text-xl opacity-80 leading-loose">
            回息的核心價值，是幫你在最危險的那幾分鐘裡，<span className="text-[#ffaa00] font-bold">重新恢復一點點清醒、判斷與拒絕能力</span>。因為很多時候，人不是敗給詐騙有多高明，而是敗給那個「來不及停下來」的瞬間。而只要你能停下來，很多事就會開始不一樣。
          </p>
        </div>
      </motion.div>
    </NeuralBackground>
  );
}