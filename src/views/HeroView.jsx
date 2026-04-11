import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ArrowRight, PlayCircle } from 'lucide-react';

const HeroView = () => {
  return (
    <div className="hero-landing">
      <div className="hero-cinematic">
        <div className="hero-bg-overlay"></div>
        <img src="/hero.png" alt="Smart City Future" className="hero-main-img" />
        
        <div className="hero-content-wrapper container">
          <motion.div 
            className="hero-main-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="workshop-tag">2nd International Conference</div>
            <h1>INNOVATIVE <br /><span className="glow-text">SMART CITY</span> <br />TECHNOLOGIES <span className="year-accent">'26</span></h1>
            
            <p className="hero-intro">
              Bridging the gap between Urban Infrastructure and Artificial Intelligence to build the sustainable cities of tomorrow.
            </p>

            <div className="hero-meta-grid">
              <div className="meta-block">
                <Calendar size={18} className="icon-cyan" />
                <div className="meta-text">
                  <span className="label">DATE</span>
                  <span className="value">June 19-20, 2020</span>
                </div>
              </div>
              <div className="meta-block">
                <MapPin size={18} className="icon-cyan" />
                <div className="meta-text">
                  <span className="label">LOCATION</span>
                  <span className="value">Casablanca, Morocco</span>
                </div>
              </div>
            </div>

            <div className="hero-cta-group">
              <button className="btn-glow">Submit Abstract <ArrowRight size={18} /></button>
              <button className="btn-ghost"><PlayCircle size={18} /> Watch Teaser</button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-stats-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stat-pill">
              <span className="stat-num">120+</span>
              <span className="stat-label">Submissions</span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">45</span>
              <span className="stat-label">Experts</span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">18+</span>
              <span className="stat-label">Indices</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-landing {
          width: 100%;
          position: relative;
        }
        .hero-cinematic {
          position: relative;
          min-height: calc(100vh - 120px); /* Fill the screen precisely */
          padding: clamp(2rem, 5vh, 5rem) 0;
          display: flex;
          align-items: center;
          overflow: visible; /* Ensure nothing is clipped */
          width: 100%;
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #050E1D 20%, rgba(5, 14, 29, 0.4) 100%);
          z-index: 1;
        }
        .hero-main-img {
          position: absolute;
          right: -10%;
          top: 0;
          height: 100%;
          width: 70%;
          object-fit: cover;
          opacity: 0.6;
          mask-image: linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0));
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .hero-main-text {
          max-width: 700px;
        }

        .workshop-tag {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--accent);
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 5rem);
          line-height: 1;
          font-weight: 900;
        }

        .glow-text {
          color: var(--accent);
          text-shadow: 0 0 30px rgba(0, 229, 255, 0.5);
        }

        .year-accent {
          font-size: clamp(1.2rem, 3vw, 2rem);
          vertical-align: top;
          opacity: 0.4;
        }

        .hero-intro {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 60ch;
        }

        .hero-meta-grid {
          display: flex;
          gap: 40px;
          margin-bottom: 50px;
        }

        .meta-block {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .meta-text {
          display: flex;
          flex-direction: column;
        }

        .meta-text .label {
          font-size: 0.65rem;
          font-weight: 700;
          opacity: 0.5;
          letter-spacing: 1px;
        }

        .meta-text .value {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .hero-cta-group {
          margin-top: -20px;
          display: flex;
          gap: 20px;
        }

        .btn-glow {
          background: var(--accent);
          color: var(--primary);
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-glow:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 229, 255, 0.3);
        }

        .btn-ghost {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          color: #fff;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        .hero-stats-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stat-pill {
          background: rgba(11, 32, 70, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-glass);
          padding: 20px 30px;
          border-radius: 20px;
          min-width: 180px;
          text-align: center;
          transition: 0.3s;
        }

        .stat-pill:hover {
          border-color: var(--accent);
          transform: scale(1.05);
        }

        .stat-num {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent);
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          opacity: 0.6;
        }

        .icon-cyan { color: var(--accent); }

        @media (max-width: 1200px) {
          h1 { font-size: 3.5rem; }
          .hero-content-wrapper { flex-direction: column; align-items: flex-start; gap: 50px; }
          .hero-stats-panel { flex-direction: row; flex-wrap: wrap; }
        }

        @media (max-width: 768px) {
          .hero-cinematic { height: auto; padding: 120px 0 60px 0; }
          h1 { font-size: 2.5rem; }
          .hero-main-img { width: 100%; opacity: 0.3; }
          .hero-meta-grid { flex-direction: column; gap: 20px; }
          .hero-cta-group { flex-direction: column; width: 100%; }
          .btn-glow, .btn-ghost { width: 100%; justify-content: center; }
          .stat-pill { flex: 1; min-width: 120px; padding: 15px; }
        }
      `}</style>
    </div>
  );
};

export default HeroView;
