"use client";

import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";

export default function ImpactSection() {
  return (
    <NeuralBackground className="py-32 px-4 md:px-6 min-h-screen border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-white flex flex-col"
      >
        {/* 💥 大標題區：直接破題 */}
        <div className="mb-16 w-full border-b border-white/20 pb-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#ff4d4d] mb-8 tracking-wide leading-tight">
            被騙，不只是被騙而已
          </h2>
          <p className="text-2xl opacity-90 leading-relaxed font-medium">
            被騙之後，真正開始壞掉的是什麼？
          </p>
        </div>

        {/* 💥 核心長文：融合去重，刀刀見骨 */}
        <div className="w-full space-y-10 text-xl md:text-2xl leading-loose opacity-90 bg-black/40 p-8 md:p-14 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl tracking-wide">
          
          <p>
            很多人以為，被騙，就是少了一筆錢。痛是痛，但撐一下，想辦法補回來就好了。
          </p>
          <p className="text-3xl font-black text-[#ff4d4d]">
            不是。
          </p>
          <p>
            真正可怕的，從來都不是錢少掉那一下。而是<strong className="text-white">從你被騙的那一刻開始，後面很多壞事會一起醒來。</strong>
          </p>

          <p className="text-3xl font-bold text-[#ffaa00] mt-16 mb-8">
            1. 最先壞掉的，常常不是錢，是人自己
          </p>
          <p>
            被騙之後，很多人第一個反應不是報警，也不是求救。而是先把嘴巴閉起來。因為羞恥。因為丟臉。因為不想讓家人知道。
          </p>
          <p>
            這也是為什麼很多人不是倒在第一筆，而是倒在後面那幾步：想自己補、想翻回來、想先撐住，不讓事情爆開。可詐騙最狠的地方就在這裡。它不是拿走你一筆錢就走。它是把你推進一個洞裡，然後讓你自己開始拼命往下挖。
          </p>

          <p className="text-3xl font-bold text-[#ffaa00] mt-16 mb-8">
            2. 你明明是被害人，後面卻會活得像犯錯的人
          </p>
          <p>
            因為被騙之後，很多人開始過一種很髒、很窄、很喘不過氣的日子：要煩惱錢怎麼補。要煩惱家人怎麼交代。要煩惱別人怎麼看。要煩惱自己是不是從此就被這件事釘住了。
          </p>
          <p>
            那種日子，不是損失兩個字能帶過去的。那比較像是，生活突然被拖進地獄，而且地獄不是一天，是每天。
          </p>

          <div className="bg-[#ff4d4d]/10 p-8 rounded-xl my-10 border border-[#ff4d4d]/30">
            <p className="text-2xl font-bold text-white mb-4">
              3. 很多人不是從「壞」開始，是從「急」開始
            </p>
            <p className="text-xl leading-loose">
              不是每個後來變車手、變人頭帳戶的人，一開始都覺得自己在犯罪。很多人是先掉進缺錢、急用、想快點翻身的洞。一個高中生，家裡本來就擠、就苦、就想快點賺錢，結果被熟人一句話往下拉，最後不是「賺不到」而已，是被打、被抓、被關、放出來還要面對賠償，而那個洞，最後還是回到爸媽身上。
            </p>
            <p className="text-xl leading-loose mt-4">
              很多人不是想犯罪。只是太想補那個洞。太想快一點。結果最後，洞沒補起來，自己先掉進去。
            </p>
          </div>

          <p className="text-3xl font-bold text-[#4da6ff] mt-16 mb-8">
            4. 少年一掉下去，通常不是只毀一個人
          </p>
          <p>
            台灣高檢署公開提醒過：少年如果參與詐欺集團，不只可能被法院裁定收容，民事上還可能要賠償，父母也可能和未成年子女一起負連帶損害賠償責任。
          </p>
          <p>
            這種果很殘忍。因為它不是「孩子犯錯，孩子自己扛」這麼簡單。它常常是：原本就苦的家庭更苦。原本就在撐的父母更撐不住。原本只想賺點錢的少年，最後連案底、收容、賠償一起來。有些家庭本來就只差一口氣。詐騙不是把那口氣吹回來。是直接把最後那塊木板抽掉。
          </p>

          <p className="text-3xl font-bold text-white mt-16 mb-8">
            5. 當詐騙長成結構，它就不只是一個壞人
          </p>
          <p>
            東南亞這幾年的詐騙中心，已經是一整套工業化的結構。Reuters 的報導提到，柬埔寨被清剿的園區裡甚至留下假警局場景、腳本、目標檔案和防暴演練資料。
          </p>
          <p>
            你手機裡看到的，可能只是一句話。但那句話後面，不一定是一個人。很可能是一整套專門靠人的慌、人的窮、人的羞恥在運轉的機器。它吃的是人的「我先自己處理看看」。
          </p>
          
          <div className="my-12 border-l-4 border-white/30 pl-6 py-4 bg-white/5">
            <p className="italic text-white/80">
              就像台中豐原一家五口案，家屬認定遭以黃金投資等方式詐騙逾新台幣 1,536 萬元。案件最後不是只有金額，而是五條命。
            </p>
          </div>

          <p className="text-3xl font-bold text-[#ffaa00] mt-16 mb-8">
            6. 有些果不是立刻爆，是慢慢爛
          </p>
          <p>
            不是每個人都會立刻崩掉。很多人的果是慢慢發作的：失眠。焦慮。容易驚嚇。不敢接電話。看到陌生訊息就心跳加快。不信任任何人。對自己失去基本信心。
          </p>
          <p>
            英國 Which? 的研究提到，詐騙常常發生在受害者已經超出情緒承受窗口、特別疲累、壓力很大的時候。有些人不是被騙完當天就倒。是之後每一天都變得怪怪的。你表面還活著，但很多東西其實已經被拖歪了。
          </p>

          <p className="text-3xl font-bold text-white mt-16 mb-8">
            這就是為什麼，被騙不能只被當成一個防詐宣導問題。
          </p>
          <p>
            因為它不是「大家小心一點」就講完了。它是一件很重的事。它會拖垮家庭。會拖垮關係。會拖垮一個人的判斷、自尊、睡眠、日常。
          </p>

          <div className="mt-20 pt-16 border-t border-white/20">
            <p className="text-2xl font-bold mb-8 text-center">
              你現在最需要做的，反而很老土，也很直接：
            </p>
            
            <div className="text-6xl md:text-8xl font-black text-[#ff4d4d] tracking-widest animation-pulse-color my-12 text-center">
              <span className="special-color block mb-6">深呼吸。</span>
              <span className="special-color block mb-6">想清楚。</span>
              <span className="special-color block">拒絕。</span>
            </div>

            <p className="text-2xl text-center leading-loose">
              因為很多最壞的後果，不是從你被騙完才開始。<br/>
              而是在你<strong className="text-[#ffaa00]">差一點要答應的那一刻</strong>，就已經在門口等了。
            </p>
          </div>

        </div>

        {/* 💥 精選語錄區塊：獨立的高對比度方框 */}
        <div className="mt-24 w-full bg-black/80 border-2 border-[#ff4d4d]/40 rounded-3xl p-8 md:p-14 shadow-[0_0_30px_rgba(255,77,77,0.1)] relative overflow-hidden">
          {/* 裝飾性背景文字 */}
          <div className="absolute -right-10 -bottom-10 text-[150px] font-black text-white/[0.03] select-none pointer-events-none">
            RIPPLE
          </div>
          
          <h3 className="text-3xl font-black text-[#ff4d4d] mb-10 tracking-widest border-b border-[#ff4d4d]/30 pb-4 inline-block">
            詐騙的果，不會停在詐騙本身。
          </h3>
          
          <ul className="space-y-8 text-xl md:text-2xl font-medium tracking-wide opacity-90">
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>被騙最可怕的，不是你少了一筆錢，是你開始不敢說。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>人一羞恥，就想自己補；一想自己補，就最容易再掉一次。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>很多人不是從惡開始，是從窮、從急、從想救家裡開始。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>你以為你只是在接一份工作，對方其實是在幫你的人生寫案底。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>詐騙最狠的地方，不是騙走你，是逼你用後面的人生去擦前面那一筆血。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>你明明是被害人，後來卻要過得像一個犯了大錯的人。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>有些家庭不是被騙垮的，是被後面那串賠償、羞恥、爭吵和失眠慢慢磨垮的。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span>這不是一筆匯款而已，這是很多壞事排隊開始。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span className="text-[#4da6ff] font-bold">真正要拒絕的，不只是眼前這句話，是它後面整串本來要壓過來的東西。</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffaa00] mr-4 mt-1">▪</span>
              <span className="text-[#ff4d4d] font-black tracking-widest">你拒絕的不是一次機會，你拒絕的很可能是一整段本來會爛掉的人生。</span>
            </li>
          </ul>
        </div>

      </motion.div>
    </NeuralBackground>
  );
}