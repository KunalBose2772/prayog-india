"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  User,
  Share2,
  Heart,
  TrendingUp,
  Bookmark,
  ChevronLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stories = [
  {
    id: 1,
    title: "Revolutionizing Local Manufacturing with Robotics",
    author: "Dr. Arun Varma",
    date: "12 April 2026",
    location: "Mumbai",
    category: "Industrial Case Study",
    excerpt: "How a 3-day intensive workshop transformed a traditional assembly line into a partially automated system using 6-axis industrial arms.",
    hasVideo: true,
    likes: "1.2k",
    reads: "15 min"
  },
  {
    id: 2,
    title: "AI Seminars for Undergraduate Engineering",
    author: "Prof. Sarah Chen",
    date: "05 April 2026",
    location: "Bangalore",
    category: "Academic Seminar",
    excerpt: "An exploration into the curriculum-building capabilities of generative AI in Tier-2 engineering colleges across India.",
    hasVideo: false,
    likes: "850",
    reads: "12 min"
  },
  {
    id: 3,
    title: "Autonomous Drone Surveying in Urban Planning",
    author: "Vikram Malhotra",
    date: "28 March 2026",
    location: "Pune",
    category: "Workshop Success",
    excerpt: "Students successfully mapped a 50-acre industrial park using custom-built drones during our Advanced Aviation weekend.",
    hasVideo: true,
    likes: "2.1k",
    reads: "18 min"
  },
  {
    id: 4,
    title: "IoT Systems for Sustainable Agriculture",
    author: "Ananya Rao",
    date: "20 March 2026",
    location: "Nashik",
    category: "Social Impact",
    excerpt: "Deploying low-cost sensor arrays to monitor soil moisture and automate irrigation systems in cooperative farming blocks.",
    hasVideo: false,
    likes: "3.4k",
    reads: "22 min"
  }
];

export default function WorkshopStoriesPage() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;
    setIsSubscribing(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        alert("Subscribed Successfully!");
        setEmail("");
      }
    } catch (error) {
      alert("Subscription failed.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Workshop <span className="text-primary">Narratives</span>
            </h1>
            <p className="text-blue-100/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Witness the industrial impact of our technical outreach through 100+ documented success stories from laboratories to assembly lines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Feed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Feed */}
            <div className="lg:col-span-8 space-y-16">
              {stories.map((story, i) => (
                <motion.article 
                  key={story.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8 shadow-lg border border-slate-200">
                    <img 
                      src={`/assets/course${(story.id % 2) + 1}.png`} 
                      alt={story.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {story.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-primary text-navy flex items-center justify-center shadow-xl shadow-primary/20 hover:scale-110 transition-all">
                          <Play size={28} className="fill-current ml-1" />
                        </button>
                      </div>
                    )}

                    <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden shadow-md">
                          <img src="/assets/t1.png" alt="Author" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">{story.author}</p>
                          <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest mt-0.5">Lead Instructor</p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center space-x-6 text-white/50 text-[10px] font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5"><MapPin size={12} /> {story.location}</span>
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {story.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-3xl">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-navy border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-tight mb-4">
                      {story.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 group-hover:text-navy transition-colors leading-tight tracking-tight">
                      {story.title}
                    </h2>
                    <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center space-x-8 pt-6 border-t border-slate-100">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Heart size={16} className="group-hover:text-rose-500 transition-colors" />
                        <span className="text-[11px] font-bold">{story.likes}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <TrendingUp size={16} />
                        <span className="text-[11px] font-bold uppercase tracking-tight">{story.reads} read</span>
                      </div>
                      <button className="ml-auto text-navy font-bold text-xs uppercase tracking-wider flex items-center gap-2 group/btn">
                        <span>Read investigation</span>
                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm sticky top-32">
                <h3 className="text-lg font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Insight Series</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-16 h-16 rounded-xl bg-slate-100 shrink-0 overflow-hidden border border-slate-100 shadow-sm">
                        <img src={`/assets/course${(i % 2) + 1}.png`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1 group-hover:text-navy transition-colors line-clamp-2">Industrial Automation in Rural Infrastructure</h4>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Case Part {i}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">Topic Exploration</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Robotics", "AI", "Lab Notes", "Case Study"].map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold uppercase border border-slate-100 hover:bg-navy hover:text-white hover:border-navy transition-all cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 bg-navy rounded-2xl p-6 text-white relative overflow-hidden shadow-lg border border-white/5">
                  <Bookmark className="absolute top-4 right-4 text-primary opacity-10" size={40} />
                  <h4 className="text-base font-bold mb-2">Success Digest</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-6">Stay updated with research.</p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Institutional Email" 
                      className="w-full px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-xs font-medium outline-none focus:bg-white/10" 
                    />
                    <button 
                      onClick={handleSubscribe}
                      disabled={isSubscribing}
                      className="w-full bg-primary text-navy py-2.5 rounded-lg font-bold text-xs uppercase shadow-md disabled:opacity-50"
                    >
                      {isSubscribing ? "Sycing..." : "Subscribe"}
                    </button>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
