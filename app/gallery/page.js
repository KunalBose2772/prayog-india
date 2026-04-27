"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Image as ImageIcon, 
  Maximize2, 
  ArrowUpRight,
  Camera,
  MapPin,
  Calendar,
  X,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const galleryCategories = ["All", "Robotics", "AI Workshops", "Drone Labs", "IoT Projects", "Institution"];

const galleryImages = [
  { id: 1, category: "Robotics", title: "Industrial Arm Training", location: "Mumbai Center", date: "Jan 2026" },
  { id: 2, category: "AI Workshops", title: "Neural Network Seminar", location: "Pune Hub", date: "Feb 2026" },
  { id: 3, category: "Drone Labs", title: "Flight Simulation Hub", location: "Science Park", date: "Mar 2026" },
  { id: 4, category: "IoT Projects", title: "Smart City Prototype", location: "Innovation Lab", date: "Apr 2026" },
  { id: 5, category: "Institution", title: "Campus Main Building", location: "Headquarters", date: "May 2026" },
  { id: 6, category: "Robotics", title: "Mobile Robot Assembly", location: "Assembly Line", date: "Jun 2026" },
  { id: 7, category: "AI Workshops", title: "Computer Vision Lab", location: "Delhi Tech Park", date: "Jul 2026" },
  { id: 8, category: "Drone Labs", title: "Quadcopter Calibration", location: "Testing Field", date: "Aug 2026" },
  { id: 9, category: "IoT Projects", title: "Sensor Network Array", location: "Research Wing", date: "Sep 2026" },
  { id: 10, category: "Institution", title: "Student Graduation 2025", location: "Grand Hall", date: "Dec 2025" },
  { id: 11, category: "Robotics", title: "PLC Programming Lab", location: "Industrial Wing", date: "Oct 2025" },
  { id: 12, category: "AI Workshops", title: "Deep Learning Summit", location: "Global Hub", date: "Nov 2025" }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Institutional <span className="text-primary">Media Gallery</span>
            </h1>
            <p className="text-blue-100/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Capturing moments of innovation, technical mastery, and academic life across our specialized research hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Interface */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-2 p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-lg font-semibold text-xs transition-all ${
                    activeFilter === cat 
                      ? "bg-navy text-white shadow-md" 
                      : "text-slate-500 hover:text-navy hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-5">
              <div className="text-right hidden sm:block">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-0.5">Archive density</span>
                <span className="block text-xl font-bold text-navy">2,482+ Moments</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy flex items-center justify-center border border-slate-200 shadow-sm">
                <Camera size={20} />
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={`/assets/course${(img.id % 2) + 1}.png`} 
                    alt={img.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
                    <span className="inline-block px-2 py-0.5 bg-primary text-navy rounded font-bold text-[9px] uppercase mb-2 w-fit">
                      {img.category}
                    </span>
                    <h3 className="text-white font-bold text-base leading-tight mb-2">
                      {img.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/50 text-[10px] font-bold uppercase">
                      <span className="flex items-center gap-1.5"><MapPin size={12} /> {img.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More */}
          <div className="mt-20 text-center">
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3.5 rounded-xl font-bold text-xs uppercase hover:border-navy hover:shadow-md transition-all group flex items-center mx-auto space-x-3 shadow-sm">
              <span>View high-density archive</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={28} />
            </button>
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-5xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={`/assets/course${(selectedImage.id % 2) + 1}.png`} 
                alt={selectedImage.title}
                className="max-h-[75vh] rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="mt-8 text-center max-w-2xl">
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2 block">{selectedImage.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{selectedImage.title}</h2>
                <div className="flex items-center justify-center space-x-6 text-white/40 font-bold uppercase text-[10px]">
                  <span className="flex items-center gap-2"><MapPin size={14} /> {selectedImage.location}</span>
                  <span className="flex items-center gap-2"><Calendar size={14} /> {selectedImage.date}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
