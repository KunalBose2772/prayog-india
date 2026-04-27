"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard as CardIcon, 
  Search as SearchIcon, 
  ArrowUpRight as ArrowIcon, 
  Clock as ClockIcon, 
  Download as DownloadIcon,
  Mail as MailIcon,
  TrendingUp as TrendIcon,
  RefreshCcw,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function PaymentManagement() {
  const [installments, setInstallments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/payments");
      const data = await res.json();
      if (data.success) {
        setInstallments(data.installments);
      }
    } catch (error) {
      console.error("Failed to fetch payments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredData = filter === "All" 
    ? installments 
    : installments.filter(i => i.status.toLowerCase() === filter.toLowerCase());

  return (
    <div className="space-y-8 font-body">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Finance & Payments</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor revenue, track installments, and automate fee reminders.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={fetchPayments} 
            className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-navy hover:bg-slate-50 transition-all shadow-sm"
          >
            <RefreshCcw size={18} className={isLoading ? "animate-spin" : ""} />
          </button>
          <button className="flex items-center space-x-2 px-5 py-2.5 bg-navy text-white rounded-lg font-semibold text-sm hover:bg-black transition-all shadow-sm">
            <DownloadIcon size={16} />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
              <TrendIcon size={20} />
            </div>
            <span className="flex items-center text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              <ArrowIcon size={10} className="mr-0.5" /> 12.4%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">₹4,25,000</h3>
          <p className="text-slate-500 text-xs font-medium">Total collections this month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
              <ClockIcon size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-amber-600 mb-1">₹85,400</h3>
          <p className="text-slate-500 text-xs font-medium">Outstanding dues pending</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-xl bg-navy text-white shadow-sm">
              <CardIcon size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-navy mb-1">{installments.length}</h3>
          <p className="text-slate-500 text-xs font-medium">Active payment schedules</p>
        </div>
      </div>

      {/* Payment Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by student or ID..." 
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-navy focus:bg-white transition-all text-xs font-medium"
            />
          </div>
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
            {["All", "Paid", "Pending"].map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-5 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
                  filter === s ? "bg-white text-navy shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500">Student & Program</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500">Due Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 text-center">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center">
                    <RefreshCcw className="animate-spin text-navy mx-auto mb-3" size={32} />
                    <p className="text-xs font-medium text-slate-400">Syncing ledger records...</p>
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center">
                    <p className="text-slate-400 font-medium text-sm italic">No payment records found.</p>
                  </td>
                </tr>
              ) : filteredData.map((inst, i) => (
                <tr key={inst.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-navy transition-colors">{inst.student_name}</span>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">{inst.course_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">₹{inst.amount}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-500">
                      <ClockIcon size={12} className="text-slate-400" />
                      <span>{new Date(inst.due_date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2.5 py-1 rounded text-[10px] font-bold uppercase border ${
                      inst.status === 'paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                      inst.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                      'bg-rose-50 text-rose-700 border-rose-100'
                    }`}>
                      {inst.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-navy hover:bg-slate-50 transition-all shadow-sm">
                        <MailIcon size={14} />
                      </button>
                      <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-navy hover:bg-slate-50 transition-all shadow-sm">
                        <DownloadIcon size={14} />
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
  );
}
