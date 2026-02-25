import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface EducationEntry {
    degree: string;
    institution: string;
    period: string;
    description: string;
    skills?: string[];
    icon: any;
    status?: string;
}

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills?: string[];
    credentialId?: string;
    credentialUrl?: string;
    pdfUrl?: string;
    issuerIcon?: string;
}

const educationData: EducationEntry[] = [
    {
        degree: "FuturoDEV, Desenvolvedor Full Stack",
        institution: "SENAI/SC - Floripa Mais Tec",
        period: "Nov de 2023 – Out de 2024",
        description: "Programa intensivo de formação em tecnologia com foco em desenvolvimento web moderno e metodologias ágeis. Imersão prática em tecnologias de ponta e preparação para os desafios do mercado de TI.",
        skills: ["React.js", "Node.js", "PostgreSQL", "Git", "Docker", "SCRUM", "HTML5", "CSS3", "JavaScript", "TypeScript"],
        icon: GraduationCap,
    },
    {
        degree: "Graduação, Análise e Desenvolvimento de Sistemas",
        institution: "Anhanguera Educacional",
        period: "Fev de 2023 – Presente",
        status: "Trancado (Temporariamente)",
        description: "Curso superior focado na análise, projeto, desenvolvimento e gerenciamento de sistemas de informação, com base em lógica de programação e engenharia de software.",
        icon: BookOpen,
    }
];

