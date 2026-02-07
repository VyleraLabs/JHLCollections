"use client";

import React, { useMemo } from "react";
import { m } from "framer-motion";

export const LightstreamEight = () => {
    // Generate random particles for "gold dust"
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.4 + 0.2,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 8,
        }));
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <svg
                viewBox="0 0 400 400"
                className="w-[100%] h-[100%] md:w-[95%] md:h-[95%] opacity-40 md:opacity-60 blur-[1px] md:blur-[2px]"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="gold-stream-main" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="30%" stopColor="#FBEC5D" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                        <stop offset="70%" stopColor="#FBEC5D" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>

                    <filter id="royal-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Harmonized Parallel Pathways - All Clockwise */}
                <g filter="url(#royal-glow)">
                    {/* Path 1: Core Eight */}
                    <m.path
                        d="M 200,200 
                           C 200,100 320,100 320,200 
                           C 320,300 80,300 80,200
                           C 80,100 200,100 200,200 Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="3"
                        strokeDasharray="140 1000"
                        animate={{
                            strokeDashoffset: [0, -1140],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Path 2: Parallel Inner (Tightly Bound) */}
                    <m.path
                        d="M 200,200 
                           C 200,110 310,110 310,200 
                           C 310,290 90,290 90,200
                           C 90,110 200,110 200,200 Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="1"
                        strokeDasharray="100 1100"
                        animate={{
                            strokeDashoffset: [100, -1000],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Path 3: Parallel Outer (Slightly Offset) */}
                    <m.path
                        d="M 200,200 
                           C 200,90 330,90 330,200 
                           C 330,310 70,310 70,200
                           C 70,90 200,90 200,200 Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="0.8"
                        strokeDasharray="180 1200"
                        animate={{
                            strokeDashoffset: [-200, -1400],
                        }}
                        transition={{
                            duration: 11,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Path 4: Wide Dynamic Sweep (Still Parallel Flow) */}
                    <m.path
                        d="M 200,200 
                           C 220,80 340,80 340,200 
                           C 340,320 60,320 60,200
                           C 60,80 180,80 200,200 Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="1.2"
                        strokeDasharray="220 1500"
                        animate={{
                            strokeDashoffset: [500, -1000],
                        }}
                        transition={{
                            duration: 13,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        opacity="0.6"
                    />
                </g>

                {/* Synchronized Gold Dust */}
                <g>
                    {particles.map((p) => (
                        <m.circle
                            key={p.id}
                            r={p.size}
                            fill="#FBEC5D"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, p.opacity, 0],
                                scale: [0.5, 1.2, 0.5],
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                delay: p.delay,
                            }}
                        >
                            <animateMotion
                                dur={`${p.duration * 2}s`}
                                repeatCount="indefinite"
                                path="M 200,200 C 200,100 320,100 320,200 C 320,300 80,300 80,200 C 80,100 200,100 200,200"
                                begin={`${p.delay}s`}
                            />
                        </m.circle>
                    ))}
                </g>
            </svg>
        </div>
    );
};
