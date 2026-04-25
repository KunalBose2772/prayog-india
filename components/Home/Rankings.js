"use client";

import { Award, ShieldCheck, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

const rankings = [
  { 
    rank: "01", 
    suffix: "ST", 
    label: "Ranked STEM Hub", 
    sub: "In North India Regions",
    icon: <Star className="text-primary" size={24} /> 
  },
  { 
    rank: "15", 
    suffix: "TH", 
    label: "Innovation Awards", 
    sub: "National Robotics Expo",
    icon: <Award className="text-primary" size={24} /> 
  },
  { 
    rank: "100", 
    suffix: "%", 
    label: "Hands-on Learning", 
    sub: "Practical Implementation",
    icon: <ShieldCheck className="text-primary" size={24} /> 
  },
  { 
    rank: "50", 
    suffix: "K+", 
    label: "Lives Impacted", 
    sub: "Through STEM Workshops",
    icon: <Users className="text-primary" size={24} /> 
  }
];

export default function Rankings() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {rankings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-baseline font-heading">
                  <span className="text-5xl md:text-6xl font-black text-slate-900 group-hover:text-primary transition-colors duration-500">
                    {item.rank}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-slate-400 -ml-1">
                    {item.suffix}
                  </span>
                </div>
              </div>
              <div className="h-12 w-px bg-slate-200 hidden md:block" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 font-medium italic">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
