"use client";

import { motion } from "framer-motion";

const faculties = [
  {
    name: "Prof. Rajesh Khanna",
    role: "Head of Robotics",
    specialty: "Industrial Automation",
    img: "/assets/t3.png"
  },
  {
    name: "Dr. Ananya Roy",
    role: "AI Researcher",
    specialty: "Computer Vision",
    img: "/assets/t2.png"
  },
  {
    name: "Vikram Malhotra",
    role: "Drone Specialist",
    specialty: "Aerodynamics",
    img: "/assets/t1.png"
  },
  {
    name: "Sanjay Deshmukh",
    role: "Senior Mentor",
    specialty: "Embedded Systems",
    img: "/assets/t3.png"
  }
];

export default function Faculties() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-2">Expert Mentors</h4>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Meet Our Faculty</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculties.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-primary transition-all duration-500 shadow-lg">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                {/* Social Overlay */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-primary hover:text-navy transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">{f.name}</h3>
              <p className="text-navy font-bold text-sm mb-2">{f.role}</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">{f.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
