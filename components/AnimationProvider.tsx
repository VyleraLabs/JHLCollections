"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

export function AnimationProvider({ children, nonce }: { children: React.ReactNode, nonce?: string }) {
    return (
        <LazyMotion features={domAnimation}>
            <ScrollToTop />
            {children}
        </LazyMotion>
    );
}
