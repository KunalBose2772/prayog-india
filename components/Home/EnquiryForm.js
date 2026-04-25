"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function EnquiryForm() {
  return (
    <section className="py-10 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="flex-grow p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">Send an Enquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                  <input type="text" placeholder="Rahul Sharma" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-navy focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                  <input type="email" placeholder="rahul@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-navy focus:bg-white transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-navy focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Interested Course</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-navy focus:bg-white transition-all appearance-none">
                    <option>Industrial Robotics</option>
                    <option>AI & Machine Learning</option>
                    <option>STEM Foundation</option>
                    <option>Drone Technology</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-navy focus:bg-white transition-all resize-none"></textarea>
              </div>

              <button className="bg-navy text-white px-10 py-5 rounded-2xl font-heading font-bold hover:bg-navy/90 hover:shadow-xl transition-all flex items-center space-x-3 group">
                <span>Submit Enquiry</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="lg:w-[400px] bg-navy p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-blue-100/50 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-bold">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-blue-100/50 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-bold">info@prayogindia.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-blue-100/50 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="font-bold">123 Robotics Lane, Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-blue-100/60 text-sm">
                Follow us on social media for daily updates and student projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
