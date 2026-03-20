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

// --- ICA 案例數據庫 (修復所有破圖，改用高穩定度抽象材質圖) ---
const icaCases = [
  {
    title: "美國戀愛洗錢案：切斷犯罪鏈條",
    reality: "81 歲的 Glenda 先是戀愛詐騙受害者，後來被拖成洗錢騾子（money mule）。<br/><br/>大腦被劫持後，她一路被拖進去。<br/>最後在 2021 年對兩項聯邦罪名認罪。<br/>她不是一開始就想犯罪，而是被網路情人利用，最終把自己送進了犯罪鏈條。",
    ica: "如果那一刻，她不是繼續相信那個「網路情人」，而是**拒絕**幫忙開戶、**拒絕**代收代轉。<br/><br/>那條路後面最可能被切斷的，不只是金流，還有她自己被起訴的那一段。<br/>痛可能還在，失戀感也還在，但刑責與認罪這一層，根本不會開始。",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600" // 金流暗影
  },
  {
    title: "英國跨國電話詐騙：拒絕成為傀儡",
    reality: "一通電話，受害者「失去了一切」。<br/><br/>至少三名老年受害者被騙走畢生積蓄，兩人連住處都失去。<br/>更狠的是，部分受害者後來被脅迫去協助詐騙其他人。<br/>警方將這種情況比作現代奴役，人被推成了別人的工具。",
    ica: "如果那一刻，他不是照著電話裡的權威口氣一步一步做。<br/><br/>而是直接掛斷、找第三方查證、**強行拉開活栓**。<br/>那後面最可能被切掉的，不只是「被騙」，而是失去住處、被繼續操控、甚至被拖去幫忙騙下一個人的無盡深淵。",
    image: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=600" // 數位通訊干擾
  },
  {
    title: "英國加密貨幣詐騙：擋下最後的抵押",
    reality: "陷入加密貨幣詐騙後，他被騙說「要再付更多才能把錢拿出來」。<br/><br/>為了補洞，他去貸款、把房子再抵押。<br/>大腦被恐慌與沉沒成本劫持，連銀行的提醒都不信。<br/>最後，他連婚姻都失去了。",
    ica: "如果那一刻，他不是再去補那一筆「最後的解鎖費」。<br/><br/>而是停在那裡，**深呼吸，拒絕**再把錢丟進去。<br/>第一筆損失也許還在，但那種「為了補洞，把整個家也一起押進去」的走向，很可能被強行擋下。",
    image: "/UKCryptoScam.png"
  },
  {
    title: "英國打工洗錢案：快錢的黑名單代價",
    reality: "年輕人以為只是接到一份可以賺佣金的工作，或者只是幫朋友提領兩次錢。<br/><br/>後來帳戶被凍結，幾年後才發現自己被列進全國欺詐資料庫，連開新帳戶都被擋。<br/>那段時間吃不下、睡不著，整天都在恐懼中度過。",
    ica: "如果那一刻，他們不是把帳戶借出去、把「快錢」當打工。<br/><br/>只要在第一步**拉開活栓**，後面最可能被切掉的就是銀行帳戶凍結、金融黑名單、長期信用受損的那段。<br/>拒絕第一步，後面那些髒東西根本碰不到你。",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600" // 矩陣亂碼
  },
  {
    title: "澳洲性勒索案：鬆開恐慌的死角",
    reality: "17 歲少年在遭遇影像型勒索（sextortion）後，被恐慌逼到了死角。<br/>他口袋裡留下的字條只有一句：「我犯了一個大錯。對不起。」<br/><br/>過去十年，許多連人生都還沒開始的年輕人，因為把一時的羞恥吞下去，最終選擇了結束生命。",
    ica: "如果那一刻，他拒絕繼續回應、拒絕再付、拒絕讓威脅指揮他下一步。<br/><br/>哪怕只多對一個人開口，那條路最可能被鬆開的，就是**把一時的恐慌當成整個人生結束**的那種死角。<br/>只要那一刻沒有完全交出去，後面就還有別的出口。",
    image: "/AustraliaSextortion.png"
  },
  {
    title: "泰國滅門悲劇：家庭的極端崩壞",
    reality: "丈夫因替朋友作保背負巨債。<br/>妻子為了幫忙去貸款補洞，卻又遭遇詐騙。<br/><br/>在極端的債務與絕望壓力下，丈夫精神崩潰，殺死了妻子和兩個年幼兒子，再試圖自殺。<br/>詐騙不只吞了一個人，而是把一整個家拖進深淵。",
    ica: "如果那一刻，這個家庭不是相信「再借一筆就能把前面的洞補回來」。<br/><br/>而是**強行停止**，拒絕再把希望押在下一個不透明的機會上。<br/>後面最可能被擋住的，不只是新的債，而是整個家庭一起被拖進極端崩壞的走向。",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=600" // 碎裂的玻璃
  },
  {
    title: "韓國「全貰」押金案：被逼到極限的死角",
    reality: "為了首爾高昂的租屋押金，受害者們遭遇了系統性的詐騙。<br/><br/>押金拿不回來、房屋被拍賣、貸款壓力卻還在。<br/>這不是典型的貪婪，而是正常生活被一步一步逼成長期債務與絕望。<br/>連續多名年輕受害者在極限壓力下選擇了死亡。",
    ica: "如果那一刻，制度上有更早的查核，或者個人有更強的停損機制。<br/><br/>有人先把「押金收不回來你還得扛貸款」這件事講白。<br/>那後面最可能被鬆開的，是那條**把人逼到走不下去**的死路。<br/>這不是怪受害者，而是看見斷崖邊的分岔點。",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" // 冰冷抽象的水泥建築
  },
  {
    title: "柬埔寨打工騙局：走進詐騙工廠的因果",
    reality: "以為是在找工作，結果走進的是一座規模上萬人的廢棄詐騙園區。<br/><br/>裡面有假銀行、假警局、假制服與腳本。<br/>很多人是被假工作騙進去，隨後在近乎強迫的條件下從事詐騙。<br/>從求職者，變成了被控制、被利用的犯罪機器零件。",
    ica: "如果那一刻，他不是急著抓住「海外高薪、包吃包住」這種看似出口的東西。<br/><br/>而是先停一下、查一下，**拒絕**先把自己送過去。<br/>那後面最可能被切掉的，就不只是詐騙工作本身，而是整條被困在犯罪機器裡的人生。",
    image: "/CambodiaJobScam.png"
  }
];

