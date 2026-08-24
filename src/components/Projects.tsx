"use client";

import { motion } from "framer-motion";
import { FolderGit2, Cpu, Bot } from "lucide-react";

const projects = [
  {
    title: "AI-Integrated Kubernetes Log Viewer",
    description: "A full-stack application designed to centralize and visualize Kubernetes logs across environments.",
    icon: Bot,
    tags: ["Kubernetes", "Python", "React", "AI", "DevOps", "Monitoring"]
  },
  {
    title: "Kubernetes Production Operations",
    description: "Production Kubernetes operations involving auto-scaling, rolling updates, health probes, self-healing, Ingress and service management.",
    icon: Cpu,
    tags: ["Kubernetes", "AKS", "HPA", "Ingress", "Azure"]
  },
  {
    title: "CI/CD Automation Platform",
    description: "Jenkins-based CI/CD pipelines supporting automated build, testing, release and deployment workflows.",
    icon: FolderGit2,
    tags: ["Jenkins", "CI/CD", "Docker", "Automation"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Project <span className="text-gradient">Showcase</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group h-full"
            >
              <div className="glass-panel p-8 rounded-2xl h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,77,0,0.3)] neon-border">
                
                {/* Background Tech Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-grid opacity-10 pointer-events-none rounded-bl-full"></div>
                
                <div className="w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors relative z-10">
                  <project.icon className="w-7 h-7 text-white/70 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>
                
                <p className="text-white/70 mb-8 flex-grow relative z-10 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-white/80 text-xs font-mono rounded-md border border-white/10 group-hover:border-primary/30 transition-colors"
                    >
                      {tag}
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
