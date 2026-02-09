"use client";

import React, { useMemo } from "react";
import { m } from "framer-motion";

export const LightstreamEight = () => {
    const BRUSH_DURATION = 10; // Slower, more majestic pace
    const PATH_DATA = "M 200,200 C 200,100 320,100 320,200 C 320,300 80,300 80,200 C 80,100 200,100 200,200 Z";

    // Glitter dust particles that stick strictly to the brush head
    const particles = useMemo(() => {
        return Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            size: Math.random() * 0.8 + 0.3, // Smaller "glitter"
            opacity: Math.random() * 0.6 + 0.2,
            // Slight variation in timing within the brush head cluster
            delayOffset: (Math.random() - 0.5) * 0.2,
            // Local jitter relative to brush head
            xJitter: (Math.random() - 0.5) * 15,
            yJitter: (Math.random() - 0.5) * 15,
        }));
    }, []);

    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    if (!isDesktop) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <svg
                viewBox="0 0 400 400"
                className="w-[100%] h-[100%] md:w-[95%] md:h-[95%] opacity-60 md:opacity-80 blur-[0.5px] md:blur-[1px]"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Golden Calligraphy ink gradient */}
                    <linearGradient id="calligraphy-ink" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="15%" stopColor="#FBEC5D" stopOpacity="0.4" />
                        <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#FFF9C4" stopOpacity="1" />
                        <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.9" />
                        <stop offset="85%" stopColor="#FBEC5D" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>

                    <filter id="brush-aura" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="12" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    {/* Tapered Brush Mask - simulated by multiple strokes */}
                </defs>

                <g filter="url(#brush-aura)">
                    {/* THE CALLIGRAPHY STROKE: Multi-layered for organic "ink" feel */}

                    {/* 1. Core Pressure (Thickest) */}
                    <m.path
                        d={PATH_DATA}
                        fill="none"
                        stroke="url(#calligraphy-ink)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="160 1000"
                        animate={{ strokeDashoffset: [0, -1140] }}
                        transition={{ duration: BRUSH_DURATION, repeat: Infinity, ease: "linear" }}
                    />

                    {/* 2. Secondary "Bristle" trails */}
                    {[2, -2, 4, -4].map((offset, i) => (
                        <m.path
                            key={`bristle-${i}`}
                            d={PATH_DATA}
                            fill="none"
                            stroke="url(#calligraphy-ink)"
                            strokeWidth={2 - (Math.abs(offset) * 0.2)}
                            strokeDasharray={`${120 - Math.abs(offset) * 10} 1000`}
                            style={{
                                transform: `translate(${offset}px, ${offset * 0.3}px)`,
                                opacity: 0.6
                            }}
                            animate={{ strokeDashoffset: [0, -1140] }}
                            transition={{ duration: BRUSH_DURATION, repeat: Infinity, ease: "linear" }}
                        />
                    ))}

                    {/* 3. High-Light Glow Core (Thinnest, bright center) */}
                    <m.path
                        d={PATH_DATA}
                        fill="none"
                        stroke="#FFF9C4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="80 1000"
                        style={{ opacity: 0.8 }}
                        animate={{ strokeDashoffset: [40, -1100] }}
                        transition={{ duration: BRUSH_DURATION, repeat: Infinity, ease: "linear" }}
                    />
                </g>

                {/* GLITTER DUST: Clustered strictly and following the brush head */}
                <g>
                    {particles.map((p) => (
                        <m.circle
                            key={p.id}
                            r={p.size}
                            fill="#FFF9C4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, p.opacity, 0], scale: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: BRUSH_DURATION - 1.5 }}
                        >
                            <animateMotion
                                dur={`${BRUSH_DURATION}s`}
                                repeatCount="indefinite"
                                path={PATH_DATA}
                                begin={`${p.delayOffset}s`}
                            />
                        </m.circle>
                    ))}
                </g>
            </svg>
        </div>
    );
};
