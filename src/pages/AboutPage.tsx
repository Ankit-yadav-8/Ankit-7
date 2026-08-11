import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import About from '@/sections/About';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <About />
      </main>

      <Footer />
    </div>
  );
}