const certificates: Certificate[] = [
    {
        title: "Startup Summit 2025",
        issuer: "Sebrae",
        date: "Ago de 2025",
        description: "Participação no maior evento de startups e inovação do Sul do Brasil, com foco em empreendedorismo digital e tendências de tecnologia.",
        pdfUrl: "/certificates/startup-summit-2025.pdf",
    },
    {
        title: "Desenvolvedor Web Full Stack",
        issuer: "SENAI/SC",
        date: "Out de 2024",
        description: "Certificado de conclusão do Módulo 03 - Full-Stack do FuturoDev pelo Floripa Mais Tec. Aprimorei habilidades em React.js, Node.js, Express, Sequelize, PostgreSQL, Git, GitHub e Docker. Com mais de 200 horas de prática, incluindo um projeto em squad, também adquiri experiência em metodologias ágeis como SCRUM e no uso do Trello para gestão de projetos.",
        skills: ["React.js", "Node.js", "Express", "PostgreSQL", "Docker", "SCRUM"],
        pdfUrl: "/certificates/fullstack-senai.pdf",
    },
    {
        title: "Desenvolvedor Web Back End",
        issuer: "SENAI/SC",
        date: "Ago de 2024",
        description: "Certificado de conclusão do Módulo 02 - Back-End do FuturoDev pelo Floripa Mais Tec. Aprimorei habilidades em JavaScript, Node.js, Express, PostgreSQL, Trello e GitHub. Realizei mais de 50 exercícios e projetos práticos ao longo de 200 horas, consolidando meu aprendizado e avançando na jornada como desenvolvedor full-stack.",
        skills: ["JavaScript", "Node.js", "Express", "PostgreSQL", "GitHub"],
        pdfUrl: "/certificates/backend-senai.pdf",
    },
    {
        title: "Desenvolvedor Web Front End",
        issuer: "SENAI/SC",
        date: "Mai de 2024",
        description: "Certificado de conclusão do Módulo 01 - Front-End do FuturoDev pelo Floripa Mais Tec. Durante o curso, aprendi React.js, Trello e Git, participei de projetos práticos e eventos que impulsionaram meu aprendizado e networking, além de desenvolver soft skills para o crescimento pessoal e profissional.",
        skills: ["React.js", "HTML5", "CSS", "Git", "Trello"],
        pdfUrl: "/certificates/frontend-senai.pdf",
    },
    {
        title: "NLW Unite – Node.js",
        issuer: "Rocketseat",
        date: "Abr de 2024",
        description: "Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para validação de dados.",
        skills: ["Node.js", "TypeScript", "Fastify", "Prisma", "SQLite"],
        credentialUrl: "https://app.rocketseat.com.br/certificates/790d0afd-3395-4464-8d5d-943175476c56",
    },
    {
        title: "NLW Unite – React.js",
        issuer: "Rocketseat",
        date: "Abr de 2024",
        description: "Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com TypeScript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js e uso de URL states.",
        skills: ["React.js", "TypeScript", "TailwindCSS", "Vite", "Node.js"],
        credentialUrl: "https://app.rocketseat.com.br/certificates/4d203c10-31d7-45ed-a2b1-5d68fb0df037",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-secondary/10">
            <div className="container mx-auto relative z-10">

                {/* === FORMAÇÃO ACADÊMICA === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
                            Conhecimento
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-accent bg-clip-text text-transparent">
                            Formação Acadêmica
                        </span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Base teórica e imersão prática para construir soluções sólidas e modernas.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6 mb-14">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500 shadow-glow">
                                        <edu.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <Card className="p-4 md:p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 group-hover:shadow-glow h-full">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-primary font-medium">{edu.institution}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <Badge variant="secondary" className="w-fit bg-secondary/50 text-muted-foreground border-border whitespace-nowrap">
                                                    {edu.period}
                                                </Badge>
                                                {edu.status && (
                                                    <Badge variant="outline" className="w-fit border-primary/30 text-primary text-[10px] uppercase tracking-wider">
                                                        {edu.status}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {edu.description}
                                        </p>

                                        {edu.skills && (
                                            <div className="flex flex-wrap gap-2">
                                                {edu.skills.map((skill) => (
                                                    <span key={skill} className="px-2.5 py-1 bg-primary/5 text-primary text-[10px] rounded-md border border-primary/10 font-medium">
                                                        {skill}
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

                {/* === CERTIFICADOS === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
                            Conquistas
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        <span className="bg-gradient-accent bg-clip-text text-transparent">
                            Certificados
                        </span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-xl mx-auto">
                        Formações complementares e certificações que compõem minha jornada.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            className="group"
                        >
                            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-500 group-hover:shadow-glow h-full flex flex-col">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Award className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                                {cert.title}
                                            </h3>
                                            <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    {/* Botões: Link externo (Rocketseat) ou PDF */}
                                    <div className="flex gap-2 flex-shrink-0">
                                        {cert.credentialUrl && (
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                                                title="Ver certificado online"
                                            >
                                                <ExternalLink className="w-4 h-4 text-primary" />
                                            </a>
                                        )}
                                        {cert.pdfUrl && (
                                            <a
                                                href={cert.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/25 hover:border-red-500/50 transition-all duration-300"
                                                title="Ver certificado em PDF"
                                            >
                                                <FileText className="w-4 h-4 text-red-400" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* PDF Preview */}
                                {cert.pdfUrl && (
                                    <a
                                        href={cert.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block mb-4 rounded-lg border border-border hover:border-primary/40 transition-colors duration-300 relative group/preview"
                                        title="Clique para abrir o PDF completo"
                                        style={{ height: '200px', overflow: 'hidden' }}
                                    >
                                        <iframe
                                            src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=90`}
                                            scrolling="no"
                                            style={{
                                                width: '100%',
                                                height: '230px',
                                                border: 'none',
                                                pointerEvents: 'none',
                                                display: 'block',
                                            }}
                                            title={`Preview - ${cert.title}`}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/40 transition-all duration-300 flex items-center justify-center rounded-lg">
                                            <span className="opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                                                <FileText className="w-3.5 h-3.5" />
                                                Abrir PDF
                                            </span>
                                        </div>
                                    </a>
                                )}

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                                    {cert.description}
                                </p>

                                {/* Skills */}
                                {cert.skills && (
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border">
                                        {cert.skills.map((skill) => (
                                            <span key={skill} className="px-2 py-0.5 bg-primary/5 text-primary text-[10px] rounded-md border border-primary/10 font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
