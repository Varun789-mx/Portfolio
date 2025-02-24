import mernlogo from "../assets/mernlogo.jpg";
import reactlogo from "../assets/react.png";
import javascriptlogo from "../assets/javascriptlogo.png";
import typescriptlogo from "../assets/typescriptlogo.png";
import postgreslogo from "../assets/postgres.png";
import clogo from "../assets/c++logo.jpg"
import nextjslogo from "../assets/nextlogo.png";
import postmanlogo from "../assets/postmanlogo.png";

import { HeroParallax } from './HeroParallax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      clogo,  //not visible
  },
  {
    title: "Postman",
    link: "https://learning.postman.com/docs/introduction/overview/",
    thumbnail:
     postmanlogo, //isn't visible that much
  },
  {
    title: "Javascript",
    link: "https://docs.oracle.com/en/java/",
    thumbnail:
      javascriptlogo,
  },

  {
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    thumbnail:
      javascriptlogo,
  },
  {
    title: "Typescript",
    link: "https://www.typescriptlang.org/docs/",
    thumbnail:typescriptlogo
      ,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    mernlogo, 
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      typescriptlogo,
  },
  {
    title: "PostgreSQL",
    link: "https://www.postgresql.org/docs/",
    thumbnail:postgreslogo
      ,
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/docs",
    thumbnail:reactlogo,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:reactlogo,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:reactlogo,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:reactlogo,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:reactlogo,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:reactlogo,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      nextjslogo,
  },
];