"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // 可以在終端機確認粒子是否成功載入
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      fullScreen: { enable: false }, 
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          enable: false,
        },
        move: {
          direction: MoveDirection.top, // 讓粒子像水蒸氣一樣「微微往上飄」
          enable: true,
          outModes: {
            default: OutMode.out, 
          },
          random: true, 
          speed: 0.6, // 稍微調快一點點，比較有呼吸感
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150, // 增加粒子數量
        },
        opacity: {
          value: { min: 0.2, max: 0.6 }, // 【重點修改】調高透明度，保證你看得到！
          animation: {
            enable: true,
            speed: 0.5, 
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 4 }, // 【重點修改】稍微放大一點點
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // 【重點修改】從 absolute 改成 fixed，並加上 pointer-events-none 避免干擾點擊
        className="fixed inset-0 z-0 pointer-events-none" 
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}