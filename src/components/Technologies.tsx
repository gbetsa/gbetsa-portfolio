import {
  Code2,
  Database,
  Server,
  Container,
  FileCode,
  GitBranch,
} from "lucide-react";
import TechCard from "./TechCard";
import styles from "./Technologies.module.css";

const technologies = [
  {
    name: "React.js",
    description:
      "Desenvolvimento de interfaces modernas e responsivas com componentes reutilizáveis, hooks avançados e gerenciamento de estado eficiente.",
    icon: Code2,
    color: "react",
  },
  {
    name: "Node.js",
    description:
      "Desenvolvimento de APIs RESTful e aplicações backend eficientes com Node.js e Express, garantindo performance e escalabilidade.",
    icon: Server,
    color: "node",
  },
  {
    name: "PostgreSQL",
    description:
      "Criação, modelagem e otimização de bancos de dados relacionais com PostgreSQL, utilizando queries eficientes e boas práticas de performance.",
    icon: Database,
    color: "postgres",
  },
  {
    name: "Docker",
    description:
      "Containerização de aplicações com Docker e configuração de servidores web com Nginx, garantindo deploy ágil e consistente.",
    icon: Container,
    color: "docker",
  },
  {
    name: "TypeScript",
    description:
      "Desenvolvimento de aplicações type-safe com TypeScript, garantindo código limpo, previsível e fácil de manter.",
    icon: FileCode,
    color: "typescript",
  },
  {
    name: "Git & CI/CD",
    description:
      "Controle de versão avançado, workflows automatizados, code review e deploy contínuo com GitHub Actions",
    icon: GitBranch,
    color: "git",
  },
];

const stats = [
  { value: "4+", label: "Anos de Experiência" },
  { value: "20+", label: "Clientes Atendidos" },
  { value: "100%", label: "Taxa de Sucesso" },
];

const Technologies = () => {
  return (
    <section id="tech" className={styles.section}>
      <div className={styles.header}>
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
            Stacks
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Tecnologias & Expertise
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ferramentas e tecnologias que domino para criar soluções completas e
          escaláveis
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {technologies.map((tech, index) => (
          <TechCard
            key={index}
            name={tech.name}
            description={tech.description}
            icon={tech.icon}
            color={tech.color}
            index={index}
          />
        ))}
      </div>

      <div className={styles.statsWrapper}>
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
