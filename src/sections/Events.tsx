import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink, Users, Clock, X } from 'lucide-react';
import { eventsData, Event } from '@/data/events';
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

export default function Events() {
  const { ref, revealed } = useReveal();
  const scrollRef = useAutoScroll('right');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const allEvents = [...eventsData, ...eventsData];

  return (
    <section id="events" className="relative py-24 overflow-hidden" ref={ref}>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-12 px-4 transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 border border-green-500/20 mb-4">
            What&apos;s Happening
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-serif text-foreground mb-6 leading-tight">
            Upcoming <span className="text-green-500">Events</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Join us in our journey of continuous learning, cultural celebration, and technological innovation.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative -mx-4 sm:mx-0">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-4 sm:px-12 pb-4 scrollbar-hide"
          >
          {allEvents.map((event, idx) => (
            <div
              key={`${event.id}-${idx}`}
              className="flex-none w-72 sm:w-80 group cursor-pointer bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedEvent(eventsData.find(e => e.id === event.id) ?? null)}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-3xl">
                <img loading="lazy"
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
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
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Users className="w-4 h-4 text-slate-400" /> {event.participants}
                  </span>
                  <span className="text-xs font-semibold text-orange-400 flex items-center gap-1.5 group-hover:text-orange-500 transition-colors">
                    View Details <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground">Click any card to view details</p>
        </div>
      </div>

      {/* ── Modal ── */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative glass-strong rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-orange-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image */}
            <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-3xl border-b border-border/50">
              <img loading="lazy"
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-black mb-3">{selectedEvent.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{selectedEvent.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { icon: Calendar, color: 'text-orange-400', label: 'Date',         value: selectedEvent.date },
                  { icon: Clock,    color: 'text-blue-400',   label: 'Time',         value: selectedEvent.time },
                  { icon: MapPin,   color: 'text-green-400',  label: 'Location',     value: selectedEvent.location },
                  { icon: Users,    color: 'text-purple-400', label: 'Participants', value: `${selectedEvent.participants} expected` },
                ].map(({ icon: Icon, color, label, value }) => (
                  <div key={label} className="flex items-center gap-2.5 p-3 rounded-xl" style={{ background: 'hsl(var(--muted))' }}>
                    <Icon className={`w-4 h-4 ${color} shrink-0`} />
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground">{label}</p>
                      <p className="text-xs font-medium truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3">
                <ExternalLink className="w-4 h-4" />
                Register for Event
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
