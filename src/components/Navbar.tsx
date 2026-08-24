"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4 shadow-lg shadow-black/50 border-b border-white/5" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-lg md:text-xl font-bold font-mono tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-2">
          <span className="text-primary">&lt;</span>
          SATHISHKUMAR.S
          <span className="text-primary">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider text-xs"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/resume/Sathishkumar_S_Resume.pdf"
            download
            className="neon-border rounded-md group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-200 bg-black overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-primary/20"></span>
            <span className="relative flex items-center gap-2 text-sm tracking-widest uppercase">
              <Download className="w-4 h-4 group-hover:text-primary transition-colors" />
              Resume
            </span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-primary" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-wider py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/resume/Sathishkumar_S_Resume.pdf"
                download
                className="mt-4 flex items-center justify-center gap-2 bg-primary/20 text-primary border border-primary/50 py-3 rounded-md font-bold uppercase tracking-widest hover:bg-primary/30 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
