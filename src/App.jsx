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
  ChevronDown,
  Globe,
  Award
} from 'lucide-react';
import HeroView from './views/HeroView';
import TopicsView from './views/TopicsView';
import CommitteesView from './views/CommitteesView';
import DeadlinesView from './views/DeadlinesView';
import SpeakersView from './views/SpeakersView';
import InfoView from './views/InfoView';
import NewsTicker from './components/NewsTicker';
import './App.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, component: HeroView },
  { id: 'topics', label: 'Topics & Scope', icon: BookOpen, component: TopicsView },
  { id: 'deadlines', label: 'Important Dates', icon: Calendar, component: DeadlinesView },
  { id: 'speakers', label: 'Invited Speakers', icon: Mic2, component: SpeakersView },
  { id: 'committees', label: 'Committees', icon: Users, component: CommitteesView },
  { id: 'info', label: 'Practical Info', icon: Info, component: InfoView },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userCount, setUserCount] = useState(32);

  // Simulate Live User Sessions
  React.useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
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
            <h1 className="logo">WISCT<span className="accent">'20</span></h1>
            <div className="indexing-badges">
              <span className="badge-mini">Scopus</span>
              <span className="badge-mini">ACM</span>
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
            <button className="btn-primary-shiny highlight">Call for Paper</button>
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
                className="mobile-nav-link"
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                <item.icon size={18} /> {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <NewsTicker />

      {/* Hero Section - Persistent for Home, or maybe adaptive */}
      <section className="dynamic-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="view-render-area"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Scientific Impact Footer (Fixed) */}
      <footer className="compact-footer">
        <div className="container footer-content">
          <div className="footer-left">
            <span>Organized by <strong>TIM Laboratory</strong> & FSBM</span>
          </div>
          <div className="footer-right">
            <div className="social-pill"><Globe size={14} /> wisct2020.sciencesconf.org</div>
            <div className="social-pill"><Award size={14} /> Scopus Indexed</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
