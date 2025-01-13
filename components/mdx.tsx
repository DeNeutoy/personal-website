import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function MultiImage(props) {
  const cols = props.cols || 4;
  // This is a hack for tailwind, because it needs to know the number of columns
  // at compile time.
  const gridColsClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
    }[cols] || "grid-cols-4";

  return (
    <div className={`grid ${gridColsClass} gap-2 justify-start`}>
      {props.children}
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  MultiImage,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={components} />
    </article>
  );
}
