import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  UserCheck, 
  Search, 
  Globe, 
  Zap,
  ArrowRight,
  Hash
} from 'lucide-react';

const organizingCommittee = [
  { group: "Honorary Chairs", members: [
    { name: "Pr. Aawatif Hayar", role: "President of University Hassan II of Casablanca" },
    { name: "Pr. Mohammed Talbi", role: "Dean of Faculty of Sciences Ben M'sick" }
  ]},
  { group: "General Chair", members: [
    { name: "Pr. Faouzia Benabbou", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Co-Chair", members: [
    { name: "Pr. Nawal Sael", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Publication Chairs", members: [
    { name: "Pr. Moussaid Laila", role: "ENSEM, Casablanca Morocco" },
    { name: "Pr. Nawal Sael", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Faouzia Benabbou", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Sponsorship & Exhibits Chairs", members: [
    { name: "Pr. Azouazi Mohamed", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Tragha Abderrahim", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Poster Chairs", members: [
    { name: "Pr. ElHabib Benlahmer", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Rachid Saadane", role: "EHTP, Casablanca Morocco" }
  ]},
  { group: "Registration Chairs", members: [
    { name: "Pr. Abdessamad Belangour", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Sara Ouahabi", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Web Chairs", members: [
    { name: "Pr. Abdelaziz Marzak", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Said Nouh", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Publicity & Communication Chairs", members: [
    { name: "Pr. Elfilali Sanaa", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Achtaich Khadija", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Speakers Session Chairs", members: [
    { name: "Pr. Abdelwahed Namir", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Mansouri Khalifa", role: "ENSET Mohammadia" },
    { name: "Pr. Elhoussine Labriji", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Abderrahim Benihssane", role: "Faculty of Sciences El-jadida Morocco" }
  ]},
  { group: "Organizing Local Committee (Juniors)", members: [
    { name: "Er-raji Naoufal", role: "FSBM, Casablanca Morocco" },
    { name: "Nasser Zineb", role: "FSBM, Casablanca Morocco" },
    { name: "Hamim Touria", role: "FSBM, Casablanca Morocco" },
    { name: "Fagroud Fatima Zahra", role: "FSBM, Casablanca Morocco" },
    { name: "Ait abdelouahid Rachida", role: "FSBM, Casablanca Morocco" },
    { name: "Sagdali Imane", role: "FSBM, Casablanca Morocco" },
    { name: "Nihal Elkhalidi", role: "FSBM, Casablanca Morocco" },
    { name: "Soultana Abdelfettah", role: "FSBM, Casablanca Morocco" }
  ]}
];

const scientificCommittee = [
  { name: "Pr. Sankar Sivarajah", role: "University of Bradford, UK" },
  { name: "Pr. Victoria Hill", role: "Al Akhawayn University, Ifrane" },
  { name: "Pr. Mirela Danubianu", role: "Roumanie" },
  { name: "Pr. Abderrafiaa Koukam", role: "UTBM, France" },
  { name: "Pr. Amal El Fallah Seghrouchni", role: "Sorbonne, France" },
  { name: "Pr. Olivier Debauche", role: "University of Umons, Belgique" },
  { name: "Pr. Hammou Fadili", role: "CNAM, France" },
  { name: "Pr. Latifa Oukhellou", role: "IFSTTAR, France" },
  { name: "Pr. Salah Aziz", role: "UQAM, Montréal - Canada" },
  { name: "Pr. Saleem ullah", role: "IUB, Pakistan" },
  { name: "Pr. Nuno Garcia", role: "UBI, Portugal" },
  { name: "Pr. Nuno Pumbo", role: "UBI, Portugal" },
  { name: "Pr. Sandeep Pirbhulal", role: "UBI, Portugal" },
  { name: "Pr. Abdelaziz Marzak", role: "FSBM, Casablanca Morocco" },
  { name: "Pr Fatima Zahra Belouadha", role: "EMI, Rabat - Morocco" },
  { name: "Pr. Rachida Ajhoun", role: "ENSIAS, Rabat - Morocco" },
  { name: "Pr. Mounia ABIK", role: "ENSIAS, Rabat - Morocco" },
  { name: "Pr. Driss Bouzidi", role: "ENSIAS, Rabat - Morocco" },
  { name: "Pr. Abderrahim Beni-hssane", role: "FSCD, El Jadida" },
  { name: "Pr. Zahi JARIR", role: "FS Semlalia, Marrakech" },
  { name: "Pr. Fouzia Omary", role: "FSR, Rabat - Morocco" },
  { name: "Pr. Abdellah Idrissi", role: "FSR, Rabat - Morocco" },
  { name: "Pr. Med Chaouki Abou Naima", role: "FS My Ismail, Meknes" },
  { name: "Pr. Samir Mbarki", role: "FS Ibn Tofail, Kenitra" },
  { name: "Pr. Abdelalim Sadik", role: "FS Ibn Tofail, Kenitra" },
  { name: "Pr. Mohammed Mourchid", role: "FS Ibn Tofail, Kenitra" },
  { name: "Pr. Laila Moussaid", role: "ENSEM, Casablanca Morocco" },
  { name: "Pr. Hicham Behja", role: "ENSEM, Casablanca Morocco" },
  { name: "Pr. Hain Mustapha", role: "ENSAM, Casablanca Morocco" },
  { name: "Pr. Rachid Saadane", role: "EHTT, Casablanca Morocco" },
  { name: "Pr. Khadija Douzi", role: "FST, Casablanca Morocco" },
  { name: "Pr. Khalid Moussaid", role: "FS Ain chock, Casablanca" },
  { name: "Pr. Noreddine Abghour", role: "FS Ain chock, Casablanca" },
  { name: "Pr. Said Nouh", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Khadija Sabiri", role: "UBI, Portugal" },
  { name: "Pr. Noura Yousfi", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. El Houssine Labriji", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Faouzia Benabbou", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Abdelwahad Namir", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Abderrahim Tragha", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Issam Atouf", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Mostafa Hanoune", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Mohamed Azzouazi", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. EL Habib Benlahmar", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Nawal Sael", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Sanaa Elfilali", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Abdessamad Belangour", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Fadoua Ghanimi", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Ahmed Eddaoui", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Mohammed Saber", role: "ENSAO, Oujda Morocco" },
  { name: "Pr. Mostafa Azizi", role: "ESTO, Oujda Morocco" },
  { name: "Pr. Ahmed zellou", role: "ENSIAS, Rabat Morocco" },
  { name: "Pr. Fadoua Ataa allah", role: "IRCAM, Rabat" },
  { name: "Pr. Salem Nafiri", role: "EHTP, Casablanca" },
  { name: "Pr. Anass Rghioui", role: "EHTP, Casablanca" },
  { name: "Pr. Hassania MESDOUAD", role: "EHTP, Casablanca" }
];

const CommitteesView = () => {
  const [activeTab, setActiveTab] = useState('organizing');
  const [search, setSearch] = useState('');

  const filteredScientific = scientificCommittee.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="registry-dashboard no-card">
        {/* Sticky Controls Panel */}
        <div className="registry-sticky-panel">
          <div className="minimal-tabs">
            <button 
              className={`min-tab ${activeTab === 'organizing' ? 'active' : ''}`}
              onClick={() => setActiveTab('organizing')}
            >
              Organizing Body
              {activeTab === 'organizing' && <motion.div layoutId="tab-line" className="tab-line" />}
            </button>
            <button 
              className={`min-tab ${activeTab === 'scientific' ? 'active' : ''}`}
              onClick={() => setActiveTab('scientific')}
            >
              Scientific Council
              {activeTab === 'scientific' && <motion.div layoutId="tab-line" className="tab-line" />}
            </button>
          </div>

          <div className="minimal-search">
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Search council..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Natural Flow Content */}
        <div className="registry-natural-flow">
          <AnimatePresence mode="wait">
            {activeTab === 'organizing' ? (
              <motion.div 
                key="organizing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="organizing-index"
              >
                {organizingCommittee.map((group, i) => (
                  <div key={i} className="index-section">
                    <div className="index-title-row">
                      <Hash size={14} className="accent-icon" />
                      <h3>{group.group}</h3>
                      <div className="index-title-line"></div>
                    </div>
                    <div className="index-members-grid">
                      {group.members.map((member, j) => (
                        <div key={j} className="index-member-item">
                          <div className="identity-node"></div>
                          <div className="member-meta">
                            <span className="member-name">{member.name}</span>
                            <span className="member-affiliation">{member.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="scientific"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="scientific-data-wall"
              >
                <div className="wall-header">
                  <Globe size={14} className="accent-icon" />
                  <span>TOTAL REGISTERED EXPERTS: {filteredScientific.length}</span>
                </div>
                <div className="wall-grid">
                  {filteredScientific.map((p, i) => (
                    <motion.div 
                      key={i} 
                      className="wall-item"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.005 }}
                    >
                      <ArrowRight size={12} className="wall-tick" />
                      <div className="wall-meta">
                        <span className="wall-name">{p.name}</span>
                        <span className="wall-affiliation">{p.role}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div style={{ paddingBottom: '100px' }}></div>
        </div>
      </div>

      <style jsx>{`
        .registry-dashboard.no-card {
          padding-top: 20px;
          height: auto; /* Allow full expansion */
        }

        /* Sticky Panel - Now targets the viewpoint specifically */
        .registry-sticky-panel {
          position: sticky;
          top: -20px; /* Aligns with view container padding offset */
          z-index: 1000;
          background: var(--bg-dark); /* Ensure it covers text below */
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          margin-bottom: 40px;
          border-bottom: 1px solid var(--border-glass);
        }

        .minimal-tabs { display: flex; gap: 40px; }
        .min-tab {
          background: none; border: none;
          color: rgba(255,255,255,0.4);
          font-weight: 800; font-size: 1rem;
          letter-spacing: 1px; cursor: pointer;
          position: relative; padding: 8px 0;
          transition: 0.3s;
        }
        .min-tab.active { color: var(--accent); }
        .tab-line {
          position: absolute; bottom: -21px;
          left: 0; right: 0; height: 2px;
          background: var(--accent);
          box-shadow: 0 0 15px var(--accent);
        }

        .minimal-search {
          display: flex; align-items: center; gap: 15px;
          color: var(--accent); opacity: 0.5;
          border-bottom: 1px solid var(--border-glass);
          padding: 5px 0; width: 250px;
        }
        .minimal-search input {
          background: none; border: none;
          color: #fff; outline: none;
          font-size: 0.9rem; width: 100%;
        }

        /* Organizing Layout */
        .organizing-index { display: flex; flex-direction: column; gap: 50px; }
        .index-title-row {
          display: flex; align-items: center;
          gap: 15px; margin-bottom: 25px;
        }
        .index-title-row h3 { 
          font-size: 0.8rem; font-weight: 900; 
          letter-spacing: 3px; color: rgba(255,255,255,0.6);
          margin: 0;
        }
        .index-title-line { height: 1px; flex: 1; background: var(--border-glass); }
        .accent-icon { color: var(--accent); }

        .index-members-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px 40px;
        }
        .index-member-item {
          display: flex; gap: 15px;
          align-items: flex-start;
        }
        .identity-node {
          width: 8px; height: 8px;
          border: 1px solid var(--accent);
          border-radius: 2px; margin-top: 6px;
          flex-shrink: 0;
        }
        .member-meta { display: flex; flex-direction: column; }
        .member-name { font-weight: 700; font-size: 1.05rem; }
        .member-affiliation { font-size: 0.75rem; color: var(--text-secondary); opacity: 0.6; }

        /* Scientific Data Wall */
        .scientific-data-wall { display: flex; flex-direction: column; gap: 30px; }
        .wall-header {
          font-size: 0.7rem; font-weight: 800;
          letter-spacing: 2px; opacity: 0.4;
          display: flex; align-items: center; gap: 10px;
        }
        .wall-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .wall-item {
          display: flex; gap: 10px;
          align-items: flex-start; transition: 0.3s;
        }
        .wall-item:hover { color: var(--accent); transform: translateX(5px); }
        .wall-tick { color: var(--accent); opacity: 0.4; margin-top: 4px; }
        .wall-meta { display: flex; flex-direction: column; }
        .wall-name { font-weight: 600; font-size: 0.9rem; }
        .wall-affiliation { font-size: 0.65rem; color: var(--text-secondary); opacity: 0.5; }

        @media (max-width: 1300px) {
          .index-members-grid { grid-template-columns: repeat(2, 1fr); }
          .wall-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .registry-sticky-panel { flex-direction: column; align-items: flex-start; gap: 30px; top: -10px; }
          .minimal-search { width: 100%; }
          .wall-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .index-members-grid { grid-template-columns: 1fr; }
          .wall-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default CommitteesView;
