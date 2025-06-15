
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#book", label: "Book" },
    { href: "https://g.co/kgs/Kh16GDP", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
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
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
