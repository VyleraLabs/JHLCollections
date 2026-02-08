// Event Venue Schema for Events/Meetings Page
export function EventVenueSchema() {
    const venues = [
        {
            "@context": "https://schema.org",
            "@type": "EventVenue",
            "name": "Sky Ballroom",
            "description": "Grand pillarless ballroom perfect for weddings and large events, accommodating up to 1000 guests",
            "maximumAttendeeCapacity": 1000,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
                "addressLocality": "Tangerang",
                "addressRegion": "Banten",
                "postalCode": "15810",
                "addressCountry": "ID"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Audio-Visual Equipment", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Stage", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Pillarless Design", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "LED Screens", "value": true }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "EventVenue",
            "name": "Sky Garden",
            "description": "Elegant outdoor venue with garden setting, perfect for intimate weddings and cocktail receptions",
            "maximumAttendeeCapacity": 300,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
                "addressLocality": "Tangerang",
                "addressRegion": "Banten",
                "postalCode": "15810",
                "addressCountry": "ID"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Outdoor Setting", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Garden View", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Event Lighting", "value": true }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "MeetingRoom",
            "name": "Royal Eight Private Dining Rooms",
            "description": "8 exclusive VIP private dining rooms at Royal Eight Chinese Restaurant, perfect for business meetings and celebrations",
            "maximumAttendeeCapacity": 50,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
                "addressLocality": "Tangerang",
                "addressRegion": "Banten",
                "postalCode": "15810",
                "addressCountry": "ID"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Private Rooms", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Catering Service", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "AV Equipment", "value": true }
            ]
        }
    ];

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jhlcollections.com/jhlsolitaire" },
            { "@type": "ListItem", "position": 2, "name": "Events", "item": "https://jhlcollections.com/jhlsolitaire/events" }
        ]
    };

    return (
        <>
            {venues.map((venue, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(venue) }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}
