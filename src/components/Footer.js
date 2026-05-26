"use client";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', padding: '4rem 0 2rem 0', marginTop: '4rem', borderTop: '1px solid #222' }} id="contact">
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Praise Media <span className="text-primary">Productions</span></h3>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>
          Professional live telecasting for life's most meaningful moments. We specialize in bringing weddings, funerals, and special events to your loved ones around the world.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <a 
            href="https://youtube.com/@praisemediaproductions7545" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
            style={{ fontSize: '1.1rem', padding: '1rem 2rem', display: 'flex', alignItems: 'center' }}
          >
            Watch Our Live Streams on YouTube
          </a>
          <a
            href="https://wa.me/919562240826"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              background: 'linear-gradient(180deg, rgba(255,20,20,0.03), rgba(255,20,20,0.02))',
              backdropFilter: 'blur(18px) saturate(120%)',
              WebkitBackdropFilter: 'blur(18px) saturate(120%)',
              border: '1px solid rgba(255,40,40,0.10)',
              borderRadius: '50px',
              padding: '0.5rem 1.5rem 0.5rem 0.5rem',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(255,10,10,0.06)',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(255,10,10,0.14)';
              e.currentTarget.style.borderColor = 'rgba(255,40,40,0.18)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,10,10,0.06)';
              e.currentTarget.style.borderColor = 'rgba(255,40,40,0.10)';
            }}
          >
            <div style={{ 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
              borderRadius: '50%', 
              width: '42px', 
              height: '42px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 8px 26px rgba(255,20,20,0.18)',
              border: '1px solid rgba(255,255,255,0.04)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Praise John</div>
              <div style={{ fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.5px' }}>+91 95622 40826</div>
            </div>
          </a>
        </div>
        <div style={{ color: '#555', fontSize: '0.9rem', borderTop: '1px solid #222', paddingTop: '2rem' }}>
          &copy; {new Date().getFullYear()} Praise Media Productions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
