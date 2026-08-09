import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import AlternatingCard from '@/components/AlternatingCard';
import { Calendar, User, Clock } from 'lucide-react';

const blogData = [
  {
    id: 'b1',
    title: 'The Role of AI in Personalized Education',
    category: 'AI Education',
    date: 'July 12, 2026',
    readTime: '5 min read',
    author: 'Dr. Neha Sharma',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    description: 'Explore how artificial intelligence is enabling customized learning pathways for students, catering to individual strengths and weaknesses in real-time. We discuss the latest tools and their implementation in rural schools.',
  },
  {
    id: 'b2',
    title: '5 Ways Teachers Can Save Time with AI Tools',
    category: 'Teaching',
    date: 'July 05, 2026',
    readTime: '4 min read',
    author: 'Rahul Verma',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    description: 'From automated grading to lesson plan generation, discover practical applications of generative AI that can reduce administrative overhead and allow teachers to focus more on student interaction.',
  },
  {
    id: 'b3',
    title: 'Bridging the Digital Divide in EdTech',
    category: 'Community',
    date: 'June 28, 2026',
    readTime: '7 min read',
    author: 'Priya Patel',
    image: 'https://images.unsplash.com/photo-1427504494785-319ce224a180?w=800&q=80',
    description: 'As educational technology advances, how do we ensure equitable access? This article highlights community-driven initiatives that are bringing AI literacy to underserved regions across the country.',
  },
  {
    id: 'b4',
    title: 'Demystifying Machine Learning for High Schoolers',
    category: 'Technology',
    date: 'June 15, 2026',
    readTime: '6 min read',
    author: 'Anil Kumar',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    description: 'A breakdown of our recent workshop curriculum designed to explain complex machine learning concepts to teenagers using interactive, hands-on visual programming tools.',
  }
];

const categories = ['All', 'AI Education', 'Teaching', 'Technology', 'Community'];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredPosts = blogData.filter(
    (post) => filter === 'All' || post.category === filter
  );

  return (
    <div className="min-h-screen bg-background text-foreground theme-edu flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Stories, Ideas & Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our latest articles, educational insights, AI resources and stories from our community.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog List */}
          <div className="space-y-12">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <AlternatingCard
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  metadata={[
                    { icon: <Calendar className="w-4 h-4" />, text: post.date },
                    { icon: <User className="w-4 h-4" />, text: post.author },
                    { icon: <Clock className="w-4 h-4" />, text: post.readTime },
                  ]}
                  buttonText="Read More"
                  onClick={() => navigate(`/blog/${post.id}`)}
                  reverse={index % 2 !== 0}
                />
              </div>
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-[24px] border border-border/50">
                <p className="text-muted-foreground text-lg">No articles found for this category.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
