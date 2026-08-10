import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Link } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    class: '',
    query: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', branch: '', class: '', query: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Have a question or want to get involved? Fill out the form below or reach out to us directly through our contact details.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info (Left Column) */}
            <div className="lg:col-span-2 space-y-8 animate-slide-right">
              <div className="glass p-8 rounded-3xl border border-border shadow-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <a href="mailto:tic@iitr.ac.in" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Email Us</p>
                      <p className="text-muted-foreground text-sm group-hover:text-orange-500 transition-colors">tic@iitr.ac.in</p>
                    </div>
                  </a>

                  <a href="tel:+919140154688" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Call Us</p>
                      <p className="text-muted-foreground text-sm group-hover:text-green-500 transition-colors">+91 9140154688</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Location</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Indian Institute of Technology Roorkee<br />
                        Roorkee, Uttarakhand 247667<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-border">
                  <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/thinkindia_iitr?igsh=MnBnZXA4cXRld241" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-pink-500 hover:text-white transition-colors shadow-sm">
                      <Link className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                      <Link className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-3 animate-slide-left">
              <div className="glass p-8 md:p-10 rounded-3xl border border-border shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Query</h3>
                
                {isSuccess && (
                  <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Your query has been sent successfully! We will get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="branch" className="text-sm font-medium text-foreground ml-1">Branch</label>
                      <input
                        type="text"
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Computer Science"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="class" className="text-sm font-medium text-foreground ml-1">Year / Class</label>
                      <select
                        id="class"
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm appearance-none"
                      >
                        <option value="" disabled>Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="5th Year">5th Year</option>
                        <option value="PG / PhD">PG / PhD</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="query" className="text-sm font-medium text-foreground ml-1">Your Query</label>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
