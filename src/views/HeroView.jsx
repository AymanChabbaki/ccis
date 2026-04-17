import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ExternalLink, ArrowRight, PlayCircle, FileText } from 'lucide-react';

const HeroView = () => {
  const ASSET_BASE = window.location.pathname.startsWith('/icisct') ? '/icisct/' : '/';
  const navigate = useNavigate();
  return (
    <div className="hero-landing">
      <div className="hero-cinematic">
        <div className="hero-bg-overlay"></div>
        <img src={`${ASSET_BASE}hero.png`} alt="Smart City Future" className="hero-main-img" />

        <div className="hero-content-wrapper container">
          <motion.div
            className="hero-main-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="workshop-tag"></div>
            <h1>TEST INNOVATIVE <br /><span className="glow-text">SMART CITY</span> <br />TECHNOLOGIES <span className="year-accent"> ICISCT '26</span></h1>

            <div className="hero-intro">
              <p>Welcome to the International Conference on Innovative Smart City Technologies (ICISCT 2026), hosted by the Faculty of Sciences Ben M’Sik in Casablanca.</p>
              <p>The conference brings together researchers, academics, industry experts, and policymakers from around the world to explore the latest advances shaping the smart cities of tomorrow.</p>
              <p>The program covers key areas such as artificial intelligence, IoT, sustainable urban systems, cybersecurity, and digital transformation, providing a dynamic platform for exchanging ideas, fostering collaboration, and promoting innovative solutions for smarter, greener, and more inclusive urban environments.</p>
            </div>

            <div className="hero-meta-grid">
              <div className="meta-block">
                <Calendar size={18} className="icon-cyan" />
                <div className="meta-text">
                  <span className="label">DATE</span>
                  <span className="value">June 25-27, 2026</span>
                </div>
              </div>
              <div className="meta-block">
                <MapPin size={18} className="icon-cyan" />
                <div className="meta-text">
                  <span className="label">LOCATION</span>
                  <span className="value">FSBM, Casablanca, Morocco</span>
                </div>
              </div>
            </div>

            <div className="editions-showcase">
              <span className="editions-tag">PREVIOUS EDITIONS</span>
              <div className="editions-grid">
                <a href="https://www.igi-global.com/journals/" target="_blank" rel="noreferrer" className="edition-tile">
                  <div className="tile-icon"><FileText size={20} /></div>
                  <div className="tile-content">
                    <span className="tile-title">BEST PAPERS 2020</span>
                    <span className="tile-desc">Published via IGI Global</span>
                  </div>
                  <ExternalLink size={14} className="tile-arrow" />
                </a>
                <a href="https://wisct2020.sciencesconf.org/index.html" target="_blank" rel="noreferrer" className="edition-tile">
                  <div className="tile-icon"><PlayCircle size={20} /></div>
                  <div className="tile-content">
                    <span className="tile-title">WISCT 2020 ARCHIVE</span>
                    <span className="tile-desc">Official Edition Site</span>
                  </div>
                  <ExternalLink size={14} className="tile-arrow" />
                </a>
              </div>
            </div>

            <div className="hero-cta-group">
              <button className="btn-glow" onClick={() => navigate('/submissions')}>Submit Abstract <ArrowRight size={18} /></button>
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

        .edition-badge {
          display: inline-block;
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent);
          padding: 6px 16px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 1px;
          margin-bottom: 25px;
          border: 1px solid rgba(0, 229, 255, 0.3);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.1);
        }

        .hero-intro {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          color: var(--text-secondary);
          margin-bottom: 30px;
          line-height: 1.6;
          max-width: 70ch;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .hero-intro p {
          margin: 0;
        }

        .hero-meta-grid {
          display: flex;
          gap: 40px;
          margin-bottom: 35px;
        }

        .editions-showcase {
          margin-bottom: 45px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .editions-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: 2px;
          opacity: 0.7;
        }

        .editions-grid {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .edition-tile {
          flex: 1;
          min-width: 260px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 18px 22px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 18px;
          text-decoration: none;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .edition-tile::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.05), transparent);
          transform: translateX(-100%);
          transition: 0.6s;
        }

        .edition-tile:hover {
          transform: translateY(-5px) scale(1.02);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--accent);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 229, 255, 0.1);
        }

        .edition-tile:hover::before {
          transform: translateX(100%);
        }

        .tile-icon {
          width: 44px;
          height: 44px;
          background: rgba(0, 229, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          transition: 0.3s;
        }

        .edition-tile:hover .tile-icon {
          background: var(--accent);
          color: var(--primary);
          box-shadow: 0 0 15px var(--accent);
        }

        .tile-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .tile-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .tile-desc {
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        .tile-arrow {
          color: var(--text-secondary);
          opacity: 0.5;
          transition: 0.3s;
        }

        .edition-tile:hover .tile-arrow {
          transform: translate(3px, -3px);
          color: var(--accent);
          opacity: 1;
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

        @media (max-width: 360px) {
          .hero-main-text { padding: 0 !important; margin: 0 !important; width: 100%; display: block; transform: none !important; }
          h1 { 
            font-size: 1.8rem !important; /* Scale down to prevent right-side overflow */
            margin-left: -5px !important; 
            padding-left: 0 !important; 
            letter-spacing: -0.5px !important; 
            text-align: left !important;
            display: block;
            width: 100%;
            transform: none !important;
            word-break: keep-all;
          }
          .workshop-tag { margin-left: -2px !important; font-size: 0.75rem; }
          .hero-cta-group { margin-left: 0 !important; padding-left: 0 !important; width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default HeroView;
