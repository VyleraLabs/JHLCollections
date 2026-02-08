// Global Hotel Schema - appears on all pages (SERVER COMPONENT for SEO)
export function GlobalHotelSchema() {
    const hotelSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "JHL Solitaire Gading Serpong",
        "legalName": "JHL Solitaire Gading Serpong, a JHL Collections",
        "description": "A 5-star luxury hotel in Gading Serpong, Tangerang. Experience iconic diamond-shaped architecture, world-class amenities, and refined elegance.",
        "foundingDate": "2018-11-27",
        "founder": {
            "@type": "Person",
            "name": "Jerry Hermawan Lo"
        },
        "award": "MURI Record: First Diamond-Shaped Hotel Architecture in Indonesia",
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
        "department": [
            {
                "@type": "Restaurant",
                "name": "Mangan All Day Dining",
                "image": "https://jhlcollections.com/assets/dining/mangan.jpg",
                "servesCuisine": "International",
                "priceRange": "$$",
                "location": { "@type": "Place", "name": "2nd Floor, JHL Solitaire" }
            },
            {
                "@type": "Restaurant",
                "name": "Royal Eight Chinese Dining",
                "image": "https://jhlcollections.com/assets/royal-eight/hero.webp",
                "servesCuisine": "Chinese",
                "priceRange": "$$$",
                "location": { "@type": "Place", "name": "5th Floor, JHL Solitaire" }
            },
            {
                "@type": "Restaurant",
                "name": "Al Gusto Italian Dining & Bar",
                "image": "https://jhlcollections.com/assets/dining/al-gusto.jpg",
                "servesCuisine": "Italian",
                "priceRange": "$$$",
                "location": { "@type": "Place", "name": "2nd Floor, JHL Solitaire" }
            },
            {
                "@type": "BarOrPub",
                "name": "Empress China Bar",
                "image": "https://jhlcollections.com/assets/dining/empress.jpg",
                "servesCuisine": "Cocktails",
                "priceRange": "$$",
                "location": { "@type": "Place", "name": "5th Floor, JHL Solitaire" }
            },
            {
                "@type": "CafeOrCoffeeShop",
                "name": "Castro Lounge & Cigar Bar",
                "servesCuisine": "Coffee",
                "priceRange": "$$",
                "location": { "@type": "Place", "name": "Ground Floor, JHL Solitaire" }
            },
            {
                "@type": "CafeOrCoffeeShop",
                "name": "Le Bléu Cafe des Fleurs",
                "servesCuisine": "Bakery",
                "priceRange": "$$",
                "location": { "@type": "Place", "name": "Ground Floor, JHL Solitaire" }
            },
            {
                "@type": "HealthAndBeautyBusiness",
                "name": "Acqua Spa",
                "description": "Luxury adult wellness & Halotherapy",
                "priceRange": "$$$",
                "location": { "@type": "Place", "name": "JHL Solitaire Wellness Floor" }
            },
            {
                "@type": "HealthAndBeautyBusiness",
                "name": "Acquaree Kids Spa",
                "description": "Indonesia’s first specialized wellness journey for children",
                "priceRange": "$$",
                "location": { "@type": "Place", "name": "JHL Solitaire Wellness Floor" }
            },
            {
                "@type": "BeautySalon",
                "name": "La Mere",
                "description": "Professional beauty and hair salon",
                "priceRange": "$$",
                "location": { "@type": "Place", "name": "JHL Solitaire Wellness Floor" }
            }
        ],
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "Sky Ballroom",
                "value": true,
                "description": "180-degree panoramic city views, 15th floor"
            },
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
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JHL Solitaire Gading Serpong",
        "url": "https://jhlcollections.com/jhlsolitaire",
        "logo": "https://jhl-collections.vercel.app/assets/logo.png",
        "founder": {
            "@type": "Person",
            "name": "Jerry Hermawan Lo"
        },
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
        <div style={{ display: 'none' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
        </div>
    );
}
