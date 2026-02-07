"use client";

import React from "react";
import { m } from "framer-motion";

export const LightstreamEight = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <svg
                viewBox="0 0 400 400"
                className="w-[100%] h-[100%] md:w-[80%] md:h-[80%] opacity-20 md:opacity-25"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="gradient-gold-stream" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                    <filter id="vector-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="blur" in2="SourceGraphic" operator="over" />
                    </filter>
                </defs>

                {/* Figure 1: Clockwise Outer */}
                <m.path
                    d="M 200,200 
             C 200,100 300,100 300,200 
             C 300,300 100,300 100,200
             C 100,100 200,100 200,200
             C 200,300 300,300 300,200
             C 300,100 100,100 100,200
             C 100,300 200,300 200,200 Z"
                    fill="none"
                    stroke="url(#gradient-gold-stream)"
                    strokeWidth="1.5"
                    strokeDasharray="120 1800"
                    animate={{
                        strokeDashoffset: [0, -1920],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    filter="url(#vector-glow)"
                />

                {/* Figure 2: Counter-Clockwise Inner */}
                <m.path
                    d="M 200,200 
             C 200,300 100,300 100,200 
             C 100,100 300,100 300,200
             C 300,300 200,300 200,200 Z"
                    fill="none"
                    stroke="url(#gradient-gold-stream)"
                    strokeWidth="1"
                    strokeDasharray="80 1200"
                    animate={{
                        strokeDashoffset: [0, 1280],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    filter="url(#vector-glow)"
                />

                {/* Figure 3: Wide Sweep */}
                <m.path
                    d="M 200,200 
             C 200,50 350,50 350,200 
             C 350,350 50,350 50,200
             C 50,50 200,50 200,200 Z"
                    fill="none"
                    stroke="url(#gradient-gold-stream)"
                    strokeWidth="0.8"
                    strokeDasharray="200 2500"
                    animate={{
                        strokeDashoffset: [500, -2000],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    filter="url(#vector-glow)"
                    opacity="0.5"
                />
            </svg>
        </div>
    );
};
