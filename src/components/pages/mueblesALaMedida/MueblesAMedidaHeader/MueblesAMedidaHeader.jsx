import React from "react";
import { Link } from "react-router-dom";

const MueblesAMedidaHeader = () => {
  return (
    <header className="mueblesAMedidaHeader">
      <section className="mueblesAMedidaHeaderTitleContainer">
        <h1 className="title">Muebles a medida</h1>
        <h2 className="secondaryTitle">Un proyecto, una historia</h2>
      </section>
      <section className="mueblesAMedidaHeaderRuta">
        <ul className="mueblesAMedidaHeaderRutaNavegacion">
          <Link className="linkInicio" to="/">
            Inicio /
          </Link>
          <p>Muebles a medida</p>
        </ul>
      </section>
    </header>
  );
};

export default MueblesAMedidaHeader;
