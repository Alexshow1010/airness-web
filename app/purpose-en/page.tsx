"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import ChromaGrid, { ChromaItem } from '../components/ChromaGrid';

// 💥 修正點 1：這裡的引入路徑全部加上 En，對應你資料夾裡正確的檔名
import ActionSectionEn from './ActionSectionEn';
import OriginSectionEn from './OriginSectionEn';
import ScienceSectionEn from './ScienceSectionEn';
import RestorationSectionEn from './RestorationSectionEn';

export default function PurposeEnPage() {
  const router = useRouter(); 
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const chapterItems: ChromaItem[] = [
    {
      id: 'action',
      image: '/brains/red.png', 
      title: 'Chapter 1: The Truth',
      subtitle: 'It’s not foolishness; it’s a hijacked brain.',
      handle: '01 / ACTION',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(145deg, #450a0a, #000)'
    },
    {
      id: 'origin',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', 
      title: 'Chapter 2: The Origin',
      subtitle: 'A defense line grown from the wound.',
      handle: '02 / ORIGIN',
      borderColor: '#9CA3AF',
      gradient: 'linear-gradient(210deg, #1f2937, #000)'
    },
    {
      id: 'science',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800', 
      title: 'Chapter 3: The Science',
      subtitle: 'The physical reality of an Amygdala Hijack.',
      handle: '03 / SCIENCE',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(165deg, #2e1065, #000)'
    },
    {
      id: 'restoration',
      image: '/brains/blue.png', 
      title: 'Chapter 4: Restoration',
      subtitle: 'Deconstructing the 5 stages of scams.',
      handle: '04 / RESTORE',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(195deg, #083344, #000)'
    }
  ];

  // 💥 修正點 2：這裡渲染的組件也要加上 En
  const renderActiveChapter = () => {
    switch (activeChapter) {
      case 'action': return <ActionSectionEn />;
      case 'origin': return <OriginSectionEn />;
      case 'science': return <ScienceSectionEn />;
      case 'restoration': return <RestorationSectionEn />;
      default: return null;
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#02040a] relative">
      
      {!activeChapter && (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 relative">
          
          <div className="absolute top-10 right-10 z-50">
            <button
              onClick={() => router.push("/purpose")}
              className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white tracking-widest text-sm transition-colors cursor-pointer"
            >
              中文
            </button>
          </div>

          <div className="text-center mb-16 z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-4 uppercase">
              The AIRNESS Files
            </h1>
            <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">
              Select a chapter to decode the brain hijack
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
              <span className="text-xl leading-none">←</span> Back to Menu
            </button>
          </div>

          {renderActiveChapter()}
          
        </div>
      )}

    </main>
  );
}