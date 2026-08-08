import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface PastEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  summary: string;
  description: string;
  category: string;
  categoryColor: string;
}

export const pastEventsData: PastEvent[] = [
  {
    id: 1,
    title: 'National Convention 2024',
    date: 'Dec 21–23, 2024',
    location: 'IIT Roorkee',
    attendees: '280+',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50e2fd87?w=600&q=80',
    summary: 'Three-day convention on "Bharat 4.0: Crafting a Self-Resilient Future by 2047" with students, faculty, alumni, and distinguished speakers from across India.',
    description: 'The Think India National Convention 2024 was organised at IIT Roorkee from 21 to 23 December under the theme "Bharat 4.0: Crafting a Self-Resilient Future by 2047." The convention brought together more than 280 students, faculty members, alumni, youth leaders, and distinguished speakers from across the country. Discussions focused on building a future rooted in innovation, sustainability, cultural confidence, and national pride. Sessions addressed legal reforms, media narratives, misinformation, global youth leadership, cybersecurity, economic resilience, and sustainable development. The convention also featured an Ideathon where students presented technology-driven solutions to real-world problems. Experts from institutions such as NITI Aayog, IITs, Cisco Research, and i-Hub Gujarat evaluated the ideas. Cultural performances celebrating Uttarakhand\'s heritage added vibrancy to the programme. Supported by more than 100 student volunteers, the convention reflected the collective vision of a confident, responsible, and self-reliant Bharat.',
    category: 'Convention',
    categoryColor: 'bg-orange-500',
  },
  {
    id: 2,
    title: 'Ram Mandir Pran Pratishtha',
    date: 'Jan 22, 2024',
    location: 'IIT Roorkee Campus',
    attendees: '170+',
    image: 'https://images.unsplash.com/photo-1604823200712-ef4b1e6e0407?w=600&q=80',
    summary: 'Live screening of the Ram Lalla Pran Pratishtha ceremony — the chapter\'s first major event with Deepotsav and cultural celebrations.',
    description: 'On 22 January 2024, Think India IIT Roorkee organised a live screening of the Ram Lalla Pran Pratishtha ceremony. It was the chapter\'s first major event and created an atmosphere of collective reflection, cultural connection, and spiritual celebration. More than 170 undergraduate and postgraduate students gathered to witness the historic occasion. Prasadam was distributed among attendees after the screening. A Deepotsav illuminated the campus with rows of diyas, while volunteers created colourful rangolis and floral decorations. The Saraswati Mandir and nearby campus spaces became central points of participation. Students coordinated the event with discipline, creativity, and attention to detail. Senior faculty members, including the Director and Deputy Director of IIT Roorkee, joined the celebration. The event established a meaningful foundation for future cultural and nation-oriented initiatives by Think India.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
  },
  {
    id: 3,
    title: 'Chhatra Sansad',
    date: 'Apr 14, 2024 onwards',
    location: 'IIT Roorkee',
    attendees: '200+',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&q=80',
    summary: 'Student-led platform for structured debate on national issues — from "One Nation, One Election" to AI implications and Uniform Civil Code.',
    description: 'Chhatra Sansad is Think India IIT Roorkee\'s student-led platform for structured debate, critical thinking, and informed public dialogue. Its first edition, organised on 14 April 2024, explored "One Nation, One Election" while commemorating Dr B. R. Ambedkar Jayanti. Chhatra Sansad 2.0 examined the social, ethical, economic, and employment implications of living with or without artificial intelligence. The third edition focused on the Uniform Civil Code and encouraged discussion on equality, national integration, legal uniformity, and cultural diversity. Chhatra Sansad 4.0 debated whether free welfare schemes are damaging India\'s economy. Participants presented researched arguments, questioned opposing views, and responded to challenging interventions. Faculty members, policy professionals, legal experts, and researchers evaluated the debates. The series has enabled students to engage thoughtfully with complex national issues. It continues to develop informed, articulate, responsible, and solution-oriented young citizens.',
    category: 'Debate',
    categoryColor: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'Voter Awareness Campaign',
    date: 'Apr 15, 2024',
    location: 'LBS Ground, IIT Roorkee',
    attendees: '200+',
    image: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=600&q=80',
    summary: '"First Vote, Must Vote" — students formed a symbolic human chain spelling VOTE to encourage democratic participation.',
    description: 'Think India IIT Roorkee organised a large-scale Voter Awareness Campaign on 15 April 2024 at the LBS Ground. The initiative was conducted in association with the Student Affairs Council, Cultural Council, and National Service Scheme. It aimed to encourage students, particularly first-time voters, to participate actively in the democratic process. The campaign was organised around the message "First Vote, Must Vote." Nearly 200 students came together to form a symbolic human chain spelling the word "VOTE." The formation created a powerful visual reminder of the importance of informed electoral participation. Senior institute officials and Think India representatives addressed the gathering and emphasised the role of young citizens in strengthening democracy. First-time registered voters received specially designed campaign T-shirts. The programme inspired the student community to exercise its voting rights responsibly and confidently.',
    category: 'Campaign',
    categoryColor: 'bg-green-500',
  },
  {
    id: 5,
    title: 'DST Lecture by Dr. S. K. Varshney',
    date: 'May 21, 2024',
    location: 'IIT Roorkee',
    attendees: '900+',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    summary: 'Research-funding lecture covering national and international grants, doctoral opportunities, and proposal development strategies.',
    description: 'Think India IIT Roorkee, in collaboration with the Career Development Cell, organised an informative lecture on research-funding opportunities on 21 May 2024. The session was conducted by Dr S. K. Varshney, Advisor and former Head of International Cooperation at the Department of Science and Technology. He explained important national and international funding schemes available to students, researchers, and faculty members. The lecture covered research grants, academic collaborations, conference funding, proposal development, and doctoral and postdoctoral opportunities. Participants also received guidance on preparing effective research proposals and accessing Early Career Research grants. More than 900 registrations were received from participants across different academic disciplines. A hybrid format enabled wider participation beyond the physical venue. Students appreciated the clarity, accessibility, and practical relevance of the session. The programme strengthened awareness of research opportunities and encouraged a culture of innovation and informed academic planning.',
    category: 'Lecture',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'Tiranga Yatra',
    date: 'Aug 15, 2024 & 2025',
    location: 'IIT Roorkee Campus',
    attendees: '2,000+',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80',
    summary: 'Massive campus procession with 500-metre and 600-metre national flags celebrating Independence Day, unity and civic responsibility.',
    description: 'The Tiranga Yatra is one of Think India IIT Roorkee\'s most prominent celebrations of national unity, freedom, and civic responsibility. The 2024 edition was organised on Independence Day with two 500-metre-long national flags carried across the campus. Students, faculty members, and staff participated in traditional and tricolour-themed attire. Patriotic slogans such as "Vande Mataram" and "Bharat Mata Ki Jai" echoed throughout the institute. The procession concluded with a collective pledge to uphold democratic values, national integrity, and responsible citizenship. Building on its success, Tiranga Yatra 2025 was organised on an even larger scale. Nearly 2,000 members of the IIT Roorkee community participated while carrying a 600-metre-long Tiranga. The event encouraged reflection on the sacrifices, values, and duties that unite the nation. Both editions transformed the campus into a vibrant expression of patriotism, pride, and collective responsibility.',
    category: 'Patriotic',
    categoryColor: 'bg-orange-600',
  },
  {
    id: 7,
    title: 'Reviving Bharat Lecture',
    date: 'Sep 18, 2024',
    location: 'IIT Roorkee',
    attendees: '150+',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&q=80',
    summary: 'Talk on India\'s scientific and philosophical heritage and its relevance to modern challenges, by Oracle engineer and IIT Roorkee alumnus.',
    description: 'Think India IIT Roorkee organised the "Reviving Bharat: A Scientific Civilization and Its Relevance in Present Times" lecture on 18 September 2024. The keynote speaker was Mr Aditya Jha, a Senior Application Engineer at Oracle and an alumnus of IIT Roorkee. The session explored India\'s rich scientific, philosophical, and spiritual heritage. Mr Jha discussed how ancient Indian knowledge can provide meaningful perspectives on modern social and professional challenges. He highlighted values such as discipline, self-awareness, innovation, holistic development, and responsible leadership. Students were encouraged to combine personal growth with meaningful contributions to national development. Senior faculty members attended the programme and reinforced the importance of culturally rooted education. An interactive question-and-answer session enabled participants to discuss their aspirations and concerns. The lecture offered a thoughtful perspective on reconnecting modern progress with Bharat\'s civilizational foundations.',
    category: 'Lecture',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 8,
    title: 'Maati-NITI: Return to Roots',
    date: 'Oct 12, 2025',
    location: 'IIT Roorkee Campus',
    attendees: '5,000+',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
    summary: 'From quiz to Maati Mela — celebrating artisanal heritage with terracotta crafts, pottery workshops, and hands-on learning.',
    description: 'Maati-NITI was conceived as an initiative to reconnect young Indians with the soil, traditions, and artisanal heritage of Bharat. The programme began on 12 October 2025 with a quiz competition that attracted 90 participants. It later expanded into the Maati Mela, which welcomed nearly 5,000 students, faculty members, and staff. Visitors explored handcrafted artefacts, terracotta products, traditional cookware, clay diyas, and regional crafts. The mela created a direct connection between the campus community and artisans preserving generations of knowledge. A pottery and clay-modelling workshop, led by Ms Garima Negi, provided hands-on learning to around 150 participants. School students also participated in interactive pottery and quiz activities. The initiative celebrated dignity of work, environmental consciousness, cultural pride, and self-reliance. Maati-NITI demonstrated that traditional skills are not simply objects of the past but valuable principles for a sustainable and rooted future.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
  },
  {
    id: 9,
    title: 'Khadi Mela',
    date: 'Oct 17–20, 2025',
    location: 'IIT Roorkee Campus',
    attendees: '5,000+',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    summary: 'Swadeshi celebration featuring Khadi textiles, regional crafts, and artisan products during Diwali festivities.',
    description: 'Think India IIT Roorkee organised the Khadi Mela from 17 to 20 October 2025 as a celebration of Swadeshi, craftsmanship, and self-reliance. Conducted during the festive season, the mela attracted nearly 5,000 students, faculty members, staff, and campus residents. The exhibition featured traditional and handcrafted products from different regions of India. Visitors explored Maheshwari suits, Madhubani sarees, Kashmiri garments, Bagru and Sanganeri textiles, Khadi kurtas, Uttarakhand tweed jackets, Punjabi juttis, and other regional products. The mela gave artisans and sellers a platform to connect directly with the IIT Roorkee community. Special discounts encouraged students to purchase locally made and culturally significant products. The event also added a festive spirit to the Diwali celebrations on campus. By promoting Khadi and indigenous craftsmanship, the mela strengthened awareness of the "Vocal for Local" and Swadeshi movements. It successfully combined cultural celebration with support for local artisans and a self-reliant economy.',
    category: 'Swadeshi',
    categoryColor: 'bg-yellow-600',
  },
  {
    id: 10,
    title: 'Master Your Mind',
    date: 'Jul 30, 2025',
    location: 'MAC Auditorium',
    attendees: '650+',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80',
    summary: 'Guest lecture on meditation, mental clarity, and the Sanatan approach to living by Microsoft engineer and IIT Roorkee alumnus.',
    description: 'Think India IIT Roorkee organised the "Master Your Mind" guest lecture on 30 July 2025 at the MAC Auditorium. The event brought together more than 650 participants for a discussion on meditation, mental clarity, and the Sanatan approach to living. The speaker, Mr Avdhesh Sharma, is an IIT Roorkee alumnus and Software Development Engineer at Microsoft. Drawing from his personal experiences, he discussed the pressures of academic competition, corporate life, and a technology-driven world. He explained how meditation can help individuals develop focus, emotional stability, purpose, and resilience. The lecture connected ancient wisdom with the practical challenges faced by modern students and professionals. Participants responded positively to the authenticity and relevance of the discussion. The packed auditorium reflected a strong interest in conversations about inner well-being and balanced living. The event reinforced the importance of developing accomplished professionals who are also self-aware, grounded, and purposeful individuals.',
    category: 'Wellness',
    categoryColor: 'bg-teal-500',
  },
  {
    id: 11,
    title: 'Blood Donation Camp',
    date: 'Jan 23, 2026',
    location: 'Student Activity Centre',
    attendees: '400+',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80',
    summary: 'Parakram Diwas initiative honouring Netaji Subhas Chandra Bose with nearly 400 donors contributing despite heavy rainfall.',
    description: 'Think India IIT Roorkee organised a Blood Donation Camp on 23 January 2026 to commemorate Parakram Diwas and the birth anniversary of Netaji Subhas Chandra Bose. The camp was conducted at the Student Activity Centre with the support of government and private blood banks. Nearly 400 students, faculty members, staff, and professors participated in the initiative. Senior institute officials attended the programme and encouraged donors and volunteers. Despite heavy rainfall, the IIT Roorkee community responded with determination and enthusiasm. Medical teams ensured that the collection process remained safe, systematic, and efficient. Donors received mementos and gift bags as tokens of gratitude for their contribution. Volunteers played an important role in coordinating registrations, assisting participants, and maintaining an organised environment. The camp transformed the ideals of courage, compassion, service, and collective responsibility into meaningful action.',
    category: 'Service',
    categoryColor: 'bg-pink-500',
  },
  {
    id: 12,
    title: 'Shivaji Maharaj Jayanti',
    date: 'Feb 21, 2025',
    location: 'IIT Roorkee',
    attendees: '300+',
    image: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600&q=80',
    summary: 'Celebration honouring Chhatrapati Shivaji Maharaj with traditional Maharashtrian folk dances and Powada recital.',
    description: 'Think India IIT Roorkee celebrated Chhatrapati Shivaji Maharaj Jayanti on 21 February 2025. The programme honoured the life and legacy of one of India\'s most admired warrior-kings and visionary leaders. Students gathered in large numbers for a celebration rooted in history, culture, leadership, and national pride. The event began with the lighting of a ceremonial diya in memory of Shivaji Maharaj. Traditional Maharashtrian folk dances brought the courage, energy, and cultural spirit of his era to the stage. A powerful Powada recital narrated stories of bravery, sacrifice, and leadership. Students and professors also reflected on the continuing relevance of Shivaji Maharaj\'s ideals. The celebration highlighted courage, integrity, strategic vision, good governance, and commitment to Swarajya. It encouraged young people to carry these values forward while contributing to a stronger and more self-reliant India.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
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

export default function PastEvents() {
  const { ref, revealed } = useReveal();
  const [selected, setSelected] = useState<PastEvent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  /* Auto-scroll — REVERSE direction */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId: number;
    const speed = 0.45;

    container.scrollLeft = container.scrollWidth / 2;
    let pos = container.scrollWidth / 2;

    const tick = () => {
      pos -= speed;
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

  const allEvents = [...pastEventsData, ...pastEventsData];

  return (
    <section id="past-events" className="relative py-24 overflow-hidden section-alt" ref={ref}>

      <div className="bg-orb bg-orb-1" style={{ opacity: 0.6 }} />

      <div className="relative">

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
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-6 sm:px-10 pb-4 scrollbar-hide"
          >
          {allEvents.map((event, i) => (
            <div
              key={`${event.id}-${i}`}
              className={`event-card flex-shrink-0 w-[300px] sm:w-[360px] group transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.05 + (i % pastEventsData.length) * 0.08}s` }}
              onClick={() => setSelected(pastEventsData.find(e => e.id === event.id) ?? null)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${event.categoryColor} text-white`}>
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-orange-400" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-green-400" />
                    {event.attendees}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{event.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="w-3 h-3 text-blue-400" /> {event.location}
                  </span>
                  <span className="text-[11px] font-medium text-orange-500 flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground mb-4">Hover to pause • Click any card to view details</p>
          <button
            onClick={() => navigate('/past-events')}
            className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-2.5"
          >
            View All Past Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative glass-strong rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-orange-500 transition-colors">
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-52 sm:h-64">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover rounded-t-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent rounded-t-3xl" />
              <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${selected.categoryColor} text-white`}>
                {selected.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-black mb-2">{selected.title}</h3>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-orange-400" /> {selected.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-blue-400" /> {selected.location}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-green-400" /> {selected.attendees} attendees
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
