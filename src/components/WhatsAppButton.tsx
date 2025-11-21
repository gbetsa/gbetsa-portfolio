import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5548991511239"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50 w-14 h-14 p-3 rounded-lg bg-gradient-card text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      style={{ boxShadow: `0 4px 15px hsl(var(--primary) / 0.5)` }}
      title="Fale comigo no WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
