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

        {/* Think India Detailed Description */}
        <div 
          className={`max-w-4xl mx-auto mb-20 space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-200 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-justify">
            Think India began as a national student-led initiative in 2006, founded by students from premier institutions including IISc, IIM Bangalore, NIMHANS and NLSIU. What began as a platform for thoughtful dialogue and intellectual engagement gradually evolved into a nationwide movement connecting students, researchers and professionals in conversations and initiatives centred on issues of national importance.
          </p>
          <p className="text-justify">
            At IIT Roorkee, Think India carries this vision forward by fostering an environment where technical education is complemented by social responsibility, cultural awareness and a commitment to nation-building. The chapter encourages students to look beyond academic excellence and engage with the broader challenges and opportunities shaping Bharat’s future.
          </p>
          <p className="text-justify">
            Through a diverse range of lectures, debates, cultural programmes, workshops, awareness campaigns and community-oriented initiatives, Think India IIT Roorkee provides students with opportunities to learn, collaborate and contribute beyond the classroom. The chapter also places strong emphasis on leadership and holistic development, giving students hands-on opportunities to conceptualise, plan, strategize and execute events at both the institute and national levels. Through these experiences, students develop essential skills in teamwork, communication, management, critical thinking, decision-making and responsible leadership, while learning the importance of initiative, collaboration and commitment.
          </p>
          <p className="text-justify">
            One such national-level event was the Think India National Convention 2024, hosted at IIT Roorkee, which brought together more than 280 delegates, faculty members, alumni and thought leaders to deliberate on the vision of Bharat@2047. The convention provided a platform for meaningful dialogue on India's aspirations and the role of young minds in shaping the nation's future. Another defining tradition of Think India IIT Roorkee is the annual Tiranga Yatra, which brings together students, faculty and staff in a collective celebration of national unity, pride and shared responsibility.
          </p>
          <p className="text-justify">
            Today, Think India IIT Roorkee continues to serve as a platform where ideas, identity, innovation and action converge. Through its diverse initiatives and student-led activities, the chapter seeks to nurture informed, capable and socially responsible young leaders committed to contributing meaningfully to Bharat’s journey towards a stronger and more inclusive future.
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
