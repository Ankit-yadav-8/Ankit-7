import { useState, useEffect } from 'react';
import { Home, Briefcase, BookOpen, Calendar, History, Moon, Sun, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home',        label: 'Home',       icon: Home      },
  { id: 'internship',  label: 'Internship', icon: Briefcase },
  { id: 'blog',        label: 'Blog',       icon: BookOpen  },
  { id: 'events',      label: 'Events',     icon: Calendar  },
];

export default function Navigation() {
  const [active, setActive]         = useState('home');
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

  /* ── Track active section ── */
  useEffect(() => {
    const sections = navItems.map(n => document.querySelector(`#${n.id}`)).filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass nav-shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[52px]">

          {/* ── Logo ── */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 logo-hover shrink-0"
          >
            <img
              src="/Ankit-7/images/think-india.png"
              alt="Think India"
              className="h-7 w-auto animate-logo-glow"
            />
            <div className="leading-none">
              <p className="text-[11px] font-black gradient-text tracking-widest uppercase">Think India</p>
              <p className="text-[9px] text-muted-foreground tracking-[0.18em] uppercase mt-0.5">IIT Roorkee</p>
            </div>
          </button>

          {/* ── Centre pill (desktop) ── */}
          <div className="hidden md:flex nav-center-pill items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link flex items-center gap-1.5 ${active === id ? 'nav-link-active' : ''}`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* ── Right buttons (desktop) ── */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollTo('history')}
              className="btn-action flex items-center gap-1.5"
            >
              <History className="w-3.5 h-3.5 shrink-0" />
              History
            </button>

            <button onClick={toggleTheme} className="btn-theme flex items-center gap-1.5">
              <span className="theme-icon-wrapper">
                {theme === 'dark'
                  ? <Sun  className="w-3.5 h-3.5" />
                  : <Moon className="w-3.5 h-3.5" />}
              </span>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* ── Hamburger (mobile) ── */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X    className="w-5 h-5" />
              : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden glass-strong mobile-menu-panel animate-slide-down border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ id, label, icon: Icon }, i) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`mobile-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm animate-stagger-up ${
                  active === id ? 'mobile-nav-link-active' : ''
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </button>
            ))}

            {/* Mobile right buttons */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => scrollTo('history')}
                className="btn-action flex-1 flex items-center justify-center gap-1.5 text-xs"
              >
                <History className="w-3.5 h-3.5" /> History
              </button>
              <button
                onClick={toggleTheme}
                className="btn-theme flex-1 flex items-center justify-center gap-1.5 text-xs"
              >
                <span className="theme-icon-wrapper">
                  {theme === 'dark'
                    ? <Sun  className="w-3.5 h-3.5" />
                    : <Moon className="w-3.5 h-3.5" />}
                </span>
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}