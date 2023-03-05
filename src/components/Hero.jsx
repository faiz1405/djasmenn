import React from "react";
import Slider from "react-slick";
import hero from "../assets/hero.png";
import { BiDownArrowAlt } from "react-icons/bi";

const Hero = (props) => {
  const handlerScroll = () => {
    window.scroll({
      bottom: 100,
      behavior: "smooth",
    });
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section id="hero" className="relative ">
        <Slider {...settings} className="">
          <img src={hero} className="h-auto md:h-[890px]" />
          <img src={hero} className="h-auto md:h-[890px]" />
          <img src={hero} className="h-auto md:h-[890px]" />
          <img src={hero} className="h-auto md:h-[890px]" />
        </Slider>
        <div className="hidden md:block md:absolute top-60 right-14 bg-[#001F3F] rounded-lg">
          <button onClick={() => scroll(0, 1000)} className="p-3">
            <BiDownArrowAlt size={30} style={{ color: "white" }} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
