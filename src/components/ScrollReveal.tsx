import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  direction = 'up',
  delay = 0 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.style.setProperty('--reveal-delay', `${delay}s`);
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'down':
        return 'translate-y-[-30px]';
      case 'left':
        return 'translate-x-[-50px]';
      case 'right':
        return 'translate-x-[50px]';
      default: // up
        return 'translate-y-[30px]';
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll opacity-0 ${getDirectionClass()} transition-all duration-1000`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}