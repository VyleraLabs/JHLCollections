// Global Hotel Schema - appears on all pages (SERVER COMPONENT for SEO)
export function GlobalHotelSchema() {
    const hotelSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "JHL Solitaire Gading Serpong",
        "description": "A 5-star luxury hotel in Gading Serpong, Tangerang. Experience iconic diamond-shaped architecture, world-class amenities, and refined elegance.",
        "image": [
            "https://jhl-collections.vercel.app/assets/original/1mc6912000qshhrwa9EE8.jpg",
            "https://jhl-collections.vercel.app/assets/original/12-edit.jpg"
        ],
        "url": "https://jhlcollections.com/jhlsolitaire",
        "@id": "https://jhlcollections.com/jhlsolitaire#hotel",
        "telephone": "+62-21-5421-8888",
        "email": "reservations@jhlsolitaire.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
            "addressLocality": "Tangerang",
            "addressRegion": "Banten",
            "postalCode": "15810",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-6.242831",
            "longitude": "106.625328"
        },
        "starRating": {
            "@type": "Rating",
            "ratingValue": "5"
        },
        "priceRange": "$$$",
        "numberOfRooms": 141,
        "checkinTime": "14:00",
        "checkoutTime": "12:00",
        "petsAllowed": false,
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "Free Wi-Fi",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Infinity Pool",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Fitness Center",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Spa",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Restaurant",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Room Service",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Parking",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Valet Parking",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Meeting Rooms",
                "value": true
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JHL Solitaire Gading Serpong",
        "url": "https://jhlcollections.com/jhlsolitaire",
        "logo": "https://jhl-collections.vercel.app/assets/logo.png",
        "sameAs": [
            "https://www.instagram.com/jhlsolitaire/",
            "https://www.facebook.com/jhlsolitaire"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-21-5421-8888",
            "contactType": "reservations",
            "areaServed": "ID",
            "availableLanguage": ["English", "Indonesian", "Chinese"]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
        </>
    );
}
