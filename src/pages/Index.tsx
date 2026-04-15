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
import CustomCursor from "@/components/CustomCursor";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <SmoothScroll>
      <Helmet>
        <title>Guilherme Betsa | Fullstack Developer Portfolio</title>
        <meta name="description" content="Guilherme Betsa - Desenvolvedor Fullstack especialista em React, Node.js e tecnologias modernas. Confira meus projetos e entre em contato." />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Guilherme Betsa",
                "jobTitle": "Fullstack Developer",
                "url": "https://gbetsa.vercel.app/",
                "image": "https://gbetsa.vercel.app/profile.jpeg",
                "sameAs": [
                  "https://github.com/gbetsa",
                  "https://www.linkedin.com/in/gbetsa/"
                ],
                "description": "Desenvolvedor Fullstack especialista em React, Node.js e tecnologias modernas."
              },
              {
                "@type": "WebSite",
                "name": "Guilherme Betsa | Portfólio",
                "url": "https://gbetsa.vercel.app/",
                "description": "Portfólio de Guilherme Betsa, Desenvolvedor Fullstack especialista em React, Node.js e tecnologias modernas."
              }
            ]
          })}
        </script>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gbetsa.vercel.app/" />
        <meta property="og:title" content="Guilherme Betsa | Fullstack Developer Portfolio" />
        <meta property="og:description" content="Especialista em criar soluções Fullstack robustas com React, Node e as melhores tecnologias do mercado." />
        <meta property="og:image" content="https://gbetsa.vercel.app/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gbetsa.vercel.app/" />
        <meta property="twitter:title" content="Guilherme Betsa | Fullstack Developer Portfolio" />
        <meta property="twitter:description" content="Especialista em criar soluções Fullstack robustas com React, Node e as melhores tecnologias do mercado." />
        <meta property="twitter:image" content="https://gbetsa.vercel.app/og-image.png" />
      </Helmet>
      <CustomCursor />
      <main className="font-['Inter'] ">
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Education />
        <SoftSkills />
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
                  © 2026 Guilherme Betsa. Todos os direitos reservados.
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
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
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
                  href="#soft-skills"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Habilidades
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
