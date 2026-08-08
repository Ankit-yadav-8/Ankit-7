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
  let isUpcoming = false;

  if (id?.startsWith('upcoming-')) {
    const eventId = parseInt(id.replace('upcoming-', ''));
    event = eventsData.find((e) => e.id === eventId);
    isUpcoming = true;
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar / Meta Details */}
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-secondary/20 p-6 rounded-2xl border border-border/50">
                <h3 className="text-xl font-serif font-bold mb-4 border-b border-border pb-2">Event Brief</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.summary || "An inspiring event aimed at fostering growth, learning, and cultural exchange among attendees."}
                </p>
                {isUpcoming && event.formLink && (
                  <a href={event.formLink} className="mt-6 block w-full py-3 bg-primary text-primary-foreground text-center rounded-xl font-semibold hover:opacity-90 transition">
                    Register Now
                  </a>
                )}
              </div>
            </div>

            {/* Main Editorial Content */}
            <div className="lg:col-span-9">
              <div className="columns-1 md:columns-2 gap-8 space-y-8 text-lg text-muted-foreground leading-relaxed">
                {/* Drop Cap for first paragraph */}
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-foreground">
                  {textBlocks[0]}
                </p>

                {/* Iterate over remaining text and insert images dynamically */}
                {textBlocks.slice(1).map((para: string, idx: number) => {
                  const imageIdx = idx;
                  const hasImage = event.gallery && event.gallery[imageIdx];
                  
                  return (
                    <div key={idx} className="break-inside-avoid mb-6">
                      {hasImage && idx % 2 === 0 && (
                        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg border border-border">
                          <img src={event.gallery[imageIdx]} alt={`Event snapshot ${imageIdx}`} className="w-full h-auto object-cover" />
                        </div>
                      )}
                      
                      <p className="mb-6">{para}</p>

                      {hasImage && idx % 2 !== 0 && (
                        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg border border-border">
                          <img src={event.gallery[imageIdx]} alt={`Event snapshot ${imageIdx}`} className="w-full h-auto object-cover" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Extra Gallery Images spanning full width below text */}
              {event.gallery && event.gallery.length > (textBlocks.length - 1) && (
                <div className="mt-16">
                  <h3 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-4">More from the Event</h3>
                  <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                    {event.gallery.slice(textBlocks.length - 1).map((img: string, idx: number) => (
                      <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-border group relative">
                        <img src={img} alt={`Gallery image ${idx}`} className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
