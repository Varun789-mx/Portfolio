"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
   
    <HeroHighlight >
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-2xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto pt-40"
      >
        <div className="xl:p-7">
  I wear many hats &ndash; I design the visuals{" "}
  <p>
    <Highlight className="text-black dark:text-white">
      (front-end)
    </Highlight>{" "}
    and build the engine that makes it work{" "}
    <Highlight className="text-black dark:text-white">
      (back-end)
    </Highlight>
    .
  </p>
  My expertise extends to{" "}
  <Highlight className="text-black dark:text-white">
    secure user logins
  </Highlight>{" "}
  and keeping data safe using powerful{" "}
  <Highlight className="text-black dark:text-white">databases.</Highlight>{" "}
  I leverage cutting-edge tools like{" "}
  <Highlight className="text-black dark:text-white">React</Highlight> and
  <Highlight className="text-black dark:text-white">Next.js</Highlight> to build responsive and modern web applications.
</div>

      </motion.h1>
    </HeroHighlight>

  );
}
