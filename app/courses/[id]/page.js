"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Book, 
  Clock, 
  Award, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  PlayCircle,
  ArrowRight,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const courses = {
  "1": {
    title: "Industrial Robotics & Automation",
    tagline: "Master the Future of Manufacturing",
    desc: "A comprehensive certification program covering industrial arm controllers, PLC integration, and automated production line design.",
    duration: "6 Months",
    level: "Advanced",
    modules: [
      "Introduction to Robotics Kinematics",
      "PLC Programming & Logic Design",
      "Industrial Communication Protocols",
      "Computer Vision for Quality Control",
      "Collaborative Robots (Cobots) Integration"
    ],
    fee: "₹15,000",
    outcomes: ["Industrial Certification", "Job Placement Support", "Hands-on Lab Access"]
  }
};

export default function CourseDetailPage() {
  const params = useParams();
  const course = courses[params.id] || courses["1"];

  return (
    <main className="min-h-screen bg-white font-body">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/courses" className="inline-flex items-center space-x-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider mb-8">
            <ArrowLeft size={14} />
            <span>Back to programs</span>
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-white/10 rounded-lg text-primary text-[10px] font-bold uppercase border border-white/5 tracking-wider">
                {course.level} Specialization
              </span>
              <span className="text-white/20">|</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Verified Institutional Certificate</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              {course.title}
            </h1>
            <p className="text-blue-100/60 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
              {course.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-primary text-navy px-10 py-4 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all text-center">
                Enroll in program
              </Link>
              <button className="flex items-center justify-center space-x-3 bg-white/5 text-white px-10 py-4 rounded-xl border border-white/10 font-bold text-sm hover:bg-white/10 transition-all">
                <PlayCircle size={18} />
                <span>Curriculum walkthrough</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Curriculum Area */}
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-3 mb-10">
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <Book size={20} className="text-navy" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Program Syllabus</h2>
              </div>
              
              <div className="space-y-4">
                {course.modules.map((mod, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between group hover:bg-navy hover:text-white transition-all cursor-pointer border border-slate-100">
                    <div className="flex items-center space-x-6">
                      <span className="text-navy font-bold text-[11px] uppercase group-hover:text-primary transition-colors">Module {String(i + 1).padStart(2, '0')}</span>
                      <h4 className="font-semibold text-slate-900 group-hover:text-white transition-colors">{mod}</h4>
                    </div>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-white transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm sticky top-32">
                <h3 className="text-lg font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Program Analytics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider">Duration</span>
                    <span className="font-semibold text-navy">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider">Tuition Fee</span>
                    <span className="font-semibold text-navy">{course.fee}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider">Certification</span>
                    <span className="font-bold text-emerald-600">Global Standard</span>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-6">Learning Outcomes</h4>
                  <div className="space-y-4">
                    {course.outcomes.map((out, i) => (
                      <div key={i} className="flex items-start space-x-3 text-slate-600 text-sm font-medium">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/register" className="mt-10 w-full flex items-center justify-center space-x-2 bg-navy text-white py-3.5 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-lg shadow-navy/10">
                  <span>Start enrollment</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-navy relative overflow-hidden shadow-lg border border-primary/20">
                <Zap className="absolute top-4 right-4 text-navy opacity-10" size={50} />
                <h4 className="text-base font-bold mb-2">Cohort Enrollment</h4>
                <p className="text-navy/70 text-xs font-medium leading-relaxed mb-6">
                  The upcoming cohort for this specialization begins on May 1st. Limited seats available for hands-on lab sessions.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase border-t border-navy/10 pt-4">
                  <Clock size={14} />
                  <span>Next Batch: 01 May 2026</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
