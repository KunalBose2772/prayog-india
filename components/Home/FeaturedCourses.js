"use client";

import { Clock, BookOpen, Star, ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const courses = [
  {
    id: 1,
    title: "Industrial Robotics Certification",
    category: "Industrial",
    duration: "6 Months",
    lessons: "48 Lessons",
    rating: 4.9,
    price: "₹24,999",
    image: "/assets/course1.png"
  },
  {
    id: 2,
    title: "AI & Machine Learning BootCamp",
    category: "AI / ML",
    duration: "4 Months",
    lessons: "32 Lessons",
    rating: 4.8,
    price: "₹19,999",
    image: "/assets/course2.png"
  },
  {
    id: 3,
    title: "STEM Foundation for Kids",
    category: "STEM",
    duration: "3 Months",
    lessons: "24 Lessons",
    rating: 5.0,
    price: "₹12,499",
    image: "/assets/course3.png"
  },
  {
    id: 4,
    title: "Embedded Systems & IoT",
    category: "Electronics",
    duration: "5 Months",
    lessons: "40 Lessons",
    rating: 4.7,
    price: "₹15,999",
    image: "/assets/course4.png"
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-navy font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-primary hidden md:block" />
              Our Programs
            </h4>
            <h2 className="text-2xl md:text-5xl font-heading font-black text-slate-900 leading-tight">
              Featured <span className="text-navy">Courses</span>
            </h2>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="swiper-prev w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-navy bg-white shadow-sm hover:bg-navy hover:text-white transition-all group">
              <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="swiper-next w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-navy bg-white shadow-sm hover:bg-navy hover:text-white transition-all group">
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>


        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-16"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-xl md:rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full flex flex-col">
                {/* Image Area */}
                <div className="relative h-32 md:h-56 overflow-hidden shrink-0">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-navy text-white text-[6px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                    {course.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-0.5 md:space-x-1 text-yellow-500 mb-2 md:mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={8} className="md:w-[14px] md:h-[14px]" fill={j < Math.floor(course.rating) ? "currentColor" : "none"} />
                    ))}
                    <span className="text-slate-400 text-[8px] md:text-xs font-bold ml-1">{course.rating}</span>
                  </div>
                  <h3 className="text-[10px] md:text-xl font-heading font-bold text-slate-900 mb-2 md:mb-4 group-hover:text-navy transition-colors line-clamp-2 md:line-clamp-1">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-slate-500 text-[8px] md:text-sm mb-3 md:mb-6 border-y border-slate-50 py-1.5 md:py-3">
                    <div className="flex items-center space-x-1">
                      <Clock size={10} className="md:w-4 md:h-4 text-navy" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen size={10} className="md:w-4 md:h-4 text-navy" />
                      <span className="hidden xs:inline">{course.lessons}</span>
                      <span className="xs:hidden">{course.lessons.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between gap-1 md:gap-4">
                      <span className="text-xs md:text-2xl font-heading font-bold text-navy">{course.price}</span>
                      <div className="flex space-x-1 md:space-x-2">
                        <Link 
                          href="#"
                          className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all group/btn"
                          title="Brochure"
                        >
                          <Download size={12} className="md:w-[18px] md:h-[18px]" />
                        </Link>
                        <Link 
                          href={`/courses/${course.id}`}
                          className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-navy transition-all"
                        >
                          <ArrowRight size={14} className="md:w-[20px] md:h-[20px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        <div className="swiper-pagination-custom flex justify-center mt-4"></div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #01254d;
          opacity: 0.2;
          transition: all 0.3s;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
