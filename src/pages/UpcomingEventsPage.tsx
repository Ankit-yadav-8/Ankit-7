import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import AlternatingCard from '@/components/AlternatingCard';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const upcomingEventsData = [
  {
    id: 'u1',
    title: 'AI in Education: Transforming Classrooms',
    category: 'Workshop',
    date: 'Aug 15, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Delhi NCR',
    participants: '200+',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    description: 'A comprehensive workshop for educators to learn how to responsibly integrate artificial intelligence tools into their teaching methodologies, enhancing student engagement and learning outcomes.',
  },
  {
    id: 'u2',
    title: 'EdTech Innovators Hackathon',
    category: 'Hackathon',
    date: 'Sep 02-04, 2026',
    time: '48 Hours',
    location: 'IIT Bombay (Hybrid)',
    participants: '500+',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    description: 'Join students and developers from across the country to build the next generation of educational tools. This 48-hour hackathon focuses on accessibility, personalized learning, and AI-driven assessments.',
  },
  {
    id: 'u3',
    title: 'Future of Learning Symposium',
    category: 'Webinar',
    date: 'Oct 10, 2026',
    time: '6:00 PM - 8:00 PM',
    location: 'Online via Zoom',
    participants: '1000+',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'An online symposium featuring global experts discussing the long-term impact of AI, augmented reality, and personalized learning platforms on traditional education systems.',
  }
];

const categories = ['All', 'Workshop', 'Hackathon', 'Webinar'];

export default function UpcomingEventsPage() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = upcomingEventsData.filter(
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
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us in our mission to shape the future of education. Discover workshops, hackathons, and webinars happening near you or online.
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
                    { label: 'Participants', icon: <Users className="w-4 h-4" />, text: event.participants },
                  ]}
                  buttonText="View Event Details"
                  reverse={index % 2 !== 0}
                />
              </div>
            ))}
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-20 bg-white rounded-[24px] border border-border/50">
                <p className="text-muted-foreground text-lg">No upcoming events found for this category.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
