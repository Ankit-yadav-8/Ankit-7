import {
  Mail, Heart, ArrowUp,
  Phone, MapPin, Link,
  
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
  { icon: Link, label: 'Instagram', handle: '@thinkindia_iitr',  href: '#', color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/10' },
  { icon: Link, label: 'LinkedIn',  handle: 'Think India IITR',  href: '#', color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
  { icon: Link, label: 'Twitter',   handle: '@ThinkIndiaIITR',   href: '#', color: 'hover:text-sky-400',  bg: 'hover:bg-sky-400/10'  },
  { icon: Link, label: 'YouTube',   handle: 'Think India IIT R', href: '#', color: 'hover:text-red-500',  bg: 'hover:bg-red-500/10'  },
];

const contactInfo = [
  { icon: Mail,   text: 'thinkindia@iitr.ac.in', href: 'mailto:thinkindia@iitr.ac.in' },
  { icon: Phone,  text: '+91 98765 43210',        href: 'tel:+919876543210'            },
  { icon: MapPin, text: 'IIT Roorkee, Uttarakhand 247667', href: '#'                  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden footer-bg">

      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Background orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsla(24, 95%, 53%, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quote */}
       {/* Quote */}
<div className="text-center mb-16">
<div className="text-4xl text-orange-400/35 mx-auto mb-4 font-serif">&ldquo;</div>
          <blockquote className="text-lg sm:text-xl font-light italic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            &ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-orange-500 font-medium">— Mahatma Gandhi</p>
          <p className="mt-1 text-xs text-muted-foreground">Inspiration behind Think India IIT Roorkee</p>
        </div>

        {/* Main grid — 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* ── Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/think-india.png" alt="Think India" className="h-9 w-auto animate-logo-glow" />
              <div>
                <p className="text-sm font-bold gradient-text tracking-wider uppercase">Think India</p>
                <p className="text-[10px] text-muted-foreground tracking-widest">IIT Roorkee Chapter</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-5">
              Empowering students to think beyond boundaries and contribute to nation-building through
              innovation, leadership, and service.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-orange-500 transition-colors group"
                >
                  <Icon className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Connect With Us (replaces Quick Links) ── */}
          <div>
            <h4 className="font-bold mb-5 text-xs tracking-widest uppercase text-muted-foreground">
              Connect With Us
            </h4>
            <div className="space-y-2.5">
              {socialLinks.map(({ icon: Icon, label, handle, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border border-border transition-all group ${bg}`}
                >
                  <div className={`w-7 h-7 rounded-lg glass flex items-center justify-center text-muted-foreground ${color} transition-colors`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-medium text-foreground ${color} transition-colors`}>{label}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Team Heads ── */}
          <div>
            <h4 className="font-bold mb-5 text-xs tracking-widest uppercase text-muted-foreground">Team Heads</h4>
            <ul className="space-y-3">
              {teamHeads.map((head) => (
                <li key={head.name} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-orange-500/15 flex items-center justify-center text-xs font-bold text-orange-500 shrink-0">
                    {head.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{head.name}</p>
                    <p className="text-[10px] text-muted-foreground">{head.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Developers ── */}
          <div>
            <h4 className="font-bold mb-5 text-xs tracking-widest uppercase text-muted-foreground">Developers</h4>
            <ul className="space-y-3 mb-6">
              {developers.map((dev) => (
                <li key={dev.name} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-blue-500/15 flex items-center justify-center text-xs font-bold text-blue-500 shrink-0">
                    {dev.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{dev.name}</p>
                    <p className="text-[10px] text-muted-foreground">{dev.role}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="p-4 rounded-xl glass border border-orange-500/15">
              <p className="text-xs font-semibold mb-1">Stay Updated</p>
              <p className="text-[10px] text-muted-foreground mb-3">Get latest news & events in your inbox.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 text-[11px] px-2.5 py-1.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-orange-400 transition-colors min-w-0"
                />
                <button className="btn-primary text-[11px] px-3 py-1.5 rounded-lg whitespace-nowrap">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Think India IIT Roorkee. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 animate-pulse" /> for the nation
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-orange-500 hover:bg-orange-500/15 transition-all hover:scale-110"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}