"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ChromaGrid, { ChromaItem } from '../components/ChromaGrid';

import ActionSectionEn from './ActionSectionEn';
import OriginSectionEn from './OriginSectionEn';
import ScienceSectionEn from './ScienceSectionEn';
import RestorationSectionEn from './RestorationSectionEn';
import PurposeAimSectionEn from './PurposeAimSectionEn';
import ImpactSectionEn from './ImpactSectionEn';
import ICASectionEn from './ICASectionEn';
import ScamEqualsSectionEn from './ScamEqualsSectionEn';
import BreathingMapSectionEn from './BreathingMapSectionEn';
// 💥 引入第九章英文版
import AuthorsNoteSectionEn from './AuthorsNoteSectionEn';
import NeuralBackground from '../components/NeuralBackground';

export default function PurposeEnPage() {
  const router = useRouter();
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const chapterItems: ChromaItem[] = [
    {
      id: 'purpose-aim',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', 
      title: 'The Purpose',
      subtitle: 'Not just info, but a brain state-switching interface.',
      handle: 'AIM / REBREATH',
      borderColor: '#4da6ff',
      gradient: 'linear-gradient(145deg, #0d2a45, #000)'
    },
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
    },
    {
      id: 'impact',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=800', 
      title: 'Chapter 5: The Ripple Effect',
      subtitle: 'The endless consequences of the turning gears.',
      handle: '05 / IMPACT',
      borderColor: '#ffaa00', 
      gradient: 'linear-gradient(145deg, #4a2e00, #000)'
    },
   {
      id: 'ica',
      image: '/ifcomeagian.png', 
      title: 'Chapter 6: If I Had Refused',
      subtitle: 'A deep breath to pull the plug on fate.',
      handle: '06 / I.C.A',
      borderColor: '#10B981',
      gradient: 'linear-gradient(145deg, #064e3b, #000)'
    },
    {
      id: 'scam-equals',
      image: '/數位詐騙陰影笼罩專業人士.jpg', 
      title: 'Chapter 7: Cases & Blind Spots',
      subtitle: 'When professionals get scammed. It\'s the script, not ignorance.',
      handle: '07 / BLIND SPOTS',
      borderColor: '#F43F5E',
      gradient: 'linear-gradient(145deg, #4c0519, #000)'
    },
    {
      id: 'breathing-map',
      image: '/呼吸的種類.jpg', 
      title: 'Chapter 8: Breathing Map',
      subtitle: 'The interface for autonomic nerves and brain states.',
      handle: '08 / BREATHING MAP',
      borderColor: '#2DD4BF',
      gradient: 'linear-gradient(145deg, #0f3d3e, #000)'
    },
    // 💥 加入第九章卡片
    {
      id: 'authors-note',
      image: '/寫作的困境與混亂.jpg', 
      title: 'Chapter 9: Author\'s Note',
      subtitle: 'The scam dictionary is thick enough to crush anyone.',
      handle: '09 / AUTHOR',
      borderColor: '#F97316',
      gradient: 'linear-gradient(145deg, #431407, #000)'
    }
  ];

  const renderActiveChapter = () => {
    switch (activeChapter) {
      case 'purpose-aim': return <PurposeAimSectionEn />;
      case 'action': return <ActionSectionEn />;
      case 'origin': return <OriginSectionEn />;
      case 'science': return <ScienceSectionEn />;
      case 'restoration': return <RestorationSectionEn />;
      case 'impact': return <ImpactSectionEn />;
      case 'ica': return <ICASectionEn />;
      case 'scam-equals': return <ScamEqualsSectionEn />;
      case 'breathing-map': return <BreathingMapSectionEn />;
      // 💥 渲染第九章
      case 'authors-note': return <AuthorsNoteSectionEn />;
      default: return null;
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#02040a] relative">
      {!activeChapter && (
        <NeuralBackground className="min-h-screen w-full flex flex-col relative animation-fade-in">
          <div className="fixed top-10 right-10 z-[9999]">
            <button
              onClick={() => router.push("/purpose")}
              className="px-5 py-2 bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/30 rounded-full text-white tracking-widest text-sm transition-colors cursor-pointer shadow-lg"
            >
              中文
            </button>
          </div>

          <div className="text-center mb-16 mt-20 z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-4 uppercase">
              The AIRNESS Files
            </h1>
            <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">
              Decode the brain hijack and the chain of fate
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
              <span className="text-xl leading-none">←</span> BACK
            </button>
          </div>
          {renderActiveChapter()}
        </div>
      )}
    </main>
  );
}