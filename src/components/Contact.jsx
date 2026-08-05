import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle, MessageSquare, Github, Linkedin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="tag">Get in Touch</span>
        <h2>聯絡我</h2>
        <p>無論是專案合作、技術交流或職缺邀請，都歡迎隨時與我聯繫！</p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Info Cards */}
        <div className="contact-info">
          <div className="info-card glass-panel">
            <div className="info-icon">
              <Mail size={22} />
            </div>
            <div>
              <h4>電子郵件</h4>
              <p>xiaoming.wang@example.com</p>
            </div>
          </div>

          <div className="info-card glass-panel">
            <div className="info-icon">
              <MapPin size={22} />
            </div>
            <div>
              <h4>居住地區</h4>
              <p>台灣 台北市 / 支援遠端協作</p>
            </div>
          </div>

          <div className="info-card glass-panel">
            <div className="info-icon">
              <Clock size={22} />
            </div>
            <div>
              <h4>回覆時間</h4>
              <p>通常於 24 小時內回覆訊息</p>
            </div>
          </div>

          <div className="social-links-panel glass-panel">
            <h4>社群與程式碼平台</h4>
            <div className="social-buttons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Github size={20} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-container glass-panel">
          <h3><MessageSquare size={22} className="gradient-text" /> 傳送快速訊息</h3>

          {submitted && (
            <div className="success-toast animate-fade-in">
              <CheckCircle size={22} />
              <div>
                <strong>訊息已成功送出！</strong>
                <p>感謝您的來信，我會盡快向您回覆。</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">您的姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="例如：陳大明"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email 信箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">主旨</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="例如：專案合作諮詢 / 交流邀請"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">訊息內容</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="請輸入您想溝通的細節..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>處理中...</span>
              ) : (
                <>
                  送出訊息 <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2rem;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .info-card {
          padding: 1.5rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .info-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.12);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .info-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .social-links-panel {
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }
        .social-links-panel h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .social-buttons {
          display: flex;
          gap: 1rem;
        }
        .social-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.75rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.25s ease;
        }
        .social-btn:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px);
        }
        .contact-form-container {
          padding: 2.2rem;
          border-radius: var(--radius-lg);
        }
        .contact-form-container h3 {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .success-toast {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #16a34a;
          padding: 1rem 1.2rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
        }
        .success-toast p {
          font-size: 0.9rem;
          margin-top: 0.1rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .form-group input,
        .form-group textarea {
          padding: 0.8rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
          font-size: 1rem;
        }
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
