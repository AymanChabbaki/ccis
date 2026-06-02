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
    { name: "Prof. Houssine Azeddoug", role: "President of Hassan II University of Casablanca" },
    { name: "Prof. Abdeslam EL BOUARI", role: "Dean of Faculty of Sciences Ben M'sick" }
  ]},
  { group: "Chair", members: [
        { name: "Prof. Nawal Sael", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Co-Chair", members: [
    { name: "Prof. Faouzia Benabbou", role: "FSBM, Casablanca Morocco" }
  ]},
];

const scientificCommittee = [
  { name: "Prof. Aamre khalile", role: "UNIVL, France" },
  { name: "Prof. Achtaich Khadija", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. AHAJJAM Tarik", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. AHARRANE Nabil", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Ait Daoud Mohammed", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Aouhassi Sarah", role: "ENSAM-UNIVH2C Morocco" },
  { name: "Prof. Arezki Sara", role: "FST-UNIVH1 Morocco" },
  { name: "Prof. AZIZI Mostafa", role: "FS-UNIVMP Morocco" },
  { name: "Prof. Azzouzi Salma", role: "FS-UNIVIT Morocco" },
  { name: "Prof. Behja Hicham", role: "ENSEM-UNIVH2C Morocco" },
  { name: "Prof. Benabbou Faouzia", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. BENADDI Hafsa", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Benamri Ichrak", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Bouggar Driss", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Bouhsissin Soukaina", role: "ENSAM-UNIVH2C Morocco" },
  { name: "Prof. chafiq Tariq", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. DANUBIANU Mirela", role: "UNIVSCMS, Romania" },
  { name: "Prof. el azami ikram", role: "FS-UNIVIT Morocco" },
  { name: "Prof. El Mourabit Yousef", role: "FST-UNIVSMS Morocco" },
  { name: "Prof. El-Ghazawi Tarek", role: "UNIVGW, USA" },
  { name: "Prof. Elazzaby Fouzia", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Elguemmat Kamal", role: "ENSET-UNIVH2C Morocco" },
  { name: "Prof. elkharraz amal", role: "UNIVQAM, Canada" },
  { name: "Prof. Ellaky Zineb", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Ettaoufik abdelaziz", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. FADILI Hammou", role: "FMSH Paris, France" },
  { name: "Prof. FAKHRI Youssef", role: "FS-UNIVIT Morocco" },
  { name: "Prof. Farid Samuel", role: "The George Washington University, United States" },
  { name: "Prof. GAYE Ibrahima", role: "Alioune Diop University, Senegal" },
  { name: "Prof. Hadi Moulay Youssef", role: "EST-UNIVIT Morocco" },
  { name: "Prof. Hain Mustapha", role: "ENSAM-UNIVH2C Morocco" },
  { name: "Prof. Hanoune Mostafa", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. HAQIQ Abdelkrim", role: "FST-UNIVH1 Morocco" },
  { name: "Prof. Hattaf Khalid", role: "CRMEF of Casablanca, Morocco" },
  { name: "Prof. JDIDOU Youssef", role: "ENSAD-UNIVH2C Morocco" },
  { name: "Prof. kandali khalid", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. kikomba michael", role: "ISP, DR Congo" },
  { name: "Prof. Laaz Naziha", role: "EHTP-UNIVH2C Morocco" },
  { name: "Prof. LAMAAZI Hanane", role: "UAE University, United Arab Emirates" },
  { name: "Prof. Lmati Imane", role: "FST-UNIVH1 Morocco" },
  { name: "Prof. LO Alla", role: "UADB, Senegal" },
  { name: "Prof. Mahmoudi Sidi Ahmed", role: "UNIVMONS, Belgium" },
  { name: "Prof. Matrane Yassir", role: "ENSAM-UNIVH2C Morocco" },
  { name: "Prof. Mokhliss Ghizlane", role: "ENS-UNIVH2C Morocco" },
  { name: "Prof. Mosbah Mohamed", role: "University of Bordeaux, France" },
  { name: "Prof. Moulay El Hassan Charaf", role: "FS-UNIVIT Morocco" },
  { name: "Prof. Nouh Said", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Ouahabi sara", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Ouchra Hafsa", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Pereira Ana", role: "IPB, Portugal" },
  { name: "Prof. RAJAALLAH El Mostafa", role: "ISS-UNIVH1 Morocco" },
  { name: "Prof. Sadiq Abdelalim", role: "FS-UNIVIT Morocco" },
  { name: "Prof. Sael Nawal", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. SARFRAZ Muhammad", role: "UNIVK, Kuwait" },
  { name: "Prof. seydounourou sylla", role: "UNIVADB, Senegal" },
  { name: "Prof. Silkan Hassan", role: "FS-UNIVCD Morocco" },
  { name: "Prof. Tazi Said", role: "UNIVT1, France" },
  { name: "Prof. Zahour Omar", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. Zakrani Abdelali", role: "ENSAM-UNIVH2C Morocco" },
  { name: "Prof. Zaouch Amal", role: "FSBM-UNIVH2C Morocco" },
  { name: "Prof. zougagh hicham", role: "FST-UNIVSMS Morocco" },
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
              Organizing
              {activeTab === 'organizing' && <motion.div layoutId="tab-line" className="tab-line" />}
            </button>
            <button 
              className={`min-tab ${activeTab === 'scientific' ? 'active' : ''}`}
              onClick={() => setActiveTab('scientific')}
            >
              Scientific
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
          top: 79px; /* Slighly offset to prevent pixel gap with header */
          z-index: 50; /* High enough to stay above list, low enough for mobile menu */
          background: var(--bg-dark);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          margin-bottom: 30px;
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
          .index-title-row { padding-left: 0; }
          .index-title-row h3 { font-size: 0.9rem; letter-spacing: 2px; }
        }
      `}</style>
    </div>
  );
};

export default CommitteesView;
