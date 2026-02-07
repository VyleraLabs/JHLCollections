"use client";

import { LazyMotion, domAnimation } from "framer-motion";

export function AnimationProvider({ children, nonce }: { children: React.ReactNode, nonce?: string }) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    );
}
