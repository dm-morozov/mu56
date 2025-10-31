// build-sitemap.js  ← в корне проекта
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const today = new Date().toISOString().split('T')[0]
const publicDir = path.join(__dirname, 'public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <url>
    <loc>https://mu56.ru/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://mu56.ru/og-image.jpg</image:loc>
      <image:title>Мир Улыбок — Новогодние праздники в Оренбурге</image:title>
      <image:caption>Дед Мороз и Снегурочка на детском празднике</image:caption>
    </image:image>
  </url>

  <url>
    <loc>https://mu56.ru/#gallery</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://mu56.ru/#prices</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://mu56.ru/#booklet</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://mu56.ru/#contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>`.trim()

fs.writeFileSync(sitemapPath, sitemap)
console.log('sitemap.xml создан:', sitemapPath)
