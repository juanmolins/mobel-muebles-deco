import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomeProyectos = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <article className="homeProyectos">
      <header>
        <h2 className="secondaryTitle">De la imaginación a la realidad</h2>
      </header>
      <section className="homeProyectosCarouselContainer">
        <Slider {...settings} className="homeProyectosCarousel">
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705167537/mobel-deco/cocina/vgebl4xvp0mzi3ypz6hw.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705167537/mobel-deco/cocina/tttzdgfpx6vhfhgtqvuy.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705167547/mobel-deco/living/hiykg6znvlz40xytuzdy.jpg"
              alt="Living"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705167547/mobel-deco/living/zgehzymr3n4tnisxmjq7.jpg"
              alt="Living"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705167557/mobel-deco/bano/twqaalbp5y56occhp43d.jpg"
              alt="Baño"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705167557/mobel-deco/bano/b04kysvkkogxrxt7jv1a.jpg"
              alt="Baño"
            />
          </div>
        </Slider>
        <Link to={"/mueblesAMedida"}>
          <Button
            variant="contained"
            sx={{ zIndex: "1", bottom: "1rem", fontSize: "12px" }}
          >
            Ver todos los proyectos
          </Button>
        </Link>
      </section>
    </article>
  );
};

export default HomeProyectos;
