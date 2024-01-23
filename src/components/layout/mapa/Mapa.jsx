import React from "react";
import Iframe from "react-iframe";

const Mapa = () => {
  return (
    <article
      className="mapa"
      style={{ width: "100vw", height: "18rem", marginTop: "3rem" }}
    >
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.216349123741!2d-64.43114002352736!3d-31.655300207843226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d574a60d2c6a3%3A0x92bec30a84d4d904!2sM%C3%B8bel%20Muebles%2Bdeco!5e0!3m2!1ses-419!2sar!4v1705540913668!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        frameBorder={0}
      ></Iframe>
    </article>
  );
};

export default Mapa;
