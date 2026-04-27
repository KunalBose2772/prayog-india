"use client";

import { motion } from "framer-motion";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Award, 
  BookOpen, 
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faculties = [
  {
    name: "Prof. Rajesh Khanna",
    role: "Head of Robotics",
    specialty: "Industrial Automation",
    img: "/assets/t3.png",
    bio: "20+ years of industrial experience in heavy-duty robotics and automated production lines. Former consultant for global automotive giants.",
    expertise: ["Kinematics", "PLC Programming", "Industrial Safety"],
    education: "Ph.D. Robotics, IIT Bombay"
  },
  {
    name: "Dr. Ananya Roy",
    role: "AI Researcher",
    specialty: "Computer Vision",
    img: "/assets/t2.png",
    bio: "Pioneering researcher in neural networks for autonomous navigation. Leading the AI integration initiative at Prayog India.",
    expertise: ["Deep Learning", "TensorFlow", "Object Detection"],
    education: "Post-Doc AI, Stanford University"
  },
  {
    name: "Vikram Malhotra",
    role: "Drone Specialist",
    specialty: "Aerodynamics",
    img: "/assets/t1.png",
    bio: "Certified UAV pilot and aerospace engineer. Dedicated to developing high-performance drone solutions for industrial monitoring.",
    expertise: ["Aviation Design", "Flight Dynamics", "UAV Maintenance"],
    education: "M.Tech Aerospace, IISc Bangalore"
  },
  {
    name: "Sanjay Deshmukh",
    role: "Senior Mentor",
    specialty: "Embedded Systems",
    img: "/assets/m5.png",
    bio: "Expert in real-time operating systems (RTOS) and firmware development. Shaping the core electronics curriculum for modern students.",
    expertise: ["ARM Cortex", "Firmware", "RTOS Architecture"],
    education: "B.E. Electronics, Mumbai University"
  }
];

export default function FacultiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Institutional <span className="text-primary">Faculty & Mentors</span>
            </h1>
            <p className="text-blue-100/60 text-lg max-w-2xl leading-relaxed">
              Learn from industry veterans and research pioneers who are defining the future of robotics and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {faculties.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group hover:shadow-md transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Photo Column */}
                  <div className="lg:col-span-4 relative h-80 lg:h-auto overflow-hidden bg-slate-100">
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                      <div className="flex space-x-3">
                        <button className="w-10 h-10 rounded-lg bg-white text-navy flex items-center justify-center hover:bg-primary transition-all shadow-lg">
                          <Linkedin size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-lg bg-white text-navy flex items-center justify-center hover:bg-primary transition-all shadow-lg">
                          <Twitter size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-8 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-8">
                      <div>
                        <div className="flex items-center space-x-2 text-primary font-bold text-[10px] uppercase mb-2">
                          <Star size={14} />
                          <span>Expert Faculty</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-1">{f.name}</h2>
                        <p className="text-slate-500 font-medium">{f.role} — {f.specialty}</p>
                      </div>
                      <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 text-navy font-bold text-[10px] uppercase tracking-tight">
                        {f.education}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                          <Briefcase size={14} /> Professional Profile
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                          {f.bio}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                          <BookOpen size={14} /> Core Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {f.expertise.map(exp => (
                            <span key={exp} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold uppercase border border-slate-200">
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between pt-8 border-t border-slate-100">
                      <div className="flex items-center space-x-4 text-emerald-600 font-bold text-[10px] uppercase">
                        <ShieldCheck size={16} />
                        <span>Verified Instructor</span>
                      </div>
                      <button className="flex items-center space-x-2 text-navy font-bold text-xs uppercase group/btn">
                        <span>View publications</span>
                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">Technical Advisory Board</h2>
          <p className="text-blue-100/40 text-sm max-w-xl mx-auto leading-relaxed mb-12 font-medium">
            Our programs are vetted by an international board of industrial experts to ensure curriculum alignment with the latest robotics standards.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale invert">
            {/* Logos placeholder logic */}
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
