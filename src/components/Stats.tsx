"use client";

import { motion, Variants } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience", description: "Production & DevOps" },
  { value: "2", label: "Kubernetes Clusters", description: "Azure AKS & On-Premises" },
  { value: "CI/CD", label: "Automation", description: "Jenkins Pipelines" },
  { value: "L2", label: "Production Support", description: "ITSM Processes" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold font-mono text-white group-hover:text-primary transition-colors">
                {stat.value}
              </h3>
              <p className="text-sm font-semibold tracking-wider uppercase text-primary mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-white/50 mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
