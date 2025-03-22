
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Book", href: "#book" },
    { name: "Speaking", href: "#speaking" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-yellow-100" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="font-display font-bold text-xl tracking-tight text-yellow-900 hover:text-yellow-800 transition-colors"
        >
          SANDRA PAOVIĆ
        </a>
        
        {!isMobile ? (
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>
        ) : (
          <button 
            onClick={handleMobileMenuToggle} 
            className="p-1.5 rounded-md text-yellow-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out pt-20",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="container flex flex-col space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-medium py-2 border-b border-yellow-100 text-yellow-900"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
