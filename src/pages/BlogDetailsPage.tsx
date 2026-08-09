
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

export default function BlogDetailsPage() {
  // const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder blog data
  const post = {
    title: 'The Role of AI in Personalized Education',
    category: 'AI Education',
    date: 'July 12, 2026',
    readTime: '5 min read',
    author: 'Dr. Neha Sharma',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
    content: [
      "Artificial intelligence is rapidly transforming the educational landscape, moving us away from a one-size-fits-all model towards personalized learning pathways. By analyzing student data in real-time, AI can identify individual strengths and weaknesses, tailoring content to meet specific needs.",
      "In our recent pilot program in rural schools, we deployed an AI-assisted tutoring system. The results were immediate. Students who previously struggled with foundational math concepts were able to receive instant, customized feedback without waiting for the teacher's attention.",
      "However, the integration of AI is not about replacing teachers. It's about empowering them. When AI handles the repetitive tasks of grading and basic concept reinforcement, teachers are freed up to focus on higher-order thinking skills, emotional support, and complex problem-solving.",
      "As we continue to explore these tools, our primary focus remains on equity. How do we ensure that AI tools are accessible to all students, regardless of their socioeconomic background? This is the core challenge our organization aims to address in the coming year."
    ],
    quote: "The integration of AI is not about replacing teachers. It's about empowering them to focus on what truly matters: human connection and higher-order thinking."
  };

  return (
    <div className="min-h-screen bg-background text-foreground theme-edu flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>

          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground border-b border-border/50 pb-8">
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {post.readTime}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full h-[400px] rounded-[24px] overflow-hidden mb-12 shadow-sm relative bg-black/80">
            <div 
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
              style={{ backgroundImage: `url(${post.image})` }}
            />
            <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-contain relative z-10" />
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-xl text-foreground font-medium mb-8">
              {post.content[0]}
            </p>
            
            <p className="mb-6">{post.content[1]}</p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-xl font-serif text-foreground bg-secondary/30 p-6 rounded-r-2xl">
              "{post.quote}"
            </blockquote>
            
            <p className="mb-6">{post.content[2]}</p>
            <p className="mb-6">{post.content[3]}</p>
          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}
