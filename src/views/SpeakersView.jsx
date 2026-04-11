import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronRight, ChevronLeft, User } from 'lucide-react';

const speakers = [
  {
    name: "Dr. Kaoutar EL MAGHRAOUI",
    role: "IBM T.J Watson Research Center, NY",
    tags: ["Systems", "AI Hardware", "Machine Learning"],
    image: "/speaker_kaoutar_1775942116678.png",
    bio: "Principal research staff member at IBM. Leads the end-user AI testbed of the IBM Research AI Hardware Center. Specialist in Systems and AI intersection, OS performance, and scheduling."
  },
  {
    name: "Mr. Mohamed Ali Habouha",
    role: "Governor of Berkane Province",
    tags: ["Innovation", "Governance", "Smart City"],
    image: "/speaker_mohamed_1775942132866.png",
    bio: "Launched several smart and innovative projects for the benefit of the city of Berkane. Specialist in Public Policy and Urban Innovation."
  },
  {
    name: "Dr. Latifa OUKHELLOU",
    role: "Research Director, IFSTTAR France",
    tags: ["Pattern Recognition", "Mobility", "Data Mining"],
    image: "/speaker_latifa_1775942144148.png",
    bio: "Currently Research Director at the French Institute of Science and Technology for Transport. Expert in Spatio-temporal data mining for identifying driving behavior and urban mobility."
  },
  {
    name: "Mr. Jean-Patrice GLAFKIDES",
    role: "Founder of DataValoris",
    tags: ["Deep Learning", "Evolutionary Algorithms"],
    image: "/speaker_jean_patrice_1775942156643.png",
    bio: "Expert in automated deep learning model generation based on natural selection algorithms. Researcher at LIASD laboratory, Université Paris VIII."
  }
];

const SpeakersView = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % speakers.length);
  const prev = () => setIndex((index - 1 + speakers.length) % speakers.length);

  const speaker = speakers[index];

  return (
    <div className="container">
      <div className="speakers-view-container">
        <div className="speaker-explorer">
          {/* Main Visual Display */}
          <div className="speaker-visual-pane">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.1, x: 20 }}
                className="speaker-image-frame"
              >
                <img src={speaker.image} alt={speaker.name} className="speaker-main-img" />
                <div className="image-overlay-glow"></div>
                <div className="decorative-corners">
                  <div className="c-1"></div><div className="c-2"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Info Side */}
          <div className="speaker-info-pane">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="info-content"
              >
                <div className="speaker-header-meta">
                  <Quote size={50} className="quote-icon" />
                  <div className="header-text">
                    <span className="keynote-tag">KEYNOTE SPEAKER</span>
                    <h2>{speaker.name}</h2>
                    <p className="affiliation">{speaker.role}</p>
                  </div>
                </div>

                <div className="speaker-tags">
                  {speaker.tags.map(tag => <span key={tag} className="s-tag">{tag}</span>)}
                </div>

                <div className="speaker-bio-box">
                  <p>{speaker.bio}</p>
                </div>

                <div className="speaker-nav-controls">
                  <div className="nav-buttons-group">
                    <button onClick={prev} className="nav-hex-btn"><ChevronLeft /></button>
                    <button onClick={next} className="nav-hex-btn"><ChevronRight /></button>
                  </div>
                  <div className="nav-index">
                    <span className="current">0{index + 1}</span>
                    <span className="total"> / 0{speakers.length}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .speakers-view-container {
          padding: 20px 0;
        }
        .speaker-explorer {
          display: grid;
          grid-template-columns: 450px 1fr;
          gap: 60px;
          min-height: 550px;
          align-items: center;
        }

        /* Image Pane */
        .speaker-visual-pane {
          position: relative;
          z-index: 10;
        }
        .speaker-image-frame {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 4/5;
          border-radius: 24px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
        }
        .speaker-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }
        .image-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 229, 255, 0.2), transparent);
          pointer-events: none;
        }

        .decorative-corners .c-1, .decorative-corners .c-2 {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid var(--accent);
          z-index: 20;
        }
        .c-1 { top: 15px; left: 15px; border-right: none; border-bottom: none; }
        .c-2 { bottom: 15px; right: 15px; border-left: none; border-top: none; }

        /* Info Pane */
        .speaker-info-pane {
          display: flex;
          flex-direction: column;
        }
        .keynote-tag {
          font-weight: 800;
          font-size: 0.7rem;
          color: var(--accent);
          letter-spacing: 2px;
          display: block;
          margin-bottom: 20px;
        }
        .quote-icon { color: var(--accent); opacity: 0.2; margin-bottom: 10px; }
        .speaker-header-meta h2 { 
          font-size: clamp(1.8rem, 5vw, 2.8rem); 
          line-height: 1.1; 
          margin-bottom: 10px; 
        }
        .affiliation { 
          font-size: clamp(1rem, 2vw, 1.2rem); 
          color: #fff; 
          opacity: 0.7; 
          margin-bottom: 30px; 
        }

        .speaker-tags { display: flex; gap: 10px; margin-bottom: 40px; }
        .s-tag { 
          background: rgba(255, 255, 255, 0.05); 
          padding: 6px 16px; 
          border-radius: 50px; 
          font-size: 0.8rem; 
          border: 1px solid var(--border-glass); 
        }

        .speaker-bio-box {
          background: rgba(11, 32, 70, 0.3);
          padding: 30px;
          border-radius: 20px;
          border-left: 2px solid var(--accent);
          margin-bottom: 40px;
        }
        .speaker-bio-box p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .speaker-nav-controls {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .nav-buttons-group { display: flex; gap: 15px; }
        .nav-hex-btn {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: transparent;
          border: 1px solid var(--border-glass);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
        }
        .nav-hex-btn:hover { background: var(--accent); color: var(--primary); border-color: var(--accent); }
        .nav-index { font-weight: 800; }
        .nav-index .current { font-size: 1.5rem; color: var(--accent); }
        .nav-index .total { opacity: 0.3; }

        @media (max-width: 1100px) {
          .speaker-explorer { grid-template-columns: 1fr; justify-items: center; text-align: center; }
          .speaker-image-frame { width: 100%; max-width: 400px; margin-bottom: 40px; }
          .speaker-tags { justify-content: center; }
          .speaker-header-meta h2 { font-size: 2rem; text-align: center; }
          .speaker-nav-controls { justify-content: center; }
          .speaker-bio-box { border-left: none; border-top: 2px solid var(--accent); padding: 20px; }
        }
      `}</style>
    </div>
  );
};

export default SpeakersView;
