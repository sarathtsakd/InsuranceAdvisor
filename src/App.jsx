import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import VideoSection from './components/VideoSection'
import Comparison from './components/Comparison'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu on click
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
          padding: '20px 0',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          backdropFilter: isScrolled ? 'blur(10px)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', color: isScrolled ? 'var(--color-primary)' : 'var(--color-primary)' }}>
            Insurance<span style={{ color: 'var(--color-secondary)' }}>Advisor</span>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <ul
            className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}
            style={{ display: 'flex', gap: '30px', alignItems: 'center' }} // Inline styles serve as default/desktop
          >
            {['About', 'Benefits', 'Videos', 'Compare'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1rem',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <button
                className="btn btn-primary"
                style={{ padding: '8px 20px' }}
                onClick={() => scrollToSection('contact')}
              >
                Get Guidance
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Hero scrollToForm={() => scrollToSection('contact')} />
        <About />
        <Benefits />
        <VideoSection />
        <Comparison />
        <LeadForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
