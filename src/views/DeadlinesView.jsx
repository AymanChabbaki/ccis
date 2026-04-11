import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Bell, 
  FileText, 
  Compass, 
  Clock, 
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const phases = [
  {
    id: 'abstract',
    title: 'Submission',
    date: 'May 18, 2020',
    icon: Send,
    status: 'completed',
    description: 'Extended deadline for full paper abstract submissions.'
  },
  {
    id: 'review',
    title: 'Peer Review',
    date: 'May 25, 2020',
    icon: Compass,
    status: 'completed',
    description: 'Double-blind expert review and quality assessment.'
  },
  {
    id: 'accept',
    title: 'Acceptance',
    date: 'June 01, 2020',
    icon: Bell,
    status: 'active',
    description: 'Notification of acceptance and final program announcement.'
  },
  {
    id: 'camera-ready',
    title: 'Publication',
    date: 'June 10, 2020',
    icon: FileText,
    status: 'pending',
    description: 'Final camera-ready paper submission for indexation.'
  },
  {
    id: 'event',
    title: 'Conference',
    date: 'June 19-20, 2020',
    icon: TrendingUp,
    status: 'pending',
    description: 'Live workshop event and paper presentations.'
  }
];

const DeadlinesView = () => {
  const [timeLeft, setTimeLeft] = useState('2d 14h 25m');
  const activePhase = phases.find(p => p.status === 'active');

  return (
    <div className="container">
      <div className="deadlines-roadmap">
        
        {/* Global Progress Info */}
        <div className="roadmap-header">
          <div className="progress-info">
            <TrendingUp size={16} className="icon-cyan" />
            <span>MISSION PROGRESS: 60%</span>
          </div>
          <div className="next-countdown">
            <Clock size={16} /> NEXT: <span>{timeLeft}</span>
          </div>
        </div>

        {/* The Node Timeline */}
        <div className="timeline-track-container">
          <div className="main-track-line">
            <motion.div 
              className="track-progress-fill"
              initial={{ width: '0%' }}
              animate={{ width: '60%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="nodes-wrapper">
            {phases.map((phase, i) => (
              <motion.div 
                key={phase.id} 
                className={`node-item ${phase.status}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Visual Node */}
                <div className="node-circle-wrapper">
                  <div className="node-outline"></div>
                  <div className="node-core">
                    <phase.icon size={20} />
                  </div>
                  {phase.status === 'completed' && (
                    <div className="node-status-badge">
                      <CheckCircle2 size={12} />
                    </div>
                  )}
                  {phase.status === 'active' && (
                    <motion.div 
                      className="node-active-pulse"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Node Metadata */}
                <div className="node-label">
                  <span className="phase-title">{phase.title}</span>
                  <span className="phase-date">{phase.date}</span>
                </div>

                {/* Hover/Active Details (HUD Pane) */}
                <div className="node-details-pop">
                  <p>{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus HUD */}
        <motion.div 
          className="active-hud-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="hud-label">CURRENT MISSION PHASE</div>
          <div className="hud-grid">
            <div className="hud-main-info">
              <h3>{activePhase.title} Notifcations</h3>
              <p>Critical milestone for all contributing researchers. Stay tuned for expert feedback.</p>
            </div>
            <div className="hud-actions">
              <button className="btn-roadmap">Sync to Calendar</button>
              <button className="btn-roadmap outline">View Full Schedule</button>
            </div>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        .deadlines-roadmap {
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .roadmap-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
        }
        .icon-cyan { color: var(--accent); }
        .next-countdown span { color: var(--accent); }

        /* Timeline Track */
        .timeline-track-container {
          position: relative;
          padding: 50px 0;
          margin: 40px 0;
        }
        .main-track-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(255,255,255,0.05);
          transform: translateY(-50%);
          z-index: 1;
        }
        .track-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #00b8cc);
          box-shadow: 0 0 15px var(--accent);
        }

        .nodes-wrapper {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 10;
        }

        .node-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 120px;
          position: relative;
          cursor: pointer;
        }

        /* Node Visuals */
        .node-circle-wrapper {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .node-core {
          width: 40px;
          height: 40px;
          background: #050E1D;
          border: 1px solid var(--border-glass);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.3);
          z-index: 5;
          transition: 0.3s;
        }
        .node-outline {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          transform: scale(1.2);
        }
        
        .completed .node-core { color: var(--accent); border-color: var(--accent); background: rgba(0, 229, 255, 0.05); }
        .active .node-core { 
          color: var(--primary); 
          background: var(--accent); 
          border-color: var(--accent);
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.5);
        }
        .node-status-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: var(--accent);
          color: var(--primary);
          border-radius: 50%;
          padding: 2px;
          z-index: 10;
        }
        .node-active-pulse {
          position: absolute;
          inset: 0;
          background: var(--accent);
          border-radius: 50%;
          z-index: 1;
        }

        /* Labels */
        .node-label {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .phase-title { font-weight: 800; font-size: 0.85rem; color: #fff; }
        .phase-date { font-size: 0.75rem; color: var(--text-secondary); opacity: 0.6; }

        .node-details-pop {
          position: absolute;
          top: 120%;
          background: var(--bg-card);
          padding: 15px;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
          font-size: 0.8rem;
          width: 200px;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: 0.3s;
          z-index: 20;
          text-align: center;
        }
        .node-item:hover .node-details-pop { opacity: 1; transform: translateY(0); }

        /* HUD Panel */
        .active-hud-panel {
          background: var(--bg-card);
          border-left: 4px solid var(--accent);
          padding: 30px;
          border-radius: 0 15px 15px 0;
          backdrop-filter: blur(10px);
        }
        .hud-label { font-size: 0.65rem; font-weight: 900; color: var(--accent); letter-spacing: 2px; margin-bottom: 15px; }
        .hud-grid { display: flex; justify-content: space-between; align-items: flex-end; }
        .hud-main-info h3 { font-size: 1.5rem; margin-bottom: 10px; }
        .hud-main-info p { color: var(--text-secondary); max-width: 500px; font-size: 0.95rem; line-height: 1.6; }
        
        .hud-actions { display: flex; gap: 15px; }
        .btn-roadmap {
          padding: 12px 24px;
          background: var(--accent);
          color: var(--primary);
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          font-size: 0.85rem;
        }
        .btn-roadmap.outline { background: transparent; border: 1px solid var(--border-glass); color: #fff; }

        @media (max-width: 900px) {
          .nodes-wrapper { flex-direction: column; gap: 60px; height: 500px; margin-top: 50px; }
          .main-track-line { left: 60px; top: 0; bottom: 0; width: 2px; height: auto; transform: none; }
          .track-progress-fill { width: 100%; height: 60%; }
          .node-item { flex-direction: row; width: 100%; gap: 30px; }
          .node-label { text-align: left; }
          .node-details-pop { left: 120%; top: 0; }
          .hud-grid { flex-direction: column; align-items: flex-start; gap: 30px; }
        }
      `}</style>
    </div>
  );
};

export default DeadlinesView;
