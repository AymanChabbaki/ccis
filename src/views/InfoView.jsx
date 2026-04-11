import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Plane, 
  Train, 
  Car, 
  Hotel, 
  Mail, 
  Phone,
  Navigation,
  Globe,
  Info,
  ExternalLink,
  Navigation2
} from 'lucide-react';

const InfoView = () => {
  return (
    <div className="container">
      <div className="venue-discovery-portal">
        <div className="portal-grid">
          {/* Logistics Hub (Left) */}
          <motion.div 
            className="logistics-hub"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="portal-header">
              <div className="accent-tag">VENUE & LOGISTICS</div>
              <h2>Casablanca, <span className="text-secondary">Morocco</span></h2>
              <div className="venue-identity">
                <MapPin size={18} className="accent" />
                <p>Faculty of Sciences Ben M'sick, Hassan II University</p>
              </div>
            </div>

            <div className="logistics-sections">
              {/* Transport Strip */}
              <div className="logistics-section">
                <div className="section-label">
                  <Navigation2 size={14} className="accent" />
                  <span>HOW TO REACH</span>
                </div>
                <div className="logistics-rows">
                  <div className="logistics-row">
                    <Plane size={18} className="row-icon" />
                    <div className="row-content">
                      <span className="row-title">Mohammed V International Airport</span>
                      <p>Located 30km from the venue. Official airport taxis (Grand Taxis) are available 24/7 (Fixed rate: ~250-300 MAD).</p>
                    </div>
                  </div>
                  <div className="logistics-row">
                    <Train size={18} className="row-icon" />
                    <div className="row-content">
                      <span className="row-title">Train (ONCF)</span>
                      <p>Airport shuttle to 'Casa Voyageurs' station runs every hour. From there, take a taxi or Tramway to Ben M'sick.</p>
                    </div>
                  </div>
                  <div className="logistics-row">
                    <Car size={18} className="row-icon" />
                    <div className="row-content">
                      <span className="row-title">Local Transport</span>
                      <p>Small Red Taxis are efficient for city travel. Always ensure the meter is used or agree on the fare beforehand.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospitality Strip */}
              <div className="logistics-section">
                <div className="section-label">
                  <Hotel size={14} className="accent" />
                  <span>ACCOMMODATION</span>
                </div>
                <p className="section-desc">Various 3, 4, and 5-star hotels are located in the City Center (Gauthier, Maârif districts), approximately 15-20 mins from the Faculty.</p>
              </div>

              {/* Contact Strip */}
              <div className="logistics-section">
                <div className="section-label">
                  <Mail size={14} className="accent" />
                  <span>DIRECT CONTACT</span>
                </div>
                <div className="contact-grid">
                  <a href="mailto:wisct2020@gmail.com" className="contact-link">
                    <Mail size={14} /> wisct2020@gmail.com
                  </a>
                  <a href="tel:+212522704671" className="contact-link">
                    <Phone size={14} /> +212 (0) 522 70 46 71
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map HUD (Right) */}
          <motion.div 
            className="map-hud"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="map-frame">
              <img 
                src="C:\Users\HP ZBOOK\.gemini\antigravity\brain\f876afdd-4c08-4a19-9e04-eda2a81a7202\casablanca_venue_map_hud_1775943362463.png" 
                alt="Venur Map" 
                className="map-visual"
              />
              <div className="map-overlay">
                <div className="coordinate-tag top-left">LAT 33.5651° N</div>
                <div className="coordinate-tag top-right">LNG 7.5501° W</div>
                <div className="pulse-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-ring"></div>
                </div>
                <div className="venue-label-hud">
                  <div className="label-line"></div>
                  <div className="label-box">
                    <span>FSBM CASABLANCA</span>
                    <small>EVENT SITE ALPHA</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="map-actions">
              <button className="btn-secondary-outline">
                <Navigation size={14} /> GET DIRECTIONS
              </button>
              <button className="btn-secondary-outline">
                <ExternalLink size={14} /> CITY GUIDE (PDF)
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .venue-discovery-portal {
          padding: 40px 0;
          height: 100%;
        }

        .portal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Logistics Hub Left */
        .portal-header { margin-bottom: 40px; }
        .accent-tag {
          font-size: 0.7rem; font-weight: 800; letter-spacing: 3px;
          color: var(--accent); margin-bottom: 10px; opacity: 0.6;
        }
        .portal-header h2 { font-size: 2.8rem; font-weight: 800; margin-bottom: 15px; }
        .venue-identity {
          display: flex; gap: 15px; align-items: center;
          color: var(--text-secondary); font-weight: 600;
        }

        .logistics-sections { display: flex; flex-direction: column; gap: 40px; }
        .section-label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 20px;
        }
        .section-label span {
          font-size: 0.75rem; font-weight: 800; letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
        }
        .section-desc { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; }

        .logistics-rows { display: flex; flex-direction: column; gap: 25px; }
        .logistics-row { display: flex; gap: 20px; align-items: flex-start; }
        .row-icon { color: var(--accent); margin-top: 4px; opacity: 0.7; }
        .row-content { display: flex; flex-direction: column; gap: 4px; }
        .row-title { font-weight: 700; font-size: 0.95rem; }
        .row-content p { font-size: 0.8rem; color: var(--text-secondary); opacity: 0.7; line-height: 1.5; }

        .contact-grid { display: flex; gap: 30px; }
        .contact-link {
          display: flex; align-items: center; gap: 10px;
          color: var(--accent); text-decoration: none;
          font-size: 0.9rem; font-weight: 600;
          transition: 0.3s;
        }
        .contact-link:hover { opacity: 0.7; transform: translateX(5px); }

        /* Map HUD Right */
        .map-frame {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-glass);
          background: #000;
          box-shadow: 0 0 40px rgba(0, 229, 255, 0.1);
        }
        .map-visual { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }

        .map-overlay {
          position: absolute; inset: 0;
          pointer-events: none;
        }
        .coordinate-tag {
          position: absolute; font-family: monospace;
          font-size: 0.65rem; color: var(--accent); opacity: 0.5;
          padding: 10px;
        }
        .top-left { top: 0; left: 0; }
        .top-right { top: 0; right: 0; }

        .pulse-marker {
          position: absolute; top: 55%; left: 45%;
          transform: translate(-50%, -50%);
        }
        .marker-dot { width: 10px; height: 10px; background: var(--accent); border-radius: 50%; }
        .marker-ring {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 30px; height: 30px;
          border: 1px solid var(--accent); border-radius: 50%;
          animation: map-pulse 2s infinite;
        }
        @keyframes map-pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }

        .venue-label-hud {
          position: absolute; top: 55%; left: 48%;
          display: flex; align-items: center; gap: 15px;
        }
        .label-line { width: 40px; height: 1px; background: var(--accent); }
        .label-box {
          background: rgba(0, 229, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 8px 15px;
          border: 1px solid var(--accent);
          display: flex; flex-direction: column;
        }
        .label-box span { font-weight: 800; font-size: 0.75rem; letter-spacing: 1px; }
        .label-box small { font-size: 0.55rem; color: var(--accent); font-weight: 700; opacity: 0.7; }

        .map-actions {
          display: flex; gap: 20px; margin-top: 30px;
        }
        .btn-secondary-outline {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          color: #fff; padding: 10px 20px;
          border-radius: 4px; font-weight: 700;
          font-size: 0.8rem; cursor: pointer;
          display: flex; align-items: center; gap: 10px;
          transition: 0.3s;
        }
        .btn-secondary-outline:hover { background: rgba(0, 229, 255, 0.1); border-color: var(--accent); }

        @media (max-width: 1200px) {
          .portal-grid { grid-template-columns: 1fr; gap: 40px; }
          .logistics-hub { order: 2; }
          .map-hud { order: 1; }
          .portal-header h2 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default InfoView;
