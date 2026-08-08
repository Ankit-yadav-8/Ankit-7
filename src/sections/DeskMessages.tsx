import { useEffect, useRef, useState } from 'react';

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

import kkPantImg from '@/assets/desk/kkpant.jpg';
import upSinghImg from '@/assets/desk/upsingh.jpg';
import barjeevImg from '@/assets/desk/barjiv.jpg';
import sonaliImg from '@/assets/desk/sonali.jpg';

const messages = [
  {
    name: "Prof. K. K. Pant",
    role: "Director, IIT Roorkee",
    image: kkPantImg,
    message: "Think India IIT Roorkee represents the enthusiasm, creativity and sense of social responsibility that define student life at the Institute. Through its diverse initiatives, discussions and programmes, the chapter provides students with meaningful opportunities to learn, collaborate and contribute beyond the classroom. The publication Ritam reflects this same spirit by documenting the ideas, experiences and efforts of the student community. Such platforms play an important role in nurturing thoughtful and responsible young minds. I congratulate the entire Think India team for their commitment and dedication. May their initiatives continue to encourage constructive dialogue, responsible leadership and meaningful service to society and the nation."
  },
  {
    name: "Prof. U. P. Singh",
    role: "Deputy Director, IIT Roorkee",
    image: upSinghImg,
    message: "Institutions of higher education have a responsibility not only to develop academic excellence but also to nurture socially aware and intellectually engaged citizens. Think India IIT Roorkee contributes to this objective by providing students with opportunities to participate in discussions, workshops, cultural programmes and awareness initiatives. These activities encourage students to explore ideas beyond their academic disciplines and engage with questions that matter to society and the nation. Ritam captures this vibrant spirit of participation and provides a meaningful record of the chapter's activities. I appreciate the efforts of everyone associated with this initiative and hope Think India continues to encourage thoughtful participation and positive contribution within the IIT Roorkee community."
  },
  {
    name: "Prof. Barjeev Tyagi",
    role: "Dean of Student Welfare, IIT Roorkee",
    image: barjeevImg,
    message: "Student life at IIT Roorkee is shaped not only by academics but also by the experiences, interactions and collective initiatives that take place beyond the classroom. Think India IIT Roorkee contributes to this dynamic environment through cultural programmes, social-awareness campaigns, volunteering initiatives and intellectually engaging activities. These efforts demonstrate the enthusiasm, creativity and commitment of the student community. Through platforms such as Ritam, these experiences are documented and shared with a wider audience. I appreciate the dedication of the Think India team and everyone who has contributed to its programmes. I hope students continue to participate actively, express themselves meaningfully and use their knowledge and abilities to make a positive contribution to society."
  },
  {
    name: "Prof. Bhaveshkumar R. Bhalja",
    role: "Faculty-in-Charge, Think India IIT Roorkee",
    image: "https://ui-avatars.com/api/?name=Bhaveshkumar+Bhalja&background=random",
    message: "Working with Think India IIT Roorkee has been an enriching experience and an opportunity to witness the sincerity, teamwork and commitment demonstrated by students throughout the year. The chapter's discussions, workshops, awareness campaigns, cultural programmes and outreach activities reflect its broader objective of creating thoughtful and socially conscious individuals. Ritam brings these efforts together and gives readers a glimpse into the ideas and initiatives that define the chapter. The dedication of the editorial team, organisers and volunteers deserves recognition. I am confident that Think India IIT Roorkee will continue to encourage students to pursue meaningful ideas, stay connected with society and contribute positively to the nation."
  },
  {
    name: "Sumit Pandey",
    role: "National In-Charge, Think India",
    image: "https://ui-avatars.com/api/?name=Sumit+Pandey&background=random",
    message: "Every meaningful initiative begins with an idea and grows through the commitment of people who believe in it. Think India believes that young minds have the potential not only to excel professionally but also to contribute meaningfully to society through discussion, ideas and action. The initiatives of Think India IIT Roorkee embody this spirit by creating opportunities for students to express their perspectives, share knowledge and engage with questions that shape the nation and its future. Platforms such as Ritam further strengthen this culture of intellectual engagement and responsible participation. I congratulate the entire team for its dedication and hope the chapter continues to inspire inquiry, creativity, responsibility and a lasting commitment to excellence."
  },
  {
    name: "Naveenkumar Sharma",
    role: "Founder, Think India IIT Roorkee",
    image: "https://ui-avatars.com/api/?name=Naveenkumar+Sharma&background=random",
    message: "Think India IIT Roorkee has grown as a part of the larger Think India movement, bringing together students who believe in leadership, dialogue, service and intellectual exploration rooted in national thought and social responsibility. Over the years, the chapter's initiatives have reflected the energy, creativity and commitment of students working towards meaningful engagement within the campus community. Through discussions, cultural activities, publications and service-oriented programmes, Think India continues to encourage students to think beyond themselves and participate in the larger journey of nation-building. The launch of Ritam represents another important milestone in documenting this journey. I hope the chapter continues to evolve as a platform that inspires reflection, responsible action and a deeper sense of purpose among generations of students."
  },
  {
    name: "Sonali Soni",
    role: "Convener, Think India IIT Roorkee",
    image: sonaliImg,
    message: "Think India IIT Roorkee is built upon the ideas, experiences and collective efforts of students who believe in learning, dialogue and meaningful contribution. Throughout the year, the chapter has brought together students through lectures, discussions, cultural programmes, workshops, awareness initiatives and community activities. These experiences have shaped the identity and journey of the Think India family at IIT Roorkee. Ritam was created to document these memories, initiatives and perspectives and share them with a wider audience. The chapter's journey would not be possible without the dedication of its volunteers, writers, designers, organisers and faculty mentors. We hope our initiatives continue to inspire students to think deeply, stay connected with their roots and contribute positively to society and Bharat."
  }
];

