import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">Why Insurance Matters</h2>
                <p className="section-subtitle">Understanding the difference between Term and Health insurance is the first step towards financial security.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
                    {/* Term Insurance */}
                    <div style={{ padding: '40px', background: '#fff', borderRadius: '15px', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--color-primary)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>Term Insurance</h3>
                        <p style={{ color: '#666', marginBottom: '20px' }}>
                            Pure financial protection for your family. If something happens to you, your nominees receive a tax-free lump sum amount.
                        </p>
                        <ul style={{ color: '#555', lineHeight: '1.8' }}>
                            <li>✓ High coverage at low premiums</li>
                            <li>✓ Income replacement for family</li>
                            <li>✓ Covers debts and liabilities</li>
                        </ul>
                    </div>

                    {/* Health Insurance */}
                    <div style={{ padding: '40px', background: '#fff', borderRadius: '15px', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--color-secondary)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-secondary)' }}>Health Insurance</h3>
                        <p style={{ color: '#666', marginBottom: '20px' }}>
                            Covers medical expenses due to illnesses or accidents. Protects your savings from rising healthcare costs.
                        </p>
                        <ul style={{ color: '#555', lineHeight: '1.8' }}>
                            <li>✓ Cashless hospitalization</li>
                            <li>✓ Pre & post hospitalization cover</li>
                            <li>✓ Tax benefits u/s 80D</li>
                        </ul>
                    </div>
                </div>

                {/* Myths Section */}
                <div style={{ marginTop: '80px', background: '#f8f9fa', padding: '40px', borderRadius: '15px' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--color-primary)' }}>Common Mysteries & Mistakes</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div style={{ padding: '20px', borderLeft: '3px solid #E63946' }}>
                            <strong style={{ display: 'block', marginBottom: '5px', color: '#E63946' }}>The "Investment" Myth</strong>
                            <p style={{ fontSize: '0.95rem' }}>Many mix insurance with investment. Term insurance is pure protection & health insurance is for medical safety. Neither should be treated as money-back schemes.</p>
                        </div>
                        <div style={{ padding: '20px', borderLeft: '3px solid #E63946' }}>
                            <strong style={{ display: 'block', marginBottom: '5px', color: '#E63946' }}>Employer Cover is Enough?</strong>
                            <p style={{ fontSize: '0.95rem' }}>Corporate covers are linked to your job. If you switch jobs or retire, you lose cover. Always have a personal policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
