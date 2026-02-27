import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
    value: string;
    duration?: number;
}

const Counter = ({ value, duration = 2 }: CounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Extract number and suffix (e.g., "4" and "+", or "100" and "%")
    const numericValue = parseInt(value, 10);
    const suffix = value.replace(/[0-9]/g, "");

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(numericValue);
        }
    }, [isInView, numericValue, spring]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};

export default Counter;
