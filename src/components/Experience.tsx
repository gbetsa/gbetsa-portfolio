import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ShoppingBag, Monitor, Warehouse } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    achievements?: string[];
    tech?: string[];
    icon: any;
}

const experiences: Experience[] = [
    {
        role: "Empreendedor - Software House | Desenvolvedor Full Stack",
        company: "Software House Própria",
        period: "Jan de 2024 - O momento",
        location: "Florianópolis, SC · Remoto",
        description: "Responsável pela criação, gestão e operação de uma software house, prestando serviços de desenvolvimento sob medida para clientes de diversos segmentos.",
        achievements: [
            "Prospecção e gestão de relacionamento com clientes, levantamento de requisitos e definição de escopo.",
            "Planejamento, desenvolvimento e entrega de soluções digitais ponta a ponta.",
            "Organização de processos internos, controle de demandas e garantia de qualidade nas entregas.",
            "Desenvolvimento técnico fullstack (Frontend, Backend e Banco de Dados) de soluções robustas.",
            "Tomada de decisões estratégicas e resolução de problemas técnicos e de negócio."
        ],
        tech: ["React", "React Native", "Node.js", "PostgreSQL", "Docker", "TypeScript"],
        icon: Code2,
    },
    {
        role: "Operador de Loja",
        company: "Petz",
        period: "Nov de 2022 - Jan de 2024",
        location: "Florianópolis, SC",
        description: "Papel central na excelência do atendimento e operacional da loja, com foco em processos ágeis e gestão de equipe.",
        achievements: [
            "Implementação de processos ágeis no Ponto de Venda (PDV).",
            "Gerenciamento de pedidos de Pick-up e Delivery (E-commerce).",
            "Liderança de equipe e condução de atividades de Trade Marketing.",
            "Supervisão de abertura/fechamento de litígios e gestão de checkout promocional."
        ],
        icon: ShoppingBag,
    },
    {
        role: "Operador de Loja Digital",
        company: "WMS Supermercados (via Agilidade RH)",
        period: "Nov de 2021 - Jun de 2022",
        location: "Florianópolis, SC",
        description: "Responsável pela operação completa do e-commerce, iniciando como colaborador temporário e sendo efetivado pela excelência operacional e compromisso com a satisfação do cliente.",
        achievements: [
            "Supervisão da operação do e-commerce e garantia do cumprimento de prazos.",
            "Coordenação logística: separação, embalagem e transferência para entregadores.",
            "Emissão de notas fiscais e gestão de qualidade do serviço digital.",
            "Manutenção de altos padrões de eficiência no fluxo de pedidos online."
        ],
        icon: Monitor,
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-hero">
            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
                            Trajetória
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-accent bg-clip-text text-transparent">
                            Experiência Profissional
                        </span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        De operações logísticas ao desenvolvimento de software: uma jornada focada em eficiência e soluções digitais.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Timeline Line (for desktop) */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
                            )}

                            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500 shadow-glow">
                                        <exp.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <Card className="p-4 md:p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 group-hover:shadow-glow">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-primary font-medium">{exp.company}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
                                            </div>
                                            <Badge variant="secondary" className="w-fit bg-secondary/50 text-muted-foreground border-border">
                                                {exp.period}
                                            </Badge>
                                        </div>

                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {exp.achievements && (
                                            <div className="space-y-4">
                                                <h4 className="flex items-center text-sm font-semibold text-foreground uppercase tracking-wider">
                                                    <Code2 className="w-4 h-4 mr-2 text-primary" />
                                                    Principais Atividades
                                                </h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {exp.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                                                            <span className="mr-2 text-primary mt-1">▹</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {exp.tech && (
                                            <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
                                                {exp.tech.map((t) => (
                                                    <span key={t} className="px-2.5 py-1 bg-primary/5 text-primary text-xs rounded-md border border-primary/10">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </Card>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
