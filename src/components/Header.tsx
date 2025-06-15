
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#book", label: "Book" },
    { href: "https://g.co/kgs/Kh16GDP", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="text-2xl font-bold text-white tracking-wider">
              KLAP
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isExternal = link.href.startsWith('http');
                return (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-white hover:text-secondary transition-colors duration-300"
                    target={isExternal ? '_blank' : '_self'}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <Button asChild className="hidden md:block bg-secondary hover:bg-yellow-400 text-primary font-bold">
              <a href="#contact">Get In Touch</a>
            </Button>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50 relative">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-primary/95 z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav 
          className="flex flex-col items-center justify-center h-full space-y-8"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith('http');
            return (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-white text-2xl font-semibold hover:text-secondary transition-colors duration-300"
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <Button asChild size="lg" className="bg-secondary hover:bg-yellow-400 text-primary font-bold !mt-12">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get In Touch</a>
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;
