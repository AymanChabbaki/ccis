import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  UserCheck, 
  MapPin, 
  Search, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Flag,
  Globe,
  Filter
} from 'lucide-react';

const organizingCommittee = [
  { group: "Honorary Chairs", members: [
    { name: "Pr. Aawatif Hayar", role: "President of University Hassan II of Casablanca" },
    { name: "Pr. Mohammed Talbi", role: "Dean of Faculty of Sciences Ben M'sick" }
  ]},
  { group: "General Chairs", members: [
    { name: "Pr. Faouzia Benabbou", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Nawal Sael", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Publication Chairs", members: [
    { name: "Pr. Moussaid Laila", role: "ENSEM, Casablanca Morocco" },
    { name: "Pr. Nawal Sael", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Faouzia Benabbou", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Sponsorship & Exhibits", members: [
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
  { group: "Publicity & Communication", members: [
    { name: "Pr. Elfilali Sanaa", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Achtaich Khadija", role: "FSBM, Casablanca Morocco" }
  ]},
  { group: "Speakers Session", members: [
    { name: "Pr. Abdelwahed Namir", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Mansouri Khalifa", role: "ENSET Mohammadia" },
    { name: "Pr. Elhoussine Labriji", role: "FSBM, Casablanca Morocco" },
    { name: "Pr. Abderrahim Benihssane", role: "Faculty of Sciences El-jadida Morocco" }
  ]},
  { group: "Local Committee (Juniors)", members: [
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
  { name: "Pr. Amal El Fallah Seghrouchni", role: "University of Sorbonne, France" },
  { name: "Pr. Olivier Debauche", role: "University of Umons, Belgique" },
  { name: "Pr. Hammou Fadili", role: "CNAM, France" },
  { name: "Pr. Latifa Oukhellou", role: "IFSTTAR, France" },
  { name: "Pr. Salah Aziz", role: "UQAM, Montréal - Canada" },
  { name: "Pr. Saleem ullah", role: "Islamia University of Bahawalpur - Pakistan" },
  { name: "Pr. Nuno Garcia", role: "University Beira Interior-Portugal" },
  { name: "Pr. Nuno Pumbo", role: "University Beira Interior-Portugal" },
  { name: "Pr. Sandeep Pirbhulal", role: "University Beira Interior-Portugal" },
  { name: "Pr. Abdelaziz Marzak", role: "FSBM, Casablanca Morocco" },
  { name: "Pr Fatima Zahra Belouadha", role: "EMI, Rabat - Morocco" },
  { name: "Pr. Rachida Ajhoun", role: "ENSIAS, Rabat - Morocco" },
  { name: "Pr. Mounia ABIK", role: "ENSIAS, Rabat - Morocco" },
  { name: "Pr. Driss Bouzidi", role: "ENSIAS, Rabat - Morocco" },
  { name: "Pr. Abderrahim Beni-hssane", role: "FS Chouaïb Doukkali, El Jadida" },
  { name: "Pr. Zahi JARIR", role: "FS Semlalia, Marrakech - Morocco" },
  { name: "Pr. Fouzia Omary", role: "FSR, Rabat - Morocco" },
  { name: "Pr. Abdellah Idrissi", role: "FSR, Rabat - Morocco" },
  { name: "Pr. Med Chaouki Abou Naima", role: "FS My Ismail, Meknes" },
  { name: "Pr. Samir Mbarki", role: "FS Ibn Tofail, Kenitra" },
  { name: "Pr. Abdelalim Sadik", role: "FS Ibn Tofail, Kenitra" },
  { name: "Pr. Mohammed Mourchid", role: "FS Ibn Tofail, Kenitra" },
  { name: "Pr. Laila Moussaid", role: "ENSEM, Casablanca Morocco" },
  { name: "Pr. Hicham Behja", role: "ENSEM, Casablanca Morocco" },
  { name: "Pr. Hain Mustapha", role: "ENSAM, Casablanca Morocco" },
  { name: "Pr. Rachid Saadane", role: "EHTP, Casablanca Morocco" },
  { name: "Pr. Khadija Douzi", role: "FST, Casablanca Morocco" },
  { name: "Pr. Khalid Moussaid", role: "FS Ain chock, Casablanca Morocco" },
  { name: "Pr. Noreddine Abghour", role: "FS Ain chock, Casablanca Morocco" },
  { name: "Pr. Said Nouh", role: "FSBM, Casablanca Morocco" },
  { name: "Pr. Khadija Sabiri", role: "University Beira Interior, Portugal" },
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
      <div className="committees-tab-frame">
        {/* Top Controls */}
        <div className="registry-controls">
          <div className="tab-switcher">
            <button 
              className={`tab-btn ${activeTab === 'organizing' ? 'active' : ''}`}
              onClick={() => setActiveTab('organizing')}
            >
              Organizing Body
            </button>
            <button 
              className={`tab-btn ${activeTab === 'scientific' ? 'active' : ''}`}
              onClick={() => setActiveTab('scientific')}
            >
              Scientific Council
            </button>
          </div>

          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Find member..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="registry-viewport">
          <AnimatePresence mode="wait">
            {activeTab === 'organizing' ? (
              <motion.div 
                key="organizing"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="organizing-grid"
              >
                {organizingCommittee.map((group, i) => (
                  <div key={i} className="committee-panel">
                    <div className="panel-header">
                      <UserCheck size={16} className="accent-icon" />
                      <span>{group.group.toUpperCase()}</span>
                    </div>
                    <div className="member-list">
                      {group.members.map((member, j) => (
                        <div key={j} className="member-card">
                          <span className="m-name">{member.name}</span>
                          <span className="m-role">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="scientific"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="scientific-registry"
              >
                <div className="scientific-header-info">
                  <Globe size={18} className="accent-icon" />
                  <span>INTERNATIONAL EXPERT COUNCIL ({filteredScientific.length} MEMBERS)</span>
                </div>
                <div className="scientific-list">
                  {filteredScientific.map((p, i) => (
                    <motion.div 
                      key={i} 
                      className="scientific-item"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.01 }}
                    >
                      <div className="s-member-info">
                        <span className="s-name">{p.name}</span>
                        <span className="s-affiliation">{p.role}</span>
                      </div>
                      <div className="s-node-dot"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .committees-tab-frame {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 20px 0;
          height: 100%;
        }

        .registry-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .tab-switcher {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          padding: 4px;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .tab-btn {
          padding: 10px 24px;
          border: none;
          background: none;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          border-radius: 8px;
          transition: 0.3s;
        }

        .tab-btn.active {
          background: var(--accent);
          color: var(--primary);
          box-shadow: 0 4px 15px rgba(0, 229, 255, 0.2);
        }

        .search-bar {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 15px;
          width: 300px;
        }
        .search-icon { color: var(--accent); opacity: 0.5; }
        .search-bar input {
          background: none;
          border: none;
          color: #fff;
          padding: 12px;
          width: 100%;
          outline: none;
        }

        /* Organizing Layout */
        .organizing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          overflow-y: auto;
          max-height: 600px;
          padding-right: 15px;
        }

        .committee-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          border-radius: 15px;
          padding: 25px;
        }
        .panel-header {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--accent);
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 12px;
        }
        .member-list { display: flex; flex-direction: column; gap: 15px; }
        .member-card { display: flex; flex-direction: column; gap: 4px; }
        .m-name { font-weight: 700; font-size: 1rem; }
        .m-role { font-size: 0.75rem; color: var(--text-secondary); opacity: 0.7; }

        /* Scientific Registry Layout */
        .scientific-registry {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0 10px;
        }
        .scientific-header-info {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .scientific-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          overflow-y: auto;
          max-height: 550px;
          padding-right: 10px;
        }
        .scientific-item {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-glass);
          padding: 12px 20px;
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
        }
        .scientific-item:hover { border-color: var(--accent); background: rgba(0, 229, 255, 0.03); }
        .s-member-info { display: flex; flex-direction: column; }
        .s-name { font-size: 0.85rem; font-weight: 700; }
        .s-affiliation { font-size: 0.65rem; color: var(--text-secondary); opacity: 0.6; }
        .s-node-dot { width: 4px; height: 4px; background: var(--accent); border-radius: 50%; opacity: 0.3; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--border-glass); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--accent); }

        @media (max-width: 1100px) {
          .registry-controls { flex-direction: column; align-items: stretch; }
          .search-bar { width: 100%; }
          .organizing-grid { grid-template-columns: 1fr; }
          .scientific-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default CommitteesView;
