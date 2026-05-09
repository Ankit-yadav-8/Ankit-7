import ParticleText from '@/components/ParticleText';
import { ArrowDown, Sparkles, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* ── Particle engine ── */}
      <ParticleText />

      {/* ── Animated background orbs ── */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle, hsla(24, 95%, 53%, 0.1) 0%, transparent 70%)',
          top: '-15%', left: '-10%',
          animation: 'orbFloat1 20s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle, hsla(220, 70%, 55%, 0.09) 0%, transparent 70%)',
          bottom: '5%', right: '-8%',
          animation: 'orbFloat2 25s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle, hsla(142, 76%, 36%, 0.07) 0%, transparent 70%)',
          top: '40%', left: '45%',
          animation: 'orbFloat3 30s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
      />

      {/* ── Deep radial vignette ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, hsla(var(--background), 0.55) 70%, hsla(var(--background), 0.92) 100%)',
        }}
      />

      {/* ── Top + bottom gradient fades ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 15%, transparent 80%, hsl(var(--background)) 100%)',
        }}
      />

      {/* ── Animated grid ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsla(24, 95%, 53%, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, hsla(24, 95%, 53%, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          animation: 'gridDrift 20s linear infinite',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full pt-16">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 animate-slide-down"
          style={{
            background: 'hsla(24, 95%, 53%, 0.1)',
            border: '1px solid hsla(24, 95%, 53%, 0.25)',
            animationDelay: '0.05s',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-xs font-medium text-orange-500">
            Welcome to Think India IIT Roorkee
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-black tracking-tight mb-4 animate-slide-up"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            lineHeight: 1.0,
            animationDelay: '0.1s',
          }}
        >
          <span className="block text-foreground" style={{ textShadow: '0 0 60px hsla(24, 95%, 53%, 0.2)' }}>
            THINK
          </span>
          <span className="block mt-1 animate-text-shine" style={{ animationDelay: '0.15s' }}>
            INDIA
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl sm:text-2xl font-light mb-2 animate-slide-up text-foreground"
          style={{ animationDelay: '0.2s' }}
        >
          Indian Institute of Technology Roorkee
        </p>
        <p
          className="text-sm sm:text-base max-w-xl mx-auto mb-10 animate-slide-up text-muted-foreground"
          style={{ animationDelay: '0.3s' }}
        >
          Empowering students to think beyond boundaries. Join the movement of
          innovation, leadership, and nation-building.
        </p>

        {/* IIT Roorkee image card */}
        <div
          className="relative max-w-2xl mx-auto mb-10 animate-slide-up iit-image-glow"
          style={{ animationDelay: '0.4s' }}
        >
          <div
            className="relative rounded-2xl overflow-hidden animate-border-glow"
            style={{ border: '1px solid hsla(24, 95%, 53%, 0.25)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px z-10"
              style={{ background: 'linear-gradient(90deg, transparent, hsla(24, 95%, 53%, 0.6), transparent)' }}
            />
            <img
              src="/images/iit-roorkee.jpg"
              alt="IIT Roorkee"
              className="w-full h-48 sm:h-64 object-cover"
              style={{ filter: 'brightness(0.82) saturate(1.1)' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsla(var(--background), 0.3) 50%, transparent 100%)',
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="text-left">
                <p className="text-lg font-bold text-foreground">IIT Roorkee</p>
                <p className="text-xs text-muted-foreground">
                  Est. 1847 — Asia&apos;s oldest technical institution
                </p>
              </div>
              <div
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: 'hsla(142, 76%, 36%, 0.15)',
                  border: '1px solid hsla(142, 76%, 36%, 0.35)',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs" style={{ color: 'hsl(142, 76%, 42%)' }}>
                  Active Chapter
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          <button
            onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center gap-2 text-base px-7 py-3.5"
          >
            <Sparkles className="w-4 h-4" />
            Explore Events
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary flex items-center gap-2 text-base px-7 py-3.5"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            { value: '3,500+', label: 'Students', icon: Globe },
            { value: '50+',    label: 'Events',   icon: Sparkles },
            { value: '25+',    label: 'Partners', icon: Zap },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 rounded-xl glass"
            >
              <stat.icon className="w-4 h-4 mx-auto mb-1 text-orange-400 opacity-70" />
              <p className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</p>
              <p className="text-xs mt-0.5 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-1.5 transition-colors group text-muted-foreground"
        >
          <span className="text-[10px] tracking-widest uppercase group-hover:text-orange-400 transition-colors">Scroll</span>
          <ArrowDown className="w-4 h-4 group-hover:text-orange-400 transition-colors" />
        </button>
      </div>
    </section>
  );
}