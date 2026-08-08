import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PastEventFull {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  description: string;
  category: string;
  categoryColor: string;
}

const allPastEvents: PastEventFull[] = [
  {
    id: 1,
    title: 'National Convention 2024',
    date: 'Dec 21–23, 2024',
    location: 'IIT Roorkee',
    attendees: '280+',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50e2fd87?w=600&q=80',
    description: 'The Think India National Convention 2024 was organised at IIT Roorkee from 21 to 23 December under the theme "Bharat 4.0: Crafting a Self-Resilient Future by 2047." The convention brought together more than 280 students, faculty members, alumni, youth leaders, and distinguished speakers from across the country. Discussions focused on building a future rooted in innovation, sustainability, cultural confidence, and national pride. Sessions addressed legal reforms, media narratives, misinformation, global youth leadership, cybersecurity, economic resilience, and sustainable development. The convention also featured an Ideathon where students presented technology-driven solutions to real-world problems.',
    category: 'Convention',
    categoryColor: 'bg-orange-500',
  },
  {
    id: 2,
    title: 'Ram Mandir Pran Pratishtha Screening',
    date: 'Jan 22, 2024',
    location: 'IIT Roorkee Campus',
    attendees: '170+',
    image: 'https://images.unsplash.com/photo-1604823200712-ef4b1e6e0407?w=600&q=80',
    description: 'On 22 January 2024, Think India IIT Roorkee organised a live screening of the Ram Lalla Pran Pratishtha ceremony. It was the chapter\'s first major event and created an atmosphere of collective reflection, cultural connection, and spiritual celebration. More than 170 undergraduate and postgraduate students gathered to witness the historic occasion. Prasadam was distributed among attendees after the screening. A Deepotsav illuminated the campus with rows of diyas, while volunteers created colourful rangolis and floral decorations.',
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
    description: 'Chhatra Sansad is Think India IIT Roorkee\'s student-led platform for structured debate, critical thinking, and informed public dialogue. Its first edition explored "One Nation, One Election" while commemorating Dr B. R. Ambedkar Jayanti. Subsequent editions examined AI implications, the Uniform Civil Code, and welfare economics. The series has enabled students to engage thoughtfully with complex national issues and develop informed, articulate, responsible, and solution-oriented young citizens.',
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
    description: 'Think India IIT Roorkee organised a large-scale Voter Awareness Campaign at the LBS Ground. The initiative was conducted in association with the Student Affairs Council, Cultural Council, and National Service Scheme. Nearly 200 students came together to form a symbolic human chain spelling the word "VOTE." Senior institute officials and Think India representatives addressed the gathering and emphasised the role of young citizens in strengthening democracy.',
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
    description: 'Think India IIT Roorkee, in collaboration with the Career Development Cell, organised an informative lecture on research-funding opportunities. The session was conducted by Dr S. K. Varshney, Advisor and former Head of International Cooperation at the Department of Science and Technology. The lecture covered research grants, academic collaborations, conference funding, proposal development, and doctoral and postdoctoral opportunities. More than 900 registrations were received.',
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
    description: 'The Tiranga Yatra is one of Think India IIT Roorkee\'s most prominent celebrations of national unity, freedom, and civic responsibility. The 2024 edition featured two 500-metre-long national flags. Tiranga Yatra 2025 was organised on an even larger scale with nearly 2,000 members carrying a 600-metre-long Tiranga. Both editions transformed the campus into a vibrant expression of patriotism, pride, and collective responsibility.',
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
    description: 'The "Reviving Bharat: A Scientific Civilization and Its Relevance in Present Times" lecture explored India\'s rich scientific, philosophical, and spiritual heritage. The keynote speaker was Mr Aditya Jha, a Senior Application Engineer at Oracle and an alumnus of IIT Roorkee. He discussed how ancient Indian knowledge can provide meaningful perspectives on modern social and professional challenges.',
    category: 'Lecture',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 8,
    title: 'National Youth Day Lecture',
    date: 'Jan 12, 2025',
    location: 'Online',
    attendees: '100+',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
    description: 'Think India IIT Roorkee commemorated National Youth Day through an insightful online lecture celebrating the birth anniversary and enduring legacy of Swami Vivekananda. Swami Sarvalokananda delivered the lecture and shared lessons on leadership, ideal role models, innovative thinking, discipline, and responsible decision-making. The programme inspired students to approach life with greater purpose, energy, self-belief, and social responsibility.',
    category: 'Lecture',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 9,
    title: 'Mindset Makeover Programme',
    date: 'Jan 1–9, 2025',
    location: 'Online',
    attendees: '200+',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    description: 'Mindset Makeover was a nine-day online challenge designed to help participants develop discipline, resilience, consistency, and a growth-oriented mindset. Three speakers brought together ancient wisdom, modern professional experience, and practical self-development strategies. Sessions addressed self-doubt, focus, clarity, fear of failure, and the dangers of becoming trapped by success. Participants were encouraged to transform temporary motivation into lasting habits.',
    category: 'Wellness',
    categoryColor: 'bg-teal-500',
  },
  {
    id: 10,
    title: 'Shivaji Maharaj Jayanti',
    date: 'Feb 21, 2025',
    location: 'IIT Roorkee',
    attendees: '300+',
    image: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600&q=80',
    description: 'Think India IIT Roorkee celebrated Chhatrapati Shivaji Maharaj Jayanti honouring the life and legacy of one of India\'s most admired warrior-kings. Traditional Maharashtrian folk dances brought the courage, energy, and cultural spirit of his era to the stage. A powerful Powada recital narrated stories of bravery, sacrifice, and leadership. The celebration highlighted courage, integrity, strategic vision, good governance, and commitment to Swarajya.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
  },
  {
    id: 11,
    title: 'Policy Negotiation Workshop',
    date: 'Feb 22, 2025',
    location: 'IIT Roorkee',
    attendees: '80+',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    description: 'A two-hour Policy Negotiation Workshop conducted under the guidance of Mr Nikhil Arya from the Rashtram School of Public Leadership. Students were divided into groups and assigned a realistic policy simulation involving an ethanol plant while addressing environmental regulations, employment concerns, government financing, and community interests. The workshop effectively connected classroom learning with real-world challenges of governance.',
    category: 'Workshop',
    categoryColor: 'bg-indigo-500',
  },
  {
    id: 12,
    title: 'Design Workshop',
    date: 'Apr 27, 2025',
    location: 'Online',
    attendees: '60+',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    description: 'An online Design Workshop conducted by Ar. Sehaj Singh introducing students to graphic and visual design. Participants explored important principles of graphic composition, visual communication, and user experience. They were introduced to tools including Adobe Photoshop, Illustrator, Figma, Canva, and emerging AI-based design platforms. The workshop encouraged creativity, structured thinking, and digital skills.',
    category: 'Workshop',
    categoryColor: 'bg-indigo-500',
  },
  {
    id: 13,
    title: 'Corporate Compass',
    date: 'Apr 19, 2025',
    location: 'Online',
    attendees: '50+',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
    description: 'An online internship and placement guidance session designed primarily for second-year students. Speakers shared personal experiences from internships, corporate recruitment, and entrepreneurial journeys. Students received practical guidance on building effective résumés, using LinkedIn and Twitter for networking, and early career preparation. Corporate Compass equipped students with realistic expectations and practical strategies.',
    category: 'Career',
    categoryColor: 'bg-cyan-500',
  },
  {
    id: 14,
    title: 'Master Your Mind',
    date: 'Jul 30, 2025',
    location: 'MAC Auditorium',
    attendees: '650+',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80',
    description: 'A guest lecture on meditation, mental clarity, and the Sanatan approach to living. The speaker, Mr Avdhesh Sharma, is an IIT Roorkee alumnus and Software Development Engineer at Microsoft. He discussed the pressures of academic competition and how meditation can help individuals develop focus, emotional stability, purpose, and resilience. The packed auditorium reflected strong interest in inner well-being.',
    category: 'Wellness',
    categoryColor: 'bg-teal-500',
  },
  {
    id: 15,
    title: 'Maati-NITI: Return to Roots',
    date: 'Oct 12, 2025',
    location: 'IIT Roorkee Campus',
    attendees: '5,000+',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
    description: 'An initiative to reconnect young Indians with the soil, traditions, and artisanal heritage of Bharat. The Maati Mela welcomed nearly 5,000 visitors who explored handcrafted artefacts, terracotta products, traditional cookware, and regional crafts. A pottery workshop provided hands-on learning. The initiative celebrated dignity of work, environmental consciousness, cultural pride, and self-reliance.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
  },
  {
    id: 16,
    title: 'Painting Competition',
    date: 'Jan 18, 2026',
    location: 'Old Horticulture Garden',
    attendees: '50+',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    description: 'A painting competition to mark National Youth Day, held in the calm and natural surroundings of the Old Horticulture Department Garden. Young artists expressed their ideas through themes connected with culture, nature, and history. Each painting reflected a distinct artistic style and personal interpretation. The event demonstrated how art can preserve memory, identity, values, and cultural continuity.',
    category: 'Art',
    categoryColor: 'bg-amber-500',
  },
  {
    id: 17,
    title: 'Khadi Mela',
    date: 'Oct 17–20, 2025',
    location: 'IIT Roorkee Campus',
    attendees: '5,000+',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    description: 'A celebration of Swadeshi, craftsmanship, and self-reliance during the festive Diwali season. The mela attracted nearly 5,000 visitors who explored Maheshwari suits, Madhubani sarees, Kashmiri garments, Khadi kurtas, Uttarakhand tweed jackets, Punjabi juttis, and other regional products. The event promoted Khadi and indigenous craftsmanship, strengthening the "Vocal for Local" and Swadeshi movements.',
    category: 'Swadeshi',
    categoryColor: 'bg-yellow-600',
  },
  {
    id: 18,
    title: 'Blood Donation Camp',
    date: 'Jan 23, 2026',
    location: 'Student Activity Centre',
    attendees: '400+',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80',
    description: 'A Blood Donation Camp organised to commemorate Parakram Diwas and the birth anniversary of Netaji Subhas Chandra Bose. Nearly 400 students, faculty members, staff, and professors participated in the initiative. Despite heavy rainfall, the IIT Roorkee community responded with determination and enthusiasm. The camp transformed the ideals of courage, compassion, service, and collective responsibility into meaningful action.',
    category: 'Service',
    categoryColor: 'bg-pink-500',
  },
];

