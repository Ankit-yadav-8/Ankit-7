
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { Calendar, MapPin, Users, ArrowLeft, Clock } from 'lucide-react';

export default function EventDetailsPage() {
  // const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, you would fetch the event data based on the ID.
  // For now, we'll use placeholder data.
  const event = {
    title: 'AI Basics Workshop for Teachers',
    category: 'Workshop',
    date: '12 May 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Delhi',
    organizer: 'Think India Education Team',
    participants: '120+',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    description: 'Learn how teachers can use AI responsibly to improve classroom learning. This workshop covers the basics of generative AI, ethical considerations, and practical tools for lesson planning and student engagement.',
    objectives: [
      'Understand the fundamentals of Artificial Intelligence in an educational context.',
      'Learn to use AI tools for efficient lesson planning and grading.',
      'Discuss the ethical implications of AI use in schools.',
      'Develop strategies for teaching students about responsible AI use.'
    ],
    highlights: 'The event saw enthusiastic participation from over 120 teachers across 15 different schools. Hands-on sessions allowed educators to build their first AI-assisted lesson plans.',
    outcomes: '95% of attendees reported feeling more confident in integrating AI into their teaching practices. Several schools committed to adopting the recommended AI guidelines.',
  };

  return (
    <div className="min-h-screen bg-background text-foreground theme-edu flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-24">
        {/* Hero Section */}
        <div className="w-full h-[40vh] md:h-[60vh] relative mb-12">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Events
              </button>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                  {event.category}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/90">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-green-300" /> {event.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-green-300" /> {event.time}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-green-300" /> {event.location}</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-green-300" /> {event.participants}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-[24px] p-8 md:p-12 shadow-sm border border-border/50 -mt-24 relative z-10">
            <h2 className="text-2xl font-serif font-bold mb-4">About the Event</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {event.description}
            </p>

            <h3 className="text-xl font-serif font-bold mb-3">Objectives</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
              {event.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary p-6 rounded-2xl">
                <h3 className="text-lg font-serif font-bold mb-2">Key Highlights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.highlights}
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-2xl">
                <h3 className="text-lg font-serif font-bold mb-2">Impact & Outcomes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.outcomes}
                </p>
              </div>
            </div>

            {/* Photo Gallery Placeholder */}
            <h3 className="text-2xl font-serif font-bold mb-6">Event Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="aspect-square bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border text-muted-foreground">
                  <span className="text-sm">Photo {num}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground text-center italic">
              Actual event photos will be uploaded here by the administrator.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
