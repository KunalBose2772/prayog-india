"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  CreditCard, 
  ArrowUpRight, 
  Zap,
  RefreshCcw,
  Activity,
  Server,
  Database,
  Shield
} from "lucide-react";

export default function AdminOverview() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeEnrollments: 0,
    totalRevenue: 0,
    pendingPayments: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const cards = [
    { title: "Total Students", value: stats.totalStudents, icon: <Users size={18} />, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Programs", value: stats.activeEnrollments, icon: <BookOpen size={18} />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Total Revenue", value: `₹${(stats.totalRevenue / 1000).toFixed(1)}k`, icon: <TrendingUp size={18} />, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Pending Dues", value: stats.pendingPayments, icon: <CreditCard size={18} />, color: "text-rose-600", bg: "bg-rose-50" }
  ];

  return (
    <div className="space-y-8 font-body">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Institutional Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Operational metrics for Prayog India hubs.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={fetchStats} 
            className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-navy hover:bg-slate-50 transition-all"
            title="Refresh Stats"
          >
            <RefreshCcw size={18} className={isLoading ? "animate-spin" : ""} />
          </button>
          <button className="flex items-center space-x-2 bg-navy text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-black transition-all shadow-sm">
            <Zap size={16} className="text-primary" />
            <span>Broadcast Notice</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl ${card.bg} ${card.color}`}>
                {card.icon}
              </div>
              <span className="flex items-center text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                <ArrowUpRight size={10} className="mr-0.5" /> 12%
              </span>
            </div>
            <h3 className="text-slate-500 text-xs font-medium mb-1">{card.title}</h3>
            <p className="text-2xl font-bold text-slate-900">{card.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Growth Area */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-base font-semibold text-slate-900">Enrollment Trends</h3>
            <select className="bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium px-3 py-1.5 outline-none cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
            </select>
          </div>
          <div className="h-64 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-dashed border-slate-200">
            <Activity size={32} className="text-slate-300 mb-2" />
            <p className="text-slate-400 text-xs font-medium">Visualization interface loading...</p>
          </div>
        </div>

        {/* System Health Area */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center space-x-2 mb-8">
            <Shield size={18} className="text-navy" />
            <h3 className="text-base font-semibold text-slate-900">System Health</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Server size={16} className="text-slate-400" />
                <span className="text-xs font-medium text-slate-600">Primary Server</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full uppercase tracking-tighter">Live</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Database size={16} className="text-slate-400" />
                <span className="text-xs font-medium text-slate-600">Database Engine</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full uppercase tracking-tighter">Stable</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <RefreshCcw size={16} className="text-slate-400" />
                <span className="text-xs font-medium text-slate-600">Last Backup</span>
              </div>
              <span className="text-xs font-semibold text-navy">2h ago</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
              <span>Instance: v1.0.4-stable</span>
              <span className="hover:text-navy cursor-pointer">View Logs &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
