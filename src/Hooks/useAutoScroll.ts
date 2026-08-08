import { useEffect, useRef } from 'react';

export function useAutoScroll(direction: 'left' | 'right' = 'right', speed = 0.45) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    let animId: number;
    let isPaused = false;
    let pos = direction === 'right' ? 0 : container.scrollWidth / 2;

    if (direction === 'left') {
      container.scrollLeft = container.scrollWidth / 2;
    }

    const tick = () => {
      if (!isPaused) {
        if (direction === 'right') {
          pos += speed;
          if (pos >= container.scrollWidth / 2) pos = 0;
        } else {
          pos -= speed;
          if (pos <= 0) pos = container.scrollWidth / 2;
        }
        container.scrollLeft = pos;
      }
      animId = requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      if (isPaused) {
        pos = container.scrollLeft;
      }
    };

    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };

    const timer = setTimeout(() => { animId = requestAnimationFrame(tick); }, 1500);

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause, { passive: true });
    container.addEventListener('touchend', resume, { passive: true });
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [direction, speed]);

  return scrollRef;
}
