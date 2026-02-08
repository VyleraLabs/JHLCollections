import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/_next/'],
                disallow: ['/api/'],
            },
            {
                userAgent: ['GPTBot', 'Applebot-Extended', 'Applebot', 'Google-Extended', 'Vercel', 'vercel-insights'],
                allow: '/',
            }
        ],
        sitemap: 'https://jhl-collections.vercel.app/sitemap.xml',
    }
}