export default function DeskMessages() {
  const { ref, revealed } = useReveal();
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

  const allMessages = [...messages, ...messages];

  return (
    <section id="desk-messages" className="relative py-24 overflow-hidden bg-background" ref={ref}>
      
      <div className="relative max-w-[96%] xl:max-w-7xl mx-auto shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-card/40 rounded-[3rem] py-16 px-2 sm:px-8 border border-border/50 backdrop-blur-[2px]">
        
        {/* Section header */}
        <div
          className={`text-center mb-12 px-4 transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
            Messages
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            From The <span className="gradient-text">Desk</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Words of encouragement and vision from the leaders and mentors of Think India.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left fade — hidden on mobile */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--card)), transparent)' }} />
          {/* Right fade — hidden on mobile */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--card)), transparent)' }} />
          
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-4 sm:px-12 pb-4 scrollbar-hide"
          >
            {allMessages.map((msg, i) => (
              <div
                key={`${msg.name}-${i}`}
                className={`event-card flex-shrink-0 w-[300px] sm:w-[380px] group transition-all duration-700 flex flex-col text-center rounded-[2rem] overflow-hidden border border-orange-200/50 bg-card shadow-[0_4px_20px_rgba(249,115,22,0.08)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.12)] hover:-translate-y-1 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.05 + (i % messages.length) * 0.08}s` }}
              >
                <div className="w-full h-56 sm:h-64 overflow-hidden flex-shrink-0 bg-secondary/30 relative">
                  <img src={msg.image} alt={msg.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{msg.name}</h3>
                  <p className="text-sm font-semibold text-orange-500 mb-4">{msg.role}</p>
                  <p className="text-sm text-muted-foreground italic leading-relaxed overflow-y-auto scrollbar-hide max-h-[160px]">
                    "{msg.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground">Hover to pause and read</p>
        </div>

      </div>
    </section>
  );
}
