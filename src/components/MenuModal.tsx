import { useState, useRef, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="fixed top-5 right-4 z-50">
      {/* Botão lateral fixo que alterna */}
      <Button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 p-3 rounded-lg bg-gradient-card text-white shadow-lg hover:bg-gradient-card/80 transition-all"
        style={{ boxShadow: `0 4px 15px hsl(var(--primary) / 0.5)` }}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}{" "}
      </Button>

      {/* Dropdown Modal */}
      {open && (
        <div
          ref={modalRef}
          className="mt-2 w-64 bg-gradient-card backdrop-blur-md rounded-lg p-4 flex flex-col gap-4 absolute right-0"
          style={{ boxShadow: `0 4px 15px hsl(var(--primary) / 0.5)` }}
        >
          {/* Menu */}
          <nav className="flex flex-col gap-3 mt-2">
            <a
              href="#hero"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white hover:text-primary/80 transition-colors"
            >
              Início
            </a>
            <a
              href="#tech"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white hover:text-primary/80 transition-colors"
            >
              Stacks
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white hover:text-primary/80 transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white hover:text-primary/80 transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MenuLateralModal;
