import { Heart, ArrowUp } from 'lucide-react';

const collegeParichayLinks = [
  { label: 'State-wise Colleges', href: '#' },
  { label: 'Explore All IITs', href: '#' },
  { label: 'Explore All NITs', href: '#' },
  { label: 'Explore All IIITs', href: '#' },
  { label: 'Private Universities', href: '#' },
];

const examLinks = [
  { label: 'BITSAT 2026', href: '#' },
  { label: 'VITEEE 2026', href: '#' },
  { label: 'MHT CET 2026', href: '#' },
  { label: 'KCET 2026', href: '#' },
  { label: 'WBJEE 2026', href: '#' },
  { label: 'COMEDK UGET 2026', href: '#' },
  { label: 'SRMJEEE 2026', href: '#' },
  { label: 'KEAM 2026', href: '#' },
];

const toolsLinks = [
  { label: 'All Smart Tools', href: '#' },
  { label: 'JoSAA 2026 Counselling ₹499', href: '#' },
  { label: 'JEE Main Rank Predictor', href: '#' },
  { label: 'College Predictor', href: '#' },
  { label: 'Counselling Planner', href: '#' },
  { label: 'Compare Colleges', href: '#' },
  { label: 'Compare Exams', href: '#' },
  { label: 'Hostel & Mess Reviews', href: '#' },
];

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Support', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-12 sm:pt-16 pb-6 overflow-hidden footer-bg border-t border-border">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent blur-[2px]" />
      
      <div
        className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full pointer-events-none opacity-40 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse, hsla(24, 95%, 53%, 0.15) 0%, transparent 60%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      <div className="relative max-w-[90rem] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* About Info */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Founded by IIT Roorkee alumni{' '}
            <span className="text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded font-medium">Ankit Yadav</span>
            {' '}&{' '}
            <span className="text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded font-medium">Ankit Kumar</span>
            {' '}— a student-first JEE rank predictor & college discovery platform, headquartered in Jaipur, Rajasthan.
          </p>
        </div>

        {/* Links Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-12">
          
          {/* Column 1: College Parichay */}
          <div>
            <h4 className="text-[13px] font-bold text-foreground uppercase tracking-widest mb-6 relative inline-block">
              COLLEGE PARICHAY
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-orange-500"></span>
            </h4>
            <ul className="space-y-4">
              {collegeParichayLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Exams */}
          <div>
            {/* Blank header to align the grid on mobile like the screenshot */}
            <h4 className="text-[13px] font-bold text-transparent uppercase tracking-widest mb-6 hidden lg:block">
              EXAMS
            </h4>
            <ul className="space-y-4 lg:mt-[38px]">
              {examLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools */}
          <div>
            <h4 className="text-[13px] font-bold text-foreground uppercase tracking-widest mb-6 relative inline-block">
              TOOLS
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-orange-500"></span>
            </h4>
            <ul className="space-y-4">
              {toolsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[13px] font-bold text-foreground uppercase tracking-widest mb-6 relative inline-block">
              COMPANY
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-orange-500"></span>
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
          <p className="text-xs text-muted-foreground text-center sm:text-left font-medium">
            &copy; {new Date().getFullYear()} College Parichay. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium px-4 py-2 rounded-full glass border border-border/50 shadow-sm transition-colors hover:border-orange-500/30">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
            <span>in India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass border border-border shadow-sm flex items-center justify-center text-foreground hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}