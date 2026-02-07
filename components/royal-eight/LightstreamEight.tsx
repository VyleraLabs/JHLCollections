"use client";

import React, { useMemo } from "react";
import { m } from "framer-motion";

export const LightstreamEight = () => {
    // Generate random particles for "gold dust"
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <svg
                viewBox="0 0 400 400"
                className="w-[100%] h-[100%] md:w-[90%] md:h-[90%] opacity-40 md:opacity-50 blur-[1px] md:blur-[2px]"
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

                    <mask id="dust-mask">
                        <rect x="0" y="0" width="400" height="400" fill="white" />
                    </mask>
                </defs>

                {/* The Core Pathways */}
                <g filter="url(#royal-glow)">
                    {/* Main Eight Path - Clockwise */}
                    <m.path
                        d="M 200,200 
               C 200,100 320,100 320,200 
               C 320,300 80,300 80,200
               C 80,100 200,100 200,200
               Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="2.5"
                        strokeDasharray="150 1000"
                        animate={{
                            strokeDashoffset: [0, -1150],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Secondary Path - Counter Clockwise */}
                    <m.path
                        d="M 200,200 
               C 200,300 320,300 320,200 
               C 320,100 80,100 80,200
               C 80,300 200,300 200,200
               Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="1.5"
                        strokeDasharray="100 1200"
                        animate={{
                            strokeDashoffset: [0, 1300],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Elegant Sweep 1 */}
                    <m.path
                        d="M 200,200 
               C 250,50 380,50 380,200 
               C 380,350 20,350 20,200
               C 20,50 150,50 200,200 Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="1"
                        strokeDasharray="200 1800"
                        animate={{
                            strokeDashoffset: [400, -1400],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Elegant Sweep 2 */}
                    <m.path
                        d="M 200,200 
               C 150,350 20,350 20,200 
               C 20,50 380,50 380,200
               C 380,350 250,350 200,200 Z"
                        fill="none"
                        stroke="url(#gold-stream-main)"
                        strokeWidth="0.8"
                        strokeDasharray="180 2000"
                        animate={{
                            strokeDashoffset: [-200, 1800],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </g>

                {/* Gold Dust Particles */}
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
                            {/* This is a trick to make them follow the path roughly by grouping them */}
                            <animateMotion
                                dur={`${p.duration * 2}s`}
                                repeatCount="indefinite"
                                path="M 200,200 C 200,100 320,100 320,200 C 320,300 80,300 80,200 C 80,100 200,100 200,200"
                                begin={`${p.delay}s`}
                            />
                        </m.circle>
                    ))}
                    {particles.slice(0, 20).map((p) => (
                        <m.circle
                            key={`dust2-${p.id}`}
                            r={p.size * 0.8}
                            fill="#D4AF37"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, p.opacity * 0.7, 0],
                                scale: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: p.duration * 1.5,
                                repeat: Infinity,
                                delay: p.delay + 1,
                            }}
                        >
                            <animateMotion
                                dur={`${p.duration * 3}s`}
                                repeatCount="indefinite"
                                path="M 200,200 C 200,300 320,300 320,200 C 320,100 80,100 80,200 C 80,300 200,300 200,200"
                                begin={`${p.delay}s`}
                            />
                        </m.circle>
                    ))}
                </g>
            </svg>
        </div>
    );
};
