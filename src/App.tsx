import Navigation   from '@/components/Navigation';
import Hero         from '@/sections/Hero';
import About        from '@/sections/About';
import Initiatives  from '@/sections/Initiatives';
import Internship   from '@/sections/Internship';
import Blog         from '@/sections/Blog';
import Events       from '@/sections/Events';
import Footer       from '@/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Events />
        <Internship />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}