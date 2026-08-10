import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { Calendar, MapPin, Users, ArrowLeft, Clock } from 'lucide-react';
import { pastEventsData } from '@/data/pastEvents';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Only past events have detail pages now
  let event: any = null;

  if (id?.startsWith('past-')) {
    const eventId = parseInt(id.replace('past-', ''));
    event = pastEventsData.find((e) => e.id === eventId);
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground flex-col gap-4">
        <h1 className="text-4xl font-serif font-bold">Event Not Found</h1>
        <button onClick={() => navigate(-1)} className="text-primary hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  const textBlocks = event.contentBlocks 
    ? event.contentBlocks 
    : event.description.split('. ').map((s: string) => s.trim() + (s.endsWith('.') ? '' : '.'));

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-serif flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-24">
        {/* Hero Section */}
        <div className="w-full h-[40vh] md:h-[60vh] relative mb-12 overflow-hidden bg-black/80">
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
            style={{ backgroundImage: `url(${event.image})` }}
          />
          <img loading="lazy" src={event.image} alt={event.title} className="w-full h-full object-contain relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
          <div className="absolute inset-0 flex items-end z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Events
              </button>
              <div className="mb-4">

              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base font-medium text-white/90">
                <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-orange-400" /> {event.date}</span>
                {event.time && <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-orange-400" /> {event.time}</span>}
                <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-orange-400" /> {event.location}</span>
                <span className="flex items-center gap-2"><Users className="w-5 h-5 text-orange-400" /> {event.participants || event.attendees}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-lg text-[#333] leading-relaxed font-serif">
            {/* Drop Cap for first paragraph */}
            <p className="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:leading-none first-letter:text-[#1a1a1a] text-justify">
              {textBlocks[0]}
            </p>

            {/* Remaining text blocks interleaved with images */}
            {textBlocks.slice(1).map((para: string, idx: number) => {
              const imageIdx = idx;
              const hasImage = event.gallery && event.gallery[imageIdx];
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx}>
                  {hasImage && (
                    <div className={`mb-8 ${isEven ? 'md:float-left md:mr-8 md:w-[45%]' : 'md:float-right md:ml-8 md:w-[45%]'}`}>
                      <div className="rounded-xl overflow-hidden shadow-lg h-auto w-full">
                        <img loading="lazy"
                          src={event.gallery[imageIdx]} 
                          alt={`${event.title} - Image ${imageIdx + 1}`} 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                          style={{ filter: 'brightness(1.05) contrast(1.05) saturate(1.15)' }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2 text-center italic">
                        Fig {imageIdx + 1}: Glimpses from {event.title}
                      </p>
                    </div>
                  )}
                  <p className="mb-6 text-justify text-[#333] clear-none">{para}</p>
                  <div className="clear-both" />
                </div>
              );
            })}
          </div>

          {/* Extra Gallery Images */}
          {event.gallery && event.gallery.length > (textBlocks.length - 1) && (
            <div className="mt-20 pt-10 border-t-2 border-dashed border-gray-300">
              <h3 className="text-3xl font-serif font-black mb-8 text-center text-[#1a1a1a] uppercase tracking-widest">More from the Event</h3>
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${event.id === 3 ? '' : 'md:grid-cols-3'} gap-6`}>
                {event.gallery.slice(textBlocks.length - 1).map((img: string, idx: number) => {
                  const isChhatraSansadWidePhoto = event.id === 3 && idx === 0;
                  const isTirangaYatraWidePhoto = event.id === 6 && idx === 0;
                  const isWidePhoto = isChhatraSansadWidePhoto || isTirangaYatraWidePhoto;
                  const colSpanClass = isChhatraSansadWidePhoto ? 'sm:col-span-2' : (isTirangaYatraWidePhoto ? 'sm:col-span-2 md:col-span-3' : '');
                  return (
                    <div key={idx} className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full ${isWidePhoto ? `${colSpanClass} h-[300px] sm:h-[400px] md:h-[500px]` : 'h-64'}`}>
                      <img loading="lazy"
                        src={img} 
                        alt={`Gallery image ${idx + 1}`} 
                        className={`w-full h-full hover:scale-105 transition-transform duration-500 ${isWidePhoto ? 'object-contain bg-black/5' : 'object-cover'}`}
                        style={{ filter: 'brightness(1.05) contrast(1.05) saturate(1.15)' }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
