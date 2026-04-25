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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-2">Our Programs</h4>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Featured Courses</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="swiper-prev w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-next w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full flex flex-col">
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-navy text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {course.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1 text-yellow-500 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} fill={j < Math.floor(course.rating) ? "currentColor" : "none"} />
                    ))}
                    <span className="text-slate-400 text-xs font-bold ml-1">{course.rating}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 group-hover:text-navy transition-colors line-clamp-1">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-slate-500 text-sm mb-6 border-y border-slate-50 py-3">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} className="text-navy" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen size={16} className="text-navy" />
                      <span>{course.lessons}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-heading font-bold text-navy">{course.price}</span>
                      <div className="flex space-x-2">
                        <Link 
                          href="#"
                          className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all group/btn"
                          title="Download Brochure"
                        >
                          <Download size={18} />
                        </Link>
                        <Link 
                          href={`/courses/${course.id}`}
                          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-navy transition-all"
                        >
                          <ArrowRight size={20} />
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
