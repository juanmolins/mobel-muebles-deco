import React from "react";
import HomeComentariosCard from "./HomeComentariosCard";
import { comentarios } from "./homeComentariosCardData";
import Slider from "react-slick";

const HomeComentarios = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 1,
  };
  return (
    <article className="homeComentarios">
      <header>
        <h2 className="secondaryTitle">Que dicen de nosotros</h2>
      </header>
      <section className="homeComentariosCarouselContainer">
        <Slider {...settings} className="homeComentariosCarousel">
          {comentarios.map((el) => (
            <HomeComentariosCard
              title={el.title}
              img={el.img}
              text1={el.text1}
              text2={el.text2}
              key={el.title}
            />
          ))}
        </Slider>
      </section>
      <section className="homeComentariosTarjetas">
        {comentarios.map((el) => (
          <HomeComentariosCard
            title={el.title}
            img={el.img}
            text1={el.text1}
            text2={el.text2}
            key={el.title}
          />
        ))}
      </section>
    </article>
  );
};

export default HomeComentarios;
