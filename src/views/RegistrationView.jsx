import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  CheckSquare, 
  Package, 
  Coffee, 
  UserPlus, 
  ShieldCheck,
  AlertCircle,
  FileBadge
} from 'lucide-react';

const feeData = [
  { category: "Professor / Researcher / Doctor", earlyBird: "[40 € / 400 MAD]", regular: "[40 € / 400 MAD]" },
  { category: "PhD Student", earlyBird: "[30 € / 300 MAD]", regular: "[30 € / 300 MAD]" },
  { category: "Industry Professional", earlyBird: "[50 € / 500 MAD]", regular: "[50 € / 500 MAD]" },
  { category: "Attendee (no presentation)", earlyBird: "[20 € / 200 MAD]", regular: "[20 € / 200 MAD]" }
];

const inclusions = [
 'Access to all conference sessions and keynotes (25–27 June 2026)',
'Conference kit and Book of Abstracts',
'Coffee breaks and lunches',
'Welcome reception and gala dinner',
'ertificate of attendance/presentation'

];

const RegistrationView = () => {
  return (
    <div className="container">
      <div className="registration-portal no-card">
        {/* Registration Header HUD */}
        <div className="registration-header-hud">
          <div className="accent-line"></div>
          <h2>REGISTRATION <span className="text-secondary">& FEES</span></h2>
          <p className="portal-sub">Strategic Admission for ICISCT'2026 Participants</p>
        </div>

        <div className="registration-grid">
          {/* Fee Table Section */}
          <div className="fee-registry">
            <div className="registry-header">
              <CreditCard size={16} className="accent" />
              <h3>WORKSHOP REGISTRATION FEES</h3>
            </div>
            
            <div className="fee-table-minimal">
              <div className="fee-header-row">
                <span className="col-cat">CATEGORY</span>
                <span className="col-eb">EARLY-BIRD</span>
                <span className="col-reg">REGULAR</span>
              </div>
              {feeData.map((item, i) => (
                <div key={i} className="fee-row">
                  <div className="col-cat">
                    <span className="fee-category">{item.category}</span>
                  </div>
                  <div className="col-eb">{item.earlyBird}</div>
                  <div className="col-reg">{item.regular}</div>
                </div>
              ))}
            </div>

            <div className="inclusion-box">
              <div className="box-header">
                <Package size={16} className="accent" />
                <span>FEES INCLUDE:</span>
              </div>
              <div className="inclusion-list">
                {inclusions.map((text, i) => (
                  <div key={i} className="inc-item">
                    <CheckSquare size={14} className="accent" />
                    <span>{text}</span>
                  </div>
                ))}
                <div className="policy-note">
                <AlertCircle size={14} className="accent inc-item" />
                <span>Note: Payment instructions: [To be added — bank transfer details, online payment link, etc.]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Policies Section */}
          <div className="policy-engine">
            <div className="registry-header">
              <ShieldCheck size={16} className="accent" />
              <h3>REGISTRATION POLICIES</h3>
            </div>

            <div className="policies-stack">
              <div className="policy-card">
                <FileBadge size={18} className="accent" />
                <div className="policy-text">
                  <strong>Mandatory Author Registration</strong>
                  <p>Registration is required for all participants. Every accepted paper must have at least one author registered separately.</p>
                </div>
              </div>

              <div className="policy-card">
                <UserPlus size={18} className="accent" />
                <div className="policy-text">
                  <strong>Additional Papers</strong>
                  <p>Authors with more than one accepted paper should pay a registration fee for each paper to be included in the proceedings.</p>
                </div>
              </div>

              <div className="policy-card">
                <AlertCircle size={18} className="accent" />
                <div className="policy-text">
                  <strong>Non-Registered Authors</strong>
                  <p>Articles by authors not registered will not be included in the workshop program or proceedings.</p>
                </div>
              </div>

              <div className="policy-note">
                <Coffee size={14} />
                <span>Note: The publication fees of best papers are fully supported by ICISCT'2026.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .registration-portal {
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .registration-header-hud {
          border-left: 4px solid var(--accent);
          padding-left: 25px;
        }
        .registration-header-hud h2 { font-size: 2.5rem; font-weight: 800; margin-bottom: 5px; }
        .portal-sub { font-size: 0.95rem; color: var(--text-secondary); letter-spacing: 1px; }
        .accent-line { width: 50px; height: 1px; background: var(--accent); margin-bottom: 15px; }

        .registration-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 70px;
          margin-bottom: 60px;
        }

        .registry-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 10px;
        }
        .registry-header h3 { font-size: 0.85rem; font-weight: 800; letter-spacing: 2px; color: #fff; margin: 0; }

        /* Fee Table */
        .fee-table-minimal { display: flex; flex-direction: column; gap: 5px; }
        
        .fee-header-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          padding: 12px 25px;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 1px;
          opacity: 0.5;
          text-transform: uppercase;
        }

        .fee-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          align-items: center;
          padding: 18px 25px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          transition: 0.3s;
        }
        .fee-row:hover { background: rgba(0, 229, 255, 0.05); border-color: var(--accent); }
        .fee-category { font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px; }
        
        .col-eb, .col-reg { 
          font-weight: 800; 
          color: var(--accent); 
          font-size: 0.95rem;
          text-align: right;
        }
        .col-reg { opacity: 0.9; }

        /* Inclusions */
        .inclusion-box { margin-top: 40px; padding: 25px; background: rgba(0, 229, 255, 0.03); border: 1px dashed var(--accent); }
        .box-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-weight: 800; font-size: 0.75rem; color: var(--accent); }
        .inclusion-list { display: flex; flex-direction: column; gap: 12px; }
        .inc-item { display: flex; align-items: center; gap: 12px; font-size: 0.85rem; color: var(--text-secondary); }

        /* Policy Engine */
        .policies-stack { display: flex; flex-direction: column; gap: 25px; }
        .policy-card { display: flex; gap: 20px; align-items: flex-start; }
        .policy-text strong { display: block; font-size: 0.9rem; color: #fff; margin-bottom: 5px; }
        .policy-text p { font-size: 0.8rem; color: var(--text-secondary); opacity: 0.7; line-height: 1.6; margin: 0; }
        .policy-note {
          display: flex; align-items: center; gap: 10px;
          padding: 15px; background: rgba(255,255,255,0.05);
          font-size: 0.75rem; font-weight: 700; color: var(--accent);
          margin-top: 15px; border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .registration-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 360px) {
          .registration-header-hud { padding-left: 15px; border-left-width: 2px; }
          .fee-header-row { display: none; }
          .fee-row {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 20px;
          }
          .col-eb, .col-reg { text-align: left; font-size: 0.85rem; }
          .col-eb::before { content: "EARLY-BIRD: "; font-size: 0.6rem; opacity: 0.5; }
          .col-reg::before { content: "REGULAR: "; font-size: 0.6rem; opacity: 0.5; }
          .registration-header-hud h2 { font-size: clamp(1.6rem, 5vw, 2rem); }
        }
      `}</style>
    </div>
  );
};

export default RegistrationView;
