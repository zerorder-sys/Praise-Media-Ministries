import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import AnimatedPanel from '../components/AnimatedPanel';
import LiveSubCount from '../components/LiveSubCount';
import UpcomingEvents from '../components/UpcomingEvents';
import PortfolioGallery from '../components/PortfolioGallery';
import StatCard from '../components/StatCard';
import BenefitCard from '../components/BenefitCard';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section section-panel hero-panel" style={{ 
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 2rem',
        borderBottom: '1px solid #333'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: '#050505' }}></div>
        <div className="container fade-in-up">
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Capture <span className="text-primary">Every</span> Moment
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            Praise Media Productions delivers premium live telecasting services for your most important events. Weddings, funerals, and special ceremonies, broadcast with excellence.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="btn">Our Services</a>
            <a href="https://youtube.com/@praisemediaproductions7545" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Watch on YouTube</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-panel services-panel" style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <AnimatedPanel>
            <div style={{ maxWidth: '760px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Our <span className="text-primary">Services</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Experience the broadcast quality our clients trust most — premium live streaming for weddings, memorials, and special events.
              </p>
            </div>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '0 auto 4rem auto' }}></div>
          </AnimatedPanel>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <ServiceCard 
              featured
              delay={100}
              icon={
                <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="12" r="5" />
                  <circle cx="15" cy="12" r="5" />
                </svg>
              }
              title="Weddings"
              description="Share your special day with family and friends around the world in stunning high-definition live streaming."
            />
            <ServiceCard 
              delay={300}
              icon={
                <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M7 7h10" />
                </svg>
              }
              title="Funerals"
              description="Honor your loved ones with dignified, respectful broadcasting services allowing distant family to pay their respects."
            />
            <ServiceCard 
              delay={500}
              icon={
                <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              }
              title="Special Events"
              description="From church services to corporate events, we provide professional multi-camera setups for any occasion."
            />
          </div>
        </div>
      </section>

      <PortfolioGallery />

      {/* About/Feature Section */}
      <section className="section-panel about-panel" style={{ borderTop: '1px solid #222' }}>
        <div className="container">
          <div className="about-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
            <AnimatedPanel className="about-left">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Choose <span className="text-primary">Praise Media?</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.75' }}>
                You have one chance to capture every live moment. We bring broadcast-grade equipment, seamless execution, and trusted support so your event reaches every viewer clearly and confidently.
              </p>
              <div className="about-benefits" style={{ marginTop: '1rem' }}>
                {[
                  { title: 'Trusted Team', description: 'Experienced crew delivering every stream with precision.' },
                  { title: 'Professional Gear', description: 'Cameras, audio, and encoding built for live broadcast.' },
                  { title: 'Reliable Streaming', description: 'Stable connections for uninterrupted event coverage.' },
                  { title: 'Smooth Production', description: 'Polished visuals, clean sound, and instant switching.' }
                ].map((benefit, i) => (
                  <BenefitCard key={i} title={benefit.title} description={benefit.description} delay={i * 80} />
                ))}
              </div>
              <div className="about-stats" style={{ marginTop: '1.25rem' }}>
                {[
                  { value: '20+', label: 'Events Streamed' },
                  { value: '4K', label: 'Broadcast Quality' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '3+', label: 'Years Experience' }
                ].map((stat, idx) => (
                  <StatCard key={idx} value={stat.value} label={stat.label} delay={idx * 80} />
                ))}
              </div>
            </AnimatedPanel>
            <AnimatedPanel className="about-right" delay={200}>
                <LiveSubCount />
                <UpcomingEvents />
            </AnimatedPanel>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
