import React from 'react';
import { motion } from 'framer-motion';

const speakers = [
  {
    name: "Pr. Tarek Gaber",
    firstName: "Tarek",
    role: "Associate Professor in Cyber Security, UK ",
    tags: ["Cybersecurity", "Scientist", "UK"],
    image: "/Tarek Gaber.png",
    bio: "World’s Top 2% Scientist / Senior Lecturer (Associate Professor) in Cyber Security / Visiting Professor / Programme Leader / Award-Winner / Consultant / Academic Editor / UK Exceptional Talent in Cybersecurity / IEEE / FHEA. Springer Nature. "
  },
  {
    name: "Dr. Jeannice Fairrer Samani",
    firstName: "Jeannice",
    role: "PhD, MBA, CSM",
    tags: ["AI Governance", "Digital Risk Strategist","Entrepreneurship"],
    image: "/Jeannice Fairrer Samani.png",
    bio: "AI Governance & Digital Risk Strategist | Workforce Development | Venture Development | Transformative Leadership Architect | Board Advisor on AI Oversight & Systems Design | Entrepreneurship Educator"
  },
  {
    name: "Pr. Az Eddine Bennani",
    firstName: "Az Eddine",
    role: "Engineer MBA USA Docteur Sorbonne, HDR France",
    tags: ["AI", "digital","Strategy","Blockchain"],
    image: "/Az Eddine Bennani.png",
    bio: "50 years of experience in digital technologies, including AI. Consultant, Author, Speaker, Professor, Researcher, and Entrepreneur. Expertise in Management, Digital Governance, AI Transformation, Frugal AI, Strategy, Blockchain, and more."
  },
  {
    name: "Soon to be revealed",
    firstName: "Soon",
    role: "Soon to be revealed",
    tags: ["Soon", "Soon"],
    image: "/speaker_jean_patrice_1775942156643.png",
    bio: "Soon to be revealed"
  }
];

const SpeakersView = () => {
  return (
    <div className="compact-showcase-container">
      <div className="compact-strip">
        {speakers.map((speaker, index) => (
          <motion.div 
            key={index}
            className="speaker-pod"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover="hover"
          >
            {/* Visual Header */}
            <div className="pod-visual">
              <motion.img 
                src={speaker.image} 
                alt={speaker.name} 
                className="pod-img"
                variants={{
                  hover: { scale: 1.1 }
                }}
              />
              <div className="pod-glow"></div>
              <div className="bg-name-mini">{speaker.firstName}</div>
            </div>

            {/* Info Body */}
            <div className="pod-content">
              <span className="pod-keynote">KEYNOTE</span>
              <h3>{speaker.name}</h3>
              <p className="pod-role">{speaker.role}</p>
              
              <div className="pod-tags">
                {speaker.tags.map(tag => <span key={tag} className="p-tag">{tag}</span>)}
              </div>

              <motion.div 
                className="pod-bio"
                variants={{
                  hover: { opacity: 1, height: 'auto', marginTop: 10 }
                }}
                initial={{ opacity: 0, height: 0 }}
              >
                <p>{speaker.bio}</p>
              </motion.div>
            </div>
            
            <div className="pod-accent"></div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .compact-showcase-container {
          padding: 60px var(--gutter);
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .compact-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 1200px;
        }

        .speaker-pod {
          position: relative;
          background: rgba(11, 32, 70, 0.2);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transition: 0.4s;
          cursor: pointer;
          overflow: hidden;
        }

        .speaker-pod:hover {
          background: rgba(11, 32, 70, 0.4);
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .pod-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
        }

        .pod-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .pod-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 229, 255, 0.2), transparent);
          pointer-events: none;
        }

        .bg-name-mini {
          position: absolute;
          bottom: 5px;
          right: 10px;
          font-size: 2rem;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
          pointer-events: none;
          z-index: 10;
          text-transform: uppercase;
        }

        .pod-content {
          display: flex;
          flex-direction: column;
        }

        .pod-keynote {
          font-size: 0.55rem;
          font-weight: 900;
          color: var(--accent);
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .pod-content h3 {
          font-size: 1.05rem;
          font-weight: 800;
          margin-bottom: 4px;
          color: #fff;
          line-height: 1.2;
        }

        .pod-role {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 12px;
          min-height: 45px;
        }

        .pod-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .p-tag {
          font-size: 0.6rem;
          font-weight: 700;
          background: rgba(0, 229, 255, 0.05);
          padding: 2px 8px;
          border-radius: 4px;
          color: var(--accent);
          border: 1px solid rgba(0, 229, 255, 0.1);
        }

        .pod-bio p {
          font-size: 0.72rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
        }

        .pod-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.4s;
          opacity: 0.5;
        }

        .speaker-pod:hover .pod-accent {
          transform: scaleX(1);
        }

        @media (max-width: 1024px) {
          .compact-strip { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .compact-strip { grid-template-columns: 1fr; }
          .speaker-pod { padding: 12px; }
        }
      `}</style>
    </div>
  );
};

export default SpeakersView;
