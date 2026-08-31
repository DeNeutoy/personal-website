import Image from 'next/image';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/icons';
import { name, about, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <section className="flex flex-col md:flex-row-reverse md:items-center md:justify-end md:gap-16">
      <div className="my-6 flex shrink-0 flex-col items-center gap-2 md:my-0">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={200}
          priority
        />
        <h1 className="text-center text-3xl font-bold leading-tight font-serif">
          <span className="block">Mark Neumann</span>
        </h1>
        <div className="mt-1 flex items-center gap-5 text-neutral-900 dark:text-neutral-100">
          <a
            aria-label="Twitter"
            className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://twitter.com/markneumannnn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            aria-label="LinkedIn"
            className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://www.linkedin.com/in/mark-neumann-aa3388ab/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            aria-label="GitHub"
            className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://github.com/deneutoy"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className="max-w-[520px]">
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
      </div>
    </section>
  );
}
