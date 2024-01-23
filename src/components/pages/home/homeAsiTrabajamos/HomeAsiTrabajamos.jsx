import React from "react";
import { infoTarjetas } from "./homeAsiTrabajamosCardData";
import HomeAsiTrabajamosCard from "./HomeAsiTrabajamosCard";
import Slider from "react-slick";

const HomeAsiTrabajamos = () => {
  const settings = {
    centerMode: true,
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 1,
  };

  return (
    <article className="homeAsiTrabajamos">
      <header>
        <h2 className="secondaryTitle">Así trabajamos</h2>
      </header>
      <section>
        <Slider {...settings} className="homeAsiTrabajamosCarousel">
          {infoTarjetas.map((el) => (
            <HomeAsiTrabajamosCard
              key={el.id}
              title={el.title}
              icon={el.icon}
              text={el.text}
              className="homeAsiTrabajamosCard CardCarousel"
            />
          ))}
        </Slider>
      </section>
      <section className="homeAsiTrabajamosTarjetas">
        {infoTarjetas.map((el) => (
          <HomeAsiTrabajamosCard
            key={el.id}
            title={el.title}
            icon={el.icon}
            text={el.text}
            className="homeAsiTrabajamosCard"
          />
        ))}
      </section>
    </article>
  );
};

export default HomeAsiTrabajamos;
