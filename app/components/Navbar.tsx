import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link href="/" className="logo">
                    <Image src="/logo.png" alt="Mowblo Logo" width={40} height={40} />
                    <span className="brand-name">Mowblo</span>
                </Link>
                <div className="nav-links">
                    <Link href="#how-it-works">How It Works</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#signup" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--color-text);
          font-family: var(--font-display);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-links a:not(.btn) {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--color-text);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Mobile menu to be implemented later if needed */
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
