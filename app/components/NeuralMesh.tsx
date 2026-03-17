"use client";

import React, { useRef, useEffect } from 'react';

const NeuralMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    if (!cx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let animationId: number;
    let time = 0;

    const resize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const cols = 45; 
    const rows = 35; 
    const fov = 350; 

    const draw = () => {
      time += 0.012; 

      // 💥 關閉太陽拳：重置畫布混合模式
      cx.globalCompositeOperation = 'source-over';
      
      cx.fillStyle = '#020613'; 
      cx.fillRect(0, 0, W, H);

      // 開啟發光模式
      cx.globalCompositeOperation = 'screen';

      const points: {px: number, py: number, z: number, alpha: number}[] = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const x = (col - cols / 2) * (W / cols * 1.8); 
          const z = row * 25 + 100; 
          
          let y = 0;
          y += Math.sin(col * 0.25 + time * 0.8 + row * 0.15) * 90; 
          y += Math.sin(col * 0.1 - time * 0.5 + row * 0.2) * 50;   
          y += Math.cos(col * 0.4 + time * 1.1) * 15;               

          const scale = fov / (fov + z);
          const px = W / 2 + x * scale;
          const py = H / 2 + 150 + y * scale; 

          const alpha = Math.max(0, 1 - (row / rows)) * 0.85;
          points.push({ px, py, z, alpha });
        }
      }

      for (let row = 0; row < rows - 1; row++) {
        for (let col = 0; col < cols; col++) {
          const tl = points[row * (cols + 1) + col];
          const tr = points[row * (cols + 1) + col + 1];
          const bl = points[(row + 1) * (cols + 1) + col];
          const br = points[(row + 1) * (cols + 1) + col + 1];

          cx.beginPath();
          cx.moveTo(tl.px, tl.py);
          cx.lineTo(tr.px, tr.py);
          cx.lineTo(br.px, br.py);
          cx.lineTo(bl.px, bl.py);
          cx.closePath();
          
          const fillAlpha = Math.max(0, 1 - row/rows) * 0.04; 
          cx.fillStyle = `rgba(14, 165, 233, ${fillAlpha})`;
          cx.fill();
        }
      }

      for (let row = 0; row < rows; row++) {
        cx.beginPath();
        for (let col = 0; col <= cols; col++) {
          const idx = row * (cols + 1) + col;
          const p = points[idx];
          if (col === 0) cx.moveTo(p.px, p.py);
          else cx.lineTo(p.px, p.py);
        }
        const a = Math.max(0, 1 - row/rows) * 0.6;
        cx.strokeStyle = `rgba(56, 189, 248, ${a})`; 
        cx.lineWidth = 1.5 * (1 - row/rows); 
        cx.stroke();
      }

      for (let col = 0; col <= cols; col++) {
        cx.beginPath();
        for (let row = 0; row < rows; row++) {
          const idx = row * (cols + 1) + col;
          const p = points[idx];
          if (row === 0) cx.moveTo(p.px, p.py);
          else cx.lineTo(p.px, p.py);
        }
        cx.strokeStyle = `rgba(2, 132, 199, 0.25)`; 
        cx.lineWidth = 0.5;
        cx.stroke();
      }

      for (let row = 0; row < rows; row += 2) { 
        for (let col = 0; col <= cols; col += 2) {
          const p = points[row * (cols + 1) + col];
          const pulse = (Math.sin(col * 0.6 + row * 0.4 - time * 2.5) + 1) / 2;
          const r = 2.5 * (1 - row/rows) * pulse; 
          const a = p.alpha * pulse;

          if (r > 0.1) {
            cx.beginPath();
            cx.arc(p.px, p.py, r * 2.5, 0, Math.PI * 2);
            cx.fillStyle = `rgba(186, 230, 253, ${a * 0.4})`; 
            cx.fill();

            cx.beginPath();
            cx.arc(p.px, p.py, r, 0, Math.PI * 2);
            cx.fillStyle = `rgba(255, 255, 255, ${a})`; 
            cx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-90" />;
};

export default NeuralMesh;