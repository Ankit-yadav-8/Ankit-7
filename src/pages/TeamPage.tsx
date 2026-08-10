import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import Team from '@/sections/Team';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <Team />
      </main>

      <Footer />
    </div>
  );
}
