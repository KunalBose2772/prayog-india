"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Building2, 
  CheckCircle2, 
  Globe, 
  Award,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const placementStats = [
  { label: "Placement Rate", value: "94%", desc: "Of our certified students get hired within 6 months." },
  { label: "Avg CTC", value: "₹6.5 LPA", desc: "For entry-level industrial robotics roles." },
  { label: "Global Network", value: "50+", desc: "Industrial partners and research laboratories." },
  { label: "Highest Package", value: "₹18 LPA", desc: "For Advanced AI & Robotics specialization." }
];

const partners = [
  "ABB Robotics", "KUKA", "Fanuc", "Yaskawa", "Tesla", "DRDO", "ISRO", "Tata Motors", "Reliance Industries"
];

const alumni = [
  {
    name: "Amitabh Singh",
    role: "Robotics Engineer",
    company: "ABB India",
    img: "/assets/t1.png",
    story: "Prayog India's hands-on lab sessions were the key to clearing my technical rounds at ABB."
  },
  {
    name: "Neha Kapoor",
    role: "AI Developer",
    company: "Tata Consultancy Services",
    img: "/assets/t2.png",
    story: "The Computer Vision specialization helped me transition from general software to elite AI roles."
  },
  {
    name: "Rohan Varma",
    role: "UAV Designer",
    company: "IdeaForge",
    img: "/assets/t3.png",
    story: "The internship residency at the Mumbai hub gave me the real-world experience I needed for aerospace."
  }
];

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Careers & <span className="text-primary">Global Placements</span>
            </h1>
            <p className="text-blue-100/60 text-lg md:text-xl leading-relaxed">
              Bridging the gap between technical mastery and industrial deployment. Our alumni work at the world's most innovative engineering hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center"
              >
                <span className="block text-3xl font-bold text-navy mb-2 tracking-tight">{stat.value}</span>
                <span className="block text-xs font-bold text-primary uppercase tracking-widest mb-4">{stat.label}</span>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Our Alumni are Building the Future</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">Hear from our graduates who successfully transitioned from students to industry leaders.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {alumni.map((a, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white shadow-md">
                    <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{a.name}</h4>
                    <p className="text-xs text-primary font-bold uppercase tracking-tight">{a.role}</p>
                    <div className="flex items-center space-x-1 text-slate-400 text-[10px] mt-1 font-bold">
                      <Building2 size={10} />
                      <span>{a.company}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed italic font-medium">
                  "{a.story}"
                </p>
                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Verified Placement</span>
                  </div>
                  <Link href="/stories" className="text-navy font-bold text-[10px] uppercase hover:text-primary transition-all">
                    Full Case Study
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Elite Hiring Partners</h2>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Our corporate relations team works directly with global industrial giants to ensure our curriculum produces the most sought-after engineers in India.</p>
            </div>
            <Link href="/register" className="bg-navy text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg flex items-center space-x-3">
              <span>Recruit from Prayog</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm group">
                <span className="text-sm font-bold text-slate-400 group-hover:text-navy transition-colors">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Career Acceleration Ecosystem</h2>
              <div className="space-y-6">
                {[
                  { title: "Mock Technical Panels", desc: "Simulated industrial interviews with robotics veterans." },
                  { title: "Digital Portfolio Building", desc: "Showcasing your lab projects to global recruiters." },
                  { title: "LinkedIn & Resume Sync", desc: "Institutional support to optimize your professional presence." },
                  { title: "Direct Industrial Referrals", desc: "Access to our internal network of partner HRs." }
                ].map((service, i) => (
                  <div key={i} className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 text-navy flex items-center justify-center shrink-0">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{service.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-navy rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                <Globe className="absolute top-4 right-4 text-primary opacity-10" size={80} />
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready for Deployment?</h3>
                <p className="text-blue-100/40 text-base leading-relaxed mb-10 font-medium">
                  The industrial demand for certified robotics and AI engineers is at an all-time high. Initialize your professional journey today.
                </p>
                <Link href="/register" className="w-full inline-flex items-center justify-center space-x-3 bg-primary text-navy py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                  <span>Join next cohort</span>
                  <ChevronRight size={18} />
                </Link>
                <div className="mt-8 flex items-center justify-center space-x-8 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                  <div className="flex items-center gap-2"><Award size={14} /> ISO Certified</div>
                  <div className="flex items-center gap-2"><Users size={14} /> 5k+ Alumni</div>
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
