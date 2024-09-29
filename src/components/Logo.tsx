import React from "react";

const Logo: React.FC = () => {
  return (
    <header className="app__logo-container" role="banner">
      <img
        src="/star_wars_logo.webp"
        alt="Star Wars Logo"
        className="app__logo"
        role="img"
      />
    </header>
  );
};

export default Logo;
