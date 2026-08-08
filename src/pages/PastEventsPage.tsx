import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import AlternatingCard from '@/components/AlternatingCard';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

import { pastEventsData } from '@/data/pastEvents';

const categories = ['All', ...Array.from(new Set(pastEventsData.map(e => e.category)))];

export default function PastEventsPage() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = pastEventsData.filter(
    (e) => filter === 'All' || e.category === filter
  );

  return (
    <div className="min-h-screen bg-background text-foreground theme-edu flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Past Events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our workshops, seminars, campaigns, and community events.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="animate-slide-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <AlternatingCard
                  image={event.image}
                  category={event.category}
                  title={event.title}
                  description={event.description}
                  metadata={[
                    { label: 'Date', icon: <Calendar className="w-4 h-4" />, text: event.date },
                    { label: 'Time', icon: <Clock className="w-4 h-4" />, text: event.time },
                    { label: 'Location', icon: <MapPin className="w-4 h-4" />, text: event.location },
                    { label: 'Participants', icon: <Users className="w-4 h-4" />, text: event.attendees },
                  ]}
                  buttonText="Full Details & Review"
                  reverse={index % 2 !== 0}
                />
              </div>
            ))}
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-20 bg-white rounded-[24px] border border-border/50">
                <p className="text-muted-foreground text-lg">No past events found for this category.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
