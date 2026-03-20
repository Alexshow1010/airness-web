"use client";

import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";

export default function PurposeAimSection() {
  return (
    <NeuralBackground className="py-32 px-6 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-white"
      >
        {/* 標題區 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">
            回息的目的：<br className="md:hidden" /><span className="text-[#4da6ff]">為什麼資訊飽和，並不能阻止劫持？</span>
          </h2>
          <p className="text-xl opacity-80 leading-relaxed">
            我們不是在做政令宣導，我們是在你的大腦裡裝上一個「煞車皮」。
          </p>
        </div>

        {/* 長文內容區塊一：資訊的無效性與狀態切換 */}
        <div className="space-y-8 text-lg md:text-xl opacity-80 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <p>
            詐騙資訊早就夠多了，真正缺的不是更多資訊。只要上網搜尋「詐騙」兩個字，前幾頁幾乎都是同一種內容：最新詐騙手法、詐騙總金額、詐騙有多少種類、最近又抓了多少人。
          </p>
          <p>
            這些資訊不是沒有人做。相反地，早就有人一直在做，而且做得很多。但問題是——做了這麼多，為什麼詐騙還是沒有少？因為真正的問題，從來都不是資訊不夠。而是人在被催促、被恐嚇、被情緒勾住的那幾分鐘裡，根本沒有能力把那些資訊拿來用。
          </p>
          <p>
            詐騙不是單純的「你知不知道」。而是對方先讓你亂掉，再讓你在混亂裡做決定。所以塞再多資訊，很多時候不是幫助，而只是讓人更慌、更亂、更無法判斷。
          </p>

          {/* 核心引言：狀態大於知識 */}
          <div className="border-l-4 border-[#ff4d4d] pl-6 py-6 bg-[#ff4d4d]/10 rounded-r-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-[#ff4d4d]">真正要處理的，不是資訊量，而是人的狀態。</h3>
            <p className="text-lg leading-relaxed mb-4">
              連負責宣導的人、懂法律的人、懂制度的人，都可能在某個瞬間被騙。這件事本身就已經說明：資訊，不等於清醒。知道，不等於做得到。
            </p>
            <p className="text-lg leading-relaxed mb-6">
              真正缺少的，不是再一篇教你小心的文章，而是一個能讓人當下慢下來、看見矛盾、重新拿回判斷權的介面。因為人在恐慌時，最需要的不是更多資料。而是先停下來。
            </p>
            
            {/* 💥 中段重點標色：深呼吸 */}
            <div className="text-3xl md:text-4xl font-black tracking-widest animation-pulse-color">
              深呼吸。思考。拒絕。
            </div>
          </div>

          <p>
            這三件事聽起來很簡單，但真正困難的是——在被操控的當下，還能不能做到。
          </p>
        </div>

        {/* 長文內容區塊二：共生結構與毀滅 */}
        <div className="space-y-8 text-lg md:text-xl opacity-80 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-16 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-4">詐騙真正可怕的，不只是騙走錢</h3>
          <p>
            詐騙會毀掉的，從來不只是帳戶裡的數字。它會毀掉一個人的判斷感、信任感、生活秩序，有時甚至是一整段人生。有人被騙到債務纏身；有人被騙到家庭破裂；有人被騙到不敢再相信任何人；也有人在掉下去之後，被捲入另一個更深的循環裡，最後從受害者變成鏈條上的一部分。
          </p>
          <p>
            這也是為什麼，詐騙不能只被當成「資訊宣導」來處理。因為這不是單純的認知問題。這是會要人命、會毀人一輩子的問題。
          </p>
          <p>
            如果一件事已經嚴重到這種程度，卻仍然可以不斷複製、不斷擴張、不斷更新手法，那它就不是單一騙子的問題而已。它背後往往還牽涉到：<span className="text-[#4da6ff] font-semibold">平台審核的落差、流量機制的放大、執法與追查的斷點、結構性的利益縫隙</span>，以及人性在壓力下最容易被切入的弱點。
          </p>
          <p>
            久而久之，詐騙就會變成一種近乎共生的結構。就像電腦病毒和防毒軟體之間的關係一樣——病毒不會自己消失，系統若沒有真正改變，它只會一直變形、一直回來。所以真正的核心，不該只是一直追著新手法跑。而是要回到最根本的一件事：<strong className="text-white">怎麼讓人重新清醒，重新直觀地面對眼前的操控。</strong>
          </p>
        </div>

        {/* 總結：行動呼籲與巨大標色/變色動畫標記 */}
        <div className="mt-12 text-center p-8 md:p-14 bg-[#ffaa00]/10 rounded-3xl border border-[#ffaa00]/30 w-full backdrop-blur-lg shadow-[0_0_40px_rgba(255,170,0,0.15)] flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            這個網站想做的，不是再多一個防詐資訊站
          </h2>
          <p className="text-xl opacity-90 mb-6 leading-relaxed max-w-3xl">
            這裡不是要再重複一次「現在詐騙很多、大家要小心」這種所有人都已經聽過的話。這裡真正想做的，是另一件更直接的事：
          </p>
          <p className="text-2xl md:text-3xl font-black text-white mb-8 border-b-2 border-white/20 pb-6 inline-block">
            當你快被拉走的時候，先幫你把自己接回來。
          </p>
          <p className="text-lg opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto">
            不是增加恐懼，而是降低混亂。不是叫你背更多知識，而是幫你在最危險的那幾分鐘裡，重新恢復一點點清醒、判斷與拒絕能力。因為很多時候，人不是敗給詐騙有多高明，而是敗給那個「來不及停下來」的瞬間。而只要你能停下來，很多事就會開始不一樣。
          </p>
          
          {/* 💥 尾段巨大重點標色：深呼吸 */}
          <div className="text-4xl md:text-7xl font-black text-[#ffaa00] tracking-widest animation-pulse-color mt-4">
            <span className="special-color block md:inline mb-4 md:mb-0">深呼吸。</span>
            <span className="special-color block md:inline mb-4 md:mb-0">思考。</span>
            <span className="special-color block md:inline">拒絕。</span>
          </div>
        </div>

      </motion.div>
    </NeuralBackground>
  );
}