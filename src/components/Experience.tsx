"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const responsibilities = [
    "Designed and maintained Jenkins CI/CD pipelines for automated build, test, release and deployment across production, staging and testing environments.",
    "Managed 2 Kubernetes clusters across on-premises and Azure AKS.",
    "Worked with pod deployment, scaling, Ingress, services and workload management.",
    "Implemented Horizontal Pod Autoscaling and resource-based scaling.",
    "Supported rolling updates, self-healing, readiness/liveness probes, service management, Ingress and auto-scaling.",
    "Containerized applications using Docker and integrated workflows with Jenkins CI/CD pipelines.",
    "Built and maintained Apache Airflow DAGs and managed Linux crontab scheduled operational tasks.",
    "Implemented Prometheus and Grafana monitoring, dashboards and alerting.",
    "Managed Azure AKS, Virtual Machines, databases, Azure Container Registry and Blob Storage.",
    "Developed Python and Bash automation scripts and built internal DevOps tools using Python and React.",
    "Used AI-assisted troubleshooting for incident analysis and MTTR improvement.",
    "Provided L2 production support, strictly adhering to ITIL and ITSM processes for incident management, problem resolution, and continuous service improvement."
  ];

  return (
    <section id="experience" className="py-24 relative z-10 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-24"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)] ring-4 ring-black"></div>
            
            <div className="glass-panel p-8 rounded-2xl neon-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    DevOps Engineer
                  </h3>
                  <h4 className="text-lg text-white/70 mt-1">Prodapt Solutions Pvt. Ltd. | Chennai</h4>
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase">
                  Nov 2024 – Present
                </div>
              </div>

              <ul className="space-y-4">
                {responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