export default function ICASection() {
  return (
    <section className="w-full min-h-screen bg-[#06030d] text-white p-6 md:p-10 relative overflow-hidden font-sans">
      
      {/* 💥 已移除會擋住返回按鈕的固定標籤 */}
      
      {/* ================= 篇章標題 & 引言 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[800px] mx-auto text-center mt-28 mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-6 leading-tight">
          第六章：如果那天我拒絕了
        </h1>
        
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent mb-10"></div>
        
        <div className="text-gray-400 text-lg md:text-xl leading-relaxed tracking-wide space-y-5 text-left md:text-center px-4 font-normal">
          <p className="text-white font-bold tracking-widest">ICA 不是要你幻想自己一定能全身而退。</p>
          <p>它只是逼你去看那個最關鍵的分岔：<br/>如果同樣的事再來一次，我能不能在那一刻先拒絕，讓後面那台機器不要啟動。</p>
          <p>因為很多最壞的後果，都不是從事情發生完才開始。<br/>而是在你差一點相信、差一點匯款、差一點覺得「這次先試試看」的那一刻，就已經排隊站好了。</p>
          <p className="text-sm opacity-60 uppercase tracking-widest pt-5">
            ( 以下收集自世界各國真實案例的因果分歧觀測 )
          </p>
        </div>
      </motion.div>

      {/* ================= 案例清單 ================= */}
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
              
              {/* 案例大標與圖片封面 */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                  <img src={icaCase.image} alt={icaCase.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white tracking-widest flex-1 leading-tight text-center sm:text-left">
                  {icaCase.title}
                </h2>
              </div>
              
              <div className="w-full h-px bg-white/10"></div>

              {/* 命運分歧對比 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                
                {/* 命運 A：現實的果 (深色/暗紅) */}
                <div className="space-y-4 rounded-xl p-5 border border-[#EF4444]/10 bg-black/40 shadow-xl relative overflow-hidden group/a">
                  <div className="absolute inset-0 bg-red-950/10 opacity-30 group-hover/a:opacity-100 transition-opacity duration-500 -z-10 [mask-image:radial-gradient(circle_at_center,white,transparent)]"></div>
                  <h3 className="text-sm uppercase tracking-widest text-[#EF4444] font-black">
                    命運 A / 現實果
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed tracking-wide font-normal" dangerouslySetInnerHTML={{ __html: icaCase.reality }}></p>
                </div>
                
                {/* 命運 B：ICA 分歧 (明亮/翡翠綠) */}
                <div className="space-y-4 rounded-xl p-5 border border-[#10B981]/20 bg-[#10B981]/5 shadow-2xl transition-all group/b overflow-hidden">
                  <div className="absolute inset-0 bg-[#10B981]/5 opacity-100 -z-10 [mask-image:radial-gradient(circle_at_center,white,transparent)] pulse-slow"></div>
                  <h3 className="text-sm uppercase tracking-widest text-[#10B981] font-black flex items-center gap-2">
                    命運 B / ICA 分歧 <span className="text-lg">🌿</span>
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed tracking-wide font-normal" dangerouslySetInnerHTML={{ __html: icaCase.ica }}></p>
                </div>
                
              </div>
              
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* ================= 頁尾強行停止按鈕 ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full text-center mt-32 mb-20"
      >
        <div className="text-gray-500 text-sm tracking-widest uppercase mb-6">
          拒絕的不只是眼前這一步，而是後面整串本來要壓過來的東西。
        </div>
        <button className="px-10 py-5 bg-[#10B981]/10 hover:bg-[#10B981]/20 backdrop-blur-md border-2 border-[#10B981]/30 rounded-full font-black text-[#10B981] tracking-widest text-xl transition-all cursor-pointer shadow-inner pulse">
          深呼吸。想清楚。拒絕。
        </button>
      </motion.div>

    </section>
  );
}