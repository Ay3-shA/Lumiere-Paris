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

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const progress = Math.min(
        Math.max(window.scrollY / maxScroll, 0),
        1
      );

      const y = progress * window.innerHeight * 2;

      track.style.transform = `translate3d(0, ${-y}px, 0)`;
    };

    update();

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
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