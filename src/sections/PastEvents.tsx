import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { PastEvent, pastEventsData } from '@/data/pastEvents';

function useReveal(threshold = 0.1) {
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

export default function PastEvents() {
  const { ref, revealed } = useReveal();
  const [selected, setSelected] = useState<PastEvent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  /* Auto-scroll — REVERSE direction */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId: number;
    const speed = 0.45;

    container.scrollLeft = container.scrollWidth / 2;
    let pos = container.scrollWidth / 2;

    const tick = () => {
      pos -= speed;
      if (pos <= 0) pos = container.scrollWidth / 2;
      container.scrollLeft = pos;
      animId = requestAnimationFrame(tick);
    };

    const timer = setTimeout(() => { animId = requestAnimationFrame(tick); }, 1500);
    const pause  = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(tick); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, []);

  const allEvents = [...pastEventsData, ...pastEventsData];

  return (
    <section id="past-events" className="relative py-24 overflow-hidden section-alt" ref={ref}>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-12 px-4 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Past <span className="gradient-text">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A glimpse into the impactful events that have shaped our journey. Click any card to learn more.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left fade — hidden on mobile */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
          {/* Right fade — hidden on mobile */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-4 sm:px-12 pb-4 scrollbar-hide"
          >
          {allEvents.map((event, i) => (
            <div
              key={`${event.id}-${i}`}
              className={`event-card flex-shrink-0 w-[300px] sm:w-[360px] group transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.05 + (i % pastEventsData.length) * 0.08}s` }}
              onClick={() => setSelected(pastEventsData.find(e => e.id === event.id) ?? null)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${event.categoryColor} text-white`}>
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-orange-400" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-green-400" />
                    {event.attendees}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{event.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="w-3 h-3 text-blue-400" /> {event.location}
                  </span>
                  <button className="text-[11px] font-semibold text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 group/btn">
                    Read Full Info
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground mb-4">Hover to pause • Click any card to view details</p>
          <button
            onClick={() => navigate('/past-events')}
            className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-2.5"
          >
            View All Past Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative glass-strong rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-orange-500 transition-colors">
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-52 sm:h-64">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover rounded-t-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent rounded-t-3xl" />
              <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${selected.categoryColor} text-white`}>
                {selected.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-black mb-2">{selected.title}</h3>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-orange-400" /> {selected.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-blue-400" /> {selected.location}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-green-400" /> {selected.attendees} attendees
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
