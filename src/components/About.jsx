import React from 'react';
import { Code, Palette, Zap, Rocket, Terminal, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: '乾淨俐落的程式碼',
      description: '注重架構可維護性與可擴充性，撰寫高效且易於閱讀的程式碼。',
    },
    {
      icon: <Palette size={24} />,
      title: '現代化視覺美學',
      description: '追求極致的 UI/UX 設計細節，運用微互動與流體動畫打動使用者。',
    },
    {
      icon: <Zap size={24} />,
      title: '效能與優化至上',
      description: '持續關注網站載入速度、SEO 友善度與跨平台響應式最佳化。',
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="tag">About Me</span>
        <h2>關於我</h2>
        <p>結合理性邏輯與感性設計，打造有溫度的數位體驗</p>
      </div>

      <div className="about-grid">
        <div className="about-bio glass-panel">
          <div className="bio-header">
            <Terminal size={22} className="gradient-text" />
            <h3>探索程式與創造的樂趣</h3>
          </div>
          <p>
            我是王小明，目前是一名對 Web 技術充滿熱情的開發者。我喜歡從零開始將點子轉化為具體的產品，並在技術細節中追求完美。
          </p>
          <p>
            除了日常的課業與專案開發，我熱衷於研究最新前端生態系（React、Vite、TypeScript），並嘗試結合後端工具開發全端應用。我相信好的程式碼不僅要能運作，更要帶給使用者愉快的互動感受。
          </p>

          <div className="bio-tags">
            <span className="bio-tag">#熱愛學習</span>
            <span className="bio-tag">#前端開發</span>
            <span className="bio-tag">#UI/UX設計</span>
            <span className="bio-tag">#團隊合作</span>
          </div>
        </div>

        <div className="highlights-column">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card glass-panel">
              <div className="highlight-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }
        .about-bio {
          padding: 2.2rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .bio-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .bio-header h3 {
          font-size: 1.4rem;
          font-weight: 700;
        }
        .about-bio p {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 1.05rem;
        }
        .bio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: auto;
          padding-top: 1rem;
        }
        .bio-tag {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
        }
        .highlights-column {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .highlight-card {
          padding: 1.6rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .highlight-card:hover {
          transform: translateX(6px);
          border-color: var(--accent-primary);
        }
        .highlight-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--accent-gradient);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--glow-shadow);
        }
        .highlight-card h4 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }
        .highlight-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
