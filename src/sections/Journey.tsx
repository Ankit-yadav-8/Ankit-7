import { useEffect, useRef, useState } from 'react';

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, revealed };
}

export default function Journey() {
  const { ref, revealed } = useReveal();

  return (
    <section id="journey" className="relative py-24 overflow-hidden bg-background" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Think India <span className="gradient-text">IIT Roorkee</span>
          </h2>
        </div>

        <div 
          className={`max-w-4xl mx-auto space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-200 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-justify">
            Think India Club, IIT Roorkee, began its journey in 2023, with an idea that extended beyond classrooms and laboratories: to create a space where students could engage with the larger questions shaping India and explore their own role in the nation's journey. As part of the pan-India Think India movement, the club was founded with a "Nation First" outlook. What started as an effort to bring students together around ideas of national importance gradually grew into a vibrant student community connecting technical education with society, culture, heritage and nation-building.
          </p>
          <p className="text-justify">
            From its early discussions and student-led initiatives, Think India IIT Roorkee expanded into seminars, conferences, cultural programmes and campus-wide activities. Each initiative added a new dimension to the club while strengthening its purpose to encourage students to think critically, engage meaningfully and turn their education outward.
          </p>
          <p className="text-justify">
            A defining milestone came with the Think India National Convention 2024, when IIT Roorkee welcomed more than 300 participants from institutions across the country. Conversations around Bharat 4.0, India@2047, renewable energy, digital innovation and India's civilizational heritage transformed the campus into a meeting ground for ideas about India's future.
          </p>
          <p className="text-justify">
            Alongside intellectual engagement, traditions such as the annual Tiranga Yatra have brought students, faculty and staff together in a shared celebration of national identity. From an idea that took shape in 2023 to a growing platform for dialogue, culture and action, the journey of Think India IIT Roorkee continues to be written by its students.
          </p>
          <p className="text-justify font-semibold text-foreground mt-8 text-center text-lg">
            The story is still young. The purpose remains ambitious: to learn, to engage, and to contribute to the India of tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
