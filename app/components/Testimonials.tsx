
const Testimonials = () => {
    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">What Our Customers Say</h2>
                    <p className="section-subtitle">Join thousands of happy homeowners.</p>
                </div>

                <div className="testimonials-grid">
                    {/* Review 1 */}
                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <p className="quote">"I used to stress about snow removal all winter. Now I wake up to a clear driveway every time it snows. Mowblo is a lifesaver!"</p>
                        <div className="author">
                            <div className="avatar winter-bg">S</div>
                            <div className="author-info">
                                <h4>Sarah M.</h4>
                                <span>Ottawa</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <p className="quote">"The transparency is incredible. I know exactly what I'm paying, when they're coming, and the work is always top-notch."</p>
                        <div className="author">
                            <div className="avatar summer-bg">M</div>
                            <div className="author-info">
                                <h4>Michael T.</h4>
                                <span>Toronto</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <p className="quote">"As a working parent, Mowblo has given me back my weekends. My lawn looks better than ever and I don't lift a finger."</p>
                        <div className="author">
                            <div className="avatar summer-bg">J</div>
                            <div className="author-info">
                                <h4>Jennifer K.</h4>
                                <span>Montreal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .testimonials { background-color: white; }
        .section-header { margin-bottom: 60px; }
        .section-title { font-size: 2.5rem; margin-bottom: 1rem; }
        .section-subtitle { font-size: 1.25rem; color: var(--color-text-muted); }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          padding: 40px;
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          position: relative;
        }

        .quote-icon {
          font-size: 4rem;
          color: var(--color-border);
          position: absolute;
          top: 20px;
          left: 20px;
          line-height: 1;
          opacity: 0.5;
        }

        .quote {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
          color: var(--color-text);
        }

        .author {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
        }
        
        .winter-bg { background: var(--color-winter); }
        .summer-bg { background: var(--color-summer); }

        .author-info h4 { margin: 0; font-size: 1rem; }
        .author-info span { font-size: 0.9rem; color: var(--color-text-muted); }
      `}</style>
        </section>
    );
};

export default Testimonials;
