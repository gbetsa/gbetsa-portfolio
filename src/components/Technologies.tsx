import {
  Code2,
  Database,
  Server,
  Container,
  FileCode,
  GitBranch,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import TechCard from "./TechCard";
import Counter from "./ui/Counter";
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
  { value: "4+", label: "Anos de Experiência", icon: Clock },
  { value: "20+", label: "Clientes Atendidos", icon: Users },
  { value: "15+", label: "Tecnologias no Stack", icon: Zap },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Tecnologias & Expertise
          </span>
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.stats}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.statItem}
            >
              <div className={styles.statIcon}>
                <stat.icon size={28} />
              </div>
              <div className={styles.statValue}>
                <Counter value={stat.value} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

