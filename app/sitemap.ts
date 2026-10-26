import type { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://creatortax.in';

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tools/freelancer-tax-estimator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tools/gst-lut-checklist', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/tools/expense-planner', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/tools/tds-refund-checklist', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/learn', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/for-developers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/for-video-editors', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/for-creators', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/for-designers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/for-freelancers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/editorial-policy', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  const guideRoutes = articles.map((a) => ({
    path: `/guides/${a.id}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const allRoutes = [...staticRoutes, ...guideRoutes];

  return allRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}