import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#142d45', color: 'rgba(255,255,255,0.7)', padding: '60px 0 20px', fontSize: '0.9rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px' }}>InsuranceAdvisor</h3>
                        <p style={{ maxWidth: '250px' }}>Helping you secure your family's financial future with unbiased advice.</p>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '20px' }}>Quick Links</h4>
                        <ul style={{ lineHeight: '2' }}>
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#about" className="footer-link">About</a></li>
                            <li><a href="#benefits" className="footer-link">Benefits</a></li>
                            <li><a href="#contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '20px' }}>Contact</h4>
                        <ul style={{ lineHeight: '2' }}>
                            <li>Email: support@insuranceadvisor.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Address: Tech Park, Bangalore</li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center' }}>
                    <p>© {new Date().getFullYear()} Insurance Advisor. All rights reserved.</p>
                    <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.5 }}>Disclaimer: Insurance is a subject matter of solicitation. Please read the offer document carefully before investing.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
