import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, UserCheck, ShieldCheck, GraduationCap } from 'lucide-react';

const CommitteeMember = ({ name, role, index }) => (
  <motion.div 
    className="member-item"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.02 }}
  >
    <div className="member-indicator"></div>
    <div className="member-info">
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  </motion.div>
);

const CommitteesView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const groups = [
    {
      title: "Honorary Chairs",
      icon: ShieldCheck,
      members: [
        { name: "Pr. Aawatif Hayar", role: "President of University Hassan II of Casablanca" },
        { name: "Pr. Mohammed Talbi", role: "Dean of Faculty of Sciences Ben M'sick" }
      ]
    },
    {
      title: "General Chairs",
      icon: UserCheck,
      members: [
        { name: "Pr. Faouzia Benabbou", role: "FSBM, Casablanca Morocco" },
        { name: "Pr. Nawal Sael", role: "FSBM, Casablanca Morocco" }
      ]
    },
    {
      title: "Scientific Committee",
      icon: GraduationCap,
      members: [
        { name: "Pr. Sankar Sivarajah", role: "University of Bradford, UK" },
        { name: "Pr. Victoria Hill", role: "Al Akhawayn University, Ifrane" },
        { name: "Pr. Mirela Danubianu", role: "Romania" },
        { name: "Pr. Abderrafiaa Koukam", role: "UTBM, France" },
        { name: "Pr. Amal El Fallah Seghrouchni", role: "University of Sorbonne, France" },
        { name: "Pr. Olivier Debauche", role: "University of Umons, Belgique" },
        { name: "Pr. Hammou Fadili", role: "CNAM, France" },
        { name: "Pr. Latifa Oukhellou", role: "IFSTTAR, France" },
        { name: "Pr. Salah Aziz", role: "UQAM, Montréal - Canada" },
        { name: "Pr. Saleem ullah", role: "Islamia University of Bahawalpur - Pakistan" },
      ]
    }
  ];

  return (
    <div className="committees-view">
      <div className="search-bar">
        <Search size={20} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search by name or institution..." 
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>

      <div className="committee-layout">
        {groups.map((group, gIndex) => {
          const filteredMembers = group.members.filter(m => 
            m.name.toLowerCase().includes(searchTerm) || m.role.toLowerCase().includes(searchTerm)
          );

          if (filteredMembers.length === 0) return null;

          return (
            <div key={gIndex} className="group-card">
              <div className="group-header">
                <group.icon size={22} className="icon-accent" />
                <h3>{group.title}</h3>
              </div>
              <div className="members-list">
                {filteredMembers.map((member, mIndex) => (
                  <CommitteeMember key={mIndex} {...member} index={mIndex} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .committees-view {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .search-bar {
          background: var(--bg-card);
          padding: 15px 25px;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          gap: 15px;
          max-width: 500px;
        }
        .search-bar input {
          background: none;
          border: none;
          color: #fff;
          width: 100%;
          font-family: inherit;
          outline: none;
        }
        .search-icon { color: var(--text-secondary); }

        .committee-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 25px;
        }
        .group-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 25px;
          border: 1px solid var(--border-glass);
          height: fit-content;
        }
        .group-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid var(--border-glass);
        }
        .group-header h3 { font-size: 1.1rem; letter-spacing: 1px; }
        .icon-accent { color: var(--accent); }

        .members-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .member-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          padding: 10px;
          border-radius: 8px;
          transition: 0.2s;
        }
        .member-item:hover { background: rgba(255,255,255,0.03); }
        .member-indicator {
          width: 4px;
          height: 100%;
          background: var(--accent);
          opacity: 0.3;
          border-radius: 4px;
        }
        .member-info h4 { font-size: 0.95rem; margin-bottom: 2px; }
        .member-info p { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.3; }
      `}</style>
    </div>
  );
};

export default CommitteesView;
