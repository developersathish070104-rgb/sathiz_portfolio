"use client";

import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Zap } from "lucide-react";

const achievements = [
  {
    title: "Reliable Kubernetes Operations",
    description: "Supported production workloads using auto-scaling, rolling updates, health probes, self-healing, Ingress and service management.",
    icon: ShieldCheck,
  },
  {
    title: "Kubernetes Cluster Upgrade",
    description: "Upgraded 2 Kubernetes clusters with zero data loss and no disruption to running workloads and services.",
    icon: Zap,
  },
  {
    title: "AI-Integrated Log Viewer",
    description: "Architected a full-stack application to centralize and visualize Kubernetes logs across environments.",
    icon: Trophy,
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Key <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full group-hover:bg-primary/20 transition-colors blur-2xl"></div>
              
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/50 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
