import { useState, useRef, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const MenuLateralModal = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Stacks", href: "#tech" },
    { label: "Habilidades", href: "#soft-skills" },
    { label: "Experiência", href: "#experience" },
    { label: "Formação", href: "#education" },
    { label: "Projetos", href: "#projects" },
    { label: "Novidades", href: "#news" },
    { label: "Contato", href: "#contact" },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      x: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 400,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    } as any,
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      x: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 300 }
    } as any
  };

  return (
    <div className="fixed top-5 right-4 z-50">
      {/* Botão lateral fixo que alterna */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="w-12 h-12 p-3 rounded-xl bg-gradient-card text-white shadow-lg hover:border-primary/40 transition-all border border-white/5"
          style={{ boxShadow: `0 4px 20px hsl(var(--primary) / 0.2)` }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Dropdown Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={modalRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-4 w-64 bg-gradient-card border border-white/10 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-1 absolute right-0 origin-top-right shadow-2xl"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />

            <nav className="relative z-10 flex flex-col">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  variants={itemVariants}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-white/80 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-200 flex items-center justify-between group"
                >
                  {item.label}
                  <motion.span
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="text-xs text-primary font-bold"
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuLateralModal;
