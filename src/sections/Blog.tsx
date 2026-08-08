import { useEffect, useRef, useState } from 'react';
import { BookOpen, Clock, User, ExternalLink, X, Tag, Calendar } from 'lucide-react';
import thinkIndiaLogo from '../assets/think-india1.png';
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  tags: string[];
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: 'How IIT Roorkee Students Are Shaping National Policy',
    author: 'Amit Sharma',
    date: 'April 20, 2026',
    readTime: '5 min read',
    // CHANGE THIS LINE: Remove quotes and use the imported variable
    image: thinkIndiaLogo, 
    excerpt: 'Think India members are increasingly finding their voices in national policy discussions, contributing to real change.',
    content: 'Over the past year, Think India IIT Roorkee members have been actively participating in national policy forums, submitting white papers, and collaborating with government bodies to shape the future of India.',
    category: 'Policy',
    categoryColor: 'bg-orange-500',
    tags: ['Policy', 'Leadership', 'IIT Roorkee'],
  },
  {
    id: 2,
    title: 'The Rise of Deep Tech Startups from IIT Campuses',
    author: 'Priya Patel',
    date: 'April 12, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&auto=format&fit=crop',
    excerpt: 'A look at how IIT campuses are becoming the epicentre of India\'s deep tech revolution and startup culture.',
    content: 'From AI-powered agriculture solutions to quantum computing startups, IIT campuses are producing some of India\'s most innovative companies. We explore the ecosystem that makes this possible.',
    category: 'Startups',
    categoryColor: 'bg-blue-500',
    tags: ['Startups', 'Deep Tech', 'Innovation'],
  },
  {
    id: 3,
    title: 'Village Outreach: Lessons Learned from the Ground',
    author: 'Rahul Kumar',
    date: 'March 30, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop',
    excerpt: 'Our volunteers share what they learned spending time in rural Uttarakhand — lessons no classroom could teach.',
    content: 'The Think India village outreach program has touched thousands of lives. But what did our volunteers learn? We spoke to 10 participants about their transformative experiences.',
    category: 'Social',
    categoryColor: 'bg-green-500',
    tags: ['Social Impact', 'Rural', 'Education'],
  },
  {
    id: 4,
    title: 'Student Leadership in the Age of AI',
    author: 'Sneha Gupta',
    date: 'March 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop',
    excerpt: 'How should student leaders adapt their skills and thinking to lead effectively in an AI-driven world?',
    content: 'AI is reshaping every industry. Student leaders must develop new competencies — not just technical skills, but the ability to think critically about technology\'s role in society.',
    category: 'Leadership',
    categoryColor: 'bg-purple-500',
    tags: ['AI', 'Leadership', 'Future'],
  },
  {
    id: 5,
    title: 'Inside the Innovation Hackathon 2026',
    author: 'Dev Team',
    date: 'March 5, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format&fit=crop',
    excerpt: 'A behind-the-scenes look at how 500+ students came together to solve India\'s biggest challenges in 48 hours.',
    content: 'The Innovation Hackathon 2026 was our biggest yet. Over 500 participants, 120 teams, and 48 hours of non-stop building. Here\'s how the winning teams approached their solutions.',
    category: 'Events',
    categoryColor: 'bg-pink-500',
    tags: ['Hackathon', 'Events', 'Innovation'],
  },
  {
    id: 6,
    title: 'Sustainable Campus: IIT Roorkee\'s Green Journey',
    author: 'Design Team',
    date: 'February 22, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&auto=format&fit=crop',
    excerpt: 'IIT Roorkee is on a mission to become India\'s greenest campus. Here is how Think India is contributing.',
    content: 'From tree-planting drives to solar energy adoption, Think India IIT Roorkee is leading campus sustainability initiatives. Our Green Campus Drive planted 1,000+ trees this year alone.',
    category: 'Environment',
    categoryColor: 'bg-teal-500',
    tags: ['Sustainability', 'Environment', 'Campus'],
  },
];

function useReveal(threshold = 0.1) {
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

export default function Blog() {
  const { ref, revealed } = useReveal();
  const [selected, setSelected] = useState<BlogPost | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll — REVERSE direction */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId: number;
    const speed = 0.45;

    container.scrollLeft = container.scrollWidth / 2;
    let pos = container.scrollWidth / 2;

    const tick = () => {
      pos -= speed;
      if (pos <= 0) pos = container.scrollWidth / 2;
      container.scrollLeft = pos;
      animId = requestAnimationFrame(tick);
    };

    const timer = setTimeout(() => { animId = requestAnimationFrame(tick); }, 1500);
    const pause  = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(tick); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, []);

  const allPosts = [...blogData, ...blogData];

  return (
    <section id="blog" className="relative py-24 overflow-hidden" ref={ref}>

      <div className="bg-orb bg-orb-3" style={{ opacity: 0.6 }} />

      <div className="relative">

        {/* Header */}
        <div className={`text-center mb-12 px-4 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 border border-purple-500/20 mb-4">
            Stories & Insights
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            From Our <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Ideas, stories, and insights from the Think India community. Click any post to read more.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-6 sm:px-10 pb-4 scrollbar-hide"
          >
          {allPosts.map((post, i) => (
            <div
              key={`${post.id}-${i}`}
              className={`event-card flex-shrink-0 w-[300px] sm:w-[360px] group transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.05 + (i % blogData.length) * 0.08}s` }}
              onClick={() => setSelected(blogData.find(e => e.id === post.id) ?? null)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold ${post.categoryColor} text-white`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-orange-400" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-400" />
                    {post.readTime}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="text-[11px] font-medium text-orange-500 flex items-center gap-1">
                    Read More <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className={`text-center mt-4 transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground">Hover to pause • Click any card to read</p>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative glass-strong rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-orange-500 transition-colors">
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-52 sm:h-64">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent rounded-t-3xl" />
              <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${selected.categoryColor} text-white`}>
                {selected.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-black mb-2">{selected.title}</h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-orange-400" /> {selected.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-blue-400" /> {selected.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-green-400" /> {selected.readTime}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{selected.content}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {selected.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-600 border border-purple-500/20">
                    <Tag className="w-2.5 h-2.5" /> {tag}
                  </span>
                ))}
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3">
                <BookOpen className="w-4 h-4" />
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}