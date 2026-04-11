import React from 'react';
import { motion } from 'framer-motion';
import { Bus, HeartPulse, Home, GraduationCap, Landmark, Leaf, Wifi, Cloud, MessageSquare, Video, Shield, Smartphone, Activity, Zap, Database } from 'lucide-react';

const TopicCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div 
    className="topic-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
  >
    <div className="icon-box">
      <Icon size={24} />
    </div>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </motion.div>
);

const TopicsView = () => {
  const sections = [
    {
      title: "Smart City Systems",
      items: [
        { icon: Bus, title: "Mobility", desc: "Smart Transportation & Mobility" },
        { icon: HeartPulse, title: "Healthcare", desc: "E-health & monitoring" },
        { icon: Home, title: "Smart Home", desc: "Home automation" },
        { icon: GraduationCap, title: "Education", desc: "Intelligent learning" },
        { icon: Landmark, title: "Governance", desc: "Smart administration" },
        { icon: Leaf, title: "Environment", desc: "Sustainable energy" },
      ]
    },
    {
      title: "Data & AI Technologies",
      items: [
        { icon: Activity, title: "Machine Learning", desc: "Predictive analytics" },
        { icon: Zap, title: "Deep Learning", desc: "Advanced AI models" },
        { icon: Database, title: "Big Data", desc: "Architectures & Algos" },
        { icon: Wifi, title: "IoT", desc: "Device connectivity" },
        { icon: Shield, title: "Security", desc: "Systems & Network security" },
        { icon: MessageSquare, title: "NLP", desc: "Natural Language Processing" },
      ]
    }
  ];

  return (
    <div className="topics-view">
      {sections.map((section, sIndex) => (
        <div key={sIndex} className="section-group">
          <h2 className="group-title">{section.title}</h2>
          <div className="topics-grid">
            {section.items.map((item, iIndex) => (
              <TopicCard key={iIndex} {...item} index={iIndex + (sIndex * 6)} />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .topics-view {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .group-title {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }
        .topic-card {
          background: var(--bg-card);
          padding: 24px;
          border-radius: 16px;
          border: 1px solid var(--border-glass);
          display: flex;
          gap: 20px;
          align-items: center;
          transition: 0.3s;
        }
        .topic-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent);
          transform: translateY(-5px);
        }
        .icon-box {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent);
          padding: 15px;
          border-radius: 12px;
        }
        .card-content h3 {
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .card-content p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

export default TopicsView;
