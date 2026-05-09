import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, ExternalLink, X, Clock, DollarSign, Building2 } from 'lucide-react';

interface Internship {
  id: number;
  role: string;
  company: string;
  location: string;
  stipend: string;
  duration: string;
  image: string;
  description: string;
  skills: string[];
  formLink: string;
  category: string;
  categoryColor: string;
}

const internshipsData: Internship[] = [
  {
    id: 1,
    role: 'Software Engineer Intern',
    company: 'Google',
    location: 'Bangalore, India',
    stipend: '₹80,000/month',
    duration: '3 Months',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80',
    description: 'Work on real-world Google products with world-class engineers. Gain experience in distributed systems and large-scale software.',
    skills: ['Python', 'Algorithms', 'System Design'],
    formLink: '#apply',
    category: 'Technology',
    categoryColor: 'bg-blue-500',
  },
  {
    id: 2,
    role: 'Policy Research Intern',
    company: 'NITI Aayog',
    location: 'New Delhi, India',
    stipend: '₹25,000/month',
    duration: '2 Months',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&q=80',
    description: 'Contribute to national policy research and development. Work alongside senior policy makers on India\'s key challenges.',
    skills: ['Research', 'Economics', 'Data Analysis'],
    formLink: '#apply',
    category: 'Policy',
    categoryColor: 'bg-orange-500',
  },
  {
    id: 3,
    role: 'Product Design Intern',
    company: 'Razorpay',
    location: 'Bangalore, India',
    stipend: '₹50,000/month',
    duration: '3 Months',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    description: 'Design user-centric fintech products used by millions. Collaborate with product and engineering teams daily.',
    skills: ['Figma', 'UX Research', 'Prototyping'],
    formLink: '#apply',
    category: 'Design',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 4,
    role: 'Data Science Intern',
    company: 'Flipkart',
    location: 'Bangalore, India',
    stipend: '₹60,000/month',
    duration: '3 Months',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    description: 'Build ML models to improve product recommendations and supply chain optimization at scale.',
    skills: ['ML', 'Python', 'SQL'],
    formLink: '#apply',
    category: 'Data Science',
    categoryColor: 'bg-yellow-500',
  },
  {
    id: 5,
    role: 'Social Impact Intern',
    company: 'Teach For India',
    location: 'Mumbai, India',
    stipend: '₹15,000/month',
    duration: '6 Months',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    description: 'Directly impact the lives of underprivileged children by teaching and mentoring in low-income schools.',
    skills: ['Teaching', 'Leadership', 'Communication'],
    formLink: '#apply',
    category: 'Social',
    categoryColor: 'bg-green-500',
  },
  {
    id: 6,
    role: 'Finance Intern',
    company: 'Goldman Sachs',
    location: 'Mumbai, India',
    stipend: '₹70,000/month',
    duration: '2 Months',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    description: 'Gain exposure to investment banking, equity research, and financial modelling in a global firm.',
    skills: ['Excel', 'Finance', 'Modelling'],
    formLink: '#apply',
    category: 'Finance',
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

export default function Internship() {
  const { ref, revealed } = useReveal();
  const [selected, setSelected] = useState<Internship | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll — REVERSE direction */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId: number;
    const speed = 0.45;

    /* Start from the middle (duplicated list) */
    container.scrollLeft = container.scrollWidth / 2;
    let pos = container.scrollWidth / 2;

    const tick = () => {
      pos -= speed; /* ← opposite to Events */
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

  const allInternships = [...internshipsData, ...internshipsData];

  return (
    <section id="internship" className="relative py-24 overflow-hidden section-alt" ref={ref}>

      <div className="bg-orb bg-orb-1" style={{ opacity: 0.6 }} />

      <div className="relative">

        {/* Header */}
        <div className={`text-center mb-12 px-4 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-4">
            Opportunities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Internship <span className="gradient-text">Listings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Exclusive internship opportunities curated for Think India members. Click any card to apply.
          </p>
        </div>

        {/* Carousel — scrolls RIGHT to LEFT (reverse of Events) */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 sm:px-10 pb-4 scrollbar-hide"
        >
          {allInternships.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className={`event-card flex-shrink-0 w-[300px] sm:w-[360px] group transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.05 + (i % internshipsData.length) * 0.08}s` }}
              onClick={() => setSelected(internshipsData.find(e => e.id === item.id) ?? null)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={item.image} alt={item.role} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${item.categoryColor} text-white`}>
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors line-clamp-1">
                  {item.role}
                </h3>
                <p className="text-xs font-medium text-orange-500 mb-2 flex items-center gap-1">
                  <Building2 className="w-3 h-3" /> {item.company}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    {item.location.split(',')[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-green-400" />
                    {item.duration}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-green-600">
                    <DollarSign className="w-3 h-3" /> {item.stipend}
                  </span>
                  <span className="text-[11px] font-medium text-orange-500 flex items-center gap-1">
                    Apply Now <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground">Hover to pause • Click any card to apply</p>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative glass-strong rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-orange-500 transition-colors">
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-52 sm:h-64">
              <img src={selected.image} alt={selected.role} className="w-full h-full object-cover rounded-t-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent rounded-t-3xl" />
              <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${selected.categoryColor} text-white`}>
                {selected.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-black mb-1">{selected.role}</h3>
              <p className="text-sm font-semibold text-orange-500 mb-3 flex items-center gap-1">
                <Building2 className="w-4 h-4" /> {selected.company}
              </p>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{selected.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: MapPin,      color: 'text-blue-400',   label: 'Location', value: selected.location },
                  { icon: Clock,       color: 'text-green-400',  label: 'Duration', value: selected.duration },
                  { icon: DollarSign,  color: 'text-yellow-400', label: 'Stipend',  value: selected.stipend  },
                  { icon: Briefcase,   color: 'text-purple-400', label: 'Type',     value: selected.category },
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

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {selected.skills.map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3">
                <ExternalLink className="w-4 h-4" />
                Apply for Internship
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}