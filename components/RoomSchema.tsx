// Room/Accommodation Schema for Rooms Page
export function RoomSchema() {
    const rooms = [
        {
            "@type": "Accommodation",
            "name": "Premier Room",
            "description": "Elegant 35 sqm room with modern amenities and city views",
            "occupancy": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 2
            },
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": 35,
                "unitCode": "MTK"
            },
            "bed": {
                "@type": "BedDetails",
                "numberOfBeds": 1,
                "typeOfBed": "King or Twin"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Coffee Maker", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true }
            ]
        },
        {
            "@type": "Accommodation",
            "name": "Executive Suite",
            "description": "Spacious 60 sqm suite with separate living area and premium amenities",
            "occupancy": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3
            },
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": 60,
                "unitCode": "MTK"
            },
            "bed": {
                "@type": "BedDetails",
                "numberOfBeds": 1,
                "typeOfBed": "King"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Coffee Maker", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Living Room", "value": true }
            ]
        },
        {
            "@type": "Accommodation",
            "name": "JHL Solitaire Signature",
            "description": "Luxurious 85 sqm signature suite with panoramic views and butler service",
            "occupancy": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3
            },
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": 85,
                "unitCode": "MTK"
            },
            "bed": {
                "@type": "BedDetails",
                "numberOfBeds": 1,
                "typeOfBed": "King"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Coffee Maker", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Butler Service", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Living Room", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Dining Area", "value": true }
            ]
        }
    ];

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jhlcollections.com/jhlsolitaire" },
            { "@type": "ListItem", "position": 2, "name": "Rooms", "item": "https://jhlcollections.com/jhlsolitaire/rooms" }
        ]
    };

    return (
        <>
            {rooms.map((room, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(room) }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}
