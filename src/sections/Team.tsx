import { useEffect, useRef, useState } from 'react';
import { Users } from 'lucide-react';

import vijayImg from '@/assets/team/Vijay.jpeg';
import sauravImg from '@/assets/team/Saurav sir.jpeg';
import ragitaImg from '@/assets/team/Ragita.jpeg';
import medhaviImg from '@/assets/team/Medhavi.jpeg';
import meghaImg from '@/assets/team/Megha.jpeg';
import jpImg from '@/assets/team/Jp sir.jpeg';
import aartiImg from '@/assets/team/Aarti mam.jpeg';
import arunImg from '@/assets/team/Arun Sir.jpeg';
import sonaliImg from '@/assets/team/Sonali.jpeg';

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

const teamMembers = [
  { name: 'Arun Sharma', role: 'Community Outreach & Social Impact', image: arunImg },
  { name: 'Aarti Puri', role: 'Strategy, Policy & Initiatives', image: aartiImg },
  { name: 'Saurabh Meena', role: 'Operations & Coordination', image: sauravImg },
  { name: 'Vijay Solanki', role: 'Operations & Coordination', image: vijayImg },
  { name: 'Jai Prakash', role: 'Web Development', image: jpImg },
  { name: 'Medhavi Lal', role: 'Design', image: medhaviImg },
  { name: 'Ragita Ojha', role: 'Editorial', image: ragitaImg, imagePosition: 'center', imageFit: 'contain' as const },
  { name: 'Megha Agrawal', role: 'Media & Public Relations', image: meghaImg },
];

const convener = {
  name: 'Sonali Soni',
  role: 'Convener, Think India IIT Roorkee',
  image: sonaliImg,
  message: "Think India IIT Roorkee is built upon the ideas, experiences and collective efforts of students who believe in learning, dialogue and meaningful contribution. Throughout the year, the chapter has brought together students through lectures, discussions, cultural programmes, workshops, awareness initiatives and community activities. These experiences have shaped the identity and journey of the Think India family at IIT Roorkee. Ritam was created to document these memories, initiatives and perspectives and share them with a wider audience. The chapter's journey would not be possible without the dedication of its volunteers, writers, designers, organisers and faculty mentors. We hope our initiatives continue to inspire students to think deeply, stay connected with their roots and contribute positively to society and Bharat."
};

export default function Team() {
  const { ref, revealed } = useReveal();

  return (
    <section id="team" className="relative py-24 overflow-hidden bg-background" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Convener Section */}
        <div className={`mb-24 transition-all duration-1000 ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Circular Photo */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 shrink-0 relative group">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-colors duration-500" />
              <img
                src={convener.image}
                alt={convener.name}
                className="w-full h-full object-cover object-top rounded-full border-4 border-background shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Right: Text / Thought */}
            <div className="flex flex-col flex-1 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-black mb-2 text-foreground">
                {convener.name}
              </h2>
              <p className="text-lg font-semibold text-orange-500 mb-6">
                {convener.role}
              </p>
              <div className="relative">
                <span className="absolute -left-6 -top-4 text-6xl text-orange-500/20 font-serif hidden md:block">"</span>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base italic relative z-10">
                  {convener.message}
                </p>
                <span className="absolute -right-2 -bottom-8 text-6xl text-orange-500/20 font-serif hidden md:block">"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Convenors Header */}
        <div className={`text-center mb-16 px-4 transition-all duration-1000 delay-300 ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
            <Users className="w-3.5 h-3.5" />
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Meet the <span className="gradient-text">Co-Convenors</span>
          </h2>
        </div>

        {/* Co-Convenors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col items-center group transition-all duration-700 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden mb-6 relative shadow-lg border-2 border-border/50 group-hover:shadow-orange-500/20 group-hover:border-orange-500/50 transition-all duration-500">
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${member.imageFit === 'contain' ? 'object-contain bg-white/5' : 'object-cover'}`}
                  style={{ objectPosition: member.imagePosition || 'top' }}
                />
              </div>
              
              {/* Vertical Name and Role */}
              <div className="text-center flex flex-col items-center">
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-orange-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[13px] font-medium text-muted-foreground uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
