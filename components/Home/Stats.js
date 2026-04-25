"use client";

import { Users, BookOpen, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: <Users size={24} />, value: "5000", suffix: "+", label: "Students Trained" },
  { icon: <BookOpen size={24} />, value: "50", suffix: "+", label: "Courses & Programs" },
  { icon: <Award size={24} />, value: "120", suffix: "+", label: "Awards Won" },
  { icon: <Briefcase size={24} />, value: "30", suffix: "+", label: "Corporate Partners" }
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden text-white">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/indian-hero.png" 
          alt="Background" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-[1px]" />
      </div>
      
      {/* Premium Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-700 overflow-hidden"
            >
              {/* Glassmorphic Shine Effect */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent -translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 relative">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-2xl group-hover:bg-primary group-hover:text-secondary transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-heading font-black tracking-tighter text-white">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>

                <div className="w-12 h-1 bg-primary/30 rounded-full mb-6 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                
                <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em] leading-relaxed">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Accent Ring */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all duration-700 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}


