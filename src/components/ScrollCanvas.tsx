import React, { useEffect, useRef } from 'react';

const images = [
  `${import.meta.env.BASE_URL}images/airplane-window.png`,
  `${import.meta.env.BASE_URL}images/clouds.png`,
  `${import.meta.env.BASE_URL}images/eiffel-tower.png`,
];

export const ScrollCanvas: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let animationFrameId = 0;

    const updateTarget = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      targetProgress =
        maxScroll > 0
          ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
          : 0;
    };

    const animate = () => {
      /*
       * Smoothly follow the user's scroll.
       */
      currentProgress +=
        (targetProgress - currentProgress) * 0.08;

      /*
       * The background contains three 120vh scenes.
       * Each scene begins 100vh after the previous one,
       * creating a 20vh overlap.
       */
      const totalMovement =
        window.innerHeight * 2;

      const y =
        currentProgress * totalMovement;

      track.style.transform =
        `translate3d(0, ${-y}px, 0)`;

      animationFrameId =
        requestAnimationFrame(animate);
    };

    window.addEventListener(
      'scroll',
      updateTarget,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      updateTarget
    );

    updateTarget();

    animationFrameId =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        'scroll',
        updateTarget
      );

      window.removeEventListener(
        'resize',
        updateTarget
      );

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="absolute left-0 top-0 w-full"
        style={{
          height: '320vh',
          willChange: 'transform',
        }}
      >

        {/* AIRPLANE */}
        <div
          className="absolute left-0 top-0 w-full"
          style={{
            height: '120vh',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
          }}
        >
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: 'scale(1.05)',
            }}
          />
        </div>

        {/* CLOUDS */}
        <div
          className="absolute left-0 top-[100vh] w-full"
          style={{
            height: '120vh',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
          }}
        >
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: 'scale(1.05)',
            }}
          />
        </div>

        {/* EIFFEL TOWER */}
        <div
          className="absolute left-0 top-[200vh] w-full"
          style={{
            height: '120vh',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
          }}
        >
          <img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: 'scale(1.05)',
            }}
          />
        </div>

      </div>
    </div>
  );
};