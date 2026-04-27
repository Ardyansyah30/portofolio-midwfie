import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-pink-500 tracking-tighter"
        >
          BabyCare<span className="text-gray-900">.</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/#about" className="hover:text-pink-500 transition-colors">
            Tentang
          </Link>
          <Link href="/#services" className="hover:text-pink-500 transition-colors">
            Layanan
          </Link>
          <Link href="/tarif" className="hover:text-pink-500 transition-colors">
            Tarif
          </Link>
          <Link href="/#contact" className="hover:text-pink-500 transition-colors">
            Kontak
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6283139266885"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-pink-600 transition"
          >
            Booking
          </a>
        </div>

        {/* Mobile Menu (simple) */}
        <div className="md:hidden">
          <Link
            href="/tarif"
            className="text-pink-500 font-semibold"
          >
            Tarif
          </Link>
        </div>

      </div>
    </nav>
  );
}