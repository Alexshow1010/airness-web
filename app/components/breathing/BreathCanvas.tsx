"use client";

import { useEffect, useRef } from "react";

export default function BreathCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrame: number;
    const start = performance.now();

    function resize() {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    resize();
    window.addEventListener("resize", resize);

    function loop(t: number) {
      const elapsed = t - start;
      const progress = (elapsed % 8450) / 8450; // 0~1

      drawAllLayers(ctx, progress);

      animationFrame = requestAnimationFrame(loop);
    }

    animationFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}

/* ==============================================================
   All Layer Drawing Functions (Canvas Version)
   Matching Flutter CustomPainter Logic
   ============================================================== */

function drawAllLayers(ctx: CanvasRenderingContext2D, p: number) {
  const w = ctx.canvas.width / devicePixelRatio;
  const h = ctx.canvas.height / devicePixelRatio;
  const size = Math.min(w, h);
  const c = { x: w / 2, y: h / 2 };

  // Clear screen (black)
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);

  drawBreathCore(ctx, c, size, p);
  drawFogLayer(ctx, c, size, p);
  drawGlowLayer(ctx, c, size, p);
  drawWaveLayer(ctx, c, size, p);
  drawWaveVibrationLayer(ctx, c, size, p);
  drawOuterShellLayer(ctx, c, size, p);
  drawFluidLayer(ctx, c, size, p);
  drawParticleLayer(ctx, c, size, p);
}

/* ==============================================================
   1. Breath Core
 ============================================================== */

