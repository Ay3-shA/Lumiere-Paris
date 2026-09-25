import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 300;
const FRAME_DIR = '/ezgif-12d5041b8f6a7806-jpg';

export const ScrollCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    let targetFrame = 0;
    let currentFrame = 0;
    let lastRenderedImg: HTMLImageElement | null = null;
    let lastRenderedIndex = -1;
    let animationFrameId: number;

    const getFrameUrl = (index: number) => {
      const paddedIndex = String(index).padStart(3, '0');
      return `${FRAME_DIR}/ezgif-frame-${paddedIndex}.jpg`;
    };

    const drawFrame = (index: number) => {
      if (!canvas || !ctx) return;

      const roundedIndex = Math.min(
        Math.max(Math.round(index), 0),
        TOTAL_FRAMES - 1
      );

      let img = images[roundedIndex];

      // If requested frame isn't loaded yet, find nearest loaded frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const prev = images[roundedIndex - offset];

          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }

          const next = images[roundedIndex + offset];

          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      if (img === lastRenderedImg && roundedIndex === lastRenderedIndex) {
        return;
      }

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Cover canvas while preserving aspect ratio
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const nx = (cw - nw) / 2;
      const ny = (ch - nh) / 2;

      ctx.drawImage(img, nx, ny, nw, nh);

      lastRenderedImg = img;
      lastRenderedIndex = roundedIndex;
    };

    const resizeCanvas = () => {
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);

      lastRenderedImg = null;
      lastRenderedIndex = -1;

      drawFrame(currentFrame);
    };

    // Connect animation to the ENTIRE website scroll
    const updateScrollTarget = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) {
        targetFrame = 0;
        return;
      }

      const progress = Math.max(
        0,
        Math.min(1, window.scrollY / maxScroll)
      );

      targetFrame = progress * (TOTAL_FRAMES - 1);
    };

    // Smoothly move animation toward the target frame
    const animate = () => {
      const ease = 0.12;

      currentFrame += (targetFrame - currentFrame) * ease;

      drawFrame(currentFrame);

      animationFrameId = requestAnimationFrame(animate);
    };

    // Load first frame immediately
    const firstImg = new Image();

    firstImg.src = getFrameUrl(1);

    firstImg.onload = () => {
      images[0] = firstImg;
      drawFrame(0);
    };

    // Load keyframes every 10 frames
    for (let i = 10; i < TOTAL_FRAMES; i += 10) {
      const img = new Image();

      img.src = getFrameUrl(i + 1);

      img.onload = () => {
        images[i] = img;

        if (Math.abs(currentFrame - i) < 15) {
          drawFrame(currentFrame);
        }
      };
    }

    // Load remaining frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      if (images[i]) continue;

      const img = new Image();

      img.src = getFrameUrl(i + 1);

      img.onload = () => {
        images[i] = img;

        if (Math.round(currentFrame) === i) {
          drawFrame(currentFrame);
        }
      };
    }

    window.addEventListener('resize', resizeCanvas);

    window.addEventListener(
      'scroll',
      updateScrollTarget,
      { passive: true }
    );

    resizeCanvas();
    updateScrollTarget();

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScrollTarget);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
        }}
      />
    </div>
  );
};