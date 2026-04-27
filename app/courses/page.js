"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  ArrowRight, 
  Shield, 
  Zap,
  Filter,
  Search,
  Star,
  Layers,
  Clock,
  ArrowUpRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Industrial Robotics & Automation",
    category: "Robotics",
    duration: "6 Months",
    level: "Advanced",
    price: "₹15,000",
    rating: "4.9",
    desc: "Master industrial arm controllers, PLC integration, and automated production line design.",
    image: "/assets/course1.png"
  },
  {
    id: 2,
    title: "AI & Machine Learning Foundation",
    category: "Artificial Intelligence",
    duration: "4 Months",
    level: "Intermediate",
    price: "₹25,000",
    rating: "4.8",
    desc: "Build neural networks, implement computer vision, and deploy predictive models.",
    image: "/assets/course2.png"
  },
  {
    id: 3,
    title: "Next-Gen Drone Technology",
    category: "Aviation",
    duration: "3 Months",
    level: "Beginner",
    price: "₹18,000",
    rating: "4.7",
    desc: "Learn flight dynamics, autonomous navigation, and industrial drone maintenance.",
    image: "/assets/course1.png"
  },
  {
    id: 4,
    title: "IoT & Smart Systems Design",
    category: "Electronics",
    duration: "4 Months",
    level: "Intermediate",
    price: "₹12,000",
    rating: "4.8",
    desc: "Design connected ecosystems using ESP32, Raspberry Pi, and MQTT protocols.",
    image: "/assets/course2.png"
  },
  {
    id: 5,
    title: "Cyber-Physical Security",
    category: "Robotics",
    duration: "5 Months",
    level: "Advanced",
    price: "₹30,000",
    rating: "4.9",
    desc: "Secure industrial control systems and protect robotics infrastructure from threats.",
    image: "/assets/course1.png"
  },
  {
    id: 6,
    title: "Embedded Systems Mastery",
    category: "Electronics",
    duration: "6 Months",
    level: "Advanced",
    price: "₹20,000",
    rating: "4.9",
    desc: "Deep dive into RTOS, ARM Cortex-M architecture, and firmware optimization.",
    image: "/assets/course2.png"
  },
  {
    id: 7,
    title: "Robot Operating System (ROS 2)",
    category: "Robotics",
    duration: "4 Months",
    level: "Advanced",
    price: "₹22,000",
    rating: "4.8",
    desc: "Develop scalable robotic applications using the industry-standard ROS 2 framework.",
    image: "/assets/course1.png"
  },
  {
    id: 8,
    title: "Smart City Township Program",
    category: "Township",
    duration: "1 Month",
    level: "Advanced",
    price: "₹45,000",
    rating: "5.0",
    desc: "An immersive 30-day experience building IoT-driven infrastructure in our model smart township.",
    image: "/assets/m1.png"
  },
  {
    id: 9,
    title: "Industrial Automation Residency",
    category: "Township",
    duration: "2 Weeks",
    level: "Intermediate",
    price: "₹25,000",
    rating: "4.9",
    desc: "Hands-on industrial residency focusing on full-scale production line automation and robotics.",
    image: "/assets/m2.png"
  },
  {
    id: 10,
    title: "3D Design & Prototyping",
    category: "Design",
    duration: "2 Months",
    level: "Beginner",
    price: "₹8,000",
    rating: "4.6",
    desc: "Master CAD modeling, generative design, and professional 3D printing techniques.",
    image: "/assets/course2.png"
  }
];

const categories = ["All", "Township", "Robotics", "Artificial Intelligence", "Aviation", "Electronics", "Design"];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredCourses = activeTab === "All" 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight"
            >
              Academic & <span className="text-primary">Township Programs</span>
            </motion.h1>
            <p className="text-blue-100/60 text-lg mb-10 max-w-2xl leading-relaxed">
              Explore industry-validated certifications and immersive residential programs designed to bridge the gap between academia and industrial robotics.
            </p>
            
            <div className="relative max-w-xl group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search by technology, level, or program name..." 
                className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:bg-white/10 focus:border-white/20 transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Explorer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all border ${
                    activeTab === cat 
                      ? "bg-navy text-white border-navy shadow-md" 
                      : "bg-white text-slate-500 border-slate-200 hover:border-navy hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex p-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-navy text-white shadow-sm' : 'text-slate-400 hover:text-navy'}`}
                >
                  <Layers size={18} />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-navy text-white shadow-sm' : 'text-slate-400 hover:text-navy'}`}
                >
                  <Filter size={18} />
                </button>
              </div>
              <button className="flex items-center space-x-2 px-6 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold text-xs hover:border-navy transition-all shadow-sm">
                <Filter size={16} className="text-slate-400" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Grid / List View */}
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-4 max-w-5xl mx-auto"
          }>
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex group overflow-hidden ${
                  viewMode === 'grid' ? 'flex-col rounded-2xl' : 'flex-row items-center rounded-xl p-3'
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden shrink-0 bg-slate-100 ${
                  viewMode === 'grid' ? 'h-52 w-full' : 'h-24 w-36 rounded-lg'
                }`}>
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur-sm text-navy rounded font-bold text-[9px] uppercase shadow-sm">
                      {course.category}
                    </span>
                  </div>
                </div>

                <div className={`flex flex-col flex-grow ${viewMode === 'grid' ? 'p-6' : 'px-6'}`}>
                  <div className="flex items-center space-x-2 text-[10px] font-bold text-amber-500 uppercase mb-2">
                    <Star size={12} className="fill-amber-500" />
                    <span>{course.rating} • {course.level}</span>
                  </div>
                  <h3 className={`${viewMode === 'grid' ? 'text-lg' : 'text-base'} font-bold text-slate-900 mb-2 leading-snug group-hover:text-navy transition-colors`}>
                    {course.title}
                  </h3>
                  {viewMode === 'grid' && (
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-2">
                      {course.desc}
                    </p>
                  )}
                  
                  <div className={`flex items-center justify-between ${viewMode === 'grid' ? 'pt-5 border-t border-slate-100' : ''}`}>
                    <div className="flex items-center space-x-6">
                      <div>
                        <span className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5 tracking-tight">Investment</span>
                        <span className="block text-lg font-bold text-navy">{course.price}</span>
                      </div>
                      <button className="flex items-center space-x-1.5 text-[10px] font-bold text-navy hover:text-primary transition-colors uppercase">
                        <BookOpen size={14} />
                        <span>Syllabus</span>
                      </button>
                    </div>
                    <Link href={`/register?course=${course.id}`} className="w-10 h-10 rounded-lg bg-slate-50 text-navy flex items-center justify-center hover:bg-navy hover:text-white transition-all shadow-sm">
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">ISO Certified</h4>
                <p className="text-blue-100/40 text-xs leading-relaxed">Adhering to global educational standards for industrial excellence.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Practical Labs</h4>
                <p className="text-blue-100/40 text-xs leading-relaxed">Hands-on experience with real industrial robotics and controllers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <BookOpen className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Career Support</h4>
                <p className="text-blue-100/40 text-xs leading-relaxed">Exclusive access to our alumni network and placement portal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
