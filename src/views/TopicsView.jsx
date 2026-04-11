import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Globe, 
  ShieldCheck, 
  Database, 
  ArrowRight,
  Zap,
  Activity,
  Car,
  Cloud,
  Layers,
  Search
} from 'lucide-react';

const tracks = [
  {
    id: 'smart-systems',
    title: 'Smart City Systems',
    icon: Activity,
    description: 'Developing the integrated ecosystem of modern urban living.',
    topics: [
      'Smart banking & Fintech',
      'Smart Healthcare & Biotech',
      'Smart Home & IoT Automation',
      'Smart University & Education',
      'Smart Governance & Administration',
      'Smart Energy & Environment',
      'Smart Urbanism & Environment',
      'Smart Citizens Engagement'
    ]
  },
  {
    id: 'mobility',
    title: 'Transportation & Mobility',
    icon: Car,
    description: 'Next-generation urban mobility and intelligent logistics.',
    topics: [
      'Smart Transportation Systems',
      'Smart Mobility Solutions',
      'Smart City Planning',
      'Smart Territorial Intelligence',
      'Smart Management Systems',
      'Intelligent Traffic Control'
    ]
  },
  {
    id: 'it-computing',
    title: 'IoT, Cloud & IT',
    icon: Cloud,
    description: 'The computational backbone of connected environments.',
    topics: [
      'IoT Based Developments',
      'Mobile Computing & Devices',
      'Testing & Evaluation Tools',
      'Quality of Service (QoS)',
      'Cloud Computing Techniques',
      'Software for Smart Systems',
      'Information & Computer Science'
    ]
  },
  {
    id: 'data-security',
    title: 'Data Science & Security',
    icon: ShieldCheck,
    description: 'Securing and processing huge volumes of urban information.',
    topics: [
      'Systems & Network Security',
      'Big Data Architectures',
      'Data Mining & Big Data',
      'Natural Language Processing',
      'Image, Video & Speech Processing',
      'Social Networks & Computing',
      'Digital Forensic Systems'
    ]
  },
  {
    id: 'ai-algorithms',
    title: 'AI & Advanced Algorithms',
    icon: Cpu,
    description: 'The intelligence layer driving smart decision making.',
    topics: [
      'Machine Learning & Deep Learning',
      'Artificial Intelligence Models',
      'Algorithms Optimization',
      'Big Data Models & Algorithms',
      'Big Data System Development',
      'Deep Learning Applications'
    ]
  }
];

const TopicsView = () => {
  const [activeTrack, setActiveTrack] = useState(tracks[0]);

  return (
    <div className="container">
      <div className="topics-explorer">
        {/* Left Sidebar: Tracks List */}
        <div className="tracks-sidebar">
          <div className="sidebar-header">
            <Zap size={16} className="accent-icon" />
            <span>CONFERENCE SCOPE</span>
          </div>
          <div className="tracks-list">
            {tracks.map((track) => (
              <button
                key={track.id}
                className={`track-nav-item ${activeTrack.id === track.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveTrack(track)}
              >
                <div className="track-link-content">
                  <track.icon size={18} className="track-icon" />
                  <span>{track.title}</span>
                </div>
                {activeTrack.id === track.id && (
                  <motion.div layoutId="track-glow" className="active-track-indicator" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Pane: Content HUD */}
        <div className="topics-hud">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="hud-content"
            >
              <div className="hud-header">
                <activeTrack.icon size={40} className="large-icon" />
                <div className="hud-title-meta">
                  <span className="track-id-slug">TRACK ID: {activeTrack.id}</span>
                  <h2>{activeTrack.title}</h2>
                </div>
              </div>

              <p className="track-desc">{activeTrack.description}</p>

              <div className="sub-topics-grid">
                {activeTrack.topics.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="sub-topic-row"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ArrowRight size={14} className="node-icon" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="track-cta">
                <button className="btn-hud">Download Track PDF</button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Futuristic Decorative Elements */}
          <div className="hud-corner top-left"></div>
          <div className="hud-corner bottom-right"></div>
          <div className="scan-line"></div>
        </div>
      </div>

      <style jsx>{`
        .topics-explorer {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 40px;
          min-height: 500px;
          margin-top: 20px;
        }

        /* Sidebar Styling */
        .tracks-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
        }
        .accent-icon { color: var(--accent); }
        .tracks-list { display: flex; flex-direction: column; gap: 8px; }
        
        .track-nav-item {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-glass);
          color: #fff;
          padding: 15px 20px;
          border-radius: 12px;
          text-align: left;
          cursor: pointer;
          position: relative;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .track-nav-item:hover { background: rgba(255,255,255,0.05); }
        .track-nav-item.active { border-color: var(--accent); background: rgba(0, 229, 255, 0.05); }
        .track-link-content { display: flex; align-items: center; gap: 15px; font-weight: 600; }
        .track-icon { opacity: 0.6; transition: 0.3s; }
        .active .track-icon { opacity: 1; color: var(--accent); }
        .active-track-indicator {
          position: absolute;
          left: 0;
          top: 20%;
          bottom: 20%;
          width: 3px;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }

        /* HUD Styling */
        .topics-hud {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          padding: 50px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }
        .hud-header { display: flex; align-items: center; gap: 30px; margin-bottom: 30px; }
        .large-icon { color: var(--accent); opacity: 0.8; }
        .track-id-slug { font-size: 0.7rem; font-weight: 800; opacity: 0.4; letter-spacing: 1px; }
        .hud-title-meta h2 { font-size: 2rem; }

        .track-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 600px;
        }

        .sub-topics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 30px;
          margin-bottom: 50px;
        }
        .sub-topic-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          font-size: 0.95rem;
          transition: 0.3s;
        }
        .sub-topic-row:hover { color: var(--accent); padding-left: 5px; }
        .node-icon { color: var(--accent); opacity: 0.5; }

        .btn-hud {
          background: transparent;
          border: 1px solid var(--accent);
          color: var(--accent);
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-hud:hover {
          background: var(--accent);
          color: var(--primary);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
        }

        /* HUD Ornaments */
        .hud-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 1px solid var(--accent);
          opacity: 0.3;
        }
        .top-left { top: 20px; left: 20px; border-right: none; border-bottom: none; }
        .bottom-right { bottom: 20px; right: 20px; border-left: none; border-top: none; }
        
        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.1;
          animation: scan 4s linear infinite;
        }
        @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }

        @media (max-width: 1100px) {
          .topics-explorer { grid-template-columns: 1fr; }
          .sub-topics-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default TopicsView;
