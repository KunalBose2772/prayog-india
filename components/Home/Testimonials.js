"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Industrial Engineering Student",
    text: "The hands-on training at Prayog India changed my perspective on robotics. The mentors are incredibly knowledgeable and the equipment is top-notch.",
    avatar: "/assets/t1.png"
  },
  {
    name: "Priya Patel",
    role: "School Student (Class 10)",
    text: "I loved building my first drone here! The STEM workshops are so much fun and easy to understand. I'm now planning a career in aerospace.",
    avatar: "/assets/t2.png"
  },
  {
    name: "Dr. Arvind Gupta",
    role: "Industry Consultant",
    text: "Prayog India is doing a fantastic job bridging the gap between academia and industry. Their curriculum is highly relevant to modern automation.",
    avatar: "/assets/t3.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-2">Social Proof</h4>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">What Our Students Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-navy">
                <Quote size={20} />
              </div>
              
              <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>

              <p className="text-slate-600 mb-8 italic leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-slate-100" />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
