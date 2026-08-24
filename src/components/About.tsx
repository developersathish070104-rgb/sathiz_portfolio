"use client";

import { motion } from "framer-motion";
import { GitBranch, Box, Server, Database, Activity, Monitor } from "lucide-react";

export default function About() {
  const steps = [
    { icon: GitBranch, name: "Git", desc: "Version Control" },
    { icon: Box, name: "Jenkins", desc: "CI/CD Pipeline" },
    { icon: Server, name: "Docker", desc: "Containerization" },
    { icon: Database, name: "Kubernetes", desc: "Orchestration" },
    { icon: Activity, name: "Azure", desc: "Cloud Hosting" },
    { icon: Monitor, name: "Monitoring", desc: "Prometheus & Grafana" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Engineering Infrastructure <span className="text-primary">That Scales</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-panel p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 blur-[30px] rounded-full"></div>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I am a DevOps Support Engineer with a strong foundation in modern cloud infrastructure and CI/CD automation. My expertise lies in bridging the gap between development and operations, ensuring seamless software delivery and robust production environments.
              </p>
              <ul className="space-y-3">
                {[
                  "CI/CD Automation & Pipeline Design",
                  "Kubernetes Administration & Scaling",
                  "Azure Cloud Infrastructure Management",
                  "Production Monitoring & Alerting",
                  "Python & Bash Scripting",
                  "SRE Practices & Incident Resolution"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Architecture Flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
              {/* Connecting Lines Behind */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 hidden md:block"></div>
              
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 relative z-10 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary transition-all">
                    <step.icon className="w-6 h-6 text-white/70 group-hover:text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{step.name}</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
