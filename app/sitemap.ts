import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://airness-web.vercel.app'
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/truth`, lastModified: new Date() },
    { url: `${baseUrl}/purpose`, lastModified: new Date() },
    { url: `${baseUrl}/purpose-en`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
  ]
}