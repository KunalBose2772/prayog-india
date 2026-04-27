"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Trophy, 
  Users, 
  MapPin, 
  Calendar,
  Rocket,
  Search,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const activities = [
  {
    id: 1,
    title: "National Robo-Race 2026",
    type: "Competition",
    date: "15 May 2026",
    location: "Main Campus, Mumbai",
    desc: "A high-speed obstacle course for autonomous mobile robots. Over 50 teams participating for the National Trophy.",
    image: "/assets/course1.png"
  },
  {
    id: 2,
    title: "AI & Ethics Hackathon",
    type: "Workshop",
    date: "22 May 2026",
    location: "Online / Discord",
    desc: "48-hour sprint to build AI tools that solve local community issues while adhering to strict ethical guidelines.",
    image: "/assets/course2.png"
  },
  {
    id: 3,
    title: "Drone Photography Workshop",
    type: "Field Event",
    date: "02 June 2026",
    location: "Sanjay Gandhi National Park",
    desc: "Master the art of aerial cinematography and cinematic drone movements in a real-world outdoor setting.",
    image: "/assets/course1.png"
  }
];

export default function ActivityPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Student <span className="text-primary">Life & Activity</span>
            </h1>
            <p className="text-blue-100/60 text-lg md:text-xl leading-relaxed">
              Beyond the curriculum—join a vibrant community of elite technical competitors, researchers, and hardware builders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Feed */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Academic Events</h2>
                <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-navy transition-all shadow-sm">
                  <Search size={18} />
                </button>
              </div>

              {activities.map((act, i) => (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all group overflow-hidden"
                >
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                      <div className="relative h-48 md:h-full rounded-xl overflow-hidden border border-slate-100">
                        <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-navy rounded-lg text-[9px] font-bold uppercase shadow-sm">
                            {act.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-6 text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-4">
                        <span className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-300" /> {act.date}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-300" /> {act.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-navy transition-colors">{act.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                        {act.desc}
                      </p>
                      <button className="flex items-center space-x-2 text-navy font-bold text-xs uppercase group/btn">
                        <span>Register interest</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar Metrics */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden shadow-lg border border-white/5">
                <Rocket className="absolute top-4 right-4 text-primary opacity-10" size={50} />
                <h3 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Engagement</h3>
                <div className="space-y-8">
                  <div>
                    <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1.5">Historical Events</span>
                    <span className="block text-3xl font-bold text-white tracking-tight">450+</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1.5">Institutional Clubs</span>
                    <span className="block text-3xl font-bold text-white tracking-tight">12+</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1.5">Avg Participation</span>
                    <span className="block text-3xl font-bold text-white tracking-tight">92%</span>
                  </div>
                </div>
              </div>

              {/* Clubs List */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-6 px-1">Active Guilds</h3>
                <div className="space-y-3">
                  {["Robo-Knights", "Drone Racers", "Code-X", "AI Innovators"].map((club, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-xl group cursor-pointer hover:bg-navy hover:text-white transition-all">
                      <div className="flex items-center space-x-3">
                        <Sparkles size={16} className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-tight">{club}</span>
                      </div>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
