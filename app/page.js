import HeroSlider from "@/components/HeroSlider";
import Rankings from "@/components/Home/Rankings";
import Categories from "@/components/Home/Categories";
import AboutSection from "@/components/Home/AboutSection";
import Stats from "@/components/Home/Stats";
import Partners from "@/components/Home/Partners";
import FeaturedCourses from "@/components/Home/FeaturedCourses";
import WorkshopMarquee from "@/components/Home/WorkshopMarquee";
import WorkshopStories from "@/components/Home/WorkshopStories";
import StudentLife from "@/components/Home/StudentLife";
import Faculties from "@/components/Home/Faculties";
import InternshipSection from "@/components/Home/InternshipSection";
import EnquiryForm from "@/components/Home/EnquiryForm";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <HeroSlider />
      <Rankings />
      <Categories />
      <Stats />
      <Partners />
      <AboutSection />
      <FeaturedCourses />
      <WorkshopMarquee />
      <WorkshopStories />
      <StudentLife />
      <InternshipSection />
      <Faculties />
      <Testimonials />
      <FAQ />
      <EnquiryForm />
      <CTA />
    </main>
  );
}
