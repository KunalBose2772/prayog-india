"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  FileText, 
  RefreshCcw, 
  Scale, 
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const policyTabs = [
  { id: "terms", title: "Terms of Service", icon: <FileText size={18} /> },
  { id: "privacy", title: "Privacy Policy", icon: <ShieldAlert size={18} /> },
  { id: "refund", title: "Refund Policy", icon: <RefreshCcw size={18} /> }
];

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <main className="min-h-screen bg-slate-50 font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Legal <span className="text-primary">& Protocols</span>
            </h1>
            <p className="text-blue-100/60 text-lg md:text-xl leading-relaxed">
              Transparent, professional guidelines governing our institutional ecosystem and academic engagement standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm">
                {policyTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between p-5 rounded-xl transition-all ${
                      activeTab === tab.id 
                        ? "bg-navy text-white shadow-md" 
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className={activeTab === tab.id ? "text-primary" : "text-slate-300"}>{tab.icon}</span>
                      <span className="font-bold text-xs uppercase tracking-wider">{tab.title}</span>
                    </div>
                    {activeTab === tab.id && <ChevronRight size={18} />}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-navy flex items-center justify-center border border-slate-100">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Version Control</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Updated 24 April 2026</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  These protocols are periodically audited to ensure alignment with international technical education standards and industrial safety regulations.
                </p>
              </div>
            </div>

            {/* Content Display */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm min-h-[600px]">
                {activeTab === "terms" && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Terms of Institutional Service</h2>
                    <div className="space-y-10 text-slate-600">
                      <section>
                        <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-4">01. Enrollment Protocols</h4>
                        <p className="text-sm leading-relaxed font-medium">
                          Admission to Prayog India specialization programs is subject to rigorous verification of academic credentials. The institution reserves the right to terminate enrollment in cases of fraudulent documentation.
                        </p>
                      </section>
                      <section>
                        <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-4">02. Proprietary Assets</h4>
                        <p className="text-sm leading-relaxed font-medium">
                          All course architectures, hardware designs, control algorithms, and tutorial media provided are the sole intellectual property of Prayog India. Commercial redistribution or unauthorized replication is strictly prohibited.
                        </p>
                      </section>
                      <section>
                        <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-4">03. Professional Conduct</h4>
                        <p className="text-sm leading-relaxed font-medium">
                          Absolute professional behavior is mandated in both industrial labs and virtual sessions. Any breach of institutional ethics or hardware safety protocols may result in immediate academic suspension.
                        </p>
                      </section>
                      <div className="p-6 bg-slate-50 rounded-xl flex items-start space-x-4 border border-slate-100">
                        <AlertCircle className="text-navy shrink-0 mt-0.5" size={18} />
                        <p className="text-xs font-medium italic text-slate-500 leading-relaxed">
                          Prayog India reserves the right to dynamically optimize curriculum and lab schedules based on emerging industrial robotics standards and equipment availability.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "privacy" && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Data Privacy Protocol</h2>
                    <div className="space-y-10 text-slate-600">
                      <section>
                        <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-4">Data Acquisition</h4>
                        <p className="text-sm leading-relaxed font-medium">
                          We acquire core profile data (Identity, Contact, Academic Track) to synchronize your learning pathway and generate verifiable institutional credentials.
                        </p>
                      </section>
                      <section>
                        <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-4">Attendance Verification</h4>
                        <p className="text-sm leading-relaxed font-medium">
                          Institutional attendance tracking utilizes encrypted geo-spatial and visual verification records for laboratory sessions. This data is strictly restricted to internal academic auditing.
                        </p>
                      </section>
                      <div className="p-6 bg-emerald-50 rounded-xl flex items-start space-x-4 border border-emerald-100">
                        <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                        <p className="text-xs font-medium italic text-emerald-700 leading-relaxed">
                          Student data is never transmitted to third-party marketing entities. Your privacy is a fundamental institutional pillar.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "refund" && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Financial Refund Policy</h2>
                    <div className="space-y-10 text-slate-600">
                      <section>
                        <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-4">Enrollment Withdrawal</h4>
                        <p className="text-sm leading-relaxed font-medium">
                          Withdrawal requests submitted within the first 7 days of enrollment (cooling-off period) are eligible for tuition refund, provided no proprietary assets or lab resources have been utilized.
                        </p>
                      </section>
                      <section>
                        <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] mb-4">Installment Obligations</h4>
                        <p className="text-sm leading-relaxed font-medium">
                          Enrollment is contingent upon timely installment processing. Delays exceeding 15 days in the billing cycle may result in temporary LMS suspension until account synchronization.
                        </p>
                      </section>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
