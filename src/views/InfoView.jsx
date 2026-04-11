import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, CreditCard, FileText, Info } from 'lucide-react';

const InfoView = () => {
  return (
    <div className="info-view">
      <div className="info-grid">
        {/* Registration Section */}
        <motion.div 
          className="info-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="card-header">
            <CreditCard className="icon-accent" />
            <h3>Registration Fees</h3>
          </div>
          <div className="card-content">
            <div className="fee-item">
              <span>Maghrebian Students</span>
              <span className="price">0 MAD</span>
            </div>
            <div className="fee-item">
              <span>International Participants</span>
              <span className="price">0 MAD</span>
            </div>
            <div className="fee-item">
              <span>Listeners</span>
              <span className="price">0 MAD</span>
            </div>
            <div className="fee-note">
              * Registration is mandatory for all participants.
            </div>
          </div>
        </motion.div>

        {/* Submission Rules */}
        <motion.div 
          className="info-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="card-header">
            <FileText className="icon-accent" />
            <h3>Submission Rules</h3>
          </div>
          <div className="card-content">
            <ul className="bullet-list">
              <li>Submit original contributions via <strong>EasyChair</strong></li>
              <li>Regular papers (4-6 Pages), Short (2-4 Pages)</li>
              <li>Language: English only</li>
              <li>Format: .docx IEEE Template</li>
            </ul>
            <div className="action-row">
              <button className="btn-small">Submission System</button>
              <button className="btn-small outline">Download Template</button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="info-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="card-header">
            <Phone className="icon-accent" />
            <h3>Contact Details</h3>
          </div>
          <div className="card-content">
            <div className="contact-item">
              <Phone size={16} />
              <span>(+212) 6 61 94 79 24</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>WISCT2020@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Faculté des Sciences Ben M'sick, Casablanca</span>
            </div>
          </div>
        </motion.div>

        {/* Publication Info */}
        <motion.div 
          className="info-card broad"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="card-header">
            <Globe className="icon-accent" />
            <h3>Publication & Journals</h3>
          </div>
          <div className="card-content">
            <p>Selected papers will be invited for submission in a special issue on <strong>"Innovative Smart City Technologies"</strong> in the International Journal on Web Based Learning Teaching Technologies (IGI-Global).</p>
            <div className="indexing-row">
              <span>Indexed in: Scopus</span>
              <span>ACM Digital Library</span>
              <span>+18 More</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .info-view {
          padding: 10px 0;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }
        .info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          padding: 30px;
        }
        .info-card.broad { grid-column: span 3; }
        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }
        .card-header h3 { font-size: 1.1rem; }
        .icon-accent { color: var(--accent); }

        .fee-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-glass);
        }
        .price { color: var(--accent); font-weight: 700; }
        .fee-note { font-size: 0.75rem; opacity: 0.5; margin-top: 15px; }

        .bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 25px;
        }
        .bullet-list li::before {
          content: "•";
          color: var(--accent);
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        .bullet-list li { font-size: 0.9rem; color: var(--text-secondary); }

        .action-row {
          display: flex;
          gap: 10px;
        }
        .btn-small {
          flex: 1;
          padding: 10px;
          background: var(--accent);
          color: var(--primary);
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
        }
        .btn-small.outline {
          background: none;
          border: 1px solid var(--border-glass);
          color: #fff;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 0;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .indexing-row {
          display: flex;
          gap: 20px;
          margin-top: 15px;
        }
        .indexing-row span {
          background: rgba(255,255,255,0.05);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--accent);
        }

        @media (max-width: 1100px) {
          .info-grid { grid-template-columns: 1fr; }
          .info-card.broad { grid-column: span 1; }
        }
      `}</style>
    </div>
  );
};

export default InfoView;
