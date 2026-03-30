"use client";

import React from 'react';
import { motion } from "framer-motion";
import NeuralBackground from '../components/NeuralBackground';

export default function ScamEqualsSection() {
  return (
    <NeuralBackground className="py-32 px-6 min-h-screen w-full relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-white relative z-10"
      >
        
        {/* 標題區塊 */}
        <header className="mb-16 text-center border-b border-white/20 pb-8">
          <h2 className="text-sm tracking-[0.3em] text-gray-400 mb-4 uppercase">Chapter 07</h2>
          <h1 className="text-4xl md:text-5xl font-black tracking-widest leading-tight mb-6">
            第七章：案例與盲區
          </h1>
          <p className="text-xl md:text-2xl text-[#ff4d4d] font-medium leading-relaxed">
            當工程師、教授、專業人士也被騙：歐美高階詐騙，不是在騙不懂的人。
          </p>
        </header>

        {/* 內文區塊 1：開場白 */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <p>
            這幾年歐美的高階詐騙，早就不是大家想像中那種粗糙、低級、只會騙外行人的東西。它越來越像一套精密劇本：先借品牌、借權威、借流程，讓你覺得一切都很正常；再用時間壓力、熟悉感、想補回來的心態，把你一路往下拉。美國 FBI 的 2024 年網路犯罪報告顯示，全年通報損失已達 <strong className="text-white">166 億美元</strong>，其中損失最高的類別是 <strong className="text-[#4da6ff]">投資詐欺</strong>，尤其加密貨幣相關，超過 <strong className="text-[#4da6ff]">65 億美元</strong>。這不是邊角料，而是主戰場。
          </p>
          <p>
            更值得注意的是，這波詐騙打中的，很多不是「不懂網路的人」，而是本來就活在系統裡、靠專業吃飯、對自己判斷有信心的人。從軟體工程師、灣區科技工作者，到退休教授、正在轉職的技術人才，甚至只是收到一封看起來像 Google、Amazon、Meta 招募訊息的人，都可能被帶進去。Google 官方 2025 年的詐騙 advisory 直接把 <strong className="text-white">fake job opportunities</strong> 列為重點風險；Amazon 官方也公開提醒，冒用 Amazon 名義的招募詐騙正在持續發生。
          </p>
        </div>

        {/* 內文區塊 2：案例速覽 */}
        <div className="space-y-8 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4">
            案例速覽：這些人不是不懂，他們是被整套劇本吃進去
          </h3>
          
          <div className="space-y-8">
            <div className="border-l-4 border-[#4da6ff] pl-6 py-2">
              <h4 className="text-xl font-bold text-[#4da6ff] mb-3">第一個案例，是 30 歲的軟體工程師 Evan。</h4>
              <p className="text-gray-300">
                這不是鄉野傳說，而是美國國會聽證資料裡被點名的真實案例。Santa Clara 檢察官 Erin West 在 2024 年的書面證詞中提到，2022 年她們接觸到的第一起 pig butchering 案，就是一名 <strong className="text-white">30 歲軟體工程師</strong>。他原本工作穩定，也存了一筆未來的錢，後來在網路上遇到看似真誠的對象，被一路帶進投資詐騙，損失 <strong className="text-white">30 萬美元</strong>。West 也在同一份證詞裡提到，Santa Clara 的多名受害者在失去積蓄後出現自殺念頭，甚至有人因此住進精神科。這不是「笨」，這是整個人生節奏被拆掉。
              </p>
            </div>

            <div className="border-l-4 border-[#4da6ff] pl-6 py-2">
              <h4 className="text-xl font-bold text-[#4da6ff] mb-3">第二個案例，是灣區的軟體開發者 R。</h4>
              <p className="text-gray-300">
                ABC7 2022 年的報導寫得很清楚：她從 LinkedIn 被接觸，對方自稱是美國 Fortune 500 公司的技術主管，先用專業履歷和共同背景建立信任，再把對話移到 WhatsApp，最後誘導她進入假加密貨幣平台。R 先匯了幾筆小額，看到畫面上有獲利後，又把退休金 IRA 清空投入 <strong className="text-white">90 萬美元</strong>，之後再賣掉 <strong className="text-white">40 萬美元</strong> 的股票做「最後一次補倉」，總損失超過 <strong className="text-white">130 萬美元</strong>。這個案子最可怕的地方不是金額大，而是整個過程長得太像一個熟人幫你做資產配置。
              </p>
            </div>

            <div className="border-l-4 border-[#4da6ff] pl-6 py-2">
              <h4 className="text-xl font-bold text-[#4da6ff] mb-3">第三個案例，是一名愛爾蘭退休教授。</h4>
              <p className="text-gray-300">
                《Irish Times》2025 年的完整報導指出，這名 70 多歲的退休教授，起點只是 WhatsApp 裡一個看似可信的投資推薦。後來他被引到看似專業的金融網站與顧問系統裡，先投入存款，看到帳面上出現漂亮獲利，再被告知如果要把資金提出來，必須先變成「合格投資人」，而那意味著還要再投入更多錢。到最後，他不只把自己和妻子的積蓄全押進去，還為了「最後一步」去申請銀行貸款。公開文件顯示，他最後交出去的金額超過 <strong className="text-white">105 萬歐元</strong>。這種詐騙不是在騙一筆，它是在騙你相信：<strong className="text-white">只要再補一次，就能把前面全部拿回來。</strong>
              </p>
            </div>

            <div className="border-l-4 border-[#4da6ff] pl-6 py-2">
              <h4 className="text-xl font-bold text-[#4da6ff] mb-3">第四個案例，不是單純騙錢，而是直接借大公司名字切進公司內網。</h4>
              <p className="text-gray-300">
                ESET 2023 年揭露的一起案件中，北韓 Lazarus 集團假扮 <strong className="text-white">Meta recruiter</strong>，透過 LinkedIn 接觸西班牙一家航太公司的員工，並送出看似正常的 coding challenge。受害者在公司設備上下載並執行後，攻擊者成功進入企業網路，最終目的是網路間諜行動。這件事非常關鍵，因為它證明了：對科技圈的人來說，<strong className="text-white">Meta recruiter、LinkedIn、coding challenge、Hello World、Fibonacci</strong> 這些東西本來就像日常，所以一旦劇本夠像真的，反而更容易被下刀。
              </p>
            </div>

            <div className="border-l-4 border-[#4da6ff] pl-6 py-2">
              <h4 className="text-xl font-bold text-[#4da6ff] mb-3">第五個案例，不是單一受害者，而是一整類正在爆量的求職詐騙。</h4>
              <p className="text-gray-300">
                美國 FTC 在 2024 年的資料 spotlight 裡指出，<strong className="text-white">job scam 的通報損失從 2020 年的 9,000 萬美元，升到 2023 年的 2.86 億美元，而 2024 年光上半年就超過 2.2 億美元</strong>。其中推升速度最快的是所謂 task scams，也就是把假工作包裝成任務、升級、充錢解鎖的遊戲化陷阱。FTC 還指出，這類詐騙常用 WhatsApp 或簡訊接觸，讓你先拿到一點小甜頭，再逼你存更多錢進去，最後你以為自己是在賺佣金，其實是在不斷往黑洞裡灌錢。這一波不只是在騙待業者，也在騙想轉職、想多接案、想切進科技公司的人。
              </p>
            </div>

            <div className="border-l-4 border-[#4da6ff] pl-6 py-2">
              <h4 className="text-xl font-bold text-[#4da6ff] mb-3">第六個案例，是對開發者工作流本身的反利用。</h4>
              <p className="text-gray-300">
                Microsoft 2026 年公開的研究顯示，一個名為 <strong className="text-white">Contagious Interview</strong> 的行動，自 2022 年底起就持續利用假面試流程，鎖定 <strong className="text-white">enterprise solution providers、媒體與通訊公司裡的軟體開發者</strong>。做法不是寄一封醜到爆的 phishing mail，而是完整模擬 recruiter 接觸、技術交流、作業指派、repo 下載、npm package 執行。攻擊者偽裝成加密貨幣交易公司或 AI 公司，把惡意程式埋進 GitHub、GitLab、Bitbucket 和 npm 套件，等受害者自己把門打開。這種打法可怕的地方就在於：它不是從工程師不熟的地方下手，而是從工程師最熟的地方下手。
              </p>
            </div>
          </div>
        </div>

        {/* 內文區塊 3：背後的共通點 */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4">
            這些案例背後，其實是同一件事
          </h3>
          <p className="mb-6">
            把上面幾個案例攤開來看，你會發現它們表面上很不一樣：有的是戀愛投資，有的是假 recruiter，有的是假面試，有的是 WhatsApp 群組，有的是品牌冒用。但真正相同的，不是工具，而是<strong className="text-white">切入點</strong>。
          </p>
          
          <div className="space-y-6">
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">第一個切入點，叫做 熟悉感。</strong> 
              工程師會覺得 recruiter、repo、assignment、技術主管、投資 dashboard 都不陌生；教授會覺得金融網站、顧問、資產配置、認證流程都不是完全看不懂；正在轉職的人更容易覺得 Google Careers、Amazon recruiter、Meta 面試邀請這些東西本來就會出現在自己生活裡。熟悉感最大的問題不是讓人放鬆，而是讓人自動補完——你會以為自己早就看懂了。Google 官方把假工作機會列為明確風險，Amazon 也公開提醒 recruitment fraud 會冒用公司 logo、品牌圖像與高階主管名義；這代表連公司自己都知道，品牌信任已經成了騙子的工具。
            </p>
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">第二個切入點，叫做 時間壓力。</strong> 
              2025 年一篇研究直接指出，時間壓力會顯著提升人對網路詐騙的易感性，尤其是那種訴求「避免損失」的詐騙。也就是說，當你不是在想「我要不要賺更多」，而是在想「我現在不做會不會出事、會不會拿不回來、會不會錯過、會不會被淘汰」時，你更容易忽略 red flags。投資詐騙裡的「再補一筆才能解鎖」，求職詐騙裡的「趕快完成 onboarding／assessment」，本質上都在吃同一件事：<strong className="text-white">逼你在來不及慢想的時候做下一步。</strong>
            </p>
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">第三個切入點，叫做 心理上的確定性飢渴。</strong> 
              FINRA Foundation 2025 年的研究很值得注意。它不是在說「聰明的人比較不會被騙」，剛好相反，研究發現用 generalized self-efficacy 測到的那種「我很有能力」感，和詐騙受害並沒有穩定關聯。真正更有關的，是一種偏好：<strong className="text-white">你是不是很急著把複雜局面收束成一個乾淨答案。</strong> 研究指出，較高的 dichotomous thinking，也就是非黑即白、過度依賴確定性的思考方式，和更高的詐騙受害率有關；相反地，能接受世界有時公平、有時不公平，願意 case-by-case 去判斷的 <strong className="text-white">dialectical thinking</strong>，和較低的受害率有關。講白一點：很多人不是輸在智力，而是輸在太想快點相信一個完整、漂亮、能讓自己安心的解釋。
            </p>
            <p>
              <strong className="text-xl text-[#ffaa00] block mb-2">第四個切入點，叫做 情境脆弱性。</strong> 
              社會工程研究早就指出，這類攻擊本質上是心理攻擊，它利用的是人類的認知功能、注意力、壓力與自動反應。研究者明講，很多社會工程訊息的設計，就是為了觸發下意識、快速、幾乎不經慢速推理的反應，並且把惡意包裝成合法請求。這也解釋了為什麼高專業者反而有時更危險：不是因為他們比較差，而是因為他們的工作本來就要依賴快速判斷、流程信任、工具默契與角色責任。當攻擊長得夠像日常，這些本來讓人高效的東西，就會被反過來利用。
            </p>
          </div>
        </div>

        {/* 內文區塊 4：高學歷漏洞 */}
        <div className="space-y-6 text-lg opacity-90 leading-loose bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md mb-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4">
            為什麼「高學歷、高專業」反而會留下漏洞？
          </h3>
          <p className="mb-4">因為高專業常常帶來三種副作用。</p>
          
          <div className="space-y-6">
            <p>
              <strong className="text-xl text-[#ff4d4d] block mb-2">第一，高功能的人更習慣自己解決問題。</strong> 
              這讓他們在第一時間更不容易停下來求證，更容易想著「我先把這一步處理好」。問題是，詐騙最喜歡的就是這種人：不愛麻煩別人、相信自己能看懂、覺得自己只要再看一下就能確認真假。當騙局的設計夠像真的，這種自我依靠就會變成陷阱。這也是為什麼 Evan、R、退休教授這些案例裡，真正致命的不是第一步，而是後面那幾次「我再補一下就能把它救回來」。
            </p>
            <p>
              <strong className="text-xl text-[#ff4d4d] block mb-2">第二，高專業的人更容易相信熟悉流程本身就是安全感。</strong> 
              面試流程像真的、投資平台像真的、對方 profile 像真的、網站介面像真的、數字長得像真的，這些對一般人來說可能是加分，對科技與專業圈的人來說卻是致命點。因為他們不是第一次看這些東西，於是更容易把「像真的」誤認成「值得相信」。Meta recruiter 假 coding challenge、Contagious Interview、Google Careers 釣魚鏈，都是沿著這條線在運作。
            </p>
            <p>
              <strong className="text-xl text-[#ff4d4d] block mb-2">第三，高成就感會讓人更難承認自己已經進局。</strong> 
              一個人越習慣自己是會判斷的人，就越不容易在中途承認：「不對，我可能被帶進去了。」這不是虛榮那麼簡單，而是一種身份保護。你會更傾向替眼前的矛盾找理由，替平台找解釋，替對方補動機，因為一旦承認自己被騙，就等於否定了自己原本最依賴的那套判斷力。FINRA 的研究把這件事點得很準：人一旦太依賴確定性，就更容易在遇到衝突訊號時，選擇把紅旗解釋掉，而不是停下來重估整個局。
            </p>
          </div>
        </div>

        {/* 結語區塊 */}
        <div className="mt-12 text-center p-8 md:p-14 bg-[#ff4d4d]/10 rounded-3xl border border-[#ff4d4d]/30 w-full backdrop-blur-lg shadow-[0_0_40px_rgba(255,77,77,0.15)] flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ff4d4d]">
            真正殘酷的地方是：這不是只騙「錢」
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-3xl text-left">
            這些高階詐騙最陰的地方，從來不只是金額。它會順手把你的退休、婚姻、履歷、公司環境、心理安全感、甚至你對自己判斷力的信任，一起扯走。Erin West 的證詞裡講得非常直白：Santa Clara 的受害者有人失去一生積蓄後出現自殺念頭，有人住進精神科，有人兩年後還在傷害裡出不來。這也是為什麼這些案子不該被寫成「某某人很會賺錢卻還上當」的笑話。那種寫法太輕了。真正發生的，是一個本來功能很完整的人，被整台機器拆掉。
          </p>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mt-8 mb-6 tracking-widest border-b-2 border-white/20 pb-6 inline-block">
            結語：它不是在騙不懂的人，它是在拆懂的人。
          </h2>
          
          <p className="text-lg opacity-80 mb-6 leading-relaxed max-w-3xl text-left">
            它知道怎麼對軟體工程師說話，知道怎麼把教授拉進群組，知道怎麼借 Meta、Google、Amazon 的名字做出一條看起來乾淨的路，知道怎麼把面試、作業、repo、交易平台、dashboard、提款限制、升級任務，全部包成「正常流程」。當一個人覺得自己只是在照流程走，他最可能忘記問的那句，就是：
          </p>
          <p className="text-2xl font-bold text-white block my-6 text-center">
            這整條路，到底是誰鋪給我的？
          </p>
          <p className="text-lg opacity-80 leading-relaxed max-w-3xl text-left">
            而很多人真正輸掉的，也不是因為知識不夠。而是因為那一刻太急、太想確認、太想保住什麼、太想把事情處理完，最後把下一步也交出去了。這才是高階詐騙最厲害、也最讓人心寒的地方。
          </p>
        </div>

        {/* SEO 與參考文獻區塊 */}
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-500 bg-black/40 p-6 rounded-2xl">
          <h4 className="text-gray-400 font-bold mb-4 uppercase tracking-widest">資料來源與分析依據</h4>
          <p className="mb-4 leading-relaxed">
            本文主要依據 FBI 2024 年網路犯罪年報、FTC 2024 年 job scam 資料 spotlight、Google 2025 年詐騙 advisory、Amazon 官方 recruitment fraud 提醒、Microsoft 2026 年 Contagious Interview 研究、ESET 對假 Meta recruiter 攻擊的調查、Erin West 向美國國會提交的書面證詞，以及《Irish Times》與 ABC7 對實際受害者的完整報導；心理與行為分析則以社會工程認知研究、時間壓力實驗研究與 FINRA Foundation 的 scam victimization 研究作為依據。對於公開來源沒有揭露的學歷、具體雇主或個資，本文一律不替資料補空白。
          </p>
          <ul className="space-y-2 break-all">
            <li>[1] FBI Releases Annual Internet Crime Report: https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report</li>
            <li>[2] Google’s November 2025 frauds and scams advisory: https://blog.google/innovation-and-ai/technology/safety-security/fraud-and-scams-advisory-november-2025/</li>
            <li>[3] ABC7 San Francisco - Silicon Valley crypto pig butchering fraud: https://abc7news.com/post/bay-area-cryptocurrency-scam-silicon-valley-crypto-pig-butchering-fraud/12080375/</li>
            <li>[4] The Irish Times - How an Irish professor lost his €1m retirement nest egg: https://www.irishtimes.com/crime-law/2025/11/22/from-250-investment-to-1m-retirement-nest-egg-how-an-irish-professor-lost-it-all-to-scammers/</li>
            <li>[5] ESET - Lazarus luring employees with trojanized coding challenges: https://www.welivesecurity.com/en/eset-research/lazarus-luring-employees-trojanized-coding-challenges-case-spanish-aerospace-company/</li>
            <li>[6] FTC - gamified job scams drive record losses: https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2024/12/paying-get-paid-gamified-job-scams-drive-record-losses</li>
            <li>[7] Microsoft Security Blog - Contagious Interview Malware: https://www.microsoft.com/en-us/security/blog/2026/03/11/contagious-interview-malware-delivered-through-fake-developer-job-interviews/</li>
            <li>[8] PMC - The impact of time pressure on susceptibility to online fraud: https://pmc.ncbi.nlm.nih.gov/articles/PMC12053487/</li>
            <li>[9] PMC - Human Cognition Through the Lens of Social Engineering Cyberattacks: https://pmc.ncbi.nlm.nih.gov/articles/PMC7554349/</li>
          </ul>
        </div>

      </motion.div>
    </NeuralBackground>
  );
}