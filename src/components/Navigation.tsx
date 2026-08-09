import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'home',    label: 'Home',       path: '/' },
  { id: 'blog',    label: 'Blog',       path: '/blog' },
  { id: 'about',   label: 'About Us',   path: '/#about' },
  { id: 'contact', label: 'Contact Us', path: '/#contact' },
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme]           = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

  /* ── Apply theme to <html> ── */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /* ── Track scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.startsWith('/#')) {
      const section = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  // Determine active item based on current path
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && !path.startsWith('/#') && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass nav-shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 logo-hover shrink-0"
          >
            <img
              src="/Ankit-7/images/think-india.png"
              alt="Think India"
              className="h-8 w-auto animate-logo-glow"
            />
            <div className="leading-none text-left">
              <p className="text-[12px] font-black gradient-text tracking-widest uppercase">Think India</p>
              <p className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase mt-0.5">IIT Roorkee</p>
            </div>
          </button>

          {/* ── Centre pill (desktop) ── */}
          <div className="hidden lg:flex nav-center-pill items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {/* Home */}
            <button
              onClick={() => handleNavClick(navItems[0].path)}
              className={`nav-link flex items-center gap-1.5 ${isActive(navItems[0].path) ? 'nav-link-active' : ''}`}
            >
              <span className="font-light">{navItems[0].label}</span>
            </button>

            {/* Events Dropdown */}
            <div className="relative group/events">
              <button 
                className={`nav-link flex items-center gap-1.5 ${isActive('/past-events') ? 'nav-link-active' : ''}`}
              >
                <span className="font-light">Events</span>
                <ChevronDown className="w-3 h-3 group-hover/events:rotate-180 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 invisible group-hover/events:opacity-100 group-hover/events:translate-y-0 group-hover/events:visible transition-all duration-200 z-50">
                <div className="w-48 glass-strong rounded-xl shadow-lg border border-border/50 p-2 flex flex-col gap-1 bg-card">
                   <button onClick={() => handleNavClick('/past-events')} className={`px-3 py-2 text-sm font-medium text-left hover:bg-primary/10 hover:text-primary rounded-lg w-full transition-colors ${isActive('/past-events') ? 'text-primary bg-primary/5' : 'text-foreground'}`}>
                     Past Events
                   </button>
                   <button onClick={() => handleNavClick('/#events')} className="px-3 py-2 text-sm font-medium text-left hover:bg-primary/10 hover:text-primary rounded-lg w-full transition-colors text-foreground">
                     Upcoming Events
                   </button>
                </div>
              </div>
            </div>

            {/* Rest of the items */}
            {navItems.slice(1).map(({ id, label, path }) => (
              <button
                key={id}
                onClick={() => handleNavClick(path)}
                className={`nav-link flex items-center gap-1.5 ${isActive(path) ? 'nav-link-active' : ''}`}
              >
                <span className="font-light">{label}</span>
              </button>
            ))}
          </div>

          {/* ── Right buttons (desktop) ── */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 ml-4">
            <button
              onClick={() => handleNavClick('/#history')}
              className="btn-action flex items-center gap-1.5 font-light"
            >
              History
            </button>

            <button onClick={toggleTheme} className="btn-theme flex items-center gap-1.5 font-light">
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>

          {/* ── Hamburger (mobile) ── */}
          <button
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X    className="w-6 h-6" />
              : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong mobile-menu-panel animate-slide-down border-t border-border shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            <button
              onClick={() => handleNavClick(navItems[0].path)}
              className={`mobile-nav-link w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-light animate-stagger-up ${
                isActive(navItems[0].path) ? 'mobile-nav-link-active' : ''
              }`}
            >
              {navItems[0].label}
            </button>

            {/* Events Mobile Accordion */}
            <div className="w-full flex flex-col animate-stagger-up" style={{ animationDelay: '0.05s' }}>
              <button
                onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                className={`mobile-nav-link w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-light ${
                  isActive('/past-events') ? 'mobile-nav-link-active' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  Events
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileEventsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileEventsOpen && (
                <div className="pl-12 pr-4 py-2 flex flex-col gap-2 animate-slide-down">
                  <button
                    onClick={() => handleNavClick('/past-events')}
                    className={`text-left text-sm font-medium py-2 transition-colors ${isActive('/past-events') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Past Events
                  </button>
                  <button
                    onClick={() => handleNavClick('/#events')}
                    className="text-left text-sm font-medium py-2 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    Upcoming Events
                  </button>
                </div>
              )}
            </div>

            {/* Rest of items */}
            {navItems.slice(1).map(({ id, label, path }, i) => (
              <button
                key={id}
                onClick={() => handleNavClick(path)}
                className={`mobile-nav-link w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-light animate-stagger-up ${
                  isActive(path) ? 'mobile-nav-link-active' : ''
                }`}
                style={{ animationDelay: `${(i + 2) * 0.05}s` }}
              >
                {label}
              </button>
            ))}

            {/* Mobile right buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
              <button
                onClick={() => handleNavClick('/#history')}
                className="btn-action w-full flex items-center justify-center gap-2 text-sm py-3 rounded-xl font-light"
              >
                History
              </button>
              
              <button
                onClick={toggleTheme}
                className="btn-theme w-full flex items-center justify-center gap-2 text-sm py-3 rounded-xl font-light"
              >
                {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}