function drawBreathCore(
  ctx: CanvasRenderingContext2D,
  c: any,
  size: number,
  p: number
) {
  const s = (Math.sin(p * 2 * Math.PI) + 1) / 2;

  const scale = lerp(0.92, 1.12, s);
  const blur = lerp(10, 26, s);
  const fogR = size * 0.46 * scale;

  ctx.save();
  ctx.filter = `blur(36px)`;

  const fogGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, fogR);
  fogGrad.addColorStop(0, "rgba(74,0,122,0.10)");
  fogGrad.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = fogGrad;
  ctx.beginPath();
  ctx.arc(c.x, c.y, fogR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const auraR = size * 0.35 * scale;

  ctx.save();
  ctx.filter = `blur(${blur}px)`;

  const auraGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, auraR);
  auraGrad.addColorStop(0, "rgba(168,107,255,0.70)");
  auraGrad.addColorStop(0.55, "rgba(74,0,122,0.28)");
  auraGrad.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = auraGrad;
  ctx.beginPath();
  ctx.arc(c.x, c.y, auraR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const coreR = 20;
  ctx.save();
  ctx.filter = `blur(6px)`;

  const coreGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, coreR);
  coreGrad.addColorStop(0, "white");
  coreGrad.addColorStop(0.3, "#D7A6FF");
  coreGrad.addColorStop(1, "rgba(168,107,255,0)");

  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(c.x, c.y, coreR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/* ==============================================================
   2. Fog Layer
 ============================================================== */

function drawFogLayer(ctx: any, c: any, size: number, p: number) {
  const fade = ((Math.sin(p * 2 * Math.PI) + 1) / 2) * 0.15 + 0.08;
  const r = size * 0.62;

  ctx.save();
  ctx.filter = "blur(60px)";
  const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, r);
  g.addColorStop(0, `rgba(74,0,122,${fade})`);
  g.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/* ==============================================================
   3. Glow Layer
 ============================================================== */

function drawGlowLayer(ctx: any, c: any, size: number, p: number) {
  const s = (Math.sin(p * 2 * Math.PI) + 1) / 2;
  const glowR = size * (0.45 + s * 0.08);

  ctx.save();
  ctx.filter = "blur(50px)";
  const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, glowR);
  g.addColorStop(0, "rgba(181,128,255,0.20)");
  g.addColorStop(0.55, "rgba(74,0,122,0.05)");
  g.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(c.x, c.y, glowR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/* ==============================================================
   4. Wave Layer
 ============================================================== */

function drawWaveLayer(ctx: any, c: any, size: number, p: number) {
  const t = (Math.sin(p * 2 * Math.PI) + 1) / 2;
  const baseR = size * 0.25;
  const waveR = baseR + size * (0.11 * t);
  const opacity = 0.15 + 0.14 * t;

  ctx.save();
  ctx.filter = "blur(5px)";
  ctx.strokeStyle = `rgba(198,139,255,${opacity})`;
  ctx.lineWidth = 3.4;
  ctx.beginPath();
  ctx.arc(c.x, c.y, waveR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.filter = "blur(10px)";
  ctx.strokeStyle = `rgba(168,107,255,${opacity * 0.5})`;
  ctx.lineWidth = 2.6;
  ctx.beginPath();
  ctx.arc(c.x, c.y, waveR * 1.06, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.filter = "blur(14px)";
  ctx.strokeStyle = `rgba(221,187,255,${opacity * 0.28})`;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(c.x, c.y, waveR * 1.12, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

/* ==============================================================
   5. Wave Vibration Layer
 ============================================================== */

function drawWaveVibrationLayer(ctx: any, c: any, size: number, p: number) {
  const t = (Math.sin(p * 2 * Math.PI) + 1) / 2;

  const baseR = size * 0.63;
  const expand = size * (0.2 * t);
  const radius = baseR + expand;

  let vibratePower = Math.pow(t, 5) * 10.0;
  if (t > 0.85) vibratePower += (t - 0.85) * 48.0;

  ctx.save();
  ctx.filter = "blur(14px)";
  ctx.strokeStyle = `rgba(198,139,255,${0.28 + t * 0.18})`;
  ctx.lineWidth = 2.2;

  const path = new Path2D();
  const segments = 360;

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * 2 * Math.PI;

    const low = Math.sin(angle * 1.8 + p * 1.3) * vibratePower * 0.6;
    const mid = Math.sin(angle * 6 + p * 7) * vibratePower * 0.55;
    const high = Math.sin(angle * 11 + p * 12) * vibratePower * 0.33;

    const mixed = (low + mid + high) * 1.5;

    const r = radius + mixed;
    const x = c.x + Math.cos(angle) * r;
    const y = c.y + Math.sin(angle) * r;

    if (i === 0) path.moveTo(x, y);
    else path.lineTo(x, y);
  }

  ctx.stroke(path);
  ctx.restore();
}

/* ==============================================================
   6. Outer Shell Layer
 ============================================================== */

function drawOuterShellLayer(ctx: any, c: any, size: number, p: number) {
  const r = size * (0.36 + p * 0.03);

  ctx.save();
  ctx.filter = "blur(9px)";
  ctx.strokeStyle = `rgba(122,20,184,${0.12 + p * 0.06})`;
  ctx.lineWidth = 2 + p * 0.8;

  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

/* ==============================================================
   7. Fluid Layer
 ============================================================== */

function drawFluidLayer(ctx: any, c: any, size: number, p: number) {
  const t = (Math.sin(p * 2 * Math.PI) + 1) / 2;
  const r = size * (0.38 + t * 0.1);

  ctx.save();
  ctx.filter = `blur(${36 + 8 * t}px)`;

  const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, r);
  g.addColorStop(0, `rgba(111,26,255,${0.18 + 0.05 * t})`);
  g.addColorStop(0.3, `rgba(48,0,90,${0.05 + 0.03 * t})`);
  g.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.filter = "blur(28px)";
  const haloR = r * 1.12;

  const halo = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, haloR);
  halo.addColorStop(0, `rgba(143,75,255,${0.06 + 0.03 * t})`);
  halo.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(c.x, c.y, haloR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/* ==============================================================
   8. Particle Layer
 ============================================================== */

function drawParticleLayer(ctx: any, c: any, size: number, p: number) {
  const blockRadius = size * 0.36;
  const rand = seededRandom(777);

  for (let i = 0; i < 65; i++) {
    const dx = rand() * ctx.canvas.width;
    const dy = rand() * ctx.canvas.height;

    const dist = Math.hypot(dx - c.x, dy - c.y);
    if (dist < blockRadius) continue;

    const offsetY = dy + Math.sin((dx + dy) * 0.001 + p * 6) * (14 + p * 16);

    const tAlpha = alphaFunction(p);
    const paintAlpha = tAlpha * 0.35;

    ctx.save();
    ctx.filter = "blur(1.3px)";
    ctx.fillStyle = `rgba(255,255,255,${paintAlpha})`;

    const radius = 1.1 + p * 1.3;
    ctx.beginPath();
    ctx.arc(dx, offsetY, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/* ==============================================================
   Utility
 ============================================================== */

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function seededRandom(seed: number) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function alphaFunction(t: number) {
  if (t < 0.33) return 0;
  if (t < 0.43) return ((t - 0.33) / 0.1) * 0.9;
  if (t < 0.94) return 1.0;
  return (1.0 - (t - 0.94) / 0.06) * 0.95;
}
