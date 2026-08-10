import {
  Mail, Heart, ArrowUp,
  Phone, MapPin, Link,
  ArrowRight,
  Sparkles,
  Instagram, Youtube, Github
} from 'lucide-react';

const teamHeads = [
  { name: 'Amit Sharma',  role: 'President'          },
  { name: 'Priya Patel',  role: 'Vice President'     },
  { name: 'Rahul Kumar',  role: 'Technical Head'     },
  { name: 'Sneha Gupta',  role: 'Event Coordinator'  },
];

const developers = [
  { name: 'Dev Team',    role: 'Lead Developer' },
  { name: 'Design Team', role: 'UI/UX Designer' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', handle: '@thinkindia_iitr',  href: 'https://www.instagram.com/thinkindia_iitr?igsh=MnBnZXA4cXRld241', color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/10', border: 'hover:border-pink-500/30' },
  { icon: Youtube, label: 'YouTube', handle: 'Think India IITR', href: 'https://www.youtube.com/@ThinkIndiaIITR', color: 'hover:text-red-600', bg: 'hover:bg-red-600/10', border: 'hover:border-red-600/30' },
  { icon: Github, label: 'GitHub', handle: 'ThinkIndia', href: 'https://github.com', color: 'hover:text-gray-800', bg: 'hover:bg-gray-800/10', border: 'hover:border-gray-800/30' },
  { icon: Mail,  label: 'Email',  handle: 'tic@iitr.ac.in',  href: 'mailto:tic@iitr.ac.in', color: 'hover:text-orange-500', bg: 'hover:bg-orange-500/10', border: 'hover:border-orange-500/30' },
];

const contactInfo = [
  { icon: Mail,   text: 'tic@iitr.ac.in', href: 'mailto:tic@iitr.ac.in' },
  { icon: Phone,  text: '+91 9140154688',        href: 'tel:+919140154688'            },
  { icon: MapPin, text: 'IIT Roorkee, Uttarakhand 247667', href: '#'                  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-10 sm:pt-16 pb-6 overflow-hidden footer-bg border-t border-border">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent blur-[2px]" />
      
      <div
        className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full pointer-events-none opacity-40 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse, hsla(24, 95%, 53%, 0.15) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Quote Section — compact */}
        <div className="relative max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="glass px-6 py-6 sm:px-10 sm:py-8 rounded-2xl border border-orange-500/10 bg-background/60 backdrop-blur-md text-center relative z-10 overflow-hidden group hover:border-orange-500/25 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <Sparkles className="w-5 h-5 text-orange-400 mx-auto mb-3 animate-pulse" />
            
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-light italic text-foreground leading-relaxed mb-4">
              "The best way to find yourself is to lose yourself in the service of others."
            </blockquote>
            
            <div className="flex flex-col items-center gap-1">
              <span className="w-10 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-2"></span>
              <p className="text-sm text-orange-500 font-semibold tracking-wide uppercase">Mahatma Gandhi</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Inspiration behind Think India</p>
            </div>
          </div>
        </div>

        {/* Main Grid Layout — tighter gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-6 sm:gap-y-10 mb-8 sm:mb-10 relative z-10">
          
          {/* 1. Brand & Contact (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo + Name */}
            <div className="flex items-center gap-3 mb-4 group cursor-default">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img loading="lazy"
                  src="/Ankit-7/images/think-india.png"
                  alt="Think India"
                  className="h-11 w-11 object-contain relative z-10"
                  style={{ filter: 'drop-shadow(0 0 8px hsla(24, 95%, 53%, 0.35))' }}
                />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent tracking-wider uppercase leading-tight">Think India</p>
                <p className="text-[10px] font-semibold text-muted-foreground tracking-[0.18em] uppercase">IIT Roorkee Chapter</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-5 max-w-xs md:max-w-sm">
              Empowering students to think beyond boundaries and contribute to nation-building through innovation, leadership, and dedicated service.
            </p>

            {/* Contact — compact */}
            <div className="space-y-1.5 w-full max-w-xs">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-orange-500 transition-colors group py-2 px-2.5 rounded-xl hover:bg-orange-500/5"
                >
                  <div className="w-8 h-8 rounded-full bg-background border border-border shadow-sm flex items-center justify-center shrink-0 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 group-hover:text-orange-500 transition-all">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-left text-[13px]">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Team & Developers (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Team Heads */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-bold mb-5 text-xs tracking-widest uppercase text-foreground relative inline-block">
                Team Heads
                <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-7 h-0.5 bg-orange-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3.5">
                {teamHeads.map((head, i) => (
                  <li key={i} className="flex items-center gap-3 group cursor-default">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center text-xs font-bold shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      {head.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="text-[13px] font-semibold text-foreground group-hover:text-orange-500 transition-colors leading-tight">{head.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{head.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-bold mb-5 text-xs tracking-widest uppercase text-foreground relative inline-block">
                Developers
                <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-7 h-0.5 bg-blue-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3.5">
                {developers.map((dev, i) => (
                  <li key={i} className="flex items-center gap-3 group cursor-default">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      {dev.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="text-[13px] font-semibold text-foreground group-hover:text-blue-500 transition-colors leading-tight">{dev.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{dev.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Connect & Newsletter (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start gap-6">
            
            {/* Social Connect */}
            <div className="w-full flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-5 text-xs tracking-widest uppercase text-foreground relative inline-block">
                Connect With Us
                <span className="absolute -bottom-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-7 h-0.5 bg-orange-500 rounded-full"></span>
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                {socialLinks.map(({ icon: Icon, label, href, color, bg, border }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm ${bg} ${color} ${border}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter — compact */}
            <div className="w-full max-w-xs p-5 rounded-2xl glass border border-border shadow-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                  <div className="w-7 h-7 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide">Stay Updated</p>
                </div>
                <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed text-center md:text-left">
                  Get the latest news and event updates in your inbox.
                </p>
                <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full text-[13px] px-3.5 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all pr-12"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-9 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white flex items-center justify-center transition-all shadow-sm group/btn hover:scale-105 active:scale-95"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
          <p className="text-[11px] text-muted-foreground text-center sm:text-left font-medium">
            &copy; {new Date().getFullYear()} Think India IIT Roorkee. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium px-4 py-2 rounded-full glass border border-border/50 shadow-sm transition-colors hover:border-orange-500/30">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
            <span>for the nation</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full glass border border-border shadow-sm flex items-center justify-center text-foreground hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-orange-500/50"
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
