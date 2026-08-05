import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: '關於我', href: '#about' },
    { name: '技能地圖', href: '#skills' },
    { name: '精選作品', href: '#projects' },
    { name: '聯絡我', href: '#contact' },
  ];

  return (
    <header className="navbar-container glass-panel">
      <div className="navbar-inner">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Code2 size={22} className="logo-svg" />
          </div>
          <span className="logo-text">
            王小明 <span className="logo-badge">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? '切換為亮色模式' : '切換為深色模式'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="mobile-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer glass-panel">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          border-bottom: 1px solid var(--border-color);
        }
        .navbar-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .logo-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: var(--glow-shadow);
        }
        .logo-badge {
          font-size: 0.75rem;
          padding: 0.15rem 0.5rem;
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          border-radius: var(--radius-full);
          font-weight: 600;
          margin-left: 0.4rem;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
        .theme-toggle {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .theme-toggle:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: scale(1.05);
        }
        .mobile-actions {
          display: none;
          gap: 0.75rem;
          align-items: center;
        }
        .mobile-toggle {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .mobile-drawer {
          display: flex;
          flex-direction: column;
          padding: 1rem 1.5rem 1.5rem;
          border-top: 1px solid var(--border-color);
          gap: 1rem;
        }
        .mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-actions {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
