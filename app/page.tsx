import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-hidden scroll-smooth">

      {/* Premium Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Top Gradient */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-pink-200/30 blur-[140px] rounded-full" />

        {/* Bottom Gradient */}
        <div className="absolute bottom-[-25%] right-[-10%] w-[700px] h-[700px] bg-blue-200/30 blur-[140px] rounded-full" />

        {/* Center Glow */}
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 blur-[120px] rounded-full" />
      </div>

      {/* Noise Texture */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"1\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\"/%3E%3Ccircle cx=\"80\" cy=\"50\" r=\"1\"/%3E%3Ccircle cx=\"120\" cy=\"120\" r=\"1\"/%3E%3Ccircle cx=\"40\" cy=\"100\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      {/* Page Layout */}
      <Navbar />

      <section className="relative">
        <Hero />
      </section>

      <section className="relative py-10">
        <About />
      </section>

      <section className="relative py-10">
        <Services />
      </section>

      <section className="relative pt-10 pb-24">
        <Contact />
      </section>
    </main>
  );
}