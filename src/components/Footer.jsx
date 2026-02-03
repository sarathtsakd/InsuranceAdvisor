import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#142d45', color: 'rgba(255,255,255,0.7)', padding: '60px 0 20px', fontSize: '0.9rem' }}>
            <div className="container">

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center' }}>
                    <p>© {new Date().getFullYear()} Insurance Advisor. All rights reserved.</p>
                    <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.5 }}>Disclaimer: Insurance is a subject matter of solicitation. Please read the offer document carefully before investing.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
