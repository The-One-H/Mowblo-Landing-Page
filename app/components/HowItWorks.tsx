
const HowItWorks = () => {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">Get your yard done in 4 simple steps.</p>
                </div>

                <div className="steps-container">
                    {/* Step 1 */}
                    <div className="step-item">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Enter Your Address</h3>
                            <p>Tell us where you need service. We'll show you available pros in your area and instant pricing.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step-item">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Choose Your Service</h3>
                            <p>Snow removal, lawn mowing, edging, or full property maintenance. Pick what you need.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step-item">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Book &amp; Track</h3>
                            <p>Confirm your booking and track your provider in real-time. Get notifications upon arrival.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="step-item">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Rate &amp; Relax</h3>
                            <p>Rate your experience and enjoy your perfectly maintained property.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .how-it-works {
          background-color: var(--color-surface);
        }
        .section-header { margin-bottom: 60px; }
        .section-title { font-size: 2.5rem; margin-bottom: 1rem; }
        .section-subtitle { font-size: 1.25rem; color: var(--color-text-muted); }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          position: relative;
        }

        .step-item {
          text-align: center;
          padding: 20px;
          position: relative;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--color-text);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 auto 24px;
          box-shadow: var(--shadow-lg);
          font-family: var(--font-display);
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }

        .step-content p {
          color: var(--color-text-muted);
          font-size: 1rem;
        }
      `}</style>
        </section>
    );
};

export default HowItWorks;
