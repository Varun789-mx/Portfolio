import mernlogo from "../assets/reactjs.png";
import reactlogo from "../assets/vscode.png";
import javascriptlogo from "../assets/python.png";
import typescriptlogo from "../assets/typescript.png";
import postgreslogo from "../assets/sql.png";
import clogo from "../assets/c.png"
import nextjslogo from "../assets/python.png";
import postmanlogo from "../assets/ux.png";

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