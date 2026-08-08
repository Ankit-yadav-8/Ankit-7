import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { Calendar, MapPin } from 'lucide-react';
import { pastEventsData } from '@/data/pastEvents';

export default function PastEventsPage() {
  const navigate = useNavigate();

  // Pick events for layout (using indices from the provided array)
  const featuredEvent = pastEventsData.find(e => e.id === 6) || pastEventsData[0]; // Tiranga Yatra
  const sideEvent1 = pastEventsData.find(e => e.id === 1) || pastEventsData[1]; // Think India Nat Conv
  const sideEvent2 = pastEventsData.find(e => e.id === 2) || pastEventsData[2]; // Ram Mandir
  const midEvent1 = pastEventsData.find(e => e.id === 4) || pastEventsData[3]; // Voter Awareness
  const midEvent2 = pastEventsData.find(e => e.id === 3) || pastEventsData[4]; // Chhatra Sansad
  const bottomEvent1 = pastEventsData.find(e => e.id === 5) || pastEventsData[5]; // DST Lecture
  const bottomEvent2 = pastEventsData.find(e => e.id === 7) || pastEventsData[6]; // Reviving Bharat

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-serif flex flex-col selection:bg-orange-200">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        
        {/* Newspaper Wrapper */}
        <div className="bg-[#fcfbf9] border-4 border-[#2c2c2c] p-4 sm:p-8 shadow-2xl relative">
          
          {/* Header Section */}
          <header className="border-b-[3px] border-[#2c2c2c] pb-4 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              <div className="flex items-center gap-3 md:w-1/4">
                <img src="/Ankit-7/images/think-india.png" alt="Logo" className="w-16 h-16 grayscale contrast-125" />
                <div className="text-[10px] font-bold leading-tight tracking-wider uppercase text-[#2c2c2c]">
                  Think India<br/>IIT Roorkee<br/>Estd. 2019
                </div>
              </div>

              <div className="text-center md:w-2/4 flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-serif tracking-tighter text-[#1a1a1a] uppercase leading-none" style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}>
                  Think India Times
                </h1>
                <div className="flex items-center gap-4 mt-3">
                  <div className="h-[2px] w-12 bg-[#2c2c2c]" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#2c2c2c]">Ideate • Innovate • Impact</span>
                  <div className="h-[2px] w-12 bg-[#2c2c2c]" />
                </div>
              </div>

              <div className="text-right text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2c2c2c] md:w-1/4 hidden md:block">
                Saturday<br/>10 May 2025<br/>Edition: 2025
              </div>
            </div>
          </header>

          {/* Sub Navigation */}
          <nav className="border-b-[3px] border-[#2c2c2c] pb-3 mb-6 hidden md:block">
            <ul className="flex justify-center items-center gap-4 lg:gap-8 text-xs font-bold uppercase tracking-wider text-[#2c2c2c]">
              <li className="cursor-pointer hover:underline underline-offset-4" onClick={() => navigate('/')}>Home</li>
              <li className="text-gray-400">|</li>
              <li className="cursor-pointer hover:underline underline-offset-4 bg-orange-100 px-2 py-1" onClick={() => navigate('/past-events')}>Past Events</li>
              <li className="text-gray-400">|</li>
              <li className="cursor-pointer hover:underline underline-offset-4" onClick={() => navigate('/upcoming-events')}>Upcoming Events</li>
              <li className="text-gray-400">|</li>
              <li className="cursor-pointer hover:underline underline-offset-4" onClick={() => navigate('/blog')}>Blogs</li>
              <li className="text-gray-400">|</li>
              <li className="cursor-pointer hover:underline underline-offset-4" onClick={() => navigate('/#about')}>About Us</li>
            </ul>
          </nav>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left and Middle Columns (Spans 8) */}
            <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#2c2c2c] pb-8 lg:pb-0 lg:pr-8">
              
              {/* Featured Article */}
              <article className="border-b-[3px] border-[#2c2c2c] pb-8">
                <div className="flex flex-col-reverse md:flex-row gap-6">
                  <div className="md:w-5/12 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight uppercase mb-4 text-[#1a1a1a]" style={{ fontFamily: '"Playfair Display", serif' }}>
                        {featuredEvent.title}
                      </h2>
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider mb-4 text-[#555]">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {featuredEvent.date}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {featuredEvent.location}</span>
                      </div>
                      <p className="text-base leading-relaxed text-[#333] font-serif text-justify mb-6 first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                        {featuredEvent.description.substring(0, 300)}...
                      </p>
                    </div>
                    <button onClick={() => navigate(`/event/past-${featuredEvent.id}`)} className="text-xs font-bold uppercase tracking-wider text-left hover:underline underline-offset-4 inline-flex items-center gap-2">
                      Details & Review <span>→</span>
                    </button>
                  </div>
                  <div className="md:w-7/12">
                    <img src={featuredEvent.image} alt={featuredEvent.title} className="w-full h-full object-cover min-h-[300px] grayscale-[70%] hover:grayscale-0 transition-all duration-700 border border-[#2c2c2c]" />
                  </div>
                </div>
              </article>

              {/* Middle Row (2 columns within the left side) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b-[3px] border-[#2c2c2c] pb-8">
                <article className="flex flex-col h-full">
                  <img src={midEvent1.image} alt={midEvent1.title} className="w-full h-48 object-cover grayscale-[70%] border border-[#2c2c2c] mb-4" />
                  <h3 className="text-2xl font-black uppercase mb-2 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>{midEvent1.title}</h3>
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider mb-3 text-[#555]">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {midEvent1.date}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#333] text-justify mb-4 flex-grow">
                    {midEvent1.summary}
                  </p>
                  <button onClick={() => navigate(`/event/past-${midEvent1.id}`)} className="text-xs font-bold uppercase tracking-wider text-left hover:underline underline-offset-4">Details & Review →</button>
                </article>

                <article className="flex flex-col h-full bg-[#1a1a1a] text-[#f4f1ea] p-6 border-2 border-[#2c2c2c]">
                  <h3 className="text-2xl lg:text-3xl font-black uppercase mb-4 leading-tight text-[#f4f1ea]" style={{ fontFamily: '"Playfair Display", serif' }}>{midEvent2.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider mb-4 text-[#aaa]">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {midEvent2.date}</span>
                  </div>
                  <p className="text-base leading-relaxed text-[#ddd] mb-6 flex-grow">
                    {midEvent2.summary}
                  </p>
                  <button onClick={() => navigate(`/event/past-${midEvent2.id}`)} className="text-xs font-bold uppercase tracking-wider text-left hover:underline underline-offset-4 text-white">Details & Register →</button>
                </article>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="border-r border-[#2c2c2c] pr-4">
                  <h3 className="text-xl font-black uppercase mb-2 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>{bottomEvent1.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-2 text-[#555]">By Think India | {bottomEvent1.date}</p>
                  <p className="text-sm leading-relaxed text-[#333] text-justify mb-3">
                    {bottomEvent1.summary}
                  </p>
                  <button onClick={() => navigate(`/event/past-${bottomEvent1.id}`)} className="text-[10px] font-bold uppercase tracking-wider hover:underline underline-offset-4">Read More →</button>
                </article>
                <article className="pl-4">
                  <img src={bottomEvent2.image} alt={bottomEvent2.title} className="w-full h-32 object-cover grayscale-[70%] border border-[#2c2c2c] mb-3" />
                  <h3 className="text-xl font-black uppercase mb-2 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>{bottomEvent2.title}</h3>
                  <button onClick={() => navigate(`/event/past-${bottomEvent2.id}`)} className="text-[10px] font-bold uppercase tracking-wider hover:underline underline-offset-4">Read More →</button>
                </article>
              </div>

            </div>

            {/* Right Column (Spans 4) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              <article className="border-b-[3px] border-[#2c2c2c] pb-8">
                <h3 className="text-2xl font-black uppercase mb-3 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>{sideEvent1.title}</h3>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider mb-4 text-[#555]">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {sideEvent1.date}</span>
                </div>
                <img src={sideEvent1.image} alt={sideEvent1.title} className="w-full h-56 object-cover grayscale-[70%] border border-[#2c2c2c] mb-4" />
                <p className="text-sm leading-relaxed text-[#333] text-justify mb-4">
                  {sideEvent1.description.substring(0, 150)}...
                </p>
                <button onClick={() => navigate(`/event/past-${sideEvent1.id}`)} className="text-xs font-bold uppercase tracking-wider hover:underline underline-offset-4">Details & Review →</button>
              </article>

              <article className="border-b-[3px] border-[#2c2c2c] pb-8">
                <h3 className="text-2xl font-black uppercase mb-3 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>{sideEvent2.title}</h3>
                <img src={sideEvent2.image} alt={sideEvent2.title} className="w-full h-40 object-cover grayscale-[70%] border border-[#2c2c2c] mb-4" />
                <p className="text-sm leading-relaxed text-[#333] text-justify mb-4">
                  {sideEvent2.summary}
                </p>
                <button onClick={() => navigate(`/event/past-${sideEvent2.id}`)} className="text-xs font-bold uppercase tracking-wider hover:underline underline-offset-4">Details & Review →</button>
              </article>

              {/* Upcoming Events Box */}
              <div className="bg-[#e8e4d9] border-2 border-[#2c2c2c] p-6 mb-4">
                <h3 className="text-lg font-black uppercase mb-4 tracking-widest border-b-2 border-[#2c2c2c] pb-2 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>Upcoming Events</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#2c2c2c] text-[#f4f1ea] rounded-full flex-shrink-0 text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-sm uppercase leading-tight">Policy Parv: Youth Dialogue</h4>
                      <p className="text-[10px] uppercase text-[#555] mt-1">21 June 2025 | Online</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#2c2c2c] text-[#f4f1ea] rounded-full flex-shrink-0 text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-sm uppercase leading-tight">Innovation Challenge 2025</h4>
                      <p className="text-[10px] uppercase text-[#555] mt-1">07 June 2025 | CSE Hall</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quote Box */}
              <div className="mt-auto border-[3px] border-dotted border-[#2c2c2c] p-6 text-center italic font-serif text-lg lg:text-xl text-[#333] bg-white">
                "The best way to predict the future is to create it."
                <div className="text-right text-[10px] mt-4 not-italic font-bold uppercase tracking-widest text-[#1a1a1a]">— Peter Drucker</div>
              </div>

            </div>

          </div>

          <footer className="mt-8 border-t-[3px] border-[#2c2c2c] pt-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#555]">
            <div>© 2025 Think India, IIT Roorkee. All Rights Reserved.</div>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-black transition-colors">FB</span>
              <span className="cursor-pointer hover:text-black transition-colors">IG</span>
              <span className="cursor-pointer hover:text-black transition-colors">YT</span>
              <span className="cursor-pointer hover:text-black transition-colors">IN</span>
            </div>
          </footer>
        </div>

      </main>
      <Footer />
    </div>
  );
}
