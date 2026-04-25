import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyAction from "@/components/StickyAction";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prayog India | Premier Robotics & STEM Education",
  description: "Empowering the next generation with hands-on robotics, AI, and STEM workshops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-body">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyAction />
      </body>
    </html>
  );
}
