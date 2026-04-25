"use client";

import { Cpu, Rocket, Lightbulb, ShieldCheck, Microscope, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: <Cpu size={32} />,
    title: "Industrial Robotics",
    desc: "Master the art of industrial automation with hands-on training on actual robotic arms."
  },
  {
    icon: <Rocket size={32} />,
    title: "Aerospace & Drones",
    desc: "Explore the world of UAVs and aerospace engineering with our specialized flight modules."
  },
  {
    icon: <Lightbulb size={32} />,
    title: "AI & Machine Learning",
    desc: "Integrate intelligence into your machines using advanced AI algorithms and computer vision."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Cyber Security",
    desc: "Learn to protect robotic networks and industrial systems from modern digital threats."
  },
  {
    icon: <Microscope size={32} />,
    title: "STEM Research",
    desc: "Academic excellence combined with practical research methodologies for school students."
  },
  {
    icon: <Globe size={32} />,
    title: "IoT Solutions",
    desc: "Connect the world through smart devices and industrial Internet of Things architecture."
  }
];

export default function Categories() {
  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Premium Ambient Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-3">Our Specializations</h4>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Explore Course Categories</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/50 hover:shadow-[0_40px_80px_-15px_rgba(255,193,7,0.15)] transition-all duration-700 relative overflow-hidden"
            >
              {/* Premium Accent Corner */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/20 transition-all duration-700 blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[1.5rem] bg-slate-50 flex items-center justify-center text-navy mb-8 group-hover:bg-primary group-hover:text-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-slate-100">
                  {cat.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 group-hover:text-secondary transition-colors leading-tight">
                  {cat.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                  {cat.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="bg-secondary text-white px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center group/btn hover:bg-black transition-all">
                    Learn More 
                    <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="text-lg font-black text-slate-100 uppercase tracking-tighter group-hover:text-primary/20 transition-colors">
                    0{i + 1}
                  </div>
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
