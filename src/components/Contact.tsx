"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="glass-panel p-12 md:p-16 rounded-3xl text-center neon-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Better <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Open to opportunities involving DevOps, Cloud, Kubernetes, CI/CD automation and production engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
          >
            <a href="mailto:sathishkumar07ofc@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/30">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wide break-all text-sm sm:text-base">sathishkumar07ofc@gmail.com</span>
            </a>

            <a href="tel:+918838302558" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group w-full justify-center md:justify-start md:w-auto">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/30 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wide">+91-8838302558</span>
            </a>

            <div className="flex items-center gap-3 text-white/80 w-full justify-center md:justify-start md:w-auto">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium tracking-wide">Chennai, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/resume/Sathishkumar_S_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-xl hover:bg-primary-glow hover:shadow-[0_0_30px_rgba(255,77,0,0.5)] uppercase tracking-widest text-sm relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
