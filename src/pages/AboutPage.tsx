import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import About from '@/sections/About';
import Journey from '@/sections/Journey';
import DeskThoughts from '@/sections/DeskThoughts';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <About />
        <Journey />
        <DeskThoughts />
      </main>

      <Footer />
    </div>
  );
}
