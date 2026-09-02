import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'weekly', priority: 1 },
    ...products.map((p) => ({
      url: `${site.url}/collection/${p.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
