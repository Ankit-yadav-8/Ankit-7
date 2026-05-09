import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Code, Users, BookOpen, Globe, Heart } from 'lucide-react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, revealed };
}

export default function Initiatives() {
  const { ref: sectionRef, revealed } = useReveal();

  const initiatives = [
    { icon: Lightbulb, title: 'Innovation Hub', desc: 'Fostering creativity and innovative thinking through workshops, hackathons, and brainstorming sessions.', color: 'from-orange-500 to-amber-500' },
    { icon: Code, title: 'Tech Internships', desc: 'Connecting students with industry-leading internships and hands-on technical projects.', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, title: 'Leadership Program', desc: 'Developing future leaders through mentorship, team-building, and management workshops.', color: 'from-green-500 to-emerald-500' },
    { icon: BookOpen, title: 'Skill Development', desc: 'Regular training sessions on emerging technologies, soft skills, and professional development.', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, title: 'Social Outreach', desc: 'Community service programs aimed at uplifting underprivileged sections through education.', color: 'from-red-500 to-orange-500' },
    { icon: Heart, title: 'Cultural Events', desc: 'Celebrating diversity and unity through cultural festivals, art exhibitions, and performances.', color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <section id="initiatives" className="relative py-24 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Our <span className="gradient-text">Initiatives</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diverse programs designed to empower students across technology, leadership, and social impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, i) => (
            <div
              key={item.title}
              className={`initiative-card group transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`icon-wrapper w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0`}>
                  <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}