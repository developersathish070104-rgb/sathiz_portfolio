"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-l-4 border-l-primary relative overflow-hidden group hover:border-white/20 hover:border-l-primary transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-lg text-white/70 mb-4">Annamalai University – SSBSTAS College</p>
              
              <div className="flex items-center justify-between">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-mono tracking-widest">
                  2021 – 2024
                </span>
                <span className="text-primary font-bold font-mono text-xl">
                  CGPA: 8.6
                </span>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Award className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            </motion.div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl flex items-center justify-between group hover:border-accent/50 transition-colors"
              >
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">Java Full Stack Development</h4>
                  <p className="text-sm text-white/60 mt-1">Uniq Technology</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass p-6 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors"
              >
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">2-Day Bootcamp — Agentic AI</h4>
                  <p className="text-sm text-white/60 mt-1">Specialized Training</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
