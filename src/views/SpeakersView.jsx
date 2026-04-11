import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronRight, ChevronLeft } from 'lucide-react';

const speakers = [
  {
    name: "Dr. Kaoutar EL MAGHRAOUI",
    role: "IBM T.J Watson Research Center, NY",
    tags: ["Systems", "AI Hardware", "Machine Learning"],
    bio: "Principal research staff member at IBM. Leads the end-user AI testbed of the IBM Research AI Hardware Center. Specialist in Systems and AI intersection, OS performance, and scheduling."
  },
  {
    name: "Mr. Mohamed Ali Habouha",
    role: "Governor of Berkane Province",
    tags: ["Innovation", "Governance", "Smart City"],
    bio: "Launched several smart and innovative projects for the benefit of the city of Berkane. Specialist in Public Policy and Urban Innovation."
  },
  {
    name: "Dr. Latifa OUKHELLOU",
    role: "Research Director, IFSTTAR France",
    tags: ["Pattern Recognition", "Mobility", "Data Mining"],
    bio: "Currently Research Director at the French Institute of Science and Technology for Transport. Expert in Spatio-temporal data mining for identifying driving behavior and urban mobility."
  },
  {
    name: "Mr. Jean-Patrice GLAFKIDES",
    role: "Founder of DataValoris",
    tags: ["Deep Learning", "Evolutionary Algorithms"],
    bio: "Expert in automated deep learning model generation based on natural selection algorithms. Researcher at LIASD laboratory, Université Paris VIII."
  }
];

const SpeakersView = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % speakers.length);
  const prev = () => setIndex((index - 1 + speakers.length) % speakers.length);

  const speaker = speakers[index];

  return (
    <div className="speakers-view">
      <div className="featured-speaker-card">
        <div className="card-sidebar">
          <div className="page-indicator">
            {speakers.map((_, i) => (
              <div key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}></div>
            ))}
          </div>
        </div>

        <div className="card-main">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="speaker-anime-wrapper"
            >
              <div className="speaker-header">
                <Quote size={40} className="icon-quote" />
                <div className="speaker-title">
                  <h2>{speaker.name}</h2>
                  <p className="role-text">{speaker.role}</p>
                </div>
              </div>

              <div className="tag-row">
                {speaker.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>

              <div className="bio-area">
                <p>{speaker.bio}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="card-navigation">
            <button onClick={prev} className="nav-btn"><ChevronLeft /></button>
            <button onClick={next} className="nav-btn"><ChevronRight /></button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .speakers-view {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 500px;
        }
        .featured-speaker-card {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          border-radius: 30px;
          display: flex;
          width: 100%;
          max-width: 900px;
          min-height: 450px;
          overflow: hidden;
          box-shadow: 0 50px 100px rgba(0,0,0,0.2);
        }
        .card-sidebar {
          width: 80px;
          background: rgba(0, 229, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--border-glass);
        }
        .page-indicator {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border-glass);
          cursor: pointer;
          transition: 0.3s;
        }
        .dot.active {
          background: var(--accent);
          transform: scale(1.5);
          box-shadow: 0 0 10px var(--accent);
        }

        .card-main {
          flex: 1;
          padding: 60px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .icon-quote {
          color: var(--accent);
          opacity: 0.3;
          margin-bottom: 20px;
        }
        .speaker-header {
          margin-bottom: 30px;
        }
        .speaker-title h2 { font-size: 2rem; margin-bottom: 8px; }
        .role-text { color: var(--accent); font-weight: 600; font-size: 1.1rem; }

        .tag-row {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        .tag {
          padding: 4px 14px;
          background: rgba(255,255,255,0.05);
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .bio-area p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .card-navigation {
          position: absolute;
          bottom: 40px;
          right: 40px;
          display: flex;
          gap: 15px;
        }
        .nav-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
        }
        .nav-btn:hover {
          background: var(--accent);
          color: var(--primary);
          border-color: var(--accent);
        }
      `}</style>
    </div>
  );
};

export default SpeakersView;
