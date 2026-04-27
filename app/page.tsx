import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fffafa]">
      {/* Baby-themed Background Pattern (Stars and Dots) */}
      <div className="fixed inset-0 z-[-1] opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5l1 2h2l-2 1.5 1 2.5-2-1.5-2 1.5 1-2.5-2-1.5h2zM5 30l1 2h2l-2 1.5 1 2.5-2-1.5-2 1.5 1-2.5-2-1.5h2zM55 30l1 2h2l-2 1.5 1 2.5-2-1.5-2 1.5 1-2.5-2-1.5h2zM30 55l1 2h2l-2 1.5 1 2.5-2-1.5-2 1.5 1-2.5-2-1.5h2z' fill='%23ec4899'/%3E%3Ccircle cx='15' cy='15' r='1' fill='%236366f1'/%3E%3Ccircle cx='45' cy='45' r='1' fill='%236366f1'/%3E%3C/svg%3E")` 
           }} 
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}