"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  FileText,
  Award,
  ShieldCheck,
  Timer,
  ChevronLeft
} from "lucide-react";

const availableExams = [
  { id: 1, title: "Robotics Kinematics Mid-Term", course: "Industrial Robotics", questions: 25, duration: "45 Mins", type: "Objective", difficulty: "Intermediate" },
  { id: 2, title: "AI Foundation Ethics Review", course: "AI & ML", questions: 10, duration: "30 Mins", type: "Subjective", difficulty: "Advanced" }
];

export default function ExamsPage() {
  const [activeExam, setActiveExam] = useState(null);
  const [timeLeft, setTimeLeft] = useState(2700); // 45 mins

  return (
    <div className="max-w-4xl mx-auto space-y-8 font-body pb-10">
      <AnimatePresence mode="wait">
        {!activeExam ? (
          <motion.div key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Assessments</h1>
              <p className="text-slate-500 text-sm mt-1">Timed examinations for institutional qualification and certification.</p>
            </div>

            <div className="space-y-4">
              {availableExams.map((exam) => (
                <div key={exam.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center space-x-5 w-full md:w-auto">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 text-navy flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-navy group-hover:text-white transition-all shadow-sm">
                        <FileText size={20} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-0.5 block">{exam.course}</span>
                        <h3 className="text-base font-bold text-slate-900 leading-tight">{exam.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-[10px] font-semibold text-slate-400 uppercase">
                          <span className="flex items-center gap-1.5"><Clock size={12} /> {exam.duration}</span>
                          <span className="flex items-center gap-1.5"><Zap size={12} /> {exam.type}</span>
                          <span className="flex items-center gap-1.5"><Award size={12} /> {exam.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveExam(exam)}
                      className="w-full md:w-auto bg-navy text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide hover:bg-black transition-all shadow-sm"
                    >
                      Start exam
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
              <ShieldCheck className="text-navy shrink-0" size={20} />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Academic Integrity Policy</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                  These assessments are strictly proctored. Ensure you have a stable connection. 
                  Switching tabs or using external resources will result in immediate disqualification.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="exam" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            {/* Exam Interface Header */}
            <div className="bg-navy rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div>
                  <h2 className="text-xl font-bold mb-1">{activeExam.title}</h2>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{activeExam.course} • Batch RB-2026</p>
                </div>
                <div className="bg-white/10 px-5 py-2.5 rounded-xl border border-white/10 backdrop-blur-md flex items-center gap-3">
                  <Timer size={20} className="text-primary" />
                  <div className="text-right">
                    <span className="block text-[9px] font-bold uppercase text-white/50 tracking-tighter">Remaining</span>
                    <span className="block text-lg font-bold text-white tabular-nums">44:59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm">
              <div className="mb-10">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">Item 01 of 25</span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight md:text-2xl">
                  Which coordinate system is primarily used for defining the end-effector position in a 6-DOF industrial robotic arm?
                </h3>
              </div>

              <div className="space-y-3">
                {["Cartesian (World) Frame", "Joint Space (Theta)", "Cylindrical Coordinates", "Spherical Mapping"].map((opt, i) => (
                  <button key={i} className="w-full text-left p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-navy hover:bg-white transition-all group flex items-center justify-between shadow-sm">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-navy transition-colors">{opt}</span>
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-navy transition-all" />
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-slate-100 gap-6">
                <button onClick={() => setActiveExam(null)} className="text-slate-400 font-bold text-xs uppercase hover:text-rose-600 transition-colors flex items-center gap-2">
                  <ChevronLeft size={14} />
                  <span>Quit assessment</span>
                </button>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg border border-slate-200 text-slate-500 font-bold text-xs uppercase">Previous</button>
                  <button className="flex-1 sm:flex-none bg-navy text-white px-8 py-2.5 rounded-lg font-bold text-xs uppercase shadow-sm hover:bg-black transition-all">Next question</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
