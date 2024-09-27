import React from "react";
import { motion } from "framer-motion";
import { extractIdFromUrl } from "../utils";
import HeroCard from "./HeroCard";
import type { Character, HeroListProps } from "../types";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const HeroList: React.FC<HeroListProps> = ({ characters }) => {
  return (
    <motion.div
      className="hero__list"
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {characters.map((character: Character, index: number) => {
        const id = extractIdFromUrl(character.url);
        const image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

        if (!id) return null;

        return (
          <motion.div
            key={id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <HeroCard hero={character} image={image} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default HeroList;
