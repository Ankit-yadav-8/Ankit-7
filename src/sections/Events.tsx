import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '@/data/events';

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
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId: number;
    let pos = 0;
    const speed = 0.45;

    const tick = () => {
      pos += speed;
      if (pos >= container.scrollWidth / 2) pos = 0;
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
              onClick={() => navigate(`/event/upcoming-${event.id}`)}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-secondary/10 flex items-center justify-center p-2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${event.categoryColor} text-white`}>
                  {event.category}
                </span>
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
        </div>
      </div>
    </section>
  );
}