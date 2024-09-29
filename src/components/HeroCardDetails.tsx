import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { capitalizeWords } from "@/utils";
import type { HeroCardDetailsProps } from "@/types";

const HeroCardDetails: React.FC<HeroCardDetailsProps> = ({
  isOpen,
  onClose,
  character,
  backgroundImage,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="hero__card-details-backdrop"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="region"
      aria-labelledby="hero-card-details-title"
      aria-describedby="hero-card-details-description"
      data-testid="hero-card-details-backdrop"
    >
      <motion.div
        className="hero__card-details-content-wrapper"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hero__card-details-content">
          <h2
            id="hero-card-details-title"
            data-testid="hero-card-details-title"
          >
            {character.name}
          </h2>
          <div
            id="hero-card-details-description"
            data-testid="hero-card-details-description"
          >
            <p>
              <strong>Height:</strong> {character.height}
            </p>
            <p>
              <strong>Birth Year:</strong> {character.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {capitalizeWords(character.gender)}
            </p>
            <p>
              <strong>Mass:</strong> {character.mass}
            </p>
            <p>
              <strong>Hair Color:</strong>{" "}
              {capitalizeWords(character.hair_color)}
            </p>
            <p>
              <strong>Skin Color:</strong>{" "}
              {capitalizeWords(character.skin_color)}
            </p>
            <p>
              <strong>Eye Color:</strong> {capitalizeWords(character.eye_color)}
            </p>
          </div>
        </div>
        <button onClick={onClose} className="hero__card-details-close-button">
          <X size={24} aria-label="Close details" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroCardDetails;
