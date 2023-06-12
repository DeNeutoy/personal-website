import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://markneumann.xyz/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/about', '/blog'].map(
    (route) => ({
      url: `https://markneumann.xyz${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
