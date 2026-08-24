"use client";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/60 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <Link href="#home" className="text-xl font-bold font-mono tracking-wider text-white hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-primary">&lt;</span>
            SATHISHKUMAR.S
            <span className="text-primary">/&gt;</span>
          </Link>
          <p className="text-xs text-white/50 tracking-widest uppercase font-semibold">
            DevOps • Cloud • Automation • Kubernetes
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs text-white/60 hover:text-primary transition-colors uppercase tracking-wider font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs text-white/40 font-medium">
          &copy; {new Date().getFullYear()} Sathishkumar S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
