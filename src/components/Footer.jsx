import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container glass-panel">
      <div className="footer-inner">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} 王小明. All rights reserved.</p>
          <p className="footer-subtext">
            Crafted with React, Vite & Modern CSS
          </p>
        </div>

        <button onClick={scrollToTop} className="scroll-top-btn" title="返回頂部">
          <ArrowUp size={20} />
        </button>
      </div>

      <style>{`
        .footer-container {
          border-top: 1px solid var(--border-color);
          margin-top: 4rem;
        }
        .footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-left p {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .footer-subtext {
          color: var(--text-muted) !important;
          font-size: 0.85rem !important;
          margin-top: 0.2rem;
        }
        .heart-icon {
          color: #ef4444;
          fill: #ef4444;
        }
        .scroll-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .scroll-top-btn:hover {
          background: var(--accent-gradient);
          color: #fff;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: var(--glow-shadow);
        }
      `}</style>
    </footer>
  );
}
