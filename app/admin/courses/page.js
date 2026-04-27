"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Plus, 
  Globe,
  Monitor,
  Settings2,
  ExternalLink,
  Tag,
  Clock
} from "lucide-react";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/admin/courses");
      const data = await res.json();
      if (data.success) {
        setCourses(data.courses);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 font-body">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Program Catalog</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and configure institutional learning programs.</p>
        </div>
        <button className="flex items-center space-x-2 bg-navy text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-black transition-all shadow-sm">
          <Plus size={18} className="text-primary" />
          <span>Add new program</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="h-72 bg-white border border-slate-100 rounded-2xl animate-pulse shadow-sm" />
          ))
        ) : courses.length === 0 ? (
          <div className="col-span-full py-20 text-center text-slate-400 font-medium text-sm border border-dashed border-slate-200 rounded-2xl bg-white shadow-sm">
            No programs active.
          </div>
        ) : courses.map((course) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all shadow-sm">
                <BookOpen size={20} />
              </div>
              <div className="flex space-x-1">
                <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors">
                  <Settings2 size={16} />
                </button>
                <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{course.title}</h3>
            <p className="text-slate-500 text-xs font-medium line-clamp-2 mb-6 leading-relaxed">{course.description}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Program Fee</p>
                <p className="text-sm font-bold text-navy">₹{course.price}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Duration</p>
                <p className="text-sm font-bold text-navy">{course.duration}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                {course.type === 'offline' ? <Monitor size={14} className="text-emerald-600" /> : <Globe size={14} className="text-blue-600" />}
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{course.type}</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 uppercase">Live</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
