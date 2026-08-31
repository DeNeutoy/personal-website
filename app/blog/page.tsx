import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export default async function BlogPage() {
  return (
    <section>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="group block py-2"
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-medium transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                  {post.title}
                </h2>
                <time
                  className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400"
                  dateTime={post.publishedAt}
                >
                  {dateFormatter.format(new Date(post.publishedAt))}
                </time>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
