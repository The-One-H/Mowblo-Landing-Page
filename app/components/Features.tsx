
const Features = () => {
    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Why Mowblo?</h2>
                    <p className="section-subtitle">Experience the future of yard care.</p>
                </div>

                <div className="features-grid">
                    {/* Feature 1 */}
                    <div className="feature-card winter">
                        <div className="icon-wrapper winter-bg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                            {/* Replacing with Snowflake SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M12 2v20" /><path d="m20 20-5.6-5.6" /><path d="m4 4 5.6 5.6" /><path d="m4 20 5.6-5.6" /><path d="m20 4-5.6 5.6" /></svg>
                        </div>
                        <h3>Winter Ready</h3>
                        <p>Snow removal services when you need them most. Track your plow in real-time.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card summer">
                        <div className="icon-wrapper summer-bg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 17-1.4-1.4" /><path d="M4.9 4.9 3.5 3.5" /><path d="m14 12 1 1" /><path d="m2 12h2" /><path d="M22 12h-2" /><path d="m19.1 4.9-1.4 1.4" /><path d="M7 17l-1.4 1.4" /></svg>
                            {/* Leaf icon substitution for better relevance if possible but simple sun/nature works */}
                        </div>
                        <h3>Summer Perfect</h3>
                        <p>Professional lawn care delivered on your schedule. Mowing, edging, trimming.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                        </div>
                        <h3>Instant Booking</h3>
                        <p>No more phone calls. Book services in under 30 seconds and get confirmed pros.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                        </div>
                        <h3>Transparent Pricing</h3>
                        <p>See upfront prices before you book. No hidden fees, no surprises.</p>
                    </div>

                    {/* Feature 5 */}
                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3>Trusted Pros</h3>
                        <p>Every provider is background-checked, insured, and rated by your neighbors.</p>
                    </div>

                    {/* Feature 6 */}
                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                        </div>
                        <h3>Real-Time Tracking</h3>
                        <p>Watch your service provider arrive, work, and complete your job.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .section-header { margin-bottom: 60px; }
        .section-title { font-size: 2.5rem; margin-bottom: 1rem; color: var(--color-text); }
        .section-subtitle { font-size: 1.25rem; color: var(--color-text-muted); }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          background: white;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: rgba(0,0,0,0.05);
        }

        .feature-card.winter:hover { border-color: var(--color-winter); }
        .feature-card.summer:hover { border-color: var(--color-summer); }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          background: var(--color-surface);
          color: var(--color-text);
        }

        .winter-bg { background: #e0f2fe; color: var(--color-winter); }
        .summer-bg { background: #dcfce7; color: var(--color-summer); }
        
        h3 { font-size: 1.5rem; margin-bottom: 12px; }
        p { color: var(--color-text-muted); }
      `}</style>
        </section>
    );
};

export default Features;