const categories = ['All', ...Array.from(new Set(allPastEvents.map(e => e.category)))];

export default function PastEventsPage() {
  const [selected, setSelected] = useState<PastEventFull | null>(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filtered = allPastEvents.filter(e => {
    const matchCat = filter === 'All' || e.category === filter;
    const matchSearch = search === '' || e.title.toLowerCase().includes(search.toLowerCase()) || e.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero header */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsla(24, 95%, 53%, 0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-500 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
              Our Journey
            </span>
            <h1 className="text-4xl sm:text-6xl font-black mb-4">
              All Past <span className="gradient-text">Events</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base mb-8">
              Every event tells a story of impact, learning, and community. Explore our complete journey of {allPastEvents.length} events.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    filter === cat
                      ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                      : 'bg-transparent text-muted-foreground border-border hover:border-orange-500/30 hover:text-orange-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, i) => (
            <div
              key={event.id}
              className="event-card group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => setSelected(event)}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${event.categoryColor} text-white`}>
                  {event.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2 group-hover:text-orange-500 transition-colors line-clamp-1">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" /> {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-green-400" /> {event.attendees}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-3">{event.description}</p>
                <button className="text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 group/btn">
                  Read Full Info
                  <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No events found matching your search.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-orange-500 transition-colors">
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-56 sm:h-72">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover rounded-t-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent rounded-t-3xl" />
              <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${selected.categoryColor} text-white`}>
                {selected.category}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-black mb-3">{selected.title}</h3>
              
              <div className="flex flex-wrap gap-4 mb-6">
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

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
