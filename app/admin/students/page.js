"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  Calendar,
  ChevronRight,
  UserCheck,
  ShieldAlert,
  ArrowUpDown
} from "lucide-react";

export default function StudentsAdmin() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("/api/admin/students");
      const data = await res.json();
      if (data.success) {
        setStudents(data.students);
      }
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 font-body">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Student Directory</h1>
          <p className="text-slate-500 text-sm mt-1">Manage institutional enrollments and academic records.</p>
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search records..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-navy focus:ring-1 focus:ring-navy/5 transition-all text-xs font-medium w-full md:w-64"
            />
          </div>
          <button className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-all flex-shrink-0">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500">
                  <div className="flex items-center space-x-1 cursor-pointer hover:text-navy transition-colors">
                    <span>Student Profile</span>
                    <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500">Contact Details</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 text-center">Enrollment Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 text-center">Account Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-24 text-center">
                    <div className="w-8 h-8 border-2 border-slate-200 border-t-navy rounded-full animate-spin mx-auto" />
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-24 text-center">
                    <Users size={32} className="text-slate-200 mx-auto mb-3" />
                    <p className="text-slate-400 font-medium text-sm italic">No student records match your search criteria.</p>
                  </td>
                </tr>
              ) : filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center text-white font-bold text-xs shadow-sm">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{student.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">ID: PR-{10000 + student.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-slate-600">
                        <Mail size={12} className="text-slate-400" />
                        <span className="text-[11px] font-medium">{student.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600">
                        <Phone size={12} className="text-slate-400" />
                        <span className="text-[11px] font-medium">{student.phone || "No contact"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center space-x-1.5 text-slate-500">
                      <Calendar size={12} className="text-slate-400" />
                      <span className="text-[11px] font-medium">{new Date(student.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      student.role === "admin" 
                        ? "bg-amber-50 text-amber-700 border-amber-100" 
                        : "bg-emerald-50 text-emerald-700 border-emerald-100"
                    }`}>
                      {student.role === "admin" ? "Staff" : "Active Student"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-navy transition-all" title="View Details">
                        <ChevronRight size={18} />
                      </button>
                      <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-2 gap-4">
        <p className="text-xs font-medium text-slate-500">Showing {filteredStudents.length} of {students.length} active records</p>
        <div className="flex items-center space-x-1.5">
          <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-400 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed" disabled>Previous</button>
          <button className="w-8 h-8 rounded-lg bg-navy text-white text-[11px] font-bold shadow-sm">1</button>
          <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-400 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed" disabled>Next</button>
        </div>
      </div>
    </div>
  );
}
