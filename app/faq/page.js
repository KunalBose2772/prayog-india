"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Search,
  ChevronRight,
  BookOpen,
  Award,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const faqCategories = [
  { id: "admissions", title: "Admissions", icon: <BookOpen size={18} /> },
  { id: "curriculum", title: "Curriculum", icon: <Zap size={18} /> },
  { id: "certifications", title: "Certifications", icon: <Award size={18} /> },
  { id: "technical", title: "Technical Support", icon: <HelpCircle size={18} /> }
];

const faqs = [
  {
    category: "admissions",
    question: "What is the eligibility criteria for the Industrial Robotics program?",
    answer: "Our industrial programs are primarily designed for engineering students (B.E./B.Tech) and diploma holders. However, enthusiastic learners from other technical backgrounds are also welcome after a preliminary screening."
  },
  {
    category: "admissions",
    question: "How do I register for the upcoming cohort?",
    answer: "You can register directly through our institutional portal by selecting your desired program and completing the multi-step enrollment process. Early bird registrations often receive specialized lab access."
  },
  {
    category: "curriculum",
    question: "Is the training completely hands-on?",
    answer: "Yes, Prayog India prioritizes 'technical reality' over theory. 80% of our curriculum involves direct interaction with industrial arms, PLC controllers, and hardware nodes in our specialized labs."
  },
  {
    category: "curriculum",
    question: "Can I choose between online and offline modes?",
    answer: "We offer hybrid learning paths. Theoretical foundations and AI workshops can be attended virtually, while hardware-intensive sessions require presence at our regional hubs for practical experience."
  },
  {
    category: "certifications",
    question: "Are the certifications globally recognized?",
    answer: "Absolutely. Prayog India is an ISO-certified institution. Our certificates carry verifiable serial numbers and are recognized by our network of 50+ industrial partners."
  },
  {
    category: "technical",
    question: "What kind of hardware will I be working with?",
    answer: "You will have access to 6-axis industrial arms, ESP32-based IoT nodes, PLC automation racks, and high-performance UAV platforms depending on your specialization."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("admissions");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqs.filter(f => f.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Knowledge <span className="text-primary">Base & FAQ</span>
            </h1>
            <p className="text-blue-100/60 text-lg md:text-xl leading-relaxed">
              Find answers to the most frequent inquiries regarding our academic protocols, industrial labs, and institutional certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Interface */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Categories */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm">
                {faqCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(0);
                    }}
                    className={`w-full flex items-center justify-between p-5 rounded-xl transition-all ${
                      activeCategory === cat.id 
                        ? "bg-navy text-white shadow-md" 
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className={activeCategory === cat.id ? "text-primary" : "text-slate-300"}>{cat.icon}</span>
                      <span className="font-bold text-xs uppercase tracking-wider">{cat.title}</span>
                    </div>
                    {activeCategory === cat.id && <ChevronRight size={18} />}
                  </button>
                ))}
              </div>

              <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden shadow-lg border border-white/5">
                <HelpCircle className="absolute top-4 right-4 text-primary opacity-10" size={40} />
                <h4 className="text-base font-bold mb-3">Still Uncertain?</h4>
                <p className="text-blue-100/40 text-[10px] font-bold uppercase tracking-widest mb-8 leading-relaxed">
                  Our academic counselors are available for a detailed institutional walkthrough.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="w-full inline-flex items-center justify-center space-x-2 bg-primary text-navy py-3 rounded-lg font-bold text-[10px] uppercase shadow-md">
                    <MessageCircle size={14} />
                    <span>Live Chat Sync</span>
                  </Link>
                  <a href="tel:+917033066338" className="w-full inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 text-white py-3 rounded-lg font-bold text-[10px] uppercase hover:bg-white/10 transition-all">
                    <Phone size={14} />
                    <span>Direct Hotline</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Questions Feed */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm">
                {filteredFaqs.map((faq, i) => (
                  <div key={i} className={`border-b last:border-none border-slate-100 transition-all ${openIndex === i ? "bg-slate-50/50 rounded-xl" : ""}`}>
                    <button 
                      onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                      className="w-full flex items-center justify-between p-6 text-left group"
                    >
                      <h3 className={`text-base font-bold transition-colors ${openIndex === i ? "text-navy" : "text-slate-700 group-hover:text-navy"}`}>
                        {faq.question}
                      </h3>
                      <div className={`p-1.5 rounded-lg transition-all ${openIndex === i ? "bg-navy text-white" : "bg-slate-100 text-slate-400"}`}>
                        {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-8 text-slate-500 text-sm leading-relaxed font-medium">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Search Trigger */}
              <div className="mt-12 p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-400">
                    <Search size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Need a deep dive?</h4>
                    <p className="text-xs text-slate-400 font-medium">Search our entire institutional knowledge base.</p>
                  </div>
                </div>
                <div className="relative w-full md:w-64">
                  <input type="text" placeholder="Search keywords..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium outline-none focus:border-navy transition-all" />
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
