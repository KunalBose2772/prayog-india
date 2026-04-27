"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  QrCode, 
  Printer, 
  Download, 
  Search, 
  CheckCircle2, 
  ShieldCheck,
  CreditCard,
  FileCheck,
  User,
  ChevronRight
} from "lucide-react";

const students = [
  { id: 1, name: "Rahul Sharma", course: "Industrial Robotics", date: "24 Apr 2026", certNo: "PR-2026-001", status: "Issued" },
  { id: 2, name: "Sneha Reddy", course: "Embedded Systems", date: "10 Apr 2026", certNo: "PR-2026-002", status: "Issued" },
  { id: 3, name: "Priya Patel", course: "AI & ML Foundation", date: "-", certNo: "-", status: "Pending" },
];

export default function CertificateManagement() {
  const [activeTab, setActiveTab] = useState("Certificates");

  return (
    <div className="space-y-8 font-body">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Credentials</h1>
          <p className="text-slate-500 text-sm mt-1">Manage QR-validated certificates and official student identification.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-sm">
          <button 
            onClick={() => setActiveTab("Certificates")}
            className={`px-5 py-1.5 rounded-md font-semibold text-[11px] transition-all ${
              activeTab === "Certificates" ? "bg-white text-navy shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Certificates
          </button>
          <button 
            onClick={() => setActiveTab("ID Cards")}
            className={`px-5 py-1.5 rounded-md font-semibold text-[11px] transition-all ${
              activeTab === "ID Cards" ? "bg-white text-navy shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            ID Cards
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileCheck size={18} className="text-navy" />
                <h3 className="text-base font-semibold text-slate-900">Issuance Records</h3>
              </div>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search records..." 
                  className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:border-navy focus:bg-white transition-all w-40 md:w-56" 
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500">Student & Program</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500">Credential ID</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 text-center">Status</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {students.map((s) => (
                    <tr key={s.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900">{s.name}</span>
                          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">{s.course}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-mono font-semibold text-slate-500">{s.certNo}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border ${
                          s.status === 'Issued' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                            : 'bg-slate-50 text-slate-400 border-slate-200'
                        }`}>
                          {s.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-navy hover:bg-slate-50 transition-all shadow-sm">
                            <Download size={14} />
                          </button>
                          <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-navy hover:bg-slate-50 transition-all shadow-sm">
                            <Printer size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar / Tools */}
        <div className="space-y-6">
          {/* Document Preview Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 self-start">Digital Preview</h4>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full aspect-[1.58/1] bg-navy rounded-xl p-5 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 blur-2xl" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <img src="/assets/logo.png" className="h-5 brightness-200" alt="Logo" />
                  <div className="bg-white p-1 rounded-md">
                    <QrCode size={32} className="text-navy" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold mb-0.5">Rahul Sharma</h4>
                  <p className="text-[8px] text-primary font-bold uppercase tracking-widest mb-3">Industrial Robotics Expert | PR-2026</p>
                  <div className="flex justify-between items-end border-t border-white/10 pt-3">
                    <div>
                      <p className="text-[7px] text-white/40 uppercase tracking-tighter mb-0.5">Certified on</p>
                      <p className="text-[9px] font-bold">APR 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[7px] text-white/40 uppercase tracking-tighter mb-0.5">Verify ID</p>
                      <p className="text-[9px] font-mono font-bold">2026-X8Y1</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-full mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all border border-slate-100 text-navy gap-2 text-[10px] font-bold uppercase tracking-tight shadow-sm">
                <Printer size={16} />
                <span>Print card</span>
              </button>
              <button className="flex items-center justify-center p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all border border-slate-100 text-navy gap-2 text-[10px] font-bold uppercase tracking-tight shadow-sm">
                <Download size={16} />
                <span>Export PDF</span>
              </button>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-navy rounded-2xl p-6 text-white relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:scale-125 transition-transform duration-1000" />
            <ShieldCheck className="text-primary mb-4" size={28} />
            <h3 className="text-base font-bold mb-2">QR Integrity Engine</h3>
            <p className="text-blue-100/60 text-xs leading-relaxed mb-6">
              All credentials contain dynamic verification tokens linked to the Prayog India blockchain for tamper-proof validation.
            </p>
            <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all border border-white/10">
              Audit validation logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
