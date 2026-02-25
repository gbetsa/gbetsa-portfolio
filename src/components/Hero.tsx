import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Monitor, Code2, Database, Laptop, Rocket, Cpu } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingIcon = ({ icon: Icon, delay = 0, x, y, size = 24, color = "text-primary/40" }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      y: [0, -20, 0],
      x: [0, 10, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute hidden lg:block ${color} pointer-events-none z-0`}
    style={{ left: x, top: y }}
  >
    <Icon size={size} strokeWidth={1.5} />
  </motion.div>
);

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[100svh] flex items-center justify-center bg-gradient-hero relative overflow-hidden py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Dynamic Glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: mousePos.x, y: mousePos.y }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tech-cyan/10 rounded-full blur-[120px] animate-glow-pulse"
        />
        <motion.div
          animate={{ x: -mousePos.x, y: -mousePos.y }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tech-blue/10 rounded-full blur-[120px] animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,192,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Floating Tech Elements */}
      <FloatingIcon icon={Code2} x="12%" y="20%" delay={0} size={40} />
      <FloatingIcon icon={Monitor} x="85%" y="15%" delay={1} size={32} color="text-tech-cyan/30" />
      <FloatingIcon icon={Database} x="18%" y="70%" delay={2} size={36} color="text-tech-blue/30" />
      <FloatingIcon icon={Rocket} x="82%" y="65%" delay={0.5} size={38} color="text-primary/30" />
      <FloatingIcon icon={Cpu} x="75%" y="30%" delay={1.5} size={28} color="text-tech-green/30" />
      <FloatingIcon icon={Laptop} x="25%" y="40%" delay={0.8} size={26} color="text-white/10" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group p-1 ring-2 ring-primary/20 rounded-full">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Guilherme Betsa"
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-background shadow-glow object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-1 right-1 w-8 h-8 bg-background rounded-full border-2 border-border flex items-center justify-center p-1">
                <div className="w-full h-full bg-tech-green rounded-full shadow-[0_0_10px_#00d9c0] animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/40 backdrop-blur-md rounded-full text-sm font-semibold text-primary border border-primary/20 shadow-[0_0_20px_rgba(0,217,192,0.1)] hover:border-primary/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Fullstack Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="text-foreground/90 block mb-2 text-3xl md:text-4xl font-medium">Olá, eu sou o</span>
              <span className="bg-gradient-accent bg-clip-text text-transparent drop-shadow-sm">
                Guilherme Betsa
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Especialista em criar soluções <span className="text-primary font-bold">Fullstack</span> robustas com <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">Node</span> e as melhores tecnologias do mercado.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-6 text-base font-bold rounded-xl"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Vamos conversar?
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('projects')}
              className="hover:bg-secondary/80 transition-all px-8 py-6 text-base font-semibold rounded-xl backdrop-blur-md bg-secondary/50 border border-border"
            >
              Ver Projetos
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            {[
              { icon: Github, href: "https://github.com/gbetsa" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/gbetsa/" },
              { icon: Mail, href: "mailto:gbetsacomercial@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-xl bg-secondary/30 backdrop-blur-md border border-white/5 hover:border-primary/40 text-muted-foreground hover:text-primary transition-all hover:translate-y-[-4px]"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">Scroll</span>
        <div className="w-[20px] h-[35px] rounded-full border-2 border-primary/20 flex justify-center p-1.5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
