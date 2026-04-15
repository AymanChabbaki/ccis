import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  Users, 
  Calendar, 
  Mic2, 
  Info, 
  Menu, 
  X,
  FileEdit,
  CreditCard,
  Award,
  Globe,
  Star
} from 'lucide-react';
import HeroView from './views/HeroView';
import TopicsView from './views/TopicsView';
import CommitteesView from './views/CommitteesView';
import DeadlinesView from './views/DeadlinesView';
import SpeakersView from './views/SpeakersView';
import InfoView from './views/InfoView';
import SubmissionsView from './views/SubmissionsView';
import RegistrationView from './views/RegistrationView';
import AcceptedWorksView from './views/AcceptedWorksView';
import NewsTicker from './components/NewsTicker';
import './App.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, component: HeroView },
  { id: 'topics', label: 'Topics', icon: BookOpen, component: TopicsView },
  { id: 'deadlines', label: 'Dates', icon: Calendar, component: DeadlinesView },
  { id: 'speakers', label: 'Speakers', icon: Mic2, component: SpeakersView },
  { id: 'accepted', label: 'Program', icon: Award, component: AcceptedWorksView },
  { id: 'submissions', label: 'Submissions', icon: FileEdit, component: SubmissionsView },
  { id: 'registration', label: 'Registration', icon: CreditCard, component: RegistrationView },
  { id: 'committees', label: 'Committees', icon: Users, component: CommitteesView },
  { id: 'info', label: 'Venue', icon: Info, component: InfoView },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userCount, setUserCount] = useState(32);

  // Simulate Live User Sessions
  React.useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return next > 40 ? 40 : next < 25 ? 25 : next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const ActiveComponent = navItems.find(item => item.id === activeTab)?.component || HeroView;

  return (
    <div className="landing-container">
      {/* Top Navigation */}
      <header className="main-header">
        <div className="nav-container container">
          <div className="branding">
            <img 
              src="/whitelogo.png" 
              alt="CWISCT'26 Logo" 
              className="navbar-logo" 
              onClick={() => setActiveTab('home')}
            />
            <div className="indexing-badges">
             
            </div>
          </div>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div layoutId="nav-underline" className="nav-underline" />
                )}
              </button>
            ))}
          </nav>

          <div className="header-right">
            <div className="user-count-header">
              <span className="live-dot"></span>
              <span className="count-val">{userCount} Online</span>
            </div>
            <button className="btn-primary-shiny highlight" onClick={() => setActiveTab('submissions')}>Call for Paper</button>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                <item.icon size={18} /> 
                <span className="mobile-label">{item.label}</span>
                {activeTab === item.id && <div className="mobile-active-dot"></div>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <NewsTicker />

      {/* Main Multi-Section Viewport */}
      <section className="dynamic-viewport">
        <div className="view-content-stack">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="view-render-area"
            >
              <ActiveComponent setActiveTab={setActiveTab} />
            </motion.div>
          </AnimatePresence>

          {/* Sponsors Section (Always present at the bottom of content) */}
          <div className="sponsors-registry container">
            <div className="registry-header-hud">
              <div className="accent-tag">STRATEGIC PARTNERS</div>
              <div className="title-row">
                <Star size={16} className="accent" />
                <span>OFFICIAL SPONSORS & SUPPORTERS</span>
              </div>
            </div>
            <div className="sponsors-grid">
              <div className="sponsor-logo-box"><img src="/univh2clogo.png" alt="Hassan II University" /></div>
              <div className="sponsor-logo-box"><img src="/fsbmlogo.png" alt="FSBM Casablanca" /></div>
              <div className="sponsor-logo-box"><img src="/CNRSTlogo.png" alt="CNRST Morocco" /></div>
              <div className="sponsor-logo-box"><img src="/liaslogo.png" alt="LIAS" /></div>
              <div className="sponsor-logo-box"><img src="/ltimlogo.png" alt="LTIM" /></div>
            </div>
          </div>
          
          {/* Scientific Impact Footer */}
          <footer className="compact-footer">
            <div className="container footer-content">
              <div className="footer-left">
                <span>Organized by <strong>LIAS & LTIM</strong> FSBM</span>
              </div>
              <div className="footer-right">
                <div className="social-pill"><Globe size={14} /> <a href="mailto:icisctconf@gmail.com">icisctconf@gmail.com</a></div>
                
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
