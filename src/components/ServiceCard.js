'use client';

import { useState } from 'react';
import AnimatedPanel from './AnimatedPanel';

export default function ServiceCard({ title, description, delay = 0, icon, featured = false }) {
  const [spot, setSpot] = useState({ x: '50%', y: '50%', active: false, tiltX: '0deg', tiltY: '0deg' });
  const [hovered, setHovered] = useState(false);

  const updateSpot = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const relX = (x - 50) / 50;
    const relY = (y - 50) / 50;
    const tiltX = `${Math.max(Math.min(relY * 8, 8), -8)}deg`;
    const tiltY = `${Math.max(Math.min(-relX * 8, 8), -8)}deg`;

    setSpot({
      x: `${x}%`,
      y: `${y}%`,
      active: true,
      tiltX,
      tiltY
    });
  };

  const handleMouseEnter = (e) => {
    setHovered(true);
    updateSpot(e);
  };

  const handleMouseMove = (e) => {
    updateSpot(e);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setSpot((prev) => ({ ...prev, active: false, tiltX: '0deg', tiltY: '0deg' }));
  };

  return (
    <AnimatedPanel 
      delay={delay} 
      className={featured ? 'service-card featured' : 'service-card'}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: featured ? '3.5rem 2.5rem' : '3rem 2rem',
        textAlign: 'center',
        height: '100%',
        boxShadow: featured ? '0 20px 60px 0 rgba(0, 0, 0, 0.55), inset 0 0 60px rgba(255, 255, 255, 0.04)' : '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255, 0, 0, 0.04)',
        transition: 'transform 0.25s ease, box-shadow 0.3s ease, background-color 0.4s ease',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: `perspective(1000px) rotateX(${spot.tiltX}) rotateY(${spot.tiltY}) translateY(${hovered ? '-5px' : '0px'}) scale(${hovered ? 1.02 : 1})`,
        '--spot-x': spot.x,
        '--spot-y': spot.y,
        '--spot-opacity': spot.active ? 1 : 0,
        '--spot-size': spot.active ? (featured ? '520px' : '420px') : '0px'
      }}
    >
      {featured && (
        <div className="service-card-badge">Featured</div>
      )}
      <div className="icon-container" style={{ 
        width: '90px',
        height: '90px',
        margin: '0 auto 1.5rem auto', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)',
        borderRadius: '50%',
        color: 'var(--color-primary)',
        border: '1px solid rgba(255, 0, 0, 0.2)',
        transition: 'all 0.4s ease'
      }}>
        {icon}
      </div>
      <h3 style={{ 
        color: '#fff', 
        marginBottom: '1rem', 
        fontSize: '1.5rem', 
        letterSpacing: '0.5px',
        transition: 'all 0.4s ease'
      }}>{title}</h3>
      <p style={{ 
        color: 'rgba(255, 255, 255, 0.6)', 
        lineHeight: '1.7',
        transition: 'all 0.4s ease'
      }}>{description}</p>
    </AnimatedPanel>
  );
}
