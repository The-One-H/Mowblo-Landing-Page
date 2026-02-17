import Link from 'next/link';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <h2 className="subhead">Your yard. Your schedule. Done right.</h2>
                <h1 className="headline">
                    Winter Snow Removal.<br />
                    Summer Lawn Care.<br />
                    <span className="gradient-text">One Simple App.</span>
                </h1>
                <p className="description">
                    Mowblo connects you with trusted local professionals for snow removal and lawn care services. Book in seconds, track in real-time, and enjoy a perfect yard year-round.
                </p>
                <div className="cta-group">
                    <Link href="#signup" className="btn btn-primary cta-btn">Get Started Free</Link>
                    <Link href="#how-it-works" className="btn btn-outline cta-btn">See How It Works</Link>
                </div>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: var(--header-height);
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(255,255,255,0.1));
          backdrop-filter: contrast(1.1);
          z-index: 1;
        }

        /* Dark overlay gradient for text legibility */
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          max-width: 800px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .subhead {
          font-size: 1.25rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          color: rgba(255,255,255,0.9);
          font-family: var(--font-main);
        }

        .headline {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #a7f3d0, #bae6fd); /* Lighter version for dark bg */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.6;
          color: rgba(255,255,255,0.95);
        }

        .cta-group {
          display: flex;
          gap: 1rem;
        }

        .cta-btn {
          min-width: 180px;
          height: 56px;
          font-size: 1.1rem;
        }
        
        /* Overwrite generic outline for hero specific contrast */
        .btn-outline {
          border-color: white;
          color: white;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
        }

        .btn-primary {
          background: white;
          color: var(--color-summer-dark); /* Contrast against white button */
        }
        .btn-primary:hover {
          background: #f0fdf4;
        }

        @media (max-width: 768px) {
          .headline { font-size: 2.5rem; }
          .hero-content { padding: 40px 20px; }
          .cta-group { flex-direction: column; }
          .cta-btn { width: 100%; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
