const fs = require('fs');
try {
    const report = JSON.parse(fs.readFileSync('lighthouse-report.json'));
    const categories = report.categories;

    if (categories.performance) {
        console.log(`Performance: ${categories.performance.score * 100}`);
        const audits = report.audits;
        categories.performance.auditRefs.forEach(ref => {
            const audit = audits[ref.id];
            if (audit && audit.score !== null && audit.score < 0.9) {
                console.log(`[${audit.score}] ${audit.title}`);
            }
        });

        // Check LCP
        const lcp = audits['largest-contentful-paint-element'];
        if (lcp && lcp.details && lcp.details.items && lcp.details.items.length > 0) {
            console.log('LCP Element:', lcp.details.items[0].node.nodeLabel);
        }
    }

    if (categories.accessibility) {
        console.log(`Accessibility: ${categories.accessibility.score * 100}`);
        categories.accessibility.auditRefs.forEach(ref => {
            const audit = report.audits[ref.id];
            if (audit && audit.score !== null && audit.score < 1) {
                console.log(`[FAIL] ${audit.title}`);
            }
        });
    }

} catch (e) {
    console.error(e);
}
