import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { MeetingRoomsHero } from "@/components/events/MeetingRoomsHero";
import { MeetingRoomsContent } from "@/components/events/MeetingRoomsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Luxury Meeting Rooms | JHL Solitaire Gading Serpong",
    description: "Host your business meetings in style at JHL Solitaire. Featuring 7 luxury meeting rooms including Citrine, Zircon, and Lapis Lazuli with high-end amenities.",
};

const meetingRooms = [
    {
        name: "Citrine",
        description: "This 92-square-meter space on the 6th floor offers a functional layout with a 2.4-meter ceiling. It is ideal for mid-sized meetings or corporate gatherings, providing a conducive environment for productive discussions.",
        size: "92 m²",
        ceiling: "2.4 m",
        specs: { uShape: 36, classRoom: 45, boardRoom: 30, theatre: 50, roundTable: 32, cocktail: 60 },
        image: "/assets/meetings/citrine.webp"
    },
    {
        name: "Zircon",
        description: "Located on the 6th floor, this 92-square-meter venue features a modern design and a 2.4-meter ceiling, making it perfect for hosting meetings or workshops with flexibility and convenience.",
        size: "92 m²",
        ceiling: "2.4 m",
        specs: { uShape: 36, classRoom: 45, boardRoom: 30, theatre: 50, roundTable: 32, cocktail: 60 },
        image: "/assets/meetings/zircon.webp"
    },
    {
        name: "Lapis Lazuli",
        description: "Spanning 92 square meters, this venue is situated on the 6th floor with a 2.4-meter ceiling. It offers a versatile setup suitable for corporate events or private functions, combining comfort with practicality.",
        size: "92 m²",
        ceiling: "2.4 m",
        specs: { uShape: 23, classRoom: 25, boardRoom: 20, theatre: 40, roundTable: 24, cocktail: 20 },
        image: "/assets/meetings/lapis-lazuli.webp"
    },
    {
        name: "Moonstone",
        description: "This 80-square-meter meeting space on the 6th floor is designed for efficiency and focus. With a 2.4-meter ceiling, it is the perfect choice for small to medium-sized gatherings that demand a professional atmosphere.",
        size: "80 m²",
        ceiling: "2.4 m",
        specs: { uShape: 23, classRoom: 25, boardRoom: 24, theatre: 40, roundTable: 24, cocktail: 25 },
        image: "/assets/meetings/moonstone.webp"
    },
    {
        name: "Garnet",
        description: "Featuring 80 square meters of space on the 6th floor, this room offers a welcoming environment with a 2.4-meter ceiling. It is ideal for board meetings, brainstorming sessions, or private events.",
        size: "80 m²",
        ceiling: "2.4 m",
        specs: { uShape: 35, classRoom: 40, boardRoom: 25, theatre: 45, roundTable: 32, cocktail: 50 },
        image: "/assets/meetings/garnet.webp"
    },
    {
        name: "Topaz",
        description: "A stylish 80-square-meter space on the 6th floor, complemented by a 2.4-meter ceiling, this venue is designed to host gatherings with ease, providing a polished setting for any event.",
        size: "80 m²",
        ceiling: "2.4 m",
        specs: { uShape: 35, classRoom: 40, boardRoom: 25, theatre: 45, roundTable: 32, cocktail: 50 },
        image: "/assets/meetings/topaz.webp"
    },
    {
        name: "Tourmaline",
        description: "The 67-square-meter Tourmaline Room on the 6th floor boasts a sleek design and a 2.4-meter ceiling. It is a versatile choice for intimate meetings or small-scale events, ensuring an efficient and comfortable experience.",
        size: "67 m²",
        ceiling: "2.4 m",
        specs: { uShape: 15, classRoom: 15, boardRoom: 15, theatre: 25, roundTable: 16, cocktail: 20 },
        image: "/assets/meetings/tourmaline.webp"
    }
];

export default function MeetingRooms() {
    const meetingRoomsSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "JHL Solitaire Gading Serpong",
        "description": "Luxury meeting rooms and event spaces in Gading Serpong.",
        "containsPlace": meetingRooms.map(room => ({
            "@type": "MeetingRoom",
            "name": room.name + " at JHL Solitaire",
            "description": room.description,
            "image": "https://jhlsolitairegadingserpong.com" + room.image,
            "floorLevel": "6",
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": parseInt(room.size),
                "unitCode": "MTK"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "High Ceiling", "value": room.ceiling },
                { "@type": "LocationFeatureSpecification", "name": "Audio Visual Equipment", "value": "true" }
            ],
            "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": Math.max(...Object.values(room.specs)),
                "unitCode": "P"
            }
        }))
    };

    return (
        <main className="bg-zinc-950 min-h-screen text-white overflow-x-hidden selection:bg-brand-gold selection:text-brand-dark">
            <JsonLd data={meetingRoomsSchema} />
            <Header />

            {/* Hero Section - Optimized Client Component */}
            <MeetingRoomsHero />

            {/* Main Content - Navigation & Rooms */}
            <MeetingRoomsContent />

            <Footer />
        </main>
    );
}
