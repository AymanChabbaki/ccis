import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileEdit, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  ListOrdered, 
  Layers,
  FileCheck,
  AlertTriangle
} from 'lucide-react';

const SubmissionsView = () => {
  return (
    <div className="container">
      <div className="author-portal no-card">
        {/* Header HUD */}
        <div className="portal-header-hud">
          <div className="accent-line"></div>
          <h2>AUTHOR <span className="text-secondary">SUBMISSIONS</span></h2>
          <p className="portal-sub">Call for Original Technical & Experimental Contributions</p>
        </div>

        <div className="submission-grid">
          {/* Main Guidelines */}
          <div className="submission-main">
            <div className="guidelines-strip">
              <div className="strip-header">
                <FileEdit size={16} className="accent" />
                <h3>SUBMISSION GUIDELINES</h3>
              </div>
              <p>We are pleased to invite you to submit original contributions to CWISCT'2026 via the official EasyChair system.</p>
              
              <div className="easychair-cta">
                <a href="https://easychair.org/conferences/?conf=wisct2020" target="_blank" rel="noreferrer" className="btn-portal-primary">
                  <ExternalLink size={16} /> ACCESS EASYCHAIR PORTAL
                </a>
              </div>

              <div className="rules-list">
                <div className="rule-item">
                  <CheckCircle2 size={16} className="accent" />
                  <span>Submissions must not have been previously published or under consideration elsewhere.</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={16} className="accent" />
                  <span>Peer-reviewed based on relevance, originality, and clarity.</span>
                </div>
                <div className="rule-item warning">
                  <AlertTriangle size={16} />
                  <span>Any submission violating guidelines will be eliminated from the review process.</span>
                </div>
              </div>
            </div>

            {/* Poster & Demo Rules */}
            <div className="format-rules-strip">
              <div className="strip-header">
                <Layers size={16} className="accent" />
                <h3>POSTERS & DEMO FORMAT</h3>
              </div>
              <div className="rules-grid">
                <div className="format-rule">
                  <span className="rule-label">POSTER ABSTRACT</span>
                  <p>Maximum 1 page A4 explaining objective, context, methodology, and results.</p>
                </div>
                <div className="format-rule">
                  <span className="rule-label">POSTER DIMENSIONS</span>
                  <p>A0 Size (84cm x 119cm) in PORTRAIT format.</p>
                </div>
                <div className="format-rule">
                  <span className="rule-label">DEMOS & PROTOTYPES</span>
                  <p>Opportunity for innovators to share solutions. Abstract submission required using the official template.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Types & Downloads */}
          <div className="submission-sidebar">
            <div className="sidebar-section">
              <div className="strip-header">
                <ListOrdered size={16} className="accent" />
                <h3>SUBMISSION TYPES</h3>
              </div>
              <ul className="type-list">
                <li><span className="type-dot"></span> REGULAR PAPERS (4 - 6 Pages)</li>
                <li><span className="type-dot"></span> SHORT PAPERS (2 - 4 Pages)</li>
                <li><span className="type-dot"></span> POSTERS & DEMOS</li>
              </ul>
            </div>

            <div className="sidebar-section highlight">
              <div className="strip-header">
                <Download size={16} className="accent" />
                <h3>FORMATTING & TEMPLATES</h3>
              </div>
              <div className="template-download-hub">
                <div className="template-item">
                  <FileCheck size={18} className="icon-blue" />
                  <div className="template-meta">
                    <span className="temp-name">IEEE A4 TEMPLATE</span>
                    <a href="#" className="btn-download-mini">DOWNLOAD .DOCX</a>
                  </div>
                </div>
                <div className="template-item">
                  <FileCheck size={18} className="icon-blue" />
                  <div className="template-meta">
                    <span className="temp-name">EXPERIENCE TEMPLATE</span>
                    <a href="#" className="btn-download-mini">DOWNLOAD .DOCX</a>
                  </div>
                </div>
              </div>
              <p className="language-note">English is the required language for all submissions.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .author-portal {
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .portal-header-hud {
          border-left: 4px solid var(--accent);
          padding-left: 25px;
        }
        .portal-header-hud h2 { font-size: 2.5rem; font-weight: 800; margin-bottom: 5px; }
        .portal-sub { font-size: 0.95rem; color: var(--text-secondary); letter-spacing: 1px; }
        .accent-line { width: 50px; height: 1px; background: var(--accent); margin-bottom: 15px; }

        .submission-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 60px;
          margin-bottom: 60px;
        }

        .strip-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 10px;
        }
        .strip-header h3 { font-size: 0.85rem; font-weight: 800; letter-spacing: 2px; color: #fff; margin: 0; }

        .guidelines-strip { margin-bottom: 50px; }
        .easychair-cta { margin: 30px 0; }
        .btn-portal-primary {
          background: var(--accent);
          color: var(--primary);
          padding: 15px 30px;
          border-radius: 4px;
          font-weight: 800;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
          transition: 0.3s;
        }
        .btn-portal-primary:hover { transform: translateY(-3px); box-shadow: 0 5px 25px rgba(0, 229, 255, 0.5); }

        .rules-list { display: flex; flex-direction: column; gap: 15px; }
        .rule-item { display: flex; align-items: center; gap: 15px; font-size: 0.9rem; color: var(--text-secondary); }
        .rule-item.warning { color: #f4c430; padding: 15px; background: rgba(244, 196, 48, 0.05); border-left: 2px solid #f4c430; font-weight: 600; }

        .rules-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
        .format-rule { display: flex; flex-direction: column; gap: 10px; }
        .rule-label { font-size: 0.65rem; font-weight: 900; color: var(--accent); letter-spacing: 2px; }
        .format-rule p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin: 0; }

        .sidebar-section { margin-bottom: 40px; }
        .type-list { list-style: none; display: flex; flex-direction: column; gap: 15px; }
        .type-list li { font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 12px; }
        .type-dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }

        .template-download-hub { display: flex; flex-direction: column; gap: 20px; margin-top: 20px; }
        .template-item {
          display: flex; gap: 15px; align-items: center;
          background: rgba(255, 255, 255, 0.03);
          padding: 15px;
          border: 1px solid var(--border-glass);
          border-radius: 4px;
        }
        .template-meta { display: flex; flex-direction: column; gap: 5px; }
        .temp-name { font-size: 0.75rem; font-weight: 800; letter-spacing: 1px; color: #fff; }
        .btn-download-mini { font-size: 0.65rem; font-weight: 900; color: var(--accent); text-decoration: none; border-bottom: 1px dotted var(--accent); width: fit-content; }
        .language-note { font-size: 0.7rem; font-weight: 700; color: var(--text-secondary); opacity: 0.5; margin-top: 20px; }

        @media (max-width: 1024px) {
          .submission-grid { grid-template-columns: 1fr; }
          .rules-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 360px) {
          .portal-header-hud { padding-left: 15px; border-left-width: 2px; }
          .portal-header-hud h2 { font-size: 1.8rem; }
          .author-portal { gap: 30px; }
        }
      `}</style>
    </div>
  );
};

export default SubmissionsView;
