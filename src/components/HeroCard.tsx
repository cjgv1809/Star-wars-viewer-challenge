import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HeroCardProps } from "@/types";
import HeroCardDetails from "./HeroCardDetails";

const HeroCard: React.FC<HeroCardProps> = ({
  character: {
    name,
    height,
    birth_year,
    gender,
    mass,
    hair_color,
    eye_color,
    skin_color,
  },
  image,
}) => {
  const [isHeroCardDetailsOpen, setIsHeroCardDetailsOpen] = useState(false);

  const openHeroCardDetails = () => {
    setIsHeroCardDetailsOpen(true);
  };

  const closeHeroCardDetails = () => {
    setIsHeroCardDetailsOpen(false);
  };

  return (
    <>
      <motion.article
        className="hero__card"
        whileHover={{
          outline: "5px solid var(--color-accent-primary)",
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={openHeroCardDetails}
      >
        <motion.img
          src={image}
          alt={name}
          className="hero__card-image"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          key="content"
          className="hero__card-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <h2>{name}</h2>
          <button
            type="button"
            className="hero__card-button"
            onClick={openHeroCardDetails}
          >
            View details
          </button>
        </motion.div>
      </motion.article>
      <AnimatePresence>
        {isHeroCardDetailsOpen && (
          <HeroCardDetails
            isOpen={isHeroCardDetailsOpen}
            onClose={closeHeroCardDetails}
            character={{
              name,
              height,
              birth_year,
              mass,
              gender,
              hair_color,
              eye_color,
              skin_color,
            }}
            backgroundImage={image || "/star_wars_logo.webp"}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroCard;
