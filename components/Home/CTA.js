"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#01254d] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Your <span className="text-primary">Robotics Journey?</span>
            </h2>
            <p className="text-blue-100/70 text-lg mb-10 leading-relaxed">
              Join thousands of students who are already building the future. 
              Get started today with our free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/register" 
                className="bg-primary text-navy px-10 py-4 rounded-xl font-heading font-bold hover:bg-yellow-400 transition-all w-full sm:w-auto"
              >
                Enroll Now
              </Link>
              <Link 
                href="/contact" 
                className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-heading font-bold hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
