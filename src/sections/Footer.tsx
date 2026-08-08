import {
  Mail, Heart, ArrowUp,
  Phone, MapPin,
  Instagram, Linkedin, Twitter, Youtube, ArrowRight,
  Sparkles
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
  { icon: Instagram, label: 'Instagram', handle: '@thinkindia_iitr',  href: '#', color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/10', border: 'hover:border-pink-500/30' },
  { icon: Linkedin,  label: 'LinkedIn',  handle: 'Think India IITR',  href: '#', color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10', border: 'hover:border-blue-500/30' },
  { icon: Twitter,   label: 'Twitter',   handle: '@ThinkIndiaIITR',   href: '#', color: 'hover:text-sky-400',  bg: 'hover:bg-sky-400/10', border: 'hover:border-sky-400/30'  },
  { icon: Youtube,   label: 'YouTube',   handle: 'Think India IIT R', href: '#', color: 'hover:text-red-500',  bg: 'hover:bg-red-500/10', border: 'hover:border-red-500/30'  },
];

const contactInfo = [
  { icon: Mail,   text: 'thinkindia@iitr.ac.in', href: 'mailto:thinkindia@iitr.ac.in' },
  { icon: Phone,  text: '+91 98765 43210',        href: 'tel:+919876543210'            },
  { icon: MapPin, text: 'IIT Roorkee, Uttarakhand 247667', href: '#'                  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden footer-bg border-t border-border">
      
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Quote Section - Redesigned */}
        <div className="relative max-w-4xl mx-auto mb-20 px-4">
          <div className="absolute -top-6 -left-2 sm:-left-6 text-7xl text-orange-500/15 font-serif select-none">&ldquo;</div>
          <div className="absolute -bottom-12 -right-2 sm:-right-6 text-7xl text-orange-500/15 font-serif rotate-180 select-none">&ldquo;</div>
          
          <div className="glass p-8 sm:p-12 rounded-3xl border border-orange-500/10 bg-background/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] text-center relative z-10 overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <Sparkles className="w-6 h-6 text-orange-400 mx-auto mb-6 animate-pulse" />
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light italic text-foreground leading-relaxed mb-8">
              "The best way to find yourself is to lose yourself in the service of others."
            </blockquote>
            
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span className="w-12 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-3"></span>
              <p className="text-base text-orange-500 font-semibold tracking-wide uppercase">Mahatma Gandhi</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Inspiration behind Think India</p>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-14 mb-16 relative z-10">
          
          {/* 1. Brand & Contact (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3.5 mb-6 group cursor-default">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/images/think-india.png" alt="Think India" className="h-12 w-auto relative z-10 animate-float" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent tracking-wider uppercase">Think India</p>
                <p className="text-[10px] font-semibold text-muted-foreground tracking-[0.2em] uppercase mt-0.5">IIT Roorkee Chapter</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm md:max-w-md">
              Empowering students to think beyond boundaries and contribute to nation-building through innovation, leadership, and dedicated service.
            </p>

            <div className="space-y-4 w-full max-w-sm">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-4 text-sm text-muted-foreground hover:text-orange-500 transition-colors group p-3 rounded-2xl hover:bg-orange-500/5 border border-transparent hover:border-orange-500/10"
                >
                  <div className="w-10 h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center group-hover:bg-orange-500/10 group-hover:border-orange-500/20 group-hover:text-orange-500 transition-all group-hover:scale-110">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-left">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Team & Developers (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Team Heads */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-bold mb-8 text-sm tracking-widest uppercase text-foreground relative inline-block">
                Team Heads
                <span className="absolute -bottom-3 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-8 h-1 bg-orange-500 rounded-full"></span>
              </h4>
              <ul className="space-y-5">
                {teamHeads.map((head, i) => (
                  <li key={i} className="flex items-center gap-3.5 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                      {head.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground group-hover:text-orange-500 transition-colors">{head.name}</p>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{head.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-bold mb-8 text-sm tracking-widest uppercase text-foreground relative inline-block">
                Developers
                <span className="absolute -bottom-3 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-8 h-1 bg-blue-500 rounded-full"></span>
              </h4>
              <ul className="space-y-5">
                {developers.map((dev, i) => (
                  <li key={i} className="flex items-center gap-3.5 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                      {dev.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors">{dev.name}</p>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{dev.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Connect & Newsletter (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start gap-10">
            
            {/* Social Connect */}
            <div className="w-full flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-8 text-sm tracking-widest uppercase text-foreground relative inline-block">
                Connect With Us
                <span className="absolute -bottom-3 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-8 h-1 bg-orange-500 rounded-full"></span>
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color, bg, border }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-11 h-11 rounded-2xl glass border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm ${bg} ${color} ${border}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-sm p-6 rounded-3xl glass border border-border shadow-lg relative overflow-hidden group mt-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide">Stay Updated</p>
                </div>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed text-center md:text-left">
                  Join our newsletter to get the latest news and event updates right in your inbox.
                </p>
                <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full text-sm px-4 py-3.5 rounded-2xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all pr-14 shadow-inner"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-11 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white flex items-center justify-center transition-all shadow-md group/btn hover:scale-105 active:scale-95"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-6 pb-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-5 z-10">
          <p className="text-xs text-muted-foreground text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} Think India IIT Roorkee. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium px-5 py-2.5 rounded-full glass border border-border/50 shadow-sm transition-colors hover:border-orange-500/30">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
            <span>for the nation</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full glass border border-border shadow-md flex items-center justify-center text-foreground hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1.5 group focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}