import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
    Lightbulb,
    MessageSquare,
    Users,
    Zap,
    Target,
    Brain
} from "lucide-react";

const skills = [
    {
        title: "Resolução de Problemas",
        description: "Foco analítico para identificar gargalos e propor soluções técnicas eficientes e escaláveis.",
        icon: Lightbulb,
        color: "text-yellow-400",
        shadow: "shadow-[0_0_20px_rgba(250,204,21,0.2)]"
    },
    {
        title: "Comunicação Assertiva",
        description: "Clareza na transmissão de conceitos técnicos e facilidade de diálogo entre equipes e stakeholders.",
        icon: MessageSquare,
        color: "text-blue-400",
        shadow: "shadow-[0_0_20px_rgba(96,165,250,0.2)]"
    },
    {
        title: "Trabalho em Equipe",
        description: "Colaboração ativa em ambientes diversos, promovendo sinergia e compartilhamento de conhecimento.",
        icon: Users,
        color: "text-purple-400",
        shadow: "shadow-[0_0_20px_rgba(192,132,252,0.2)]"
    },
    {
        title: "Adaptabilidade",
        description: "Prontidão para aprender novas tecnologias e se ajustar rapidamente a mudanças e novos desafios.",
        icon: Zap,
        color: "text-orange-400",
        shadow: "shadow-[0_0_20px_rgba(251,146,60,0.2)]"
    },
    {
        title: "Pensamento Crítico",
        description: "Análise profunda de requisitos para garantir que a solução entregue atenda às necessidades reais do negócio.",
        icon: Brain,
        color: "text-emerald-400",
        shadow: "shadow-[0_0_20px_rgba(52,211,153,0.2)]"
    },
    {
        title: "Liderança Colaborativa",
        description: "Proatividade para guiar processos, apoiar colegas e tomar decisões que beneficiem o objetivo comum.",
        icon: Target,
        color: "text-rose-400",
        shadow: "shadow-[0_0_20px_rgba(251,113,133,0.2)]"
    }
];

const SoftSkills = () => {
    return (
        <section id="soft-skills" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-secondary/30 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
                            Mindset & Atitude
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-accent bg-clip-text text-transparent">
                            Habilidades Interpessoais
                        </span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Ferramentas comportamentais que potencializam o desenvolvimento técnico e a entrega de resultados.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`h-full p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-500 group flex flex-col items-center text-center ${skill.shadow} hover:shadow-glow`}>
                                <div className={`p-4 rounded-2xl bg-secondary/50 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-secondary/80`}>
                                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-3 transition-colors group-hover:text-primary">
                                    {skill.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {skill.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftSkills;
