import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    const trailingX = useSpring(0, { stiffness: 250, damping: 20 });
    const trailingY = useSpring(0, { stiffness: 250, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            trailingX.set(e.clientX);
            trailingY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseOut = () => {
            setIsVisible(false);
        }

        const handleMouseIn = () => {
            setIsVisible(true);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseOut);
        document.addEventListener("mouseenter", handleMouseIn);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseOut);
            document.removeEventListener("mouseenter", handleMouseIn);
        };
    }, [isVisible, mouseX, mouseY, trailingX, trailingY]);

    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 pointer-events-none z-[9999]">
                    {/* Precise Dot */}
                    <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full fixed top-0 left-0 mix-blend-difference"
                        style={{
                            x: mouseX,
                            y: mouseY,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    />
                    {/* Trailing Circle */}
                    <motion.div
                        className="w-8 h-8 border border-primary/40 rounded-full fixed top-0 left-0"
                        animate={{
                            scale: isHovering ? 1.8 : 1,
                            backgroundColor: isHovering ? "rgba(var(--primary), 0.1)" : "transparent",
                            borderColor: isHovering ? "hsl(var(--primary))" : "rgba(var(--primary), 0.4)",
                        }}
                        style={{
                            x: trailingX,
                            y: trailingY,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default CustomCursor;
