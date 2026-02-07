"use client";

import React, { useMemo } from "react";
import { m } from "framer-motion";

export const LightstreamEight = () => {
    // Generate random particles for "gold dust" clustered near the brush head
    const particles = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            size: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 3 + 4,
            delay: Math.random() * -10, // Negative delay to pre-populate path
        }));
    }, []);

    const BRUSH_DURATION = 8;
    const PATH_DATA = "M 200,200 C 200,100 320,100 320,200 C 320,300 80,300 80,200 C 80,100 200,100 200,200 Z";

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <svg
                viewBox="0 0 400 400"
                className="w-[100%] h-[100%] md:w-[95%] md:h-[95%] opacity-50 md:opacity-70 blur-[1.5px] md:blur-[2.5px]"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="gold-brush-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="20%" stopColor="#FBEC5D" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                        <stop offset="80%" stopColor="#FBEC5D" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>

                    <filter id="brush-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Single Synchronized Brush Stroke */}
                <g filter="url(#brush-glow)">
                    {/* The "Thick" base of the brush */}
                    {[0, 1.5, -1.5].map((offset, i) => (
                        <m.path
                            key={`brush-layer-${i}`}
                            d={PATH_DATA}
                            fill="none"
                            stroke="url(#gold-brush-gradient)"
                            strokeWidth={3 - Math.abs(offset)}
                            strokeDasharray="180 1000"
                            style={{
                                transform: `translate(${offset}px, ${offset}px)`,
                                opacity: 1 - Math.abs(offset) / 5
                            }}
                            animate={{
                                strokeDashoffset: [0, -1140],
                            }}
                            transition={{
                                duration: BRUSH_DURATION,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    ))}

                    {/* Fine fibers of the brush for texture */}
                    {[3, -3, 5, -5].map((offset, i) => (
                        <m.path
                            key={`fiber-${i}`}
                            d={PATH_DATA}
                            fill="none"
                            stroke="#FBEC5D"
                            strokeWidth="0.5"
                            strokeDasharray="120 1000"
                            style={{
                                transform: `translate(${offset}px, ${offset * 0.5}px)`,
                                opacity: 0.4
                            }}
                            animate={{
                                strokeDashoffset: [0, -1140],
                            }}
                            transition={{
                                duration: BRUSH_DURATION,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    ))}
                </g>

                {/* Gold Dust Particles following the brush lead */}
                <g>
                    {particles.map((p) => (
                        <m.circle
                            key={p.id}
                            r={p.size}
                            fill="#FBEC5D"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, p.opacity, 0],
                                scale: [0.5, 1.5, 0.5],
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                delay: p.delay,
                            }}
                        >
                            <animateMotion
                                dur={`${BRUSH_DURATION}s`}
                                repeatCount="indefinite"
                                path={PATH_DATA}
                                begin={`${p.delay}s`}
                            />
                        </m.circle>
                    ))}
                </g>
            </svg>
        </div>
    );
};
