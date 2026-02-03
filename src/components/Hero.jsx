import React from 'react';
import heroImage from '../assets/hero_family.png';

const Hero = ({ scrollToForm }) => {
    return (
        <section className="section" style={{
            paddingTop: '160px',
            paddingBottom: '100px',
            background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container hero-grid">
                <div className="hero-content fade-in">
                    <span style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        backgroundColor: 'rgba(71, 150, 189, 0.1)',
                        color: 'var(--color-secondary)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}>
                        Trusted Financial Advice
                    </span>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '20px', color: 'var(--color-primary)' }}>
                        Secure Your Family’s Future with <span style={{ color: 'var(--color-secondary)' }}>Smart Insurance</span>
                    </h1>
                    <p className="hero-text">
                        Expert guidance on Term and Health insurance to ensure financial freedom and medical security for your loved ones.
                    </p>
                    <div className="hero-buttons">
                        <button onClick={scrollToForm} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                            Get Free Guidance
                        </button>
                        <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn" style={{ border: '1px solid #ddd', padding: '15px 30px' }}>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="hero-image fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
                    <img
                        src={heroImage}
                        alt="Happy family planning their future"
                        style={{
                            width: '100%',
                            borderRadius: '20px',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    />
                    {/* Decorative elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'var(--color-accent)',
                        opacity: 0.2,
                        zIndex: -1
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
