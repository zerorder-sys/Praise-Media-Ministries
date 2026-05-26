import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ 
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      borderRadius: '16px',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      padding: '1rem 0', 
      position: 'fixed', 
      top: 0, 
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.5s ease',
      animation: 'glassMorph 3s ease-in-out infinite'
    }}>
      <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo with glow effect */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
                transition: 'filter 0.3s ease',
                animation: 'logoGlow 3s ease-in-out infinite'
              }}>
              <Image 
                src="/logo.png" 
                alt="Praise Media Ministries Logo" 
                width={60} 
                height={60}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </Link>
          <div className="header-title-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px', display: 'flex', flexDirection: 'column' }}>
            <Link href="/">
              Praise Media <span className="text-primary">Productions</span>
            </Link>
          </div>
        </div>
        <nav className="header-nav" style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/" style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Home</Link>
          <Link href="#services" style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Services</Link>
          <Link href="#portfolio" style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Portfolio</Link>
          <Link href="#contact" style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
