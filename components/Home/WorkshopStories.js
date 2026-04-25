"use client";

import { Play, ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Revolutionizing Agriculture with Drone Tech",
    date: "12 Oct 2026",
    location: "Mumbai",
    img: "/assets/m1.png",
    hasVideo: true
  },
  {
    title: "Industrial Automation Workshop at IIT Delhi",
    date: "25 Nov 2026",
    location: "Delhi",
    img: "/assets/m2.png",
    hasVideo: false
  },
  {
    title: "Empowering 500+ Rural Students in STEM",
    date: "05 Jan 2026",
    location: "Pune",
    img: "/assets/m4.png",
    hasVideo: true
  }
];

export default function WorkshopStories() {
  return (
    <section className="py-10 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-primary hidden md:block" />
              Our Journey
            </h4>
            <h2 className="text-2xl md:text-5xl font-heading font-black text-slate-900 leading-tight">
              Workshop <span className="text-navy">Stories</span>
            </h2>
          </div>
          <button className="bg-navy text-white px-5 md:px-8 py-2.5 md:py-4 rounded-xl font-bold text-[10px] md:text-sm hover:bg-navy/90 transition-all flex items-center space-x-2 shadow-lg shadow-navy/10 group">
            <span>View All 100+ Stories</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100"
            >
              <div className="relative h-32 md:h-60 overflow-hidden">
                <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {story.hasVideo && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-transform cursor-pointer">
                      <Play size={12} className="md:w-6 md:h-6" fill="white" />
                    </div>
                  </div>
                )}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[6px] md:text-[10px] font-bold text-navy flex items-center space-x-1">
                  <Calendar size={10} className="md:w-3 md:h-3" />
                  <span>{story.date}</span>
                </div>
              </div>
              <div className="p-3 md:p-8">
                <div className="flex items-center space-x-1 md:space-x-2 text-slate-400 text-[8px] md:text-xs mb-2 md:mb-3 font-bold uppercase tracking-widest">
                  <MapPin size={10} className="md:w-[14px] md:h-[14px] text-navy" />
                  <span>{story.location}</span>
                </div>
                <h3 className="text-[11px] md:text-xl font-heading font-bold text-slate-900 mb-3 md:mb-6 group-hover:text-navy transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <button className="text-navy font-bold text-[9px] md:text-sm flex items-center hover:text-primary transition-colors">
                  <span className="hidden xs:inline">Read Full Story</span> 
                  <span className="xs:hidden">Read More</span>
                  <ArrowRight size={12} className="ml-1 md:ml-2 md:w-4 md:h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
