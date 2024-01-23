import React from "react";
import Slider from "react-slick";
import { mueblesAMedidaCarouselesData } from "../mueblesAMedidaCarouselesData";

const MueblesAMedidaArticle = ({ title, text, alt, images, id }) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <article className="mueblesAMedidaArticle" id={id}>
      <header>
        <h2 className="secondaryTitle">{title}</h2>
      </header>
      <section className="mueblesAMedidaArticleTextoContainer">
        <p className="mueblesAMedidaArticleTexto">{text}</p>
      </section>
      <section className="mueblesAMedidaArticleCarouselContainer">
        <Slider {...settings} className="mueblesAMedidaArticleCarousel">
          {images.map((img) => (
            <div key={img.id}>
              <img src={img.img} alt={alt} />
            </div>
          ))}
        </Slider>
      </section>
    </article>
  );
};

export default MueblesAMedidaArticle;
