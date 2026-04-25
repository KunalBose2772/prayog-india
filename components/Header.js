"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  User, ChevronDown, Search, ShoppingCart, Menu, X
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header - Floating Transformation */}
      <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "top-4 px-4 md:px-8" : "top-0"
      }`}>
        <div className={`max-w-[1440px] mx-auto transition-all duration-500 ${
          isScrolled 
            ? "bg-[#01254d]/90 backdrop-blur-md rounded-[2rem] px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10" 
            : "bg-[#01254d]/80 backdrop-blur-sm px-4 md:px-8 py-5 border-b border-white/5"
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/assets/logo.png" 
                alt="Prayog India" 
                className={`transition-all duration-500 ${isScrolled ? "h-8 md:h-10" : "h-10 md:h-14"} object-contain`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 font-heading text-sm font-bold text-white/90">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="#gallery" className="hover:text-primary transition-colors">Workshop Gallery</Link>
              <Link href="/internship" className="hover:text-primary transition-colors">Internship Programs</Link>
              <Link href="/academic" className="hover:text-primary transition-colors">Academic Programs</Link>
            </nav>


            {/* Right Actions */}
            <div className="flex items-center space-x-6">
              <button className="text-white/80 hover:text-primary transition-colors hidden md:block">
                <Search size={20} />
              </button>
              
              <button className="relative text-white/80 hover:text-primary transition-colors hidden md:block">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-navy text-[10px] font-black h-4 w-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <Link href="/courses" className="bg-primary text-navy px-6 py-2.5 rounded-full font-heading font-bold hover:bg-white transition-all shadow-lg text-sm whitespace-nowrap">
                Enroll Now
              </Link>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-navy p-8 lg:hidden flex flex-col justify-center items-center space-y-8 text-2xl font-heading font-bold text-white">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8">
            <X size={32} />
          </button>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">About</Link>
          <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Workshop Gallery</Link>
          <Link href="/internship" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Internship Programs</Link>
          <Link href="/academic" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Academic Programs</Link>
          <Link href="/enroll" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-navy px-8 py-3 rounded-full text-lg">Enroll Now</Link>
        </div>
      )}

    </>
  );
}
