import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import GnconnectionSystemImg from "../assets/gnconnectionsystem.png";
import Market3DImg from "../assets/market3d.png";
import AureliusImg from "../assets/aurelius.png";
import TreineMaisImg from "../assets/treinemais.png";
import ApolluzImg from "../assets/apolluz.png";
import NanaImg from "../assets/nana.png";
import SoChavesImg from "../assets/sochaves.png";

const projects = [
  {
    title: "Market3D | E-commerce",
    description:
      "Plataforma de e-commerce para produtos 3D, com gestão completa de pedidos, painel administrativo e pagamentos integrados.",
    tech: ["React", "Node.js", "PostgreSQL", "Sequelize", "VPS", "Docker"],
    image: Market3DImg,
  },
  {
    title: "GNConnection System | Software House",
    description:
      "Software house especializada em soluções web e sistemas personalizados, com foco em qualidade, escalabilidade e gestão eficiente.",
    tech: ["React", "CSS"],
    image: GnconnectionSystemImg,
    demo: "https://www.gnconnectionsystem.com.br/",
  },
  {
    title: "Aurelius | Corretora de Seguros",
    description:
      "Site para corretora de seguros com painel administrativo personalizado para gestão de conteúdos e clientes.",
    tech: ["React", "Node.js", "PostgreSQL", "Sequelize", "VPS"],
    image: AureliusImg,
    demo: "https://aureliuseguros.com.br/",
  },
  {
    title: "Treine+ | Treinos Personalizados",
    description:
      "Landing page para vendas de treinos personalizados, com design atraente e foco em conversão.",
    tech: ["React", "CSS"],
    image: TreineMaisImg,
    demo: "https://treinemais.com.br/",
  },
  {
    title: "Apolluz | Transportes e Mudanças",
    description:
      "Landing page para serviços de transportes e mudanças, com informações claras e foco em captação de clientes.",
    tech: ["HTML", "JavaScript", "CSS"],
    image: ApolluzImg,
    demo: "https://apolluz.com.br/",
  },
  {
    title: "Nana Bernardo | Personal Organizer",
    description:
      "Site para serviço de Personal Organizer, apresentando serviços, depoimentos e contato de forma clara e profissional.",
    tech: ["React", "CSS"],
    image: NanaImg,
    demo: "https://www.nanaorganizer.com.br/",
  },
  {
    title: "Só Chaves | Chaveiro",
    description:
      "Landing page para o serviço de chaveiro, apresentando serviços de abertura, cópia e troca de chaves com atendimento rápido, confiável e acessível.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: SoChavesImg,
    demo: "https://www.chaveirosochaves.com/",
  },
];

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 px-4 bg-gradient-hero relative overflow-hidden"
    >
      {" "}
      <div className="container mx-auto relative z-10">
        {" "}
        <div className="text-center mb-20">
          {" "}
          <div className="inline-block mb-4">
            {" "}
            <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
              Portfolio{" "}
            </span>{" "}
          </div>{" "}
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Projetos em Destaque{" "}
            </span>{" "}
          </h2>{" "}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas desenvolvidas do zero ao deploy{" "}
          </p>{" "}
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6 px-2 sm:px-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex-0 flex-auto min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[350px] xl:min-w-[400px]"
                >
                  <Card className="group h-full overflow-hidden bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 select-none">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                    </div>

                    <div className="p-6 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-5 line-clamp-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
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
                        {project.demo ? (
                          <Button
                            variant="secondary"
                            size="sm"
                            className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all group/btn"
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
                        ) : (
                          <div className="flex-1 px-4 py-2 bg-yellow-200 text-yellow-800 font-bold rounded-xl text-center border border-yellow-500 shadow-sm">
                            🚧 Em Desenvolvimento
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <Button
              onClick={scrollPrev}
              variant="secondary"
              size="icon"
              className="rounded-full w-14 h-14 bg-secondary/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-glow"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: projects.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-10"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={scrollNext}
              variant="secondary"
              size="icon"
              className="rounded-full w-14 h-14 bg-secondary/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-glow"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
