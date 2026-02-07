import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            {
                userAgent: ['GPTBot', 'Applebot-Extended', 'Applebot'],
                allow: '/',
            }
        ],
        sitemap: 'https://jhl-collections.vercel.app/sitemap.xml',
    }
}
