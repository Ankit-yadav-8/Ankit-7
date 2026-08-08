import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { Calendar, MapPin, Users, ArrowLeft, Clock } from 'lucide-react';
import { eventsData } from '@/data/events';
import { pastEventsData } from '@/data/pastEvents';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the event based on the ID prefix
  let event: any = null;

  if (id?.startsWith('upcoming-')) {
    const eventId = parseInt(id.replace('upcoming-', ''));
    event = eventsData.find((e) => e.id === eventId);
  } else if (id?.startsWith('past-')) {
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

  // Create paragraphs for the text if contentBlocks is provided, otherwise split by sentences or just use description
  const textBlocks = event.contentBlocks 
    ? event.contentBlocks 
    : event.description.split('. ').map((s: string) => s.trim() + (s.endsWith('.') ? '' : '.'));

  return (
    <div className="min-h-screen bg-background text-foreground theme-edu flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-24">
        {/* Hero Section */}
        <div className="w-full h-[40vh] md:h-[60vh] relative mb-12">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Events
              </button>
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-white text-xs font-semibold rounded-full uppercase tracking-wider ${event.categoryColor}`}>
                  {event.category}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base font-medium text-white/90">
                <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-green-400" /> {event.date}</span>
                {event.time && <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-green-400" /> {event.time}</span>}
                <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-green-400" /> {event.location}</span>
                <span className="flex items-center gap-2"><Users className="w-5 h-5 text-green-400" /> {event.participants || event.attendees}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newspaper Style Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Editorial Content */}
            <div className="columns-1 md:columns-2 gap-10 space-y-8 text-lg text-muted-foreground leading-relaxed font-serif text-justify">
              {/* Drop Cap for first paragraph */}
              <p className="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-foreground text-foreground/90">
                {textBlocks[0]}
              </p>

                {/* Iterate over remaining text and insert images dynamically */}
                {textBlocks.slice(1).map((para: string, idx: number) => {
                  const imageIdx = idx;
                  const hasImage = event.gallery && event.gallery[imageIdx];
                  
                  return (
                    <div key={idx} className="break-inside-avoid mb-8">
                      {hasImage && idx % 2 === 0 && (
                        <div className="mb-8 rounded-sm overflow-hidden relative group">
                          <img src={event.gallery[imageIdx]} alt={`Event snapshot ${imageIdx}`} className="w-full h-auto object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 text-xs text-white/90 text-center font-sans tracking-wide">
                            Fig {imageIdx + 1}: Capturing the essence of the moment.
                          </div>
                        </div>
                      )}
                      
                      <p className="mb-8 text-foreground/80">{para}</p>

                      {hasImage && idx % 2 !== 0 && (
                        <div className="mb-8 rounded-sm overflow-hidden relative group">
                          <img src={event.gallery[imageIdx]} alt={`Event snapshot ${imageIdx}`} className="w-full h-auto object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 text-xs text-white/90 text-center font-sans tracking-wide">
                            Fig {imageIdx + 1}: Glimpses from {event.title}.
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Extra Gallery Images spanning full width below text */}
              {event.gallery && event.gallery.length > (textBlocks.length - 1) && (
                <div className="mt-20 pt-10 border-t-2 border-dashed border-border/60">
                  <h3 className="text-3xl font-serif font-black mb-8 text-center text-foreground uppercase tracking-widest">More from the Event</h3>
                  <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                    {event.gallery.slice(textBlocks.length - 1).map((img: string, idx: number) => (
                      <div key={idx} className="break-inside-avoid rounded-sm overflow-hidden shadow-sm group relative cursor-pointer">
                        <img src={img} alt={`Gallery image ${idx}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
      </main>

      <Footer />
    </div>
  );
}
