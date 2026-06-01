import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#photography", label: "Photography" },
  { href: "#experiences", label: "Experiences" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 transition-all duration-500 right-0 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          WW<span className="text-primary">.</span>
        </a>

        {/*Desktop Nav */}
        <div className="items-center gap-1 md:flex hidden">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((Link, index) => (
              <a
                href={Link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface "
              >
                {Link.label}
              </a>
            ))}
          </div>
        </div>

        {/*CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">My Portofolio</Button>
        </div>

        {/*Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/*Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((Link, index) => (
              <a
                href={Link.href}
                key={index}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {Link.label}
              </a>
            ))}
            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
