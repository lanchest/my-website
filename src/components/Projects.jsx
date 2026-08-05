import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'DevPulse — 數據與開發者分析儀表板',
      subtitle: '即時數據監控與團隊效能視覺化平台',
      category: 'fullstack',
      categoryName: '全端專案',
      image: '/dashboard.jpg',
      tags: ['React', 'Vite', 'Node.js', 'Chart.js', 'Tailwind'],
      shortDesc: '為中大型開發團隊設計的即時效能監控儀表板，支援動態圖表與任務追蹤。',
      features: [
        '即時數據串流監控與自訂圖表佈局',
        '團隊 KPI 與任務完成度多維度數據分析',
        '支援深色 / 淺色 Glassmorphism 主題與 RWD',
        '整合權限控管與 API 串接',
      ],
      techDetail: '前端採用 React 19 與 Vite 打造高效能單頁應用，搭配 CSS 變數實現流暢的 Glassmorphism 視覺風格；後端採用 RESTful API 處理大數據匯總。',
      liveUrl: 'https://example.com/devpulse',
      githubUrl: 'https://github.com/example/devpulse',
    },
    {
      id: 2,
      title: 'Aurora Studio — 品牌電商購物體驗平台',
      subtitle: '沉浸式極簡風格與高效結帳購物車',
      category: 'frontend',
      categoryName: '前端精選',
      image: '/ecommerce.jpg',
      tags: ['React', 'Vanilla CSS', 'Context API', 'Stripe'],
      shortDesc: '具備極致視覺感受的電商購物網站，主打流暢的購物車切換與響應式商品展示。',
      features: [
        '流暢無縫的動態購物車與結帳流程',
        '商品多重條件快速篩選與動態搜尋',
        '優化圖片 Lazy-loading 與 Core Web Vitals',
        '模組化元件與優良的 SEO 架構',
      ],
      techDetail: '運用 React Context API 處理跨元件購物車狀態管理，配合自訂 CSS Micro-animations 提供媲美原生 App 的互動手感。',
      liveUrl: 'https://example.com/aurora',
      githubUrl: 'https://github.com/example/aurora-store',
    },
    {
      id: 3,
      title: 'MindCraft AI — 智慧生成與協同工作區',
      subtitle: '結合大型語言模型與即時繪圖的 AI 工具箱',
      category: 'tools',
      categoryName: 'AI 應用 / 工具',
      image: '/ai_chat.jpg',
      tags: ['React', 'Python API', 'OpenAI', 'Glassmorphism'],
      shortDesc: '整合多種 AI 模型與畫布的工作空間，幫助開發者與設計師快速發想靈感。',
      features: [
        '智慧提示詞 (Prompt) 助理與多模式對話',
        '即時畫布生成與 Markdown / Code 高亮預覽',
        '對話歷史紀錄同步與雲端儲存',
        '精美的極光動態背景與氣氛燈光',
      ],
      techDetail: '前端使用 WebSocket 技術實現 AI 文字流式 (Streaming) 輸出，搭配語法高亮套件提供最佳的程式碼閱讀體驗。',
      liveUrl: 'https://example.com/mindcraft',
      githubUrl: 'https://github.com/example/mindcraft-ai',
    },
  ];

  const categories = [
    { id: 'all', name: '全部作品' },
    { id: 'fullstack', name: '全端專案' },
    { id: 'frontend', name: '前端展示' },
    { id: 'tools', name: 'AI / 工具應用' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="tag">Portfolio</span>
        <h2>精選作品集</h2>
        <p>用心雕琢的專案成果，展現技術實力與產品設計思維</p>
      </div>

      <div className="project-filters">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`filter-btn ${filter === c.id ? 'active' : ''}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass-panel animate-fade-in">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-primary overlay-btn"
                >
                  <Eye size={16} /> 查看詳細介紹
                </button>
              </div>
              <span className="project-badge">{project.categoryName}</span>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDesc}</p>

              <div className="project-tags">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="tag-pill">{t}</span>
                ))}
              </div>

              <div className="project-footer">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="read-more-link"
                >
                  專案詳情與架構 &rarr;
                </button>

                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub 原始碼">
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="線上演示">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.55rem 1.3rem;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-btn:hover {
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
        .filter-btn.active {
          background: var(--accent-gradient);
          color: #fff;
          border-color: transparent;
          box-shadow: var(--glow-shadow);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 2rem;
        }
        .project-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-hover);
          box-shadow: var(--card-shadow-hover);
        }
        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: var(--bg-tertiary);
        }
        .project-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image-wrapper img {
          transform: scale(1.06);
        }
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .overlay-btn {
          padding: 0.65rem 1.3rem;
          font-size: 0.9rem;
        }
        .project-badge {
          position: absolute;
          top: 0.8rem;
          left: 0.8rem;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(6px);
          color: #fff;
          padding: 0.25rem 0.7rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .project-content {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }
        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }
        .tag-pill {
          font-size: 0.78rem;
          font-weight: 600;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }
        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
        .read-more-link {
          background: none;
          border: none;
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0;
        }
        .read-more-link:hover {
          text-decoration: underline;
        }
        .project-links {
          display: flex;
          gap: 0.75rem;
        }
        .project-links a {
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .project-links a:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}
