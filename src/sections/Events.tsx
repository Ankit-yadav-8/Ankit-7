import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink, X, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  participants: string;
  formLink: string;
  category: string;
  categoryColor: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: 'Innovation Hackathon 2026',
    date: 'March 15–16, 2026',
    time: '48 Hours',
    location: 'MAC Auditorium, IIT Roorkee',
    image: '/Ankit-7/images/event-hackathon.jpg',  // ✅ fixed
    description: 'A 48-hour coding marathon where participants build innovative solutions to real-world problems. Prizes worth Rs. 5 lakhs.',
    participants: '500+',
    formLink: '#register',
    category: 'Technical',
    categoryColor: 'bg-orange-500',
  },
  {
    id: 2,
    title: 'Leadership Summit',
    date: 'April 5, 2026',
    time: '10:00 AM – 5:00 PM',
    location: 'Senate Hall, IIT Roorkee',
    image: '/Ankit-7/images/event-seminar.jpg',  // ✅ fixed
    description: 'Learn from industry leaders and entrepreneurs about building successful careers and businesses.',
    participants: '1,000+',
    formLink: '#register',
    category: 'Seminar',
    categoryColor: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Village Outreach Program',
    date: 'February 20, 2026',
    time: '9:00 AM – 4:00 PM',
    location: 'Nearby Villages, Roorkee',
    image: '/Ankit-7/images/event-outreach.jpg',  // ✅ fixed
    description: 'Teaching digital literacy and basic education to underprivileged children in nearby villages.',
    participants: '200+',
    formLink: '#register',
    category: 'Social',
    categoryColor: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Research Showcase',
    date: 'May 10, 2026',
    time: '11:00 AM – 6:00 PM',
    location: 'LHC Complex, IIT Roorkee',
    image: '/Ankit-7/images/event-research.jpg',  // ✅ fixed
    description: 'Showcase your research projects to faculty, industry experts, and fellow students.',
    participants: '300+',
    formLink: '#register',
    category: 'Academic',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 5,
    title: 'Cultural Fest — Udgam',
    date: 'March 28–30, 2026',
    time: '3 Days',
    location: 'Convocation Ground, IIT Roorkee',
    image: '/Ankit-7/images/memory-cultural.jpg',  // ✅ fixed
    description: 'Three days of cultural celebrations featuring music, dance, drama, art exhibitions, and food festivals.',
    participants: '10,000+',
    formLink: '#register',
    category: 'Cultural',
    categoryColor: 'bg-pink-500',
  },
  {
    id: 6,
    title: 'Green Campus Drive',
    date: 'April 22, 2026',
    time: '8:00 AM – 12:00 PM',
    location: 'IIT Roorkee Campus',
    image: '/Ankit-7/images/memory-tree.jpg',  // ✅ fixed
    description: 'Join us in planting 1,000+ trees across the campus. Contribute to making our campus greener.',
    participants: '800+',
    formLink: '#register',
    category: 'Environmental',
    categoryColor: 'bg-teal-500',
  },
];

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
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
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

      <div className="bg-orb bg-orb-2" style={{ opacity: 0.7 }} />

      <div className="relative">

        {/* Header */}
        <div
          className={`text-center mb-12 px-4 transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 border border-green-500/20 mb-4">
            What&apos;s Happening
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Explore our exciting lineup of events. Click on any event to learn more and register.
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
              className={`event-card flex-shrink-0 w-[300px] sm:w-[360px] group transition-all duration-700 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.05 + (i % eventsData.length) * 0.08}s` }}
              onClick={() => setSelectedEvent(eventsData.find(e => e.id === event.id) ?? null)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${event.categoryColor} text-white`}>
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 group-hover:text-orange-500 transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-orange-400" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    {event.location.split(',')[0]}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Users className="w-3 h-3" /> {event.participants}
                  </span>
                  <span className="text-[11px] font-medium text-orange-500 flex items-center gap-1">
                    View Details <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground">Hover to pause • Click any card to view details</p>
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
            <div className="relative h-52 sm:h-64">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent rounded-t-3xl" />
              <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${selectedEvent.categoryColor} text-white`}>
                {selectedEvent.category}
              </span>
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