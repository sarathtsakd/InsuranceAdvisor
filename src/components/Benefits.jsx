import React from 'react';

const Benefits = () => {
    const benefits = [
        {
            title: "Financial Protection",
            desc: "Ensure your family maintains their lifestyle and meets goals even in your absence.",
            icon: "🛡️"
        },
        {
            title: "Medical Security",
            desc: "Access best healthcare without worrying about draining your lifetime savings.",
            icon: "🏥"
        },
        {
            title: "Tax Savings",
            desc: "Save tax under section 80C (Term) and 80D (Health) of the Income Tax Act.",
            icon: "💰"
        },
        {
            title: "Peace of Mind",
            desc: "Live stress-free knowing your loved ones are secured against uncertainties.",
            icon: "🕊️"
        }
    ];

    return (
        <section id="benefits" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 className="section-title">Key Benefits</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '50px' }}>
                    {benefits.map((item, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            padding: '30px',
                            borderRadius: '10px',
                            transition: 'transform 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '20px',
                                background: '#f0f7ff',
                                width: '100px',
                                height: '100px',
                                lineHeight: '100px',
                                borderRadius: '50%',
                                margin: '0 auto 20px'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-primary)' }}>{item.title}</h3>
                            <p style={{ color: '#666' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
