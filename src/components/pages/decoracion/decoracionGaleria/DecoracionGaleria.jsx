import React from "react";
import { decoracionGaleriaImages } from "./decoracionImagenes";
import Slider from "react-slick";

const DecoracionGaleria = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <article className="decoracionGaleria">
      <section className="decoracionGaleriaTextContainer">
        <p className="decoracionGaleriaText">
          Transforma tu espacio con detalles que cuentan historias. Descubre
          nuestra colección de elementos decorativos, donde cada pieza es una
          expresion de estilo y personalidad. Encuentra la chispa que tu hogar
          necesita.
        </p>
      </section>
      <section className="decoracionGaleriaImgContainer">
        {decoracionGaleriaImages.map((el) => (
          <img
            className="decoracionGaleriaImg"
            src={el.src}
            alt={el.alt}
            key={el.id}
          />
        ))}
      </section>
      <section className="decoracionGaleriaCarouselContainer">
        <Slider {...settings} className="decoracionGaleriaCarousel">
          {decoracionGaleriaImages.map((el) => (
            <div key={el.id}>
              <img src={el.src} alt={el.alt} />
            </div>
          ))}
        </Slider>
      </section>
    </article>
  );
};

export default DecoracionGaleria;
