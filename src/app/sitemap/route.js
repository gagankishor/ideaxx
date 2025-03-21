export async function GET() {
    const urls = [
      { loc: 'https://idxsolana.io/', lastmod: '2025-01-01', priority: 1.0 },
      { loc: 'https://idxsolana.io/about', lastmod: '2025-01-01', priority: 0.8 },
      { loc: 'https://idxsolana.io/contact', lastmod: '2025-01-01', priority: 0.5 },
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          ({ loc, lastmod, priority }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
      </url>`
        )
        .join('')}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  