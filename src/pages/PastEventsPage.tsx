import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import AlternatingCard from '@/components/AlternatingCard';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const allPastEvents = [
  {
    id: 1,
    title: 'Think India National Convention 2024',
    date: 'Dec 21–23, 2024',
    time: '3 Days',
    location: 'IIT Roorkee',
    attendees: '280+',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    description: 'The Think India National Convention 2024 was organised under the theme "Bharat 4.0: Crafting a Self-Resilient Future by 2047." Discussions focused on building a future rooted in innovation, sustainability, and national pride.',
    category: 'Convention',
  },
  {
    id: 2,
    title: 'Nukkad Natak on Constitution Day',
    date: 'Nov 26, 2024',
    time: '2 Hours',
    location: 'LHC Complex',
    attendees: '300+',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
    description: 'A powerful street play performed to celebrate Constitution Day, emphasizing the importance of constitutional values and civic duties among students and faculty.',
    category: 'Cultural',
  },
  {
    id: 3,
    title: 'Cleanliness Drive',
    date: 'Oct 2, 2024',
    time: '9:00 AM - 1:00 PM',
    location: 'Campus Wide',
    attendees: '150+',
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=600&q=80',
    description: 'Organized on Gandhi Jayanti, students and faculty came together to clean the campus and raise awareness about sanitation and environmental sustainability.',
    category: 'Service',
  },
  {
    id: 4,
    title: 'Chhatra Sansad',
    date: 'Apr 14, 2024',
    time: 'Full Day',
    location: 'IIT Roorkee',
    attendees: '200+',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    description: 'A structured debate platform for students to discuss "One Nation, One Election", artificial intelligence, and welfare schemes. Encouraged critical thinking and informed public dialogue.',
    category: 'Debate',
  },
  {
    id: 5,
    title: 'Khadi Mela',
    date: 'Oct 17–20, 2025',
    time: '4 Days',
    location: 'IIT Roorkee Campus',
    attendees: '5,000+',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    description: 'A celebration of Swadeshi, craftsmanship, and self-reliance during the festive Diwali season. The event promoted Khadi and indigenous craftsmanship, strengthening the "Vocal for Local" movement.',
    category: 'Swadeshi',
  },
  {
    id: 6,
    title: 'Blood Donation Camp',
    date: 'Jan 23, 2026',
    time: '10:00 AM - 5:00 PM',
    location: 'Student Activity Centre',
    attendees: '400+',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80',
    description: 'A Blood Donation Camp organised to commemorate Parakram Diwas and the birth anniversary of Netaji Subhas Chandra Bose. The camp transformed the ideals of courage, compassion, and service into meaningful action.',
    category: 'Service',
  },
];

const categories = ['All', ...Array.from(new Set(allPastEvents.map(e => e.category)))];

export default function PastEventsPage() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = allPastEvents.filter(
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
