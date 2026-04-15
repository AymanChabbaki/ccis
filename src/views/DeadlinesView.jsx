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
    date: 'May 15, 2026',
    icon: Send,
    status: 'active',
    description: 'Deadline for abstract submissions for ICISCT 2026.'
  },
  {
    id: 'accept',
    title: 'Acceptance',
    date: 'June 05, 2026',
    icon: Bell,
    status: 'pending',
    description: 'Notification of paper acceptance and expert feedback.'
  },
  {
    id: 'registration',
    title: 'Registration',
    date: 'June 15, 2026',
    icon: Clock,
    status: 'pending',
    description: 'Early-bird registration deadline for conference attendees.'
  },
  {
    id: 'event',
    title: 'Conference',
    date: 'June 25-27, 2026',
    icon: TrendingUp,
    status: 'pending',
    description: 'The 3rd International Conference on Innovative Smart City Technologies.'
  }
];

const DeadlinesView = () => {
  const [timeLeft, setTimeLeft] = useState('2d 14h 25m');
  const activePhase = phases.find(p => p.status === 'active');

  const handleSyncCalendar = () => {
    const calendarEvents = phases.map(phase => {
      // Simple logic to parse 2026 dates from the phase data
      const year = '2026';
      const monthMap = { May: '05', June: '06' };
      const dateStr = phase.date;
      const monthStr = dateStr.match(/(May|June)/)[0];
      const month = monthMap[monthStr];
      
      let startDay, endDay;
      if (dateStr.includes('-')) {
        // Multi-day event (e.g., June 25-27)
        const days = dateStr.match(/\d+/g);
        startDay = days[0].padStart(2, '0');
        // ICS end date is exclusive, so we add 1
        endDay = (parseInt(days[1]) + 1).toString().padStart(2, '0');
      } else {
        // Single day event
        startDay = dateStr.match(/\d+/)[0].padStart(2, '0');
        endDay = (parseInt(startDay) + 1).toString().padStart(2, '0');
      }

      return [
        'BEGIN:VEVENT',
        `UID:${phase.id}-${year}@icisct.com`,
        `DTSTAMP:${year}0101T000000Z`,
        `DTSTART;VALUE=DATE:${year}${month}${startDay}`,
        `DTEND;VALUE=DATE:${year}${month}${endDay}`,
        `SUMMARY:ICISCT 2026 - ${phase.title}`,
        `DESCRIPTION:${phase.description}`,
        'END:VEVENT'
      ].join('\r\n');
    });

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ICISCT//Conference Calendar//EN',
      ...calendarEvents,
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'ICISCT_2026_Schedule.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <div className="deadlines-roadmap">
        
        {/* Global Progress Info */}
        <div className="roadmap-header">
          <div className="progress-info">
            <TrendingUp size={16} className="icon-cyan" />
            <span>MISSION PROGRESS: 25%</span>
          </div>
          <div className="next-countdown">
            <Clock size={16} /> NEXT: <span>30 Days 12h</span>
          </div>
        </div>

        {/* The Node Timeline */}
        <div className="timeline-track-container">
          <div className="main-track-line">
            <motion.div 
              className="track-progress-fill"
              initial={{ width: '0%' }}
              animate={{ width: '25%' }}
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
                    <phase.icon size={42} strokeWidth={2.5} />
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
              <h3>{activePhase.title} Phase</h3>
              <p>Current active window for ICISCT 2026 abstract submissions. Ensure your research contributes to the future of smart cities.</p>
            </div>
            <div className="hud-actions">
              <button 
                className="btn-roadmap"
                onClick={handleSyncCalendar}
              >
                Sync to Calendar
              </button>
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
          gap: 25px;
          width: 180px;
          position: relative;
          cursor: pointer;
        }

        /* Node Visuals */
        .node-circle-wrapper {
          position: relative;
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .node-core {
          width: 100px;
          height: 100px;
          background: #050E1D;
          border: 2px solid var(--border-glass);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          z-index: 5;
          transition: 0.3s;
        }
        .node-outline {
          position: absolute;
          inset: 0;
          border: 2px solid rgba(0, 229, 255, 0.2);
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
          gap: 8px;
        }
        .phase-title { 
          font-weight: 900; 
          font-size: 1.3rem; 
          color: #fff;
          text-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .phase-date { 
          font-weight: 700; 
          font-size: 1.1rem; 
          color: var(--accent); 
          opacity: 1; 
        }

        .node-details-pop {
          position: absolute;
          top: 120%;
          background: #0B2046;
          padding: 18px;
          border-radius: 12px;
          border: 1px solid var(--accent);
          font-size: 0.85rem;
          color: #fff;
          width: 220px;
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
          .active-hud-panel { padding: 20px var(--gutter); border-left-width: 2px; border-radius: 12px; }
          .hud-main-info h3 { font-size: 1.3rem; }
        }
      `}</style>
    </div>
  );
};

export default DeadlinesView;
