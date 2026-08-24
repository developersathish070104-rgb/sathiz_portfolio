"use client";

import { motion } from "framer-motion";
import { Code2, GitMerge, Settings, Play, Box, Network, Cloud, Activity } from "lucide-react";

const pipelineStages = [
  { icon: Code2, label: "Code", desc: "React/Python" },
  { icon: GitMerge, label: "Git", desc: "Version Control" },
  { icon: Settings, label: "Jenkins", desc: "CI Server" },
  { icon: Play, label: "Build", desc: "Test & Compile" },
  { icon: Box, label: "Docker", desc: "Containerize" },
  { icon: Network, label: "Kubernetes", desc: "Orchestration" },
  { icon: Cloud, label: "Azure", desc: "AKS / Cloud" },
  { icon: Activity, label: "Monitor", desc: "Prometheus/Grafana" },
];

export default function DevOpsPipeline() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My DevOps <span className="text-gradient">Workflow</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            A reliable, automated pipeline ensuring smooth transitions from code creation to production monitoring.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Main animated connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full hidden md:block">
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
            {pipelineStages.map((stage, idx) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center group relative w-full md:w-auto"
              >
                {/* Connecting line for mobile */}
                {idx !== pipelineStages.length - 1 && (
                  <div className="absolute top-12 left-1/2 h-8 w-px bg-white/20 md:hidden"></div>
                )}
                
                <div className="w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl glass border-white/20 flex items-center justify-center relative overflow-hidden group-hover:border-primary transition-all duration-300 group-hover:-translate-y-2 z-10 bg-black">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                  <stage.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white/80 group-hover:text-white relative z-10" />
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="font-bold text-sm text-white group-hover:text-primary transition-colors">{stage.label}</h4>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity absolute w-32 left-1/2 -translate-x-1/2 pt-2">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
