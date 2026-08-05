import React, { useState } from 'react';
import { Layout, Server, Wrench, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: '全部技能' },
    { id: 'frontend', name: '前端開發', icon: <Layout size={18} /> },
    { id: 'backend', name: '後端與資料庫', icon: <Server size={18} /> },
    { id: 'tools', name: '工具與開發經驗', icon: <Wrench size={18} /> },
  ];

  const skillList = [
    { name: 'HTML5 / CSS3', category: 'frontend', level: 92, desc: '語意化結構、Flexbox/Grid 排版、動畫與 CSS 變數' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 88, desc: '非同步處理、DOM 操作、閉包與模組化開發' },
    { name: 'React / Vite', category: 'frontend', level: 85, desc: 'Hooks 狀態管理、組件化設計、現代 Web 應用建置' },
    { name: 'Tailwind CSS / Vanilla CSS', category: 'frontend', level: 90, desc: '響應式設計、Glassmorphism 視覺質感與自訂主題' },
    
    { name: 'Python', category: 'backend', level: 80, desc: '腳本自動化、資料處理與 RESTful API 開發' },
    { name: 'Node.js / Express', category: 'backend', level: 75, desc: '伺服器路由建立、中間件與簡化 API 接口' },
    { name: 'SQL / PostgreSQL', category: 'backend', level: 78, desc: '資料庫 Schema 設計、CRUD 查詢與關聯操作' },
    
    { name: 'Git / GitHub', category: 'tools', level: 88, desc: '版本控制、Branch 管理與團隊協同開發流程' },
    { name: 'Vercel / Netlify / Surge', category: 'tools', level: 85, desc: '雲端靜態託管、自動化 CI/CD 發佈部署' },
    { name: 'VS Code & Web Tools', category: 'tools', level: 95, desc: '高效程式開發環境、Debugging 與效能分析' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillList 
    : skillList.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="tag">Tech Stack</span>
        <h2>技能地圖</h2>
        <p>持續學習與累積的技術堆疊，專注於現代化 Web 開發</p>
      </div>

      <div className="skills-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div key={idx} className="skill-card glass-panel animate-fade-in">
            <div className="skill-card-header">
              <div className="skill-title">
                <CheckCircle2 size={18} className="skill-icon" />
                <h3>{skill.name}</h3>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>

            <p className="skill-desc">{skill.desc}</p>

            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.4rem;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .tab-btn:hover {
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
        .tab-btn.active {
          background: var(--accent-gradient);
          color: #fff;
          border-color: transparent;
          box-shadow: var(--glow-shadow);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .skill-card {
          padding: 1.6rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--card-shadow-hover);
        }
        .skill-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .skill-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .skill-icon {
          color: var(--accent-primary);
        }
        .skill-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .skill-percentage {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-primary);
          font-family: var(--font-heading);
        }
        .skill-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 0.4rem;
        }
        .progress-bar-bg {
          width: 100%;
          height: 7px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: var(--radius-full);
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
}
