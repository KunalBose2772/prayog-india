"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Search,
  CheckCircle2,
  Calendar,
  Zap,
  Bookmark,
  Shield
} from "lucide-react";

const certificates = [
  { id: 1, title: "Industrial Robotics Foundation", date: "Jan 2026", grade: "A+", verifyId: "PR-RB-2026-001" },
  { id: 2, title: "Embedded Systems Specialist", date: "Mar 2026", grade: "O", verifyId: "PR-ES-2026-045" }
];

export default function CertificatesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 font-body pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Institutional Credentials</h1>
          <p className="text-slate-500 text-sm mt-1">Download and manage your academic certifications and digital IDs.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input type="text" placeholder="Verify by ID..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:border-navy transition-all w-48 shadow-sm" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left - Info & Verification */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl" />
            <Award className="text-primary mb-6" size={48} />
            <h2 className="text-xl font-bold mb-4 leading-tight">Professional Recognition</h2>
            <p className="text-white/60 text-xs leading-relaxed mb-8 font-medium">
              Your achievements are validated by Prayog India's institutional ledger, ensuring global recognition for your STEM and robotics expertise.
            </p>
            
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="text-primary" size={16} />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">ISO 9001:2015 certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-primary" size={16} />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">QR-Code Verifiable</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-6">Validation Network</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <span className="text-[9px] font-bold text-slate-400 uppercase text-center">Industry Accredited</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <span className="text-[9px] font-bold text-slate-400 uppercase text-center">Global Standard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Certificate List */}
        <div className="lg:col-span-8 space-y-6">
          {certificates.length === 0 ? (
            <div className="py-24 bg-white rounded-2xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
              <Award size={48} className="text-slate-200 mb-4" />
              <h4 className="text-base font-bold text-slate-900 mb-1">No credentials found</h4>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">Complete your course assessments and verify your attendance to earn certification.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center space-x-6 w-full md:w-auto">
                      <div className="w-14 h-20 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center relative overflow-hidden group-hover:bg-navy transition-all shadow-inner">
                        <Bookmark className="text-slate-200 group-hover:text-primary transition-colors" size={32} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="text-base font-bold text-slate-900 leading-tight">{cert.title}</h3>
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[9px] font-bold uppercase border border-emerald-100">Grade {cert.grade}</span>
                        </div>
                        <div className="flex items-center gap-6 text-[10px] font-semibold text-slate-400 uppercase tracking-tight">
                          <span className="flex items-center gap-1.5"><Calendar size={12} className="text-slate-300" /> {cert.date}</span>
                          <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-slate-300" /> {cert.verifyId}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-500 font-bold text-[10px] uppercase hover:bg-slate-50 transition-all">
                        <ExternalLink size={14} />
                        <span>Verify</span>
                      </button>
                      <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-5 py-2.5 bg-navy text-white font-bold text-[10px] uppercase shadow-sm hover:bg-black transition-all">
                        <Download size={14} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-navy" size={18} />
              <p className="text-xs font-semibold text-slate-600">Request physical copies or hard-cover diploma?</p>
            </div>
            <button className="text-xs font-bold text-navy hover:underline">Contact registrar &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
