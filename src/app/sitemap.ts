import { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://namatran.com'

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: base,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${base}/work`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${base}/about`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]

    const projectRoutes: MetadataRoute.Sitemap = projects.map(p => ({
        url: `${base}/work/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...projectRoutes]
}