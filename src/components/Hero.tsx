import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-green/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image with Floating Animation */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-glow-pulse" />
              <img 
                src={profileImage} 
                alt="Guilherme Betsa" 
                className="relative w-40 h-40 rounded-full border-4 border-primary/30 shadow-glow object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-0 -right-0 w-10 h-10 bg-tech-green rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20 shadow-glow">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Fullstack Developer
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground block mb-2">Olá, sou</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Guilherme Betsa
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Desenvolvedor fullstack especializado em <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Node.js</span>, <span className="text-primary font-semibold">PostgreSQL</span> e <span className="text-primary font-semibold">Docker</span>.
            <br />
            Transformando ideias em aplicações escaláveis e robustas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Entre em Contato
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('projects')}
              className="hover:bg-secondary/80 transition-all px-8 py-6 text-lg backdrop-blur-sm bg-secondary/50 border border-border"
            >
              Ver Projetos
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a 
              href="https://github.com/gbetsa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:shadow-glow"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gbetsa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:gbetsacomercial@gmail.com"
              className="group p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:shadow-glow"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
