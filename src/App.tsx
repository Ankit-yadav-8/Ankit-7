import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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