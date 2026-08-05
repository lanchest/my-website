import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content animate-fade-in">
        <div className="status-badge">
          <Sparkles size={16} className="sparkle-icon" />
          <span>開放接案與職缺合作中</span>
        </div>

        <div className="avatar-wrapper">
          <img
            className="avatar-img"
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
            alt="王小明的大頭貼"
          />
          <div className="avatar-glow"></div>
        </div>

        <h1 className="hero-title">
          你好，我是 <span className="gradient-text">王小明</span> 👋
        </h1>
        
        <p className="hero-subtitle">
          一位熱愛極致視覺設計與現代 Web 技術的 <strong>全端工程師 / 學生</strong>。
          專注於打造高效能、高質感的數位產品與使用者體驗。
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            瀏覽精選作品 <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            聯絡我 <Mail size={18} />
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card glass-panel">
            <span className="stat-number gradient-text">3+</span>
            <span className="stat-label">專案開發經驗</span>
          </div>
          <div className="stat-card glass-panel">
            <span className="stat-number gradient-text">10+</span>
            <span className="stat-label">掌握核心技術</span>
          </div>
          <div className="stat-card glass-panel">
            <span className="stat-number gradient-text">100%</span>
            <span className="stat-label">持續熱情投入</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-container {
          padding: 6rem 1.5rem 4rem;
          max-width: 1120px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: var(--radius-full);
          color: var(--accent-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .sparkle-icon {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .avatar-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 2rem;
        }
        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 3px solid var(--accent-primary);
          padding: 6px;
          position: relative;
          z-index: 2;
          object-fit: cover;
          box-shadow: var(--card-shadow);
        }
        .avatar-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--accent-gradient);
          filter: blur(25px);
          opacity: 0.6;
          z-index: 1;
          animation: glowPulse 4s infinite alternate;
        }
        @keyframes glowPulse {
          0% { transform: scale(0.9); opacity: 0.4; }
          100% { transform: scale(1.15); opacity: 0.75; }
        }
        .hero-title {
          font-size: 3.25rem;
          font-weight: 800;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
        }
        .hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          max-width: 750px;
          margin: 0 auto;
        }
        .stat-card {
          padding: 1.5rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          transition: transform 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
        }
        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          font-family: var(--font-heading);
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.3rem;
          }
          .hero-subtitle {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
