"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Target, 
  Users, 
  History, 
  Award, 
  ShieldCheck, 
  Globe,
  ArrowRight,
  Sparkles,
  Search,
  Quote
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const milestones = [
  { year: "2018", title: "Foundation", desc: "Prayog India was established with a mission to bridge the skill gap in technical education." },
  { year: "2020", title: "Global Hubs", desc: "Expanded operations to 5 major cities, launching our specialized Robotics Labs." },
  { year: "2022", title: "2k+ Students", desc: "Crossed the milestone of 2000+ certified students across India." },
  { year: "2024", title: "LMS Launch", desc: "Introduced our proprietary Learning Management System for hybrid education." },
  { year: "2026", title: "AI Integration", desc: "Pioneering AI-driven technical workshops for the next generation of engineers." }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Our Vision & <span className="text-primary">Institutional Story</span>
            </h1>
            <p className="text-blue-100/60 text-lg md:text-xl leading-relaxed font-medium">
              We are not just an education center—we are a technical ecosystem building 
              the next generation of roboticists and industrial innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img src="/assets/course1.png" alt="Institutional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-navy p-8 rounded-2xl shadow-xl text-white max-w-xs hidden md:block border-4 border-white">
                <Quote className="text-primary mb-4 opacity-50" size={24} />
                <p className="text-sm font-medium italic leading-relaxed text-blue-50">
                  "At Prayog India, we don't teach theories; we build realities through hands-on technical mastery and industrial deployment."
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-[1px] bg-primary"></div>
                <span className="text-primary font-bold text-[11px] uppercase tracking-widest">Institutional Narrative</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8 leading-tight tracking-tight">
                Empowering Minds Through <br /> Technical Excellence
              </h2>
              <div className="space-y-6 text-slate-500 leading-relaxed text-base font-medium">
                <p>
                  Founded with a singular vision to redefine technical pedagogy in India, 
                  Prayog India has grown from a specialized robotics lab to a premier institution 
                  specializing in Robotics, AI, and IoT infrastructure.
                </p>
                <p>
                  Our curriculum is curated by industry veterans and delivered through our 
                  proprietary LMS, ensuring that every student 
                  receives globally recognized, hands-on certification and deployment exposure.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-navy flex items-center justify-center border border-slate-100">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">ISO Certified</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Industry Standard</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-navy flex items-center justify-center border border-slate-100">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Elite Pedagogy</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Expert Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Our Evolution</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">Documenting our growth from a local lab to a premier national technical hub.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
              {milestones.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center lg:items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center font-bold text-xs mb-8 shadow-lg shadow-navy/10 border border-white/10">
                    {m.year}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{m.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed text-center lg:text-left font-medium">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-3xl p-10 md:p-20 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-tight tracking-tight">
                  Guided by <span className="text-primary">Absolute Values</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Globe className="text-primary" size={20} />
                    </div>
                    <h4 className="text-lg font-bold">Global Perspective</h4>
                    <p className="text-blue-100/40 text-xs leading-relaxed font-medium">Developing technical solutions that align with international industrial standards.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Users className="text-primary" size={20} />
                    </div>
                    <h4 className="text-lg font-bold">Community-Driven</h4>
                    <p className="text-blue-100/40 text-xs leading-relaxed font-medium">Building an active network of 5000+ alumni supporting peer innovation.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold mb-4 tracking-tight">Our Core Mission</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed mb-8 font-medium">
                    To democratize access to high-end industrial training and create a technical 
                    ecosystem where every engineer has the practical tools to build the future.
                  </p>
                  <Link href="/courses" className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest group">
                    <span>Explore programs</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
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
