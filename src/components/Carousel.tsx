

import { HeroParallax } from './HeroParallax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/javascript.png",  //not visible
  },
  {
    title: "Postman",
    link: "https://learning.postman.com/docs/introduction/overview/",
    thumbnail:
      "/postman.png", //isn't visible that much
  },
  {
    title: "Java(Currently Learning)",
    link: "https://docs.oracle.com/en/java/",
    thumbnail:
      "/java.png",
  },

  {
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    thumbnail:
      "/javascript.png",
  },
  {
    title: "Typescript",
    link: "https://www.typescriptlang.org/docs/",
    thumbnail:
      "/ts.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/ts.png", //nv
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/ts.png",
  },
  {
    title: "PostgreSQL",
    link: "https://www.postgresql.org/docs/",
    thumbnail:
      "/postgresql.png",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/docs",
    thumbnail:
      "/next.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/mern.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/react.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/react.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/react.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "./mernlogo.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/nextlogo.png",
  },
];