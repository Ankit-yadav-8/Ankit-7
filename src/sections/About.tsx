import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart } from 'lucide-react';

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

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To foster innovation and leadership among students for nation-building through technology and entrepreneurship.',
    color: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'Creating a self-reliant India by empowering the youth with skills, knowledge, and opportunities.',
    color: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Heart,
    title: 'Our Values',
    desc: 'Integrity, Excellence, Innovation, and Social Responsibility drive everything we do.',
    color: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
];



export default function About() {
  const { ref, revealed } = useReveal();

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={ref}>

      {/* Background orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Who We <span className="gradient-text">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Think India is a vibrant student community at IIT Roorkee dedicated to nurturing innovative
            minds and building future leaders of the nation.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`initiative-card text-center transition-all duration-700 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className={`icon-wrapper w-14 h-14 mx-auto mb-5 rounded-2xl ${f.color} flex items-center justify-center`}>
                <f.icon className={`w-7 h-7 ${f.iconColor}`} />
              </div>
              <h3 className="text-base font-bold mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}