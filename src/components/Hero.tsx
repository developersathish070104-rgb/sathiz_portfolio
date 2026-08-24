"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Download, ChevronRight, Terminal } from "lucide-react";
import Hero3D from "./3d/Hero3D";

export default function Hero() {
  // 3D Parallax Effect setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-20 mt-6 md:mt-0">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Sathishkumar
            <br />
            <span className="text-gradient text-3xl md:text-4xl lg:text-5xl">DevOps & L2 Production Support Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-xl"
          >
            With 2+ years of hands-on experience in CI/CD automation, Kubernetes, Docker, Azure cloud infrastructure, monitoring, and L2 troubleshooting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
              <span className="text-primary mr-2">Current CTC:</span> 4 LPA
            </div>
            <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
              <span className="text-primary mr-2">Expected CTC:</span> 10 LPA
            </div>
            <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
              <span className="text-primary mr-2">Notice Period:</span> 60 Days
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4"
          >
            <a
              href="/resume/Sathishkumar_S_Resume.pdf"
              download
              className="neon-border rounded-md group relative flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-200 bg-primary overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black/20"></span>
              <span className="relative flex items-center gap-2 tracking-widest uppercase text-sm">
                <Download className="w-4 h-4" />
                Download Resume
              </span>
            </a>
            
            <a
              href="#projects"
              className="group relative flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-200 bg-transparent border border-white/20 rounded-md hover:bg-white/5 w-full sm:w-auto"
            >
              <span className="relative flex items-center gap-2 tracking-widest uppercase text-sm">
                Explore My Work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>

        </div>

        {/* Right Visual */}
        <div 
          className="w-full lg:w-1/2 mt-12 lg:mt-0 relative h-[400px] lg:h-[600px] flex items-center justify-center"
        >
          <Hero3D />
        </div>

      </div>
    </section>
  );
}
