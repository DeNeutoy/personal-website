import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Other projects.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Projects</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        A variety of other projects i've been involved with and websites i've
        made.
      </p>

      <Link
        className="flex flex-col space-y-1 mb-4 max-w-lg"
        href="https://readablerecipes.com"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <h2 className="font-bold text-xl">Readable Recipes</h2>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          A recipe website without all the hellish ads and cookies that come
          with typical online recipes.
        </p>
      </Link>
      <Link
        className="flex flex-col space-y-1 mb-4 max-w-lg"
        href="https://albionsupperclub.com"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <h2 className="font-bold text-xl">The Albion Supper Club</h2>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          A Seattle based supper club, where I cook English food for friends. Coming 2024. 
        </p>
      </Link>
      <Link
        className="flex flex-col space-y-1 mb-4 max-w-lg"
        href="https://deneutoy.github.io/savethenhs/"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <h2 className="font-bold text-xl">Save the NHS</h2>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          A visual essay about the state of the NHS (2017).
        </p>
      </Link>
      <Link
        className="flex flex-col space-y-1 mb-4 max-w-lg"
        href="https://deneutoy.github.io/iclr/"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <h2 className="font-bold text-xl">The Best Rejected Papers at ICLR</h2>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          An analysis of the citations of papers rejected from ICLR.
        </p>
      </Link>
      <Link
        className="flex flex-col space-y-1 mb-4 max-w-lg"
        href="https://deneutoy.github.io/best-rejected-papers/"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <h2 className="font-bold text-xl">SNOR v1 - The Structured, Normalized OpenReview Dataset</h2>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
        A dataset of 38,262 linked records between OpenReview submissions and a dynamic academic graph, as well as 462,995 structured comments from reviewers.
        </p>
      </Link>

      <Link
        className="flex flex-col space-y-1 mb-4 max-w-lg"
        href="https://roundupmail.com"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <h2 className="font-bold text-xl">Roundup Mail</h2>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Create collaborative newsletters with your friends/coworkers.
        </p>
      </Link>



    </section>
  );
}
