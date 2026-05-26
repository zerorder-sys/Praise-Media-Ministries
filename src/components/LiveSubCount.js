"use client";
import { useEffect, useState } from 'react';

export default function LiveSubCount() {
  const [subs, setSubs] = useState("10K+");

  useEffect(() => {
    // Static deployment on Cloudflare Pages
    setSubs("10K+");
  }, []);

  return (
    <div className="interactive-glow-card" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '24px',
      padding: '1.2rem 2rem',
      boxShadow: '0 8px 32px 0 rgba(255, 0, 0, 0.15)',
      transition: 'all 0.4s ease',
      transform: 'translateZ(0)',
      position: 'relative',
      overflow: 'hidden',
      '--spot-x': '50%',
      '--spot-y': '50%',
      '--spot-opacity': '0',
      '--spot-size': '280px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.setProperty('--spot-opacity', '0.36');
      e.currentTarget.style.setProperty('--spot-size', '320px');
      e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 0, 0, 0.25)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.setProperty('--spot-opacity', '0');
      e.currentTarget.style.setProperty('--spot-size', '280px');
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(255, 0, 0, 0.15)';
    }}
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = ((y - centerY) / centerY) * 5;
      const angleY = ((centerX - x) / centerX) * 5;
      
      e.currentTarget.style.setProperty('--spot-x', `${x}px`);
      e.currentTarget.style.setProperty('--spot-y', `${y}px`);
      e.currentTarget.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.setProperty('--spot-opacity', '0');
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }}
  >
      <div className="live-pulse" style={{ 
        width: '14px', 
        height: '14px', 
        backgroundColor: '#ff0000', 
        borderRadius: '50%',
        boxShadow: '0 0 10px #ff0000',
        transition: 'all 0.3s ease'
      }}></div>
      <div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', transition: 'color 0.3s ease' }}>Live Subscribers</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px', lineHeight: '1', transition: 'transform 0.3s ease, color 0.3s ease' }}>{subs}</div>
      </div>
    </div>
  );
}
