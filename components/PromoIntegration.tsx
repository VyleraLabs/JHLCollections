"use client";

import React, { useState, useEffect } from "react";

interface TableCheckOffer {
    id: string;
    title: string;
    description: string;
    price: string;
    link: string;
}

export const PromoIntegration = () => {
    const [offers, setOffers] = useState<TableCheckOffer[]>([]);

    const fetchTableCheckData = async () => {
        // Placeholder function for external TableCheck integration
        // For now, return mock data derived from Main Course PDF
        const mockOffers: TableCheckOffer[] = [
            {
                id: "tang-dynasty",
                title: "Tang Dynasty Set Menu",
                description: "Experience the ultimate culinary journey with our specialized set menu.",
                price: "IDR 4,888,000",
                link: "https://www.tablecheck.com/en/jhl-solitaire-gading-serpong-royal-eight/reserve/experiences",
            },
        ];
        setOffers(mockOffers);
    };

    useEffect(() => {
        fetchTableCheckData();
    }, []);

    return null; // This component handles data sync logic
};
