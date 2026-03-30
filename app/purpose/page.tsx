"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ChromaGrid, { ChromaItem } from '../components/ChromaGrid';

import ActionSection from './ActionSection';
import OriginSection from './OriginSection';
import ScienceSection from './ScienceSection';
import RestorationSection from './RestorationSection';
import ImpactSection from '../components/ImpactSection'; 
import NeuralBackground from '../components/NeuralBackground';
import PurposeAimSection from '../components/PurposeAimSection'; 
import ICASection from './ICASection';
import ScamEqualsSection from './ScamEqualsSection';
import BreathingMapSection from './BreathingMapSection';
// 💥 引入第九章
import AuthorsNoteSection from './AuthorsNoteSection';

export default function PurposePage() {
  const router = useRouter(); 
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const chapterItems: ChromaItem[] = [
    {
      id: 'purpose-aim',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', 
      title: '了解回息的目的',
      subtitle: '別人的宣導是資訊，這裡是你的大腦狀態切換介面。',
      handle: 'AIM / REBREATH',
      borderColor: '#4da6ff', 
      gradient: 'linear-gradient(145deg, #0d2a45, #000)'
    },
    {
      id: 'action',
      image: '/brains/red.png', 
      title: '第一章：真相篇',
      subtitle: '詐騙不是你笨，是大腦被接管了。',
      handle: '01 / ACTION',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(145deg, #450a0a, #000)'
    },
    {
      id: 'origin',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', 
      title: '第二章：起源篇',
      subtitle: '從傷口長出來的防線，幫人找回判斷力。',
      handle: '02 / ORIGIN',
      borderColor: '#9CA3AF',
      gradient: 'linear-gradient(210deg, #1f2937, #000)'
    },
    {
      id: 'science',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800', 
      title: '第三章：科學篇',
      subtitle: '杏仁核劫持的物理現場與自律神經。',
      handle: '03 / SCIENCE',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(165deg, #2e1065, #000)'
    },
    {
      id: 'restoration',
      image: '/brains/blue.png', 
      title: '第四章：修復篇',
      subtitle: '拆解詐騙五階段，按下神經系統停止鍵。',
      handle: '04 / RESTORE',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(195deg, #083344, #000)'
    },
    {
      id: 'impact',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=800', 
      title: '第五章：漣漪篇',
      subtitle: '齒輪轉動後的代價，從被害到加害的無盡漣漪。',
      handle: '05 / IMPACT',
      borderColor: '#ffaa00', 
      gradient: 'linear-gradient(145deg, #4a2e00, #000)'
    },
    {
      id: 'ica',
      image: '/ifcomeagian.png', 
      title: '第六章：如果那天我拒絕了',
      subtitle: '那一秒深呼吸，強行拉開命運的活栓。',
      handle: '06 / I.C.A',
      borderColor: '#10B981',
      gradient: 'linear-gradient(145deg, #064e3b, #000)'
    },
    {
      id: 'scam-equals',
      image: '/數位詐騙陰影笼罩專業人士.jpg', 
      title: '第七章：案例與盲區',
      subtitle: '當工程師、專業人士也被騙。不是不懂，是劇本太深。',
      handle: '07 / BLIND SPOTS',
      borderColor: '#F43F5E',
      gradient: 'linear-gradient(145deg, #4c0519, #000)'
    },
    {
      id: 'breathing-map',
      image: '/呼吸的種類.jpg', 
      title: '第八章：回息呼吸地圖',
      subtitle: '把呼吸這件事講清楚，自律神經與大腦狀態的切換介面。',
      handle: '08 / BREATHING MAP',
      borderColor: '#2DD4BF',
      gradient: 'linear-gradient(145deg, #0f3d3e, #000)'
    },
    // 💥 加入第九章卡片
    {
      id: 'authors-note',
      image: '/寫作的困境與混亂.jpg', 
      title: '第九章：作者的碎碎念',
      subtitle: '不是資訊不夠，是詐騙字典早就厚到能砸死人。',
      handle: '09 / AUTHOR',
      borderColor: '#F97316', // 暖橘色，象徵作者的憤怒與溫度
      gradient: 'linear-gradient(145deg, #431407, #000)'
    }
  ];

  const renderActiveChapter = () => {
    switch (activeChapter) {
      case 'purpose-aim': return <PurposeAimSection />;
      case 'action': return <ActionSection />;
      case 'origin': return <OriginSection />;
      case 'science': return <ScienceSection />;
      case 'restoration': return <RestorationSection />;
      case 'impact': return <ImpactSection />;
      case 'ica': return <ICASection />;
      case 'scam-equals': return <ScamEqualsSection />;
      case 'breathing-map': return <BreathingMapSection />;
      // 💥 渲染第九章
      case 'authors-note': return <AuthorsNoteSection />;
      default: return null;
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#02040a] relative">
      {!activeChapter && (
        <NeuralBackground className="min-h-screen w-full flex flex-col relative animation-fade-in">
          <div className="fixed top-10 right-10 z-[9999]">
            <button
              onClick={() => router.push("/purpose-en")}
              className="px-5 py-2 bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/30 rounded-full text-white tracking-widest text-sm transition-colors cursor-pointer shadow-lg"
            >
              ENGLISH
            </button>
          </div>

          <div className="text-center mb-16 mt-20 z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-4 uppercase">
              回息解密檔案
            </h1>
            <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">
              理解大腦劫持與命運連鎖，找回判斷主導權
            </p>
          </div>
          
          <div className="w-full max-w-[1050px] mx-auto pb-20 px-6">
            <ChromaGrid 
              items={chapterItems} 
              onItemClick={(id) => setActiveChapter(id)} 
            />
          </div>
        </NeuralBackground>
      )}

      {activeChapter && (
        <div className="w-full relative animation-fade-in">
          <div className="fixed top-6 left-6 z-[9999]">
            <button 
              onClick={() => setActiveChapter(null)}
              className="px-6 py-3 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-white font-medium tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span className="text-xl leading-none">←</span> 返回目錄
            </button>
          </div>
          {renderActiveChapter()}
        </div>
      )}
    </main>
  );
}