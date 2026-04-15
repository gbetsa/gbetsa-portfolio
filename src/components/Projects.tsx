import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import GnconnectionSystemImg from "../assets/gnconnectionsystem.webp";
import Market3DImg from "../assets/market3d.webp";
import AureliusImg from "../assets/aurelius.webp";
import TreineMaisImg from "../assets/treinemais.webp";
import ApolluzImg from "../assets/apolluz.webp";
import NanaImg from "../assets/nana.webp";
import SoChavesImg from "../assets/sochaves.webp";
import BarBuddyImg from "../assets/barbuddy.webp";

const projects = [
  {
    title: "Market3D | E-commerce",
    description:
      "Plataforma de e-commerce para produtos 3D, com gestão completa de pedidos, painel administrativo e pagamentos integrados.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Sequelize", "PostgreSQL", "Tailwind CSS", "Socket.IO", "VPS", "Docker", "Firebase", "Redis", "Asaas"],
    image: Market3DImg,
  },
  {
    title: "BarBuddy | PDV Inteligente",
    description:
      "Sistema de Ponto de Venda (PDV) moderno para bares e eventos, com gestão de comandas, leitura de código de barras e pagamentos integrados via Mercado Pago Point.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Sequelize", "PostgreSQL", "Tailwind CSS", "Socket.IO", "Mercado Pago"],
    image: BarBuddyImg,
    github: {
      front: "https://github.com/gbetsa/bar-buddy-frontend",
      back: "https://github.com/gbetsa/bar-buddy-backend",
    },
  },
  {
    title: "Aurelius | Corretora de Seguros",
    description:
      "Site para corretora de seguros com painel administrativo personalizado para gestão de conteúdos e clientes.",
    tech: ["React", "CSS", "Node.js", "PostgreSQL", "Firebase", "Maps API"],
    image: AureliusImg,
    demo: "https://aureliuseguros.com.br/",
    github: {
      front: "https://github.com/gbetsa/aurelius-seguros-frontend",
      back: "https://github.com/gbetsa/aurelius-seguros-backend",
    },
  },
  {
    title: "Treine+ | Treinos Personalizados",
    description:
      "Landing page para vendas de treinos personalizados, com design atraente e foco em conversão.",
    tech: ["React", "CSS", "Vite"],
    image: TreineMaisImg,
    demo: "https://treinemais.com.br/",
    github: "https://github.com/gbetsa/treine-mais-landingpage",
  },
  {
    title: "GNConnection System | Software House",
    description:
      "Software house especializada em soluções web e sistemas personalizados, com foco em qualidade, escalabilidade e gestão eficiente.",
    tech: ["React", "CSS"],
    image: GnconnectionSystemImg,
    demo: "https://www.gnconnectionsystem.com.br/"
  },
  {
    title: "Apolluz | Transportes e Mudanças",
    description:
      "Landing page para serviços de transportes e mudanças, com informações claras e foco em captação de clientes.",
    tech: ["HTML", "JavaScript", "CSS"],
    image: ApolluzImg,
    demo: "https://apolluz.com.br/",
    github: "https://github.com/gbetsa/apolluz-landingpage",
  },
  {
    title: "Nana Bernardo | Personal Organizer",
    description:
      "Site para serviço de Personal Organizer, apresentando serviços, depoimentos e contato de forma clara e profissional.",
    tech: ["React", "CSS", "Vite"],
    image: NanaImg,
    demo: "https://www.nanaorganizer.com.br/",
    github: "https://github.com/gbetsa/nana-organizer-site",
  },
  {
    title: "Só Chaves | Chaveiro",
    description:
      "Landing page para o serviço de chaveiro, apresentando serviços de abertura, cópia e troca de chaves com atendimento rápido, confiável e acessível.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: SoChavesImg,
    demo: "https://www.chaveirosochaves.com/"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-gradient-hero relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Projetos em Destaque
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Soluções completas desenvolvidas do zero ao deploy
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 select-none flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-secondary/30 flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20 p-8">
                      <span className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent opacity-50 group-hover:scale-110 transition-transform duration-700">
                        {project.title.split("|")[0].trim()}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>

                <div className="p-6 relative flex flex-col flex-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 backdrop-blur-sm text-xs rounded-full text-foreground border border-border font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all group/btn"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                          Explorar
                        </a>
                      </Button>
                    )}
                    {project.github && typeof project.github === "string" && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <Github className="mr-2 h-4 w-4 transform group-hover/btn:scale-110 transition-transform" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.github && typeof project.github === "object" && (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all group/btn px-2"
                        >
                          <a
                            href={project.github.front}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full h-full"
                          >
                            <Github className="mr-1 h-3 w-3 transform group-hover/btn:scale-110 transition-transform" />
                            Front
                          </a>
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all group/btn px-2"
                        >
                          <a
                            href={project.github.back}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full h-full"
                          >
                            <Github className="mr-1 h-3 w-3 transform group-hover/btn:scale-110 transition-transform" />
                            Back
                          </a>
                        </Button>
                      </>
                    )}
                    {!project.demo && !project.github && (
                      <div className="flex-1 px-4 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-xl text-center border border-yellow-500 shadow-sm">
                        🚧 Em Desenvolvimento
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
