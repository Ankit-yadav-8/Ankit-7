import { useState, useEffect } from 'react';
import { Home, BookOpen, Calendar, Info, Phone, Moon, Sun, Menu, X, Heart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'home',            label: 'Home',            icon: Home,     path: '/' },
  { id: 'past-events',     label: 'Past Events',     icon: Calendar, path: '/past-events' },
  { id: 'upcoming-events', label: 'Upcoming Events', icon: Calendar, path: '/upcoming-events' },
  { id: 'blog',            label: 'Blog',            icon: BookOpen, path: '/blog' },
  { id: 'about',           label: 'About Us',        icon: Info,     path: '/#about' },
  { id: 'contact',         label: 'Contact Us',      icon: Phone,    path: '/#contact' },
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme]           = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {navItems.map(({ id, label, icon: Icon, path }) => (
              <button
                key={id}
                onClick={() => handleNavClick(path)}
                className={`nav-link flex items-center gap-1.5 ${isActive(path) ? 'nav-link-active' : ''}`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* ── Right buttons (desktop) ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme} className="btn-theme flex items-center justify-center p-2 rounded-full"
              title="Toggle Theme"
            >
              <span className="theme-icon-wrapper">
                {theme === 'dark'
                  ? <Sun  className="w-4 h-4" />
                  : <Moon className="w-4 h-4" />}
              </span>
            </button>
            
            <button
              className="bg-primary hover:bg-orange-600 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-md transition-transform hover:-translate-y-0.5 flex items-center gap-2"
              onClick={() => handleNavClick('/#contact')}
            >
              <Heart className="w-4 h-4" />
              Get Involved
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
          <div className="px-4 py-4 space-y-2">
            {navItems.map(({ id, label, icon: Icon, path }, i) => (
              <button
                key={id}
                onClick={() => handleNavClick(path)}
                className={`mobile-nav-link w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium animate-stagger-up ${
                  isActive(path) ? 'mobile-nav-link-active' : ''
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {label}
              </button>
            ))}

            {/* Mobile right buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
              <button
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm"
                onClick={() => handleNavClick('/#contact')}
              >
                <Heart className="w-5 h-5" /> Get Involved
              </button>
              <button
                onClick={toggleTheme}
                className="btn-theme w-full flex items-center justify-center gap-2 text-sm py-3 rounded-xl"
              >
                <span className="theme-icon-wrapper">
                  {theme === 'dark'
                    ? <Sun  className="w-4 h-4" />
                    : <Moon className="w-4 h-4" />}
                </span>
                {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}