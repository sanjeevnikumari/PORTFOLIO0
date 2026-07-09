import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">
      <nav
        className={`relative w-full max-w-[2000px] rounded-2xl border transition-all duration-300
        ${
          scrolled
            ? "bg-white/10 border-white/20 backdrop-blur-2xl shadow-2xl"
            : "bg-white/[0.05] border-white/10 backdrop-blur-xl"
        }`}
      >
        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl"></div>

        <div className="flex items-center justify-between px-7 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            SANJU
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
          >
            Contact Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg border border-white/10 bg-white/10 p-2 backdrop-blur-xl"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="flex flex-col gap-5 p-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;