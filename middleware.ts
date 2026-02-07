import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    // Define strict CSP
    // We keep 'unsafe-eval' only if absolutely necessary, but since we are hardening, let's try WITHOUT it first.
    // Actually, framer-motion and some Next.js features often need it. I'll include it for stability for now, 
    // but remove 'unsafe-inline' in favor of the nonce.
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https://webadmin.jhlcollections.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://webadmin.jhlcollections.com;
    font-src 'self' data:;
    connect-src 'self' https://webadmin.jhlcollections.com;
    frame-src 'self';
    base-uri 'self';
    form-action 'self';
    object-src 'none';
  `.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', cspHeader);

    // Advanced Stealth: Mask Server & Technology
    response.headers.set('Server', 'JHL-Web-Engine');
    response.headers.set('X-Powered-By', 'Elite-Tech');

    // Lighthouse Optimization: Enable bfcache by using 'no-cache' instead of 'no-store'
    // This allows the browser to re-use the page for back/forward navigation 
    // without losing the security of fresh header re-validation.
    response.headers.set('Cache-Control', 'no-cache, private, must-revalidate');

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};
