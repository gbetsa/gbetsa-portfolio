import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import SoftSkills from "@/components/SoftSkills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import News from "@/components/News";
import Contact from "@/components/Contact";
import MenuModal from "@/components/MenuModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import { useEffect } from "react";

const Index = () => {


  return (
    <SmoothScroll>
      <main className="font-['Inter'] ">
        <Hero />
        <Technologies />
        <SoftSkills />
        <Experience />
        <Education />
        <Projects />
        <News />
        <Contact />
        <MenuModal />
        <WhatsAppButton />

        {/* Footer */}
        <footer className="bg-gradient-hero border-t border-border py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground">
                  © 2025 Guilherme Betsa. Todos os direitos reservados.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a
                  href="#hero"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </a>
                <a
                  href="#tech"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Stacks
                </a>
                <a
                  href="#soft-skills"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Habilidades
                </a>
                <a
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Experiência
                </a>
                <a
                  href="#education"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Formação
                </a>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </a>
                <a
                  href="#news"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Novidades
                </a>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default Index;
