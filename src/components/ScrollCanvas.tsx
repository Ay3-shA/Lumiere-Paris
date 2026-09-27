import React, { useEffect, useRef } from 'react';

const images = [
  `${import.meta.env.BASE_URL}images/airplane-window.png`,
  `${import.meta.env.BASE_URL}images/clouds.png`,
  `${import.meta.env.BASE_URL}images/eiffel-tower.png`,
];

export const ScrollCanvas: React.FC = () => {
  const layersRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const updateBackground = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
          : 0;

      const airplane = layersRef.current[0];
      const clouds = layersRef.current[1];
      const eiffel = layersRef.current[2];

      if (!airplane || !clouds || !eiffel) return;

      // Airplane → Clouds → Eiffel Tower
      const airplaneOpacity =
        progress < 0.45
          ? 1
          : 1 - (progress - 0.45) / 0.2;

      const cloudsOpacity =
        progress < 0.25
          ? 0
          : progress < 0.55
            ? (progress - 0.25) / 0.3
            : progress < 0.75
              ? 1 - (progress - 0.55) / 0.2
              : 0;

      const eiffelOpacity =
        progress < 0.55
          ? 0
          : Math.min((progress - 0.55) / 0.25, 1);

      airplane.style.opacity = String(
        Math.max(0, airplaneOpacity)
      );

      clouds.style.opacity = String(
        Math.max(0, cloudsOpacity)
      );

      eiffel.style.opacity = String(
        Math.max(0, eiffelOpacity)
      );

      // Very small synchronized movement with the page.
      const y = -progress * 60;

      [airplane, clouds, eiffel].forEach((image) => {
        image.style.transform =
          `translate3d(0, ${y}px, 0) scale(1.05)`;
      });
    };

    updateBackground();

    window.addEventListener(
      'scroll',
      updateBackground,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      updateBackground
    );

    return () => {
      window.removeEventListener(
        'scroll',
        updateBackground
      );

      window.removeEventListener(
        'resize',
        updateBackground
      );
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {images.map((src, index) => (
        <img
          key={src}
          ref={(element) => {
            layersRef.current[index] = element;
          }}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: index === 0 ? 1 : 0,
            transform:
              'translate3d(0, 0, 0) scale(1.05)',
            willChange: 'opacity, transform',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};