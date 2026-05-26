"use client";

import { useRef } from 'react';

export default function BenefitCard({ title, description, delay = 0 }) {
  const ref = useRef(null);

  function handleMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--spot-x', `${x}px`);
    ref.current.style.setProperty('--spot-y', `${y}px`);
  }

  function handleEnter() {
    if (!ref.current) return;
    ref.current.style.setProperty('--spot-opacity', '0.36');
    ref.current.style.setProperty('--spot-size', '320px');
    ref.current.style.setProperty('transform', 'translateY(-8px)');
  }

  function handleLeave() {
    if (!ref.current) return;
    ref.current.style.setProperty('--spot-opacity', '0');
    ref.current.style.setProperty('--spot-size', '280px');
    ref.current.style.setProperty('transform', 'translateY(0)');
  }

  return (
    <div
      ref={ref}
      className="benefit-card"
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="benefit-inner">
        <div className="benefit-title">{title}</div>
        <p className="benefit-desc">{description}</p>
      </div>
    </div>
  );
}
