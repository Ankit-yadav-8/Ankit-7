import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { pastEventsData } from '@/data/pastEvents';
import { useAutoScroll } from '@/Hooks/useAutoScroll';

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
  const navigate = useNavigate();
  const scrollRef = useAutoScroll('left');

  const allEvents = [...pastEventsData, ...pastEventsData];

  return (
    <section id="past-events" className="relative py-24 overflow-hidden bg-background" ref={ref}>

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
              className="flex-none w-[300px] sm:w-[360px] group cursor-pointer bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => navigate(`/event/past-${event.id}`)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-black/5">
                {/* Blurred Background */}
                <img src={event.image} alt="" className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40 dark:opacity-30" />
                {/* Actual Image */}
                <img loading="lazy" src={event.image} alt={event.title} className="relative w-full h-full object-contain drop-shadow-md z-10" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-[#1a365d] text-base mb-3 group-hover:text-orange-500 transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {event.location.split(',')[0]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">{event.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Users className="w-4 h-4 text-slate-400" /> {event.attendees}
                  </span>
                  <span className="text-xs font-semibold text-orange-400 flex items-center gap-1.5 group-hover:text-orange-500 transition-colors">
                    View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => navigate('/past-events')}
            className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-2.5"
          >
            View All Past Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
