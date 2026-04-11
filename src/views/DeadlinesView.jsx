import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const DeadlinesView = () => {
  const steps = [
    { 
      date: "April 01, 2020", 
      title: "Initial Submission", 
      status: "passed",
      note: "Closed" 
    },
    { 
      date: "April 30, 2020", 
      title: "Second Deadline", 
      status: "passed",
      note: "Standard Submission Closed" 
    },
    { 
      date: "May 18, 2020", 
      title: "EXTENDED DEADLINE", 
      status: "active",
      note: "Final Call for Papers" 
    },
    { 
      date: "June 03, 2020", 
      title: "Acceptance Notice", 
      status: "upcoming",
      note: "Author Notification" 
    },
    { 
      date: "June 10, 2020", 
      title: "Camera Ready", 
      status: "upcoming",
      note: "Final Version Upload" 
    },
    { 
      date: "May 31, 2020", 
      title: "Registration", 
      status: "upcoming",
      note: "Participant Deadline" 
    }
  ];

  return (
    <div className="deadlines-view">
      <div className="info-strip">
        <AlertCircle size={18} className="icon-accent" />
        <p>The organizing committee has extended the final paper submission to <strong>May 18, 2020</strong> due to many requests.</p>
      </div>

      <div className="timeline-container">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className={`timeline-step ${step.status}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="step-icon-area">
              {step.status === 'passed' && <CheckCircle2 size={24} className="icon-success" />}
              {step.status === 'active' && <Clock size={24} className="icon-accent" />}
              {step.status === 'upcoming' && <div className="dot-upcoming"></div>}
            </div>
            
            <div className="step-content">
              <span className="step-date">{step.date}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-note">{step.note}</p>
            </div>

            {index !== steps.length - 1 && <div className="connector"></div>}
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .deadlines-view {
          padding: 20px 0;
        }
        .info-strip {
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid var(--accent);
          padding: 15px 25px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 50px;
        }
        .icon-accent { color: var(--accent); }
        .icon-success { color: #4CBB6F; }

        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .timeline-step {
          display: flex;
          gap: 40px;
          padding: 30px;
          border-radius: 20px;
          position: relative;
          transition: 0.3s;
        }
        .timeline-step.active {
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid var(--accent);
          box-shadow: 0 10px 40px rgba(0, 229, 255, 0.1);
        }
        .timeline-step.passed { opacity: 0.5; }

        .step-icon-area {
          z-index: 2;
          background: var(--bg-dark);
          height: fit-content;
          border-radius: 50%;
        }
        .dot-upcoming {
          width: 12px;
          height: 12px;
          background: var(--border-glass);
          border-radius: 50%;
          margin: 6px;
        }

        .step-date {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          color: var(--accent);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 5px;
        }
        .step-title { font-size: 1.1rem; margin-bottom: 4px; }
        .step-note { font-size: 0.85rem; color: var(--text-secondary); }

        .connector {
          position: absolute;
          left: 42px;
          top: 60px;
          bottom: -30px;
          width: 1px;
          background: var(--border-glass);
          z-index: 1;
        }
        .active .connector { background: var(--accent); }
      `}</style>
    </div>
  );
};

export default DeadlinesView;
