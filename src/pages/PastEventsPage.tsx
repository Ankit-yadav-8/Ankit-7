import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import AlternatingCard from '@/components/AlternatingCard';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

import { pastEventsData } from '@/data/pastEvents';

const categories = ['All', ...Array.from(new Set(pastEventsData.map(e => e.category)))];

export default function PastEventsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredEvents = pastEventsData.filter(
    (e) => filter === 'All' || e.category === filter
  );

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-serif flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#1a1a1a]">
              Past Events
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              Explore our workshops, seminars, campaigns, and community events.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-colors ${
                  filter === cat
                    ? 'bg-[#1a1a1a] text-[#f4f1ea] border-2 border-[#1a1a1a]'
                    : 'bg-transparent border-2 border-gray-400 text-gray-600 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
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
                    { label: 'Time', icon: <Clock className="w-4 h-4" />, text: event.time || 'TBD' },
                    { label: 'Location', icon: <MapPin className="w-4 h-4" />, text: event.location },
                    { label: 'Participants', icon: <Users className="w-4 h-4" />, text: event.attendees },
                  ]}
                  buttonText="Read Full Info"
                  onClick={() => navigate(`/event/${event.id}`)}
                  reverse={index % 2 !== 0}
                />
              </div>
            ))}
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-20 bg-white rounded-sm border-2 border-gray-300">
                <p className="text-gray-600 font-serif text-lg">No past events found for this category.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
