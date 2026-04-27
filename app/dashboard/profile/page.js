"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Camera, 
  Lock,
  Bell,
  MapPin,
  Calendar,
  Save,
  Shield
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "General details", icon: <User size={16} /> },
    { id: "security", label: "Login & Security", icon: <Shield size={16} /> },
    { id: "notifications", label: "Preferences", icon: <Bell size={16} /> }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 font-body">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-sm">
              <img src="/assets/t1.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-navy text-white rounded-lg shadow-lg hover:bg-black transition-all">
              <Camera size={14} />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Rahul Sharma</h1>
            <p className="text-slate-500 text-sm mt-1">Student ID: PR-10294 | Enrollment: 2026</p>
            <div className="flex items-center space-x-3 mt-3">
              <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase border border-emerald-100">Verified identity</span>
              <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase border border-blue-100">Active scholar</span>
            </div>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-navy text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-black transition-all shadow-sm">
          <Save size={16} />
          <span>Save changes</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 border-b border-slate-200 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 text-sm font-semibold transition-all relative ${
              activeTab === tab.id ? "text-navy" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "personal" && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 space-y-10"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 ml-1">Legal name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="text" defaultValue="Rahul Sharma" className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-navy focus:bg-white transition-all text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 ml-1">Official email</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="email" defaultValue="rahul@prayogindia.in" disabled className="w-full pl-11 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-lg outline-none text-slate-400 text-sm font-medium cursor-not-allowed" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 ml-1">Contact number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="tel" defaultValue="+91 98765 43210" className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-navy focus:bg-white transition-all text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 ml-1">Date of birth</label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="date" defaultValue="2004-05-15" className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-navy focus:bg-white transition-all text-sm font-medium" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 ml-1">Permanent mailing address</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
                  <textarea rows={3} defaultValue="Plot 42, Science Park, Mumbai, MH - 400001" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-navy focus:bg-white transition-all text-sm font-medium resize-none"></textarea>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 space-y-8"
            >
              <div className="flex items-center justify-between p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-navy shadow-sm">
                    <Lock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Security password</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Last updated 12 days ago</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-navy hover:underline">Change</button>
              </div>

              <div className="flex items-center justify-between p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-emerald-600 shadow-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">2FA verification</h4>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase">Active & Secure</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-rose-500 hover:underline">Disable</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
