"use client";

import { motion } from "framer-motion";
import { Terminal, Box, Cloud, Activity, Code, Settings, Database } from "lucide-react";

const skillCategories = [
  {
    title: "CI/CD & Automation",
    icon: Settings,
    skills: ["Jenkins", "CI/CD Pipelines", "Deployment Automation", "Rollout Strategies"],
  },
  {
    title: "Containers & Orchestration",
    icon: Box,
    skills: ["Docker", "Kubernetes", "AKS", "Auto Scaling", "Pod Scaling", "Ingress", "Services"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Microsoft Azure", "Azure AKS", "Virtual Machines", "Azure Container Registry", "Blob Storage", "Azure Databases"],
  },
  {
    title: "Monitoring & Support",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "Production Monitoring", "ITIL", "ITSM", "L1/L2 Troubleshooting"],
  },
  {
    title: "Scripting & Development",
    icon: Code,
    skills: ["Python", "Bash", "React", "Automation Scripts"],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Git", "GitHub", "Linux", "Apache Airflow", "Crontab"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Azure Databases"],
  },
  {
    title: "Production Support & ITSM",
    icon: Activity,
    skills: ["L2 Support", "ITIL Processes", "ITSM", "Incident Management", "Problem Resolution"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="neon-border rounded-xl group"
            >
              <div className="glass-panel p-6 rounded-xl h-full relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-black/50 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
                    <category.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono font-medium text-white/80 bg-white/5 border border-white/10 rounded-md group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
