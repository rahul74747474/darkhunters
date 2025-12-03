import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollContext } from "@/context/scrollContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false);
   const { showBrand } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Squad", href: "/squad" },
    { label: "Merchandise", href: "/merchandise" },
    { label: "Live", href: "/live" },
  ];

  return (
    <header
  className={cn(
    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 overflow-visible",
    isScrolled
      ? "bg-dh-charcoal/95 backdrop-blur-md h-16 shadow-lg"
      : "bg-transparent backdrop-blur-none h-20"
  )}
>

      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 flex-shrink-0 group"
          aria-label="Dark Hunters home"
        >
         {showBrand && (
  <div className="flex items-center gap-3 transition-all duration-300">
    <img
  src="https://i.ibb.co/YFRKNpcJ/dh-removebg-preview.webp"
  alt="Dark Hunnters Logo"
  className="w-20 h-20 object-contain translate-y-4"
 />

<h5 className="font-display text-2xl md:text-3xl font-bold text-dh-white mt-8">
                DARK HUNTERS
              </h5>
  </div>
)}

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-2 text-sm font-medium text-dh-silver hover:text-dh-gold transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dh-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-4">

          {/* Auth Button */}
          {!isLoggedIn ? (
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-dh-gold text-dh-black font-bold rounded-lg hover:bg-dh-gold-dark hover:shadow-gold-glow transition-all duration-300 uppercase text-sm">
              <LogIn size={18} />
              Login
            </button>
          ) : (
            <div className="w-10 h-10 rounded-full bg-dh-gold flex items-center justify-center text-dh-black font-bold">
              NH
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-dh-charcoal rounded-lg transition-colors text-dh-silver"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-dh-charcoal border-t border-dh-silver/10 animate-slide-up">
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-dh-silver hover:bg-dh-black hover:text-dh-gold rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
