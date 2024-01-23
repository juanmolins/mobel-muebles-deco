import React from "react";
import Slider from "react-slick";
import HomeCarouselCard from "./HomeCarouselCard";
import { homeCarouselData } from "./homeCarouselData";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="homeCarouselContainer">
      <Slider {...settings} className="homeCarousel">
        {homeCarouselData.map((el) => (
          <div key={el.title} className={el.className}>
            <HomeCarouselCard
              title={el.title}
              text={el.text}
              button={el.button}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeCarousel;
