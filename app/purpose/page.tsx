"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import ChromaGrid, { ChromaItem } from '../components/ChromaGrid';
import ActionSection from './ActionSection';
import OriginSection from './OriginSection';
import ScienceSection from './ScienceSection';
import RestorationSection from './RestorationSection';

export default function PurposePage() {
  const router = useRouter(); 
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const chapterItems: ChromaItem[] = [
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
    }
  ];

  const renderActiveChapter = () => {
    switch (activeChapter) {
      case 'action': return <ActionSection />;
      case 'origin': return <OriginSection />;
      case 'science': return <ScienceSection />;
      case 'restoration': return <RestorationSection />;
      default: return null;
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#02040a] relative">
      
      {!activeChapter && (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 relative">
          
          {/* 💥 裝上切換到英文版大廳的按鈕 */}
          <div className="absolute top-10 right-10 z-[9999]">
            <button
              onClick={() => router.push("/purpose-en")}
              className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white tracking-widest text-sm transition-colors cursor-pointer"
            >
              ENGLISH
            </button>
          </div>

          <div className="text-center mb-16 z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-4">
              回息解密檔案
            </h1>
            <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">
              選擇章節，深入理解大腦劫持現象
            </p>
          </div>
          
          <div className="w-full max-w-[750px] mx-auto">
            <ChromaGrid 
              items={chapterItems} 
              onItemClick={(id) => setActiveChapter(id)} 
            />
          </div>
        </div>
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