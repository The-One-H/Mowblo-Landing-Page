import Link from 'next/link';

const Pricing = () => {
    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Plans That Work For You</h2>
                    <p className="section-subtitle">Simple, transparent pricing. No hidden fees.</p>
                </div>

                <div className="pricing-grid">
                    {/* Pay As You Go */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Pay As You Go</h3>
                        <p className="plan-desc">Perfect for occasional needs</p>
                        <div className="price">Starting at $35<span className="period">/service</span></div>
                        <ul className="features-list">
                            <li>No subscription required</li>
                            <li>Book services anytime</li>
                            <li>Simple per-service pricing</li>
                            <li>Cancel anytime, no penalty</li>
                        </ul>
                        <Link href="#signup" className="btn btn-outline full-width">Get Started</Link>
                    </div>

                    {/* Mowblo Plus */}
                    <div className="pricing-card featured">
                        <div className="badge">Most Popular</div>
                        <h3 className="plan-name">Mowblo Plus</h3>
                        <p className="plan-desc">For regular maintenance</p>
                        <div className="price">$9.99<span className="period">/month</span></div>
                        <ul className="features-list">
                            <li><strong>10% off</strong> all services</li>
                            <li>Priority booking</li>
                            <li>Seasonal scheduling</li>
                            <li>Preferred provider matching</li>
                        </ul>
                        <Link href="#signup" className="btn btn-primary full-width">Start Free Trial</Link>
                    </div>

                    {/* Mowblo Pro */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Mowblo Pro</h3>
                        <p className="plan-desc">For complete peace of mind</p>
                        <div className="price">$24.99<span className="period">/month</span></div>
                        <ul className="features-list">
                            <li><strong>20% off</strong> all services</li>
                            <li>Unlimited booking</li>
                            <li>Dedicated account manager</li>
                            <li>Custom maintenance plans</li>
                            <li>Same-day emergency service</li>
                        </ul>
                        <Link href="#signup" className="btn btn-outline full-width">Go Pro</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .section-header { margin-bottom: 60px; }
        .section-title { font-size: 2.5rem; margin-bottom: 1rem; }
        .section-subtitle { font-size: 1.25rem; color: var(--color-text-muted); }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          align-items: center;
        }

        .pricing-card {
          background: white;
          padding: 40px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          position: relative;
          transition: transform 0.3s;
        }

        .pricing-card.featured {
          background: #ffffff;
          border: 2px solid var(--color-summer);
          box-shadow: 0 20px 40px rgba(46, 204, 113, 0.15);
          transform: scale(1.05); /* Make it pop */
          z-index: 2;
        }
        
        .badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-summer);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .plan-name { font-size: 1.5rem; margin-bottom: 4px; }
        .plan-desc { color: var(--color-text-muted); margin-bottom: 24px; font-size: 0.95rem;}

        .price { font-size: 2.5rem; font-weight: 800; margin-bottom: 32px; font-family: var(--font-display); }
        .period { font-size: 1rem; font-weight: 500; color: var(--color-text-muted); }

        .features-list {
          list-style: none;
          margin-bottom: 32px;
          text-align: left;
        }

        .features-list li {
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
        }
        
        .features-list li::before {
          content: '✓';
          color: var(--color-summer);
          margin-right: 10px;
          font-weight: 800;
        }

        .full-width { width: 100%; }
        
        @media (max-width: 900px) {
          .pricing-card.featured { transform: none; }
        }
      `}</style>
        </section>
    );
};

export default Pricing;
