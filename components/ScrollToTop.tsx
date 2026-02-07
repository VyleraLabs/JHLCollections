"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Standard browser scroll reset
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // "instant" for immediate reset before animation
        });

        // Forced smooth scroll slightly after to ensure any layout shifts are accounted for
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
