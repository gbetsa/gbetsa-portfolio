import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import MenuModal from "@/components/MenuModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="font-['Inter'] ">
      <Hero />
      <Technologies />
      <Experience />
      <Education />
      <Projects />
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
  );
};

export default Index;
