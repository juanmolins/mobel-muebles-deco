import React from "react";
import { Link } from "react-router-dom";

const DecoracionHeader = () => {
  return (
    <header className="decoracionHeader">
      <section className="decoracionHeaderTitleContainer">
        <h1 className="title">Decoración</h1>
        <h2 className="secondaryTitle">Una colección de piezas únicas</h2>
      </section>
      <section className="decoracionHeaderRuta">
        <ul className="decoracionHeaderRutaNavegacion">
          <Link className="linkInicio" to="/">
            Inicio /
          </Link>
          <p>Decoración</p>
        </ul>
      </section>
    </header>
  );
};

export default DecoracionHeader;
