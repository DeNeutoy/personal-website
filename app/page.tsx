import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <section>
      <div className="flex items-between md:items-center my-6">
      <h1 className="font-bold text-3xl font-serif mr-12">{name}</h1>

        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>

      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>

      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/markneumannnn"
          >
            <ArrowIcon />
            <p className="h-7">Follow me on Twitter</p>
          </a>
        </li>
        <li>
          <Link href="/blog" className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all" >
            <ArrowIcon />
            <p className="h-7">Read my writing</p>
          </Link>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/deneutoy"
          >
            <ArrowIcon />
            <p className="h-7">See my work</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
