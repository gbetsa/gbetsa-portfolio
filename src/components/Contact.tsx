import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Estado para erros
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    const newErrors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Por favor, preencha seu nome.";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Por favor, preencha seu email.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email inválido.";
      isValid = false;
    }

    if (!subject.trim()) {
      newErrors.subject = "Por favor, preencha o assunto.";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Por favor, escreva sua mensagem.";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    const mailto = `mailto:gbetsacomercial@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Olá,\n\nMeu nome é ${name} (${email})\n\n${message}`
    )}`;

    window.location.href = mailto;
  };

  const inputClass =
    "bg-secondary/50 backdrop-blur-sm border-border focus:border-primary transition-colors h-12 w-full";

  const inputErrorClass = "border-red-500 focus:border-red-500";

  return (
    <section
      id="contact"
      className="py-20 bg-background relative block md:flex md:items-center md:min-h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-green/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col px-4">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
              Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Vamos Trabalhar Juntos
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Estou disponível para novas oportunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-full">
          <div className="md:col-span-3 flex flex-col w-full">
            <Card className="p-6 md:p-10 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 shadow-card flex flex-col w-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`${inputClass} ${
                        errors.name ? inputErrorClass : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${inputClass} ${
                        errors.email ? inputErrorClass : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-foreground"
                  >
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Sobre o que você quer falar?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`${inputClass} ${
                      errors.subject ? inputErrorClass : ""
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2 w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-me sobre seu projeto..."
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-none min-h-[150px] md:min-h-[300px] ${
                      errors.message ? inputErrorClass : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="mt-2 w-full bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300 h-12 text-base font-semibold group flex items-center justify-center"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 flex flex-col justify-start gap-6 w-full">
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 w-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/50 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-foreground">
                    Email
                  </h3>
                  <a
                    href="mailto:gbetsacomercial@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gbetsacomercial@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 w-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/50 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-foreground">
                    Telefone
                  </h3>
                  <a
                    href="tel:+5548991511239"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (48) 99151-1239
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 w-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/50 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-foreground">
                    Localização
                  </h3>
                  <p className="text-muted-foreground">
                    Florianópolis, SC - Brasil
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-tech-cyan/10 backdrop-blur-sm border-primary/30 text-center w-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Disponível para Projetos
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Aceitando novos projetos freelance e oportunidades de
                colaboração
              </p>
              <div className="inline-block px-4 py-2 bg-tech-green/20 rounded-full text-tech-green text-sm font-semibold border border-tech-green/30">
                🟢 Disponível Agora
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
