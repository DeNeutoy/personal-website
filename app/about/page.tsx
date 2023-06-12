import type { Metadata } from 'next';
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'VP of Developer Experience at Vercel.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Mark.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently the Head of Machine Learning at {` `}
          <a href="https://orbitalmaterials.com/" target="_blank" rel="noopener noreferrer"><b>Orbital Materials</b></a>
          , where I
          lead our foundation model development for materials science. 
        </p>
        <hr/>
        <p>
          When i'm not optimizing large neural networks, I love 
          cooking, playing Go, making wooden tables and riding steel-framed bicycles. 
        </p>
        <p className="mb-8">
          Outside of Orbital Materials, I occasionally advise for startups,
          helping companies improve their Machine Learning function.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/markneumannnn"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/deneutoy"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>

        </div>
      </div>
    </section>
  );
}
