"use client";
import { useEffect, useState } from 'react';
import StatCard from './StatCard';

export default function PortfolioGallery() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/youtube-portfolio');
        const data = await res.json();
        if (data.status === 'success' && data.videos.length > 0) {
          setVideos(data.videos);
        }
      } catch (err) {
        console.error('Failed to fetch portfolio videos', err);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <section id="portfolio" className="section-panel portfolio-panel" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', color: '#fff' }}>
            Our <span style={{ color: 'var(--color-primary)' }}>Past Work</span>
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '0 auto 1.5rem auto', borderRadius: '2px' }} />
          <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Real moments, professionally broadcast. Watch some of our recent live streams straight from our YouTube channel.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            {[
              { value: '20+', label: 'Live Events' },
              { value: '4K', label: 'High-Resolution Streams' },
              { value: '100%', label: 'Reliable Broadcasts' }
            ].map((metric, idx) => (
              <StatCard key={metric.label} value={metric.value} label={metric.label} delay={idx * 80} />
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: 'center', color: '#aaa', fontSize: '1.1rem' }}>Loading videos...</div>
        )}

        {/* Empty State */}
        {!loading && videos.length === 0 && (
          <div style={{
            textAlign: 'center',
            color: '#aaa',
            backgroundColor: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '3rem',
          }}>
            <p style={{ fontSize: '1.1rem' }}>No videos found. Check back soon!</p>
          </div>
        )}

        {/* Video Grid */}
        {!loading && videos.length > 0 && (
          <div style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}>
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video.id === activeVideo ? null : video.id)}
                className="interactive-glow-card"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(255,20,20,0.04) 0%, rgba(255,20,20,0.02) 50%, rgba(0,0,0,0.02) 100%)',
                  backdropFilter: 'blur(20px) saturate(120%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(120%)',
                  border: '1px solid rgba(255,40,40,0.10)',
                  boxShadow: activeVideo === video.id
                    ? '0 6px 40px rgba(255,40,40,0.18), 0 18px 60px rgba(0,0,0,0.45)'
                    : '0 10px 38px rgba(0,0,0,0.45), inset 0 -6px 30px rgba(255,40,40,0.02)',
                  cursor: 'pointer',
                  transition: 'all 0.35s ease',
                  transform: activeVideo === video.id ? 'scale(1.02)' : 'scale(1)',
                  minHeight: '360px',
                  position: 'relative',
                  '--spot-x': '50%',
                  '--spot-y': '50%',
                  '--spot-opacity': '0',
                  '--spot-size': '280px'
                }}
                onMouseEnter={e => {
                  if (activeVideo !== video.id) {
                    e.currentTarget.style.setProperty('--spot-opacity', '0.36');
                    e.currentTarget.style.setProperty('--spot-size', '320px');
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 0 28px rgba(255,0,0,0.22), 0 14px 46px rgba(0,0,0,0.48)';
                    e.currentTarget.style.borderColor = 'rgba(255,0,0,0.2)';
                  }
                }}
                onMouseMove={e => {
                  if (activeVideo !== video.id) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--spot-x', `${x}px`);
                    e.currentTarget.style.setProperty('--spot-y', `${y}px`);
                  }
                }}
                onMouseLeave={e => {
                  if (activeVideo !== video.id) {
                    e.currentTarget.style.setProperty('--spot-opacity', '0');
                    e.currentTarget.style.setProperty('--spot-size', '280px');
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 38px rgba(0,0,0,0.45)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }
                }}
              >
                {activeVideo === video.id ? (
                  <iframe
                    width="100%"
                    height="220"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'block' }}
                  />
                ) : (
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 60%), radial-gradient(circle at 20% 30%, rgba(255,40,40,0.10), transparent 16%), radial-gradient(circle at 80% 20%, rgba(255,10,10,0.06), transparent 12%)',
                      mixBlendMode: 'overlay'
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))',
                      pointerEvents: 'none'
                    }} />
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '56px', height: '56px',
                      backgroundColor: 'rgba(255,45,45,0.94)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 6px 28px rgba(255,30,30,0.34)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(6px)'
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'radial-gradient(400px 160px at 50% 20%, rgba(255,40,40,0.06), transparent 30%)',
                      pointerEvents: 'none'
                    }} />
                  </div>
                )}
                <div style={{ padding: '1rem 1.2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Live Stream</span>
                    <span style={{ color: '#aaa', fontSize: '0.75rem' }}>HD</span>
                  </div>
                  <p style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '1rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: '0.5rem'
                  }}>
                    {video.title}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                    Praise Media Productions
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {!loading && videos.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="https://youtube.com/@praisemediaproductions7545"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ fontSize: '1rem' }}
            >
              View All on YouTube →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
