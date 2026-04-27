"use client";

import { motion } from "framer-motion";
import { 
  Calendar as CalIcon, 
  Clock, 
  MapPin, 
  User, 
  CheckCircle2, 
  Zap, 
  Video,
  ChevronRight
} from "lucide-react";

const schedule = [
  { day: "Monday", topic: "Introduction to 6-Axis Motion", time: "10:00 AM - 12:00 PM", mentor: "Dr. Arun V.", type: "Offline Lab", status: "completed" },
  { day: "Wednesday", topic: "Inverse Kinematics Workshop", time: "02:00 PM - 04:00 PM", mentor: "Dr. Arun V.", type: "Online Session", status: "upcoming" },
  { day: "Friday", topic: "Safety Protocols & E-Stop Logic", time: "10:00 AM - 12:00 PM", mentor: "Eng. Sarah K.", type: "Offline Lab", status: "upcoming" }
];

export default function SchedulePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 font-body pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Timeline & Schedule</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your upcoming academic sessions and lab workshops.</p>
        </div>
        <button className="flex items-center space-x-2 bg-navy text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-black transition-all shadow-sm">
          <CalIcon size={16} />
          <span>Sync to calendar</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column: Batch Context */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-navy rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl" />
            <h3 className="text-lg font-bold mb-6">Program context</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Active Batch</span>
                <span className="font-semibold text-sm">RB-2026-A1</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Attendance</span>
                <span className="font-semibold text-sm text-emerald-400">92%</span>
              </div>
            </div>
            
            <div className="mt-8 bg-white/10 rounded-xl p-5 border border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary text-navy flex items-center justify-center">
                  <Zap size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold">Next session</h4>
                  <p className="text-[10px] text-white/40 font-semibold uppercase">Starts in 4h 12m</p>
                </div>
              </div>
              <p className="text-[10px] text-white/60 leading-relaxed mb-4 font-medium italic">
                "Inverse Kinematics Workshop" with Dr. Arun V.
              </p>
              <button className="w-full bg-white text-navy py-2 rounded-lg font-bold text-[10px] uppercase tracking-wide hover:bg-primary transition-all">
                Access materials
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Weekly Feed */}
        <div className="lg:col-span-8 space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[1px] before:bg-slate-200">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-12 group"
            >
              {/* Timeline Indicator */}
              <div className={`absolute left-0 top-6 w-8 h-8 -ml-4 rounded-xl border-4 border-slate-50 shadow-sm flex items-center justify-center transition-all ${
                item.status === 'completed' ? 'bg-emerald-500 text-white' : 'bg-primary text-navy'
              }`}>
                {item.status === 'completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm group-hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-500 rounded text-[9px] font-bold uppercase">{item.day}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase flex items-center gap-1.5 ${
                        item.type === 'Online Session' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {item.type === 'Online Session' ? <Video size={10} /> : <MapPin size={10} />}
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-navy transition-colors">{item.topic}</h3>
                    <div className="flex flex-wrap items-center gap-5 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                      <span className="flex items-center gap-2"><Clock size={12} className="text-slate-300" /> {item.time}</span>
                      <span className="flex items-center gap-2"><User size={12} className="text-slate-300" /> {item.mentor}</span>
                    </div>
                  </div>
                  
                  {item.status === 'upcoming' ? (
                    <button className={`px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-wide transition-all shadow-sm ${
                      item.type === 'Online Session' 
                        ? 'bg-navy text-white hover:bg-black' 
                        : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'
                    }`}>
                      {item.type === 'Online Session' ? 'Join session' : 'Lab access'}
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2 text-emerald-600 font-bold text-[10px] uppercase">
                      <CheckCircle2 size={16} />
                      <span>Logged</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
