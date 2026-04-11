import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const NewsTicker = () => {
  const news = [
    "Extended Deadline: May 18, 2020",
    "Proceeding will be submitted to Scopus Indexed Library",
    "Registration is now open for students and researchers",
    "Best papers invited to IJWLTT Special Issue (IGI-Global)"
  ];

  return (
    <div className="news-ticker-bar">
      <div className="ticker-label">
        <AlertCircle size={14} /> <span>NEWS</span>
      </div>
      <div className="ticker-track">
        <motion.div 
          className="ticker-content"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {news.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
          {/* Duplicate for seamless look */}
          {news.map((item, i) => (
            <span key={`dup-${i}`} className="ticker-item">{item}</span>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .news-ticker-bar {
          background: rgba(0, 229, 255, 0.05);
          height: 40px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-glass);
          overflow: hidden;
        }
        .ticker-label {
          background: var(--accent);
          color: var(--primary);
          height: 100%;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          font-size: 0.75rem;
          z-index: 10;
        }
        .ticker-track {
          flex: 1;
          overflow: hidden;
          position: relative;
        }
        .ticker-content {
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 100px;
        }
        .ticker-item {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
