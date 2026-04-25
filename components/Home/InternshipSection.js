"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, Globe, Target } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: <Zap />, title: "Hands-on Experience", desc: "Work on real industrial robotics projects." },
  { icon: <Target />, title: "Industry Mentorship", desc: "Get guided by experts from top companies." },
  { icon: <Globe />, title: "Global Opportunities", desc: "Get placed in international robotics firms." },
  { icon: <Briefcase />, title: "Paid Internships", desc: "Earn while you learn the tech of tomorrow." }
];

export default function InternshipSection() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Join Our Team</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Internship Program <span className="text-primary">2024</span>
            </h2>
            <p className="text-blue-100/60 text-lg mb-10 leading-relaxed">
              We offer 5+ specialized internship tracks for students to gain 
              real-world experience in AI, Robotics, and IoT.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
                    <p className="text-blue-100/40 text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/internships" className="inline-block bg-primary text-navy px-10 py-4 rounded-xl font-heading font-bold hover:bg-yellow-400 transition-all">
              Apply for Internship
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5">
              <img src="/assets/course1.png" alt="Internship" className="w-full h-auto" />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <span className="block text-3xl font-black text-navy">500+</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Interns Placed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
