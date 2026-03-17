"use client";

import React, { useRef, useEffect } from 'react';

interface NeuralNetworkProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  nodeColor?: string;
  lineColor?: string;
  pulseSpeed?: number;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  className = '',
  particleCount = 80, // 節點數量
  connectionDistance = 150, // 產生連線的距離
  nodeColor = 'rgba(139, 92, 246, 0.8)', // 神經元核心顏色 (紫)
  lineColor = 'rgba(99, 102, 241, 0.3)', // 神經連結顏色 (靛藍)
  pulseSpeed = 0.02, // 呼吸閃爍速度
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // 設定畫布尺寸
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 神經元粒子類別
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      phase: number; // 用於控制呼吸閃爍的相位

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5; // 極緩慢的漂浮感
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.phase += pulseSpeed;

        // 邊界反彈
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        // 呼吸感：透明度隨時間變化 (0.3 ~ 1.0)
        const currentAlpha = 0.3 + (Math.sin(this.phase) + 1) / 2 * 0.7;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor.replace('0.8', currentAlpha.toString());
        ctx.fill();
        
        // 增加神經元的光暈
        ctx.shadowBlur = 10;
        ctx.shadowColor = nodeColor;
      }
    }

    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // 繪製與動畫循環
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 使用濾色模式，讓節點和連線交疊時產生「高亮發光」的能量感
      ctx.globalCompositeOperation = 'lighter';

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // 繪製神經連結與能量傳導
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // 距離越近，線條越亮
            const opacity = 1 - (distance / connectionDistance);
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor.replace('0.3', (opacity * 0.5).toString());
            ctx.lineWidth = 1;
            ctx.stroke();

            // 能量傳導特效：在線條上畫一個移動的亮點
            const time = Date.now() * 0.001; // 時間變數
            const flowPos = (time + i * 0.1) % 1; // 產生 0~1 的流動值
            const flowX = particles[i].x + (particles[j].x - particles[i].x) * flowPos;
            const flowY = particles[i].y + (particles[j].y - particles[i].y) * flowPos;

            ctx.beginPath();
            ctx.arc(flowX, flowY, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // 白色的電訊號流動
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, connectionDistance, nodeColor, lineColor, pulseSpeed]);

  return <canvas ref={canvasRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`} />;
};

export default NeuralNetwork;