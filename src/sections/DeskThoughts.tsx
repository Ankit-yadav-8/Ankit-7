import { useEffect, useRef, useState } from 'react';
import { messages } from './DeskMessages';

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, revealed };
}

export default function DeskThoughts() {
  const { ref, revealed } = useReveal();

  return (
    <section id="desk-thoughts" className="relative py-24 overflow-hidden bg-background" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div
          className={`text-center mb-16 px-4 transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
            Thoughts
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            From The <span className="gradient-text">Desk</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Words of encouragement and vision from the leaders and mentors of Think India.
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg, i) => (
            <div
              key={`${msg.name}-${i}`}
              className={`p-8 rounded-3xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col group ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.1 + (i % 4) * 0.1}s` }}
            >
              <div className="mb-6 relative">
                <span className="absolute -left-2 -top-2 text-6xl text-orange-500/10 font-serif leading-none">"</span>
                <p className="text-muted-foreground italic leading-relaxed text-sm sm:text-base relative z-10 pt-4">
                  {msg.message}
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-border/50 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-orange-500 transition-colors">{msg.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500/80">{msg.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
