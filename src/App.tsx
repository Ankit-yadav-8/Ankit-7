import { Routes, Route } from 'react-router-dom';
import Navigation   from '@/components/Navigation';
import Hero         from '@/sections/Hero';
import About        from '@/sections/About';
import Initiatives  from '@/sections/Initiatives';
import PastEvents   from '@/sections/PastEvents';
import Blog         from '@/sections/Blog';
import Events       from '@/sections/Events';
import Footer       from '@/sections/Footer';
import PastEventsPage from '@/pages/PastEventsPage';
import UpcomingEventsPage from '@/pages/UpcomingEventsPage';
import BlogPage from '@/pages/BlogPage';
import EventDetailsPage from '@/pages/EventDetailsPage';
import BlogDetailsPage from '@/pages/BlogDetailsPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Events />
        <PastEvents />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/past-events" element={<PastEventsPage />} />
      <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/event/:id" element={<EventDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
    </Routes>
  );
}