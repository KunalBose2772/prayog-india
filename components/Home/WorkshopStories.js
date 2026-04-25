"use client";

import { Play, ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Revolutionizing Agriculture with Drone Tech",
    date: "12 Oct 2023",
    location: "Mumbai",
    img: "/assets/m1.png",
    hasVideo: true
  },
  {
    title: "Industrial Automation Workshop at IIT Delhi",
    date: "25 Nov 2023",
    location: "Delhi",
    img: "/assets/m2.png",
    hasVideo: false
  },
  {
    title: "Empowering 500+ Rural Students in STEM",
    date: "05 Jan 2024",
    location: "Pune",
    img: "/assets/m4.png",
    hasVideo: true
  }
];

export default function WorkshopStories() {
  return (
    <section className="py-10 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-2">Our Journey</h4>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Workshop Stories</h2>
          </div>
          <button className="bg-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy/90 transition-all flex items-center space-x-2">
            <span>View All 100+ Stories</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {story.hasVideo && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-transform cursor-pointer">
                      <Play size={24} fill="white" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-navy flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{story.date}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-slate-400 text-xs mb-3 font-bold uppercase tracking-widest">
                  <MapPin size={14} className="text-navy" />
                  <span>{story.location}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 group-hover:text-navy transition-colors">
                  {story.title}
                </h3>
                <button className="text-navy font-bold text-sm flex items-center hover:text-primary transition-colors">
                  Read Full Story <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
