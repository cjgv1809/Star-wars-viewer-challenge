const NotFoundCharacter: React.FC = () => {
  return (
    <section className="app__no-results">
      <div>
        <img
          src="/not-found.gif"
          alt="Not found"
          className="app__no-results--img"
        />
      </div>
      <h1 className="app__no-results--heading">
        Ups! It seems that the character you are looking for got lost in a very
        far galaxy...
      </h1>
      <p className="app__no-results--text">
        Try searching for another character
      </p>
    </section>
  );
};

export default NotFoundCharacter;
