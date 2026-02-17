import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link href="/" className="logo-link">
                            <Image src="/logo.png" alt="Mowblo Logo" width={32} height={32} />
                            <span className="brand-name">Mowblo</span>
                        </Link>
                        <p className="footer-tagline">Winter. Summer. Done.</p>
                        <p className="copyright">© 2026 Mowblo Inc. All rights reserved.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Company</h4>
                            <Link href="#">About</Link>
                            <Link href="#">Careers</Link>
                            <Link href="#">Press</Link>
                        </div>
                        <div className="link-column">
                            <h4>Support</h4>
                            <Link href="#">Help Center</Link>
                            <Link href="#">Terms</Link>
                            <Link href="#">Privacy</Link>
                        </div>
                        <div className="link-column">
                            <h4>Contact</h4>
                            <p>hello@mowblo.com</p>
                            <p>1-800-MOWBLO-1</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer {
          padding: 80px 0;
          border-top: 1px solid var(--color-border);
          background: white;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 12px;
          font-family: var(--font-display);
        }

        .footer-tagline {
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }

        .copyright {
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .footer-links {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        .link-column h4 {
          font-size: 1rem;
          margin-bottom: 20px;
          color: var(--color-text);
        }

        .link-column a, .link-column p {
          display: block;
          margin-bottom: 12px;
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .link-column a:hover {
          color: var(--color-summer);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
