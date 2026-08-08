import ParticleText from '@/components/ParticleText';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
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
          <span className="block text-foreground">
            THINK
          </span>
          <span className="block mt-1 text-orange-500" style={{ animationDelay: '0.15s' }}>
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
          className="relative max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: '1px solid hsla(24, 95%, 53%, 0.15)' }}
          >
            <img
              src="/Ankit-7/images/iit-roorkee.jpg"  // ✅ fixed
              alt="IIT Roorkee"
              className="w-full h-48 sm:h-64 object-cover"
              style={{ filter: 'brightness(0.82) saturate(1.1)' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)',
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="text-left">
                <p className="text-lg font-bold text-white" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>IIT Roorkee</p>
                <p className="text-xs text-white/80" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                  Est. 1847 — Asia&apos;s oldest technical institution
                </p>
              </div>
              <div
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: 'hsla(142, 76%, 36%, 0.25)',
                  border: '1px solid hsla(142, 76%, 36%, 0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-300">
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