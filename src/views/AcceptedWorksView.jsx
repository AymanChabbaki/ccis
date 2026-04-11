import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Layers, 
  Cpu, 
  Download, 
  Users,
  ExternalLink,
  Presentation,
  FlaskConical
} from 'lucide-react';

const posters = [
  { id: 1, title: "An open source and low-cost Smart Auditorium", authors: "Olivier Debauche, Rachida Ait Abdelouahid, Yahya Moussaoui" },
  { id: 2, title: "Conception and Design of an IoT system for Remote Practical Works in University’s Electronic Laboratories", authors: "A. MOULAY TAJ, A. GAGA, A. ABOUHILAL, A. MALAOUI" },
  { id: 3, title: "Convolutional Neural Network based classification of driver’s emotion", authors: "Abdelfettah SOULTANA, Faouziya BENABBOU, Nawal SAEL" },
  { id: 4, title: "A Review on Aquaponic systems architectures based on Internet of Things and Intelligence Artificial approaches", authors: "K. Taj, R. Abdelwahid, A. Marzak, F. Ghanimi, I. Ezzahoui" },
  { id: 5, title: "Citizen’s Perception of a Smart City Project: Netnographic Research", authors: "Souad EL HILALI, Ahmed AZOUGAGH" }
];

const experiences = [
  { id: 1, title: "Open Phytotron: A New IoT Device for Home Gardening", authors: "Rachida Ait Abdelouahid, Olivier Debauche, Saïd Mahmoudi, Abdelaziz Marzak, Pierre Manneback, Frédéric Lebeau" },
  { id: 2, title: "Internet of Things: a new Interoperable IoT Platform. Application to a Smart Building", authors: "Rachida AIT ABDELOUAHID, Abdelaziz Marzak" }
];

const AcceptedWorksView = () => {
  return (
    <div className="container">
      <div className="accepted-works-registry no-card">
        {/* Header HUD */}
        <div className="registry-header-hud">
          <div className="accent-line"></div>
          <div className="header-meta">
            <h2>ACCEPTED <span className="text-secondary">WORKS</span></h2>
            <div className="download-cta">
              <button className="btn-download-program">
                <Download size={16} /> DOWNLOAD FULL PROGRAM (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Section: Posters */}
        <div className="registry-section">
          <div className="section-title-row">
            <Presentation size={14} className="accent" />
            <span className="label">SCIENTIFIC POSTERS GALLERY</span>
            <div className="title-dash"></div>
          </div>
          
          <div className="works-grid">
            {posters.map((poster) => (
              <motion.div 
                key={poster.id} 
                className="work-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: poster.id * 0.1 }}
              >
                <div className="work-id">POSTER {poster.id}</div>
                <div className="work-content">
                  <h4 className="work-title">{poster.title}</h4>
                  <div className="work-authors">
                    <Users size={12} />
                    <span>{poster.authors}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: Experiences */}
        <div className="registry-section">
          <div className="section-title-row">
            <FlaskConical size={14} className="accent" />
            <span className="label">DEMOS & INNOVATIVE EXPERIENCES</span>
            <div className="title-dash"></div>
          </div>
          
          <div className="works-grid">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id} 
                className="work-item highlight"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + exp.id * 0.1 }}
              >
                <div className="work-id">PROTOTYPE {exp.id}</div>
                <div className="work-content">
                  <h4 className="work-title">{exp.title}</h4>
                  <div className="work-authors">
                    <Users size={12} />
                    <span>{exp.authors}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .accepted-works-registry {
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .registry-header-hud {
          border-bottom: 2px solid var(--accent);
          padding-bottom: 25px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .accent-line { width: 60px; height: 1px; background: var(--accent); }
        .header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-meta h2 { font-size: 2.2rem; font-weight: 800; margin: 0; }
        .btn-download-program {
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          padding: 10px 20px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-download-program:hover { background: var(--accent); color: var(--primary); }

        .registry-section { display: flex; flex-direction: column; gap: 30px; }
        .section-title-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .section-title-row .label {
          font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; opacity: 0.5;
        }
        .title-dash { height: 1px; flex: 1; background: var(--border-glass); }

        .works-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        .work-item {
          display: flex;
          gap: 30px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-glass);
          align-items: flex-start;
          transition: 0.3s;
        }
        .work-item:hover { transform: translateX(10px); }
        .work-item.highlight { border-left: 2px solid var(--accent); padding-left: 20px; }

        .work-id {
          font-size: 0.65rem; font-weight: 900; color: var(--accent);
          letter-spacing: 2px; width: 100px; flex-shrink: 0;
          padding-top: 5px; opacity: 0.6;
        }
        .work-content { display: flex; flex-direction: column; gap: 8px; }
        .work-title { font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0; line-height: 1.4; }
        .work-authors {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .header-meta { flex-direction: column; align-items: flex-start; gap: 20px; }
          .work-item { flex-direction: column; gap: 10px; }
          .work-id { width: auto; }
        }
      `}</style>
    </div>
  );
};

export default AcceptedWorksView;
