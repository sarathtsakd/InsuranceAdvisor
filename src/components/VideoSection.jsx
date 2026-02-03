import React from 'react';

const VideoSection = () => {
    return (
        <section id="videos" className="section" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <h2 className="section-title">Learn Through Videos</h2>
                <p className="section-subtitle">Simplified explanations to help you make informed decisions.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '40px'
                }}>
                    {/* Video 1: Term Insurance */}
                    <div style={{ background: '#fff', padding: '10px', borderRadius: '10px', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', background: '#000' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/BNcwjoVFQ2w"
                                title="Term Insurance Explained"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h4 style={{ padding: '15px 5px 5px', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Introduction to Term Insurance</h4>
                    </div>

                    {/* Video 2: Health Insurance */}
                    <div style={{ background: '#fff', padding: '10px', borderRadius: '10px', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', background: '#000' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/cOXttb0Vvoo"
                                title="Health Insurance Explained"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h4 style={{ padding: '15px 5px 5px', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Why Health Insurance?</h4>
                    </div>

                    {/* Video 3: Myths */}
                    <div style={{ background: '#fff', padding: '10px', borderRadius: '10px', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', background: '#000' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/nfiYL4CdCJs"
                                title="Insurance Myths"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h4 style={{ padding: '15px 5px 5px', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Top 5 Insurance Myths</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
