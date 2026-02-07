"use client";

import React from "react";
import { m } from "framer-motion";
import { MenuItem } from "@/data/menu";
import Image from "next/image";

interface MenuCardProps {
    item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
    // Use the static imageUrl from data, or fallback if missing (which shouldn't happen now)
    const imageUrl = item.imageUrl || `https://source.unsplash.com/800x600/?${encodeURIComponent(item.imageKeyword)}`;

    return (
        <m.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" // Gold glow
            }}
            className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 hover:border-luxury-gold/50 transition-colors duration-300 flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.isRecommended}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-luxury-gold/30 px-3 py-1 rounded-full">
                    <span className="text-luxury-gold font-serif font-bold tracking-wider">
                        {item.price ? `IDR ${(item.price / 1000).toLocaleString('id-ID')}k` : "MP"}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-white group-hover:text-luxury-gold transition-colors duration-300">
                        {item.name}
                    </h3>
                </div>

                {item.nameChinese && (
                    <p className="text-luxury-gold/60 font-serif text-lg mb-2">{item.nameChinese}</p>
                )}

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-4 flex-grow">
                    {item.description || `Experience the authentic taste of ${item.name}.`}
                </p>

                {item.isRecommended && (
                    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                        <span className="text-xs font-bold text-luxury-gold uppercase tracking-widest flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></span>
                            Chef Recommendation
                        </span>
                    </div>
                )}
            </div>
        </m.div>
    );
};
