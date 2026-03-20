"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  pulseSpeed: number;
  bright: number;
}

export default function NeuralBackground({ 
  children, 
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NODE_COUNT = 28;

    function initNodes(w: number, h: number): Node[] {
      return Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 2.8 + 1.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        bright: 0.4 + Math.random() * 0.6,
      }));
    }

    function resize() {
      const parent = canvas!.parentElement;
      const w = parent ? parent.offsetWidth : window.innerWidth;
      const h = parent ? parent.offsetHeight : window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
      nodesRef.current = initNodes(w, h);
      return { w, h };
    }

    let { w, h } = resize();

    function draw() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(60, 150, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        n.pulse += n.pulseSpeed;
        const glowSize = n.r * (2.5 + Math.sin(n.pulse) * 1.2);
        const alpha = n.bright * (0.6 + Math.sin(n.pulse) * 0.4);

        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize * 3.8);
        grd.addColorStop(0, `rgba(80, 170, 255, ${alpha * 0.75})`);
        grd.addColorStop(0.4, `rgba(40, 100, 220, ${alpha * 0.3})`);
        grd.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowSize * 3.8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 220, 255, ${alpha})`;
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      const dims = resize();
      w = dims.w;
      h = dims.h;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`relative w-full bg-[#040d1a] overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      {/* z-10 確保你的文字內容會浮在動畫上面 */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}