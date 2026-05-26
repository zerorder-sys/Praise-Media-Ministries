"use client";
import { useEffect, useState } from 'react';

export default function UpcomingEvents() {
  const [eventData, setEventData] = useState({ loading: false, event: null });

  useEffect(() => {
    // Static deployment on Cloudflare Pages
    setEventData({ loading: false, event: null });
  }, []);

  return (
    <div className="interactive-glow-card" style={{
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
      minWidth: '220px',
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
      e.currentTarget.style.setProperty('--spot-x', `${x}px`);
      e.currentTarget.style.setProperty('--spot-y', `${y}px`);
    }}
    >
      <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
        Next Live Stream
      </div>
      
      {eventData.loading ? (
        <div style={{ fontSize: '1.1rem', color: '#fff' }}>Loading...</div>
      ) : eventData.event ? (
        <>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '4px', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {eventData.event.title}
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {eventData.event.timeFormatted}
          </div>
        </>
      ) : (
        <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
          No events scheduled
        </div>
      )}
    </div>
  );
}
