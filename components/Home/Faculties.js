"use client";

import { motion } from "framer-motion";


const faculties = [
  {
    name: "Prof. Rajesh Khanna",
    role: "Head of Robotics",
    specialty: "Industrial Automation",
    img: "/assets/t3.png",
    bio: "20+ years of industrial experience in heavy-duty robotics."
  },
  {
    name: "Dr. Ananya Roy",
    role: "AI Researcher",
    specialty: "Computer Vision",
    img: "/assets/t2.png",
    bio: "Ph.D. in Computer Vision with focus on autonomous navigation."
  },
  {
    name: "Vikram Malhotra",
    role: "Drone Specialist",
    specialty: "Aerodynamics",
    img: "/assets/t1.png",
    bio: "Certified UAV pilot and designer for defense aerospace."
  },
  {
    name: "Sanjay Deshmukh",
    role: "Senior Mentor",
    specialty: "Embedded Systems",
    img: "/assets/m5.png",
    bio: "Expert in real-time operating systems and microcontroller logic."
  }
];

export default function Faculties() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-navy font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4"
          >
            Institutional Leadership
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-6xl font-heading font-black text-slate-900 leading-tight"
          >
            Meet Our <span className="text-navy">Expert Faculty</span>
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {faculties.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
                {/* Background Pattern on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFC107 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={f.img} 
                    alt={f.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                  />
                  
                  {/* Social Quick Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-navy hover:bg-primary transition-all shadow-xl">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-navy hover:bg-primary transition-all shadow-xl">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </button>
                  </div>
                </div>


                {/* Content Section */}
                <div className="p-4 md:p-8 text-center bg-white border-t border-slate-50">
                  <h3 className="text-sm md:text-xl font-heading font-black text-slate-900 mb-1 group-hover:text-navy transition-colors">
                    {f.name}
                  </h3>
                  <p className="text-[10px] md:text-sm text-primary font-bold uppercase tracking-widest mb-3">
                    {f.role}
                  </p>
                  <div className="hidden md:block w-8 h-0.5 bg-slate-100 mx-auto mb-4 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                  <p className="hidden md:block text-xs text-slate-400 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {f.bio}
                  </p>
                </div>
              </div>

              {/* Float-out Name Overlay (Desktop) */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary flex items-center justify-center rounded-2xl rotate-12 -z-10 group-hover:rotate-0 transition-transform duration-500 shadow-xl opacity-0 lg:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
