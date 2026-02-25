import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Linkedin, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface Post {
    title: string;
    date: string;
    summary: string;
    url: string;
    images: string[];
}

const posts: Post[] = [
    {
        title: "Encontro na ACATE & Floripa Mais Tec",
        date: "5 m",
        summary: "Fui convidado a ir ao Primavera Garden para participar de um encontro com o Moacir Antonio Marafon na ACATE - Associação Catarinense de Tecnologia e compartilhar um pouco da minha experiência no Startup Summit 2025. Foi um momento de troca muito rico, que reforça ainda mais a importância do ecossistema de tecnologia e inovação, e das conexões que ele proporciona. Além disso, pude reencontrar parceiros como o Cesar Abascal e Ivan dos Santos, do Floripa Mais Tec, fortalecendo ainda mais essa rede de colaboração. Gratidão à Ana Elisa Cassal pelo convite e pela oportunidade de viver mais essa experiência!",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7369461193482178560/?originTrackingId=PPqOq94ElUhGeuDuFtUwEA%3D%3D",
        images: ["/news/acate-meeting.jpg", "/news/acate-meeting-2.jpg"]
    },
    {
        title: "Startup Summit 2025: Imersão e Futuro",
        date: "5 m",
        summary: "Foram 3 dias intensos e inesquecíveis. Tive a oportunidade de viver uma experiência incrível no Startup Summit 2025, um dos maiores eventos de inovação, tecnologia e empreendedorismo da América Latina. Foi uma imersão repleta de conexões, aprendizados e trocas valiosas, que reforçaram a força do nosso ecossistema. Me sinto honrado pelo convite da ACATE, Sebrae e Floripa Mais Tec, que tornaram essa experiência possível!",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7368398776312532993/",
        images: ["/news/startup-summit.jpg", "/news/startup-summit-2.jpg"]
    },
    {
        title: "Startup Weekend Florianópolis",
        date: "1 a",
        summary: "Participei do Startup Weekend Florianópolis, onde em 54 horas desenvolvemos uma Startup do zero. Validamos problemas, buscamos soluções e apresentamos o Pitch final! Uma energia surreal com aprendizados inesquecíveis. Agradecimento especial à minha equipe e ao Cesar Abascal, LAB 365 e Sebrae pelo convite.",
        url: "https://www.linkedin.com/posts/gbetsa_floripamaistec-activity-7198402064647909378-3TGk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfQEXwBOmfM_EDHd5nPCROkn5kIoxj1nBg",
        images: ["/news/startup-weekend.jpg", "/news/startup-weekend-2.jpg"]
    }
];

const NewsCarousel = ({ images, title }: { images: string[]; title: string }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi, onSelect]);

    return (
        <div className="relative aspect-video overflow-hidden group/carousel">
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {images.map((img, idx) => (
                        <div key={idx} className="flex-[0_0_100%] min-w-0 h-full">
                            <img
                                src={img}
                                alt={`${title} - image ${idx + 1}`}
                                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={scrollPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-primary/40"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-primary/40"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === selectedIndex ? "bg-primary w-3" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}

            <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 flex items-center gap-1.5 pointer-events-none">
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Posts</span>
            </div>
        </div>
    );
};

const News = () => {
    return (
        <section id="news" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-secondary/5">
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
                            Updates
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-accent bg-clip-text text-transparent">
                            Novidades & LinkedIn
                        </span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Acompanhe meus posts, aprendizados e insights sobre o mundo da tecnologia.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-gradient-card backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-500 group overflow-hidden flex flex-col">
                                <NewsCarousel images={post.images} title={post.title} />

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span className="text-xs">{post.date}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                                        {post.summary}
                                    </p>

                                    <div className="mt-auto">
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                        >
                                            Ler no LinkedIn
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://www.linkedin.com/in/gbetsa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-secondary/50 border border-primary/20 text-sm font-medium text-white hover:bg-primary/10 transition-all duration-300"
                    >
                        Ver todos os posts no LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default News;
