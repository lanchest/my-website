import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Tag } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-img">
          <img src={project.image} alt={project.title} />
          <span className="modal-category">{project.categoryName}</span>
        </div>

        <div className="modal-body">
          <h2>{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>

          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="modal-tag">
                <Tag size={13} /> {tag}
              </span>
            ))}
          </div>

          <div className="modal-section">
            <h3>專案亮點與特色</h3>
            <ul className="modal-features">
              {project.features.map((feat, i) => (
                <li key={i}>
                  <CheckCircle size={16} className="feature-check" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>技術架構說明</h3>
            <p className="modal-tech-desc">{project.techDetail}</p>
          </div>

          <div className="modal-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                線上展演預覽 <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                GitHub 原始碼 <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          backdrop-filter: blur(4px);
          transition: background 0.2s ease;
        }
        .modal-close-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }
        .modal-header-img {
          position: relative;
          width: calc(100% + 4rem);
          margin: -2rem -2rem 1.5rem -2rem;
          height: 240px;
          overflow: hidden;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }
        .modal-header-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-category {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(6px);
          color: #fff;
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .modal-body h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
        }
        .modal-subtitle {
          color: var(--accent-primary);
          font-weight: 600;
          margin-bottom: 1.2rem;
        }
        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .modal-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 500;
        }
        .modal-section {
          margin-bottom: 1.5rem;
        }
        .modal-section h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .modal-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .modal-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .feature-check {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .modal-tech-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
