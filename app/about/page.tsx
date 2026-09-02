import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/icons';
import { bio } from 'lib/info';

export const metadata: Metadata = {
  title: 'About',
  description: 'Principal Scientist at Evolutionary Scale',
};

export default function AboutPage() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently a Principal Scientist at {` `}
          <a href="https://evolutionaryscale.ai/" target="_blank" rel="noopener noreferrer"><b>Evolutionary Scale (now part of Biohub)</b></a>
          , where I develop representation learning models for biological data.
        </p>

        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>
        <hr/>
        <p>
          When i'm not optimizing large neural networks, I love 
          cooking, playing Go, making wooden tables and riding steel-framed bicycles. 
        </p>
        <p className="mb-8">
          Outside of Evolutionary Scale, I occasionally advise startups on
          machine learning and technical strategy. Interested in working with me? Learn about my{' '}
          <Link href="/advisory">advisory work</Link>.
        </p>
        <div className="flex items-center justify-center gap-6 border-t border-neutral-200 pt-6 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 md:hidden [&_svg]:h-auto [&_svg]:w-8">
          <a
            aria-label="Twitter"
            className="no-underline transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://twitter.com/markneumannnn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            aria-label="LinkedIn"
            className="no-underline transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://www.linkedin.com/in/mark-neumann-aa3388ab/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            aria-label="Google Scholar"
            className="no-underline transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://scholar.google.com/citations?user=vlrP560AAAAJ&hl=en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt=""
              className="h-9 w-9 dark:invert"
              height={36}
              src="/icons8-google-scholar.svg"
              width={36}
            />
          </a>
          <a
            aria-label="GitHub"
            className="no-underline transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://github.com/deneutoy"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
