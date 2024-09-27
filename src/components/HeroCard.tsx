import React, { useState } from "react";
import { motion } from "framer-motion";
import type { HeroCardProps } from "@/types";

const HeroCard: React.FC<HeroCardProps> = ({
  hero: { name, height, birthYear, mass, gender },
  image,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <motion.article
      className="hero__card"
      whileHover={{
        outline: "2px solid var(--accent-color)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={image}
        alt={name}
        onClick={toggleZoom}
        className="hero__card-image"
      />
      <div className="hero__card-content">
        <h2>{name}</h2>
        <p>Height: {height}</p>
        <p>Birth Year: {birthYear}</p>
        <p>Mass: {mass}</p>
        <p>Gender: {gender}</p>
      </div>
    </motion.article>
  );
};

export default HeroCard;
