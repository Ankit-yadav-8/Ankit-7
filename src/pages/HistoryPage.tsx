import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import Journey from '@/sections/Journey';
import DeskThoughts from '@/sections/DeskThoughts';
import { pastEventsData } from '@/data/pastEvents';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* The text content of the journey */}
        <Journey />
        
        {/* Glimpses of history: one image from each event */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Moments in <span className="gradient-text">History</span>
              </h2>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
                Glimpses of Our Events
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pastEventsData.map((event) => {
                // Use the first gallery image if available, else use the main event poster/image
                const displayImage = event.gallery && event.gallery.length > 0 ? event.gallery[0] : event.image;
                
                return (
                  <div key={event.id} className="relative aspect-square group overflow-hidden rounded-xl border border-border shadow-md">
                    <img
                      src={displayImage}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover overlay with title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium text-sm leading-tight">
                        {event.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Messages from the Desk */}
        <DeskThoughts />
      </main>

      <Footer />
    </div>
  );
}
