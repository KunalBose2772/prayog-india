"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: "01",
    title: "Revolutionizing Robotics",
    subtitle: "NEXT-GEN AUTOMATION",
    description: "Experience the pinnacle of industrial robotics with hands-on training on state-of-the-art FANUC & KUKA systems.",
    image: "/assets/hero-indian-2.png",
    accent: "#FFC107"
  },
  {
    id: "02",
    title: "Master AI Intelligence",
    subtitle: "COGNITIVE SYSTEMS",
    description: "Bridge the gap between hardware and intelligence. Build advanced neural networks for autonomous systems.",
    image: "/assets/indian-hero.png",
    accent: "#FFC107"
  },
  {
    id: "03",
    title: "STEM For Future Leaders",
    subtitle: "EARLY INNOVATION",
    description: "Nurturing the next generation of engineers with specialized modules in drone tech and embedded electronics.",
    image: "/assets/about-img.png",
    accent: "#FFC107"
  }

];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden bg-navy">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-[#05070D]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center"
        >
          {/* Big Vertical ID - Subtle */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.05 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-10 bottom-10 hidden xl:block text-[200px] font-heading font-black text-white leading-none pointer-events-none select-none"
          >
            {slides[current].id}
          </motion.div>

          {/* Left Content Side */}
          <div className="relative z-10 w-full lg:w-1/2 h-full flex flex-col justify-center px-4 md:px-10 lg:pl-20 xl:pl-32">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h4 className="flex items-center space-x-3 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span>{slides[current].subtitle}</span>
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-blue-100/60 text-base md:text-lg max-w-md mb-10 leading-relaxed">
                {slides[current].description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/courses" className="group relative bg-primary text-navy px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-widest overflow-hidden transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
                  <span className="relative z-10">Explore Track</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                
                <button className="flex items-center space-x-4 group text-white hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-all">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">Watch Intro</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Image Side */}
          <div className="relative z-10 w-full lg:w-1/2 h-full flex items-center justify-center p-4 md:p-8 lg:p-12">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative w-full h-[60%] lg:h-[75%] max-w-xl"
            >
              <div className="absolute -inset-2 border border-white/5 rounded-[2rem] -z-10"></div>
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={slides[current].image} 
                  alt={slides[current].title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Floating Badge - Responsive */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 border-l-4 border-primary"
              >
                <div className="text-navy text-[10px] font-bold uppercase tracking-widest mb-1">Hands-on Learning</div>
                <div className="text-slate-900 text-lg md:text-xl font-heading font-bold">Industrial Lab</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Scaled Down */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 flex items-center space-x-3">
        <div className="flex space-x-1.5 mr-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                current === i ? "w-8 bg-primary" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button 
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-navy flex items-center justify-center hover:bg-white transition-all shadow-lg shadow-primary/10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
