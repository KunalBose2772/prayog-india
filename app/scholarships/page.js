"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Target, 
  Users, 
  Zap, 
  ShieldCheck, 
  FileText,
  ArrowRight,
  ChevronRight,
  Star
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const scholarshipPrograms = [
  {
    title: "Technovation Merit Grant",
    benefit: "40% Tuition Waiver",
    criteria: "Top 5% in the Technical Aptitude Test (TAT) or exceptional hardware project portfolio.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Women in Robotics Initiative",
    benefit: "25% Fixed Waiver",
    criteria: "Exclusively for female engineering students to encourage diversity in industrial automation.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Regional Excellence Award",
    benefit: "₹10,000 Direct Stipend",
    criteria: "For students from Tier 2/3 cities demonstrating high proficiency in embedded systems.",
    icon: <Zap className="w-6 h-6" />
  }
];

export default function ScholarshipPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Institutional <span className="text-primary">Scholarships</span>
            </h1>
            <p className="text-blue-100/60 text-lg md:text-xl leading-relaxed">
              We believe technical talent should never be limited by financial barriers. Our scholarship ecosystem rewards innovation and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {scholarshipPrograms.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 text-navy flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6">
                  {s.benefit}
                </span>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {s.criteria}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">How to Apply?</h2>
              <div className="space-y-10">
                {[
                  { step: "Step 01", title: "Initialize Enrollment", desc: "Select 'Apply for Scholarship' during your initial portal registration." },
                  { step: "Step 02", title: "Technical Assessment", desc: "Complete the online technical evaluation or submit your GitHub/Project portfolio." },
                  { step: "Step 03", title: "Panel Verification", desc: "Shortlisted candidates undergo a brief virtual synchronization with our faculty." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest mt-1 shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <ShieldCheck className="absolute top-4 right-4 text-primary opacity-10" size={60} />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Required Documentation</h3>
              <ul className="space-y-5 mb-10">
                {[
                  "Recent Academic Transcripts",
                  "Institutional Identity Proof",
                  "Project Portfolio (PDF/GitHub)",
                  "Statement of Purpose (300 Words)"
                ].map(doc => (
                  <li key={doc} className="flex items-center space-x-3 text-blue-100/60 text-sm font-medium">
                    <FileText size={16} className="text-primary" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                <span>Contact Scholarship Cell</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Target size={40} className="mx-auto text-primary mb-8" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Reward Your Technical Ambition</h2>
          <p className="text-slate-500 text-base mb-10 leading-relaxed font-medium">
            Over ₹50 Lakhs in academic grants are distributed annually to support the next generation of robotics innovators.
          </p>
          <Link href="/register" className="inline-flex items-center justify-center space-x-3 bg-navy text-white px-12 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-navy/10 hover:bg-black transition-all">
            <span>Apply Now</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
