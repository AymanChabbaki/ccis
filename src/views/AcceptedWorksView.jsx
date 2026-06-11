import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Users,
  Search,
  Sparkles,
  ChevronRight,
  BookMarked
} from 'lucide-react';
import { acceptedPapers } from '../data/papers';

const AcceptedWorksView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPapers = acceptedPapers.filter(paper => {
    const searchLower = searchTerm.toLowerCase();
    return (
      paper.title.toLowerCase().includes(searchLower) ||
      paper.authors.toLowerCase().includes(searchLower) ||
      paper.id.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="container">
      <div className="accepted-works-registry no-card">
        
        {/* Page Header (Modernized) */}
        <div className="hero-header">
          <motion.div 
            className="header-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge">
              <Sparkles size={14} className="accent" />
              <span>OFFICIAL REGISTRY</span>
            </div>
            <h1 className="title-gradient">ACCEPTED WORKS</h1>
            <p className="subtitle">
              Discover the cutting-edge research selected for presentation at ICISCT 2026. 
              The detailed session program, presentation schedules, and participant allocation information will be published soon. ICISCT 2026 will be held in a hybrid format, with both on-site and online presentations.
            </p>
          </motion.div>

          <motion.div 
            className="header-actions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/*<a href="/Papers.xls" className="btn-glow" download>
             <div className="btn-bg"></div>
              <span className="btn-text"><Download size={16} /> DATASET (.XLS)</span>
            </a> */}
            <button className="btn-outline">
              <Download size={16} /> FULL PROGRAM [SOON]
            </button>
          </motion.div>
        </div>
        {/*
        
        <motion.div 
          className="search-palette"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="search-input-wrapper">
            <Search size={22} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search research by title, author, or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="super-search"
            />
            {searchTerm && (
              <div className="results-badge">
                {filteredPapers.length} FOUND
              </div>
            )}
          </div>
        </motion.div>
       
        {/* Modern Ledger Section 
        <div className="registry-section">
          <div className="ledger-header">
            <div className="col-id">ID</div>
            <div className="col-title">RESEARCH DIRECTORY</div>
            <div className="col-authors">AUTHORS</div>
          </div>
          <div className="papers-ledger-container">
            <AnimatePresence mode="popLayout">
              {filteredPapers.map((paper, index) => (
                <motion.div 
                  key={paper.id} 
                  className="paper-ledger-row"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
                  transition={{ 
                    duration: 0.35, 
                    delay: index < 15 ? index * 0.03 : 0,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  layout
                >
                  <div className="row-glow"></div>
                  <div className="row-indicator"></div>
                  
                  <div className="col-id">
                    #{String(paper.id).padStart(3, '0')}
                  </div>
                  <div className="col-title">
                    <h3 className="paper-title-text">{paper.title}</h3>
                  </div>
                  <div className="col-authors">
                    <Users size={14} className="accent author-icon" />
                    <span className="authors-text">{paper.authors.replace(/\g, '')}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredPapers.length === 0 && (
            <motion.div 
              className="no-results-modern"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="empty-icon-wrapper">
                <Search size={32} className="accent" />
                <div className="ping-ring"></div>
              </div>
              <h3>NO MATCHING RESEARCH</h3>
              <p>We couldn't find any papers matching "{searchTerm}"</p>
              <button className="btn-reset" onClick={() => setSearchTerm('')}>
                CLEAR SEARCH
              </button>
            </motion.div>
          )}
        </div>
      </div>
*/}
      <style jsx>{`
        .accepted-works-registry {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 60px;
          min-height: 80vh;
        }

        /* Hero Header */
        .hero-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 40px;
          position: relative;
        }
        .hero-header::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 150px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), transparent);
        }
        .header-content {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #fff;
          width: fit-content;
        }
        .title-gradient {
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.1;
          background: linear-gradient(to right, #fff, rgba(255,255,255,0.5));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* Buttons */
        .btn-glow {
          position: relative;
          padding: 14px 28px;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          justify-content: center;
        }
        .btn-bg {
          position: absolute;
          inset: 0;
          background: var(--accent);
          opacity: 0.8;
          transition: 0.3s;
        }
        .btn-glow:hover .btn-bg {
          opacity: 1;
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.4);
        }
        .btn-text {
          position: relative;
          z-index: 1;
          color: var(--primary);
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: 1px;
        }
        .btn-outline {
          padding: 14px 28px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: not-allowed;
          opacity: 0.5;
        }

        /* Command Palette Search */
        .search-palette {
          display: flex;
          justify-content: center;
          margin-top: -20px;
        }
        .search-input-wrapper {
          position: relative;
          width: 100%;
          max-width: 800px;
          background: #050E1D;
          border-radius: 16px;
          padding: 5px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.05);
          transition: 0.3s;
        }
        .search-input-wrapper:focus-within {
          border-color: rgba(0, 229, 255, 0.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 0 4px rgba(0, 229, 255, 0.1);
        }
        .search-icon {
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--accent);
        }
        .super-search {
          width: 100%;
          padding: 22px 20px 22px 65px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1.15rem;
          font-family: inherit;
        }
        .super-search:focus { outline: none; }
        .super-search::placeholder { color: rgba(255,255,255,0.3); font-weight: 300; }
        
        .results-badge {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.05);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-secondary);
          letter-spacing: 1px;
        }

        /* Modern Ledger Section */
        .ledger-header {
          display: grid;
          grid-template-columns: 80px 1fr 320px;
          gap: 20px;
          padding: 15px 30px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.05);
          color: var(--accent);
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .papers-ledger-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 15px;
        }

        /* Ledger Row */
        .paper-ledger-row {
          position: relative;
          display: grid;
          grid-template-columns: 80px 1fr 320px;
          gap: 20px;
          align-items: center;
          padding: 24px 30px;
          background: rgba(11, 32, 70, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
        }

        /* Glowing backdrop effect on hover */
        .row-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0, 229, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 0;
        }

        /* Accent bar on the left edge */
        .row-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0%;
          background: var(--accent);
          transition: all 0.3s ease;
          z-index: 1;
        }

        /* Hover states */
        .paper-ledger-row:hover {
          background: rgba(11, 32, 70, 0.45);
          border-color: rgba(0, 229, 255, 0.15);
          transform: translateX(8px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .paper-ledger-row:hover .row-glow {
          opacity: 1;
        }

        .paper-ledger-row:hover .row-indicator {
          height: 100%;
        }

        /* Columns inside Row */
        .col-id {
          font-family: monospace;
          font-size: 0.95rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.5px;
          z-index: 1;
        }
        
        .col-title {
          z-index: 1;
        }

        .paper-title-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.4;
          margin: 0;
          transition: color 0.3s ease;
        }

        .paper-ledger-row:hover .paper-title-text {
          color: var(--accent);
        }

        .col-authors {
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 1;
        }

        .author-icon {
          flex-shrink: 0;
        }

        .authors-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          opacity: 0.85;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .paper-ledger-row:hover .authors-text {
          color: #fff;
          opacity: 1;
        }

        /* Empty State */
        .no-results-modern {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          text-align: center;
          background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%);
          border-radius: 20px;
          border: 1px dashed rgba(255,255,255,0.05);
        }
        .empty-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 229, 255, 0.05);
          border-radius: 50%;
          margin-bottom: 25px;
        }
        .ping-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid var(--accent);
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .no-results-modern h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 10px;
        }
        .no-results-modern p {
          color: var(--text-secondary);
          margin-bottom: 25px;
        }
        .btn-reset {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-reset:hover {
          background: #fff;
          color: #000;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .hero-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
          .header-actions {
            width: 100%;
            flex-direction: row;
          }
          .btn-glow, .btn-outline { flex: 1; }
          
          .ledger-header {
            grid-template-columns: 80px 1fr 220px;
            padding: 12px 20px;
          }
          .paper-ledger-row {
            grid-template-columns: 80px 1fr 220px;
            padding: 18px 20px;
          }
        }

        @media (max-width: 768px) {
          .ledger-header {
            display: none;
          }
          .paper-ledger-row {
            grid-template-columns: 60px 1fr;
            gap: 10px 15px;
            padding: 18px 15px;
          }
          .col-authors {
            grid-column: 2;
            margin-top: 5px;
          }
          .paper-ledger-row:hover {
            transform: translateX(4px);
          }
        }

        @media (max-width: 600px) {
          .title-gradient { font-size: 2.5rem; }
          .header-actions { flex-direction: column; }
          .search-input-wrapper { border-radius: 12px; }
          .super-search { padding: 18px 20px 18px 55px; font-size: 1rem; }
          .results-badge { display: none; }
        }
      `}</style>
    </div>
  );
};

export default AcceptedWorksView;
