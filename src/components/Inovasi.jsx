import React, { useRef, useState } from "react";
import hero from "../assets/Group 31606.png";
import Slider from "react-slick";
import InovasiCard from "./InovasiCard";
import "./inovasi.css";
const Inovasi = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <section id="inovasi" className="py-[100px] bg-[#003B7B] relative">
      <div className="w-[350px] md:w-[674px] text-center mx-auto">
        <div className="flex items-center gap-2 mb-[28px] justify-center">
          <div className="line-inovasi" />
          <h3 className="text-[#fff]">PRODUK KAMI</h3>
        </div>

        <h1 className="font-bold text-3xl md:text-5xl mb-[36px] text-white ">
          Mewujudkan ide dan <br /> inovasi Anda
        </h1>
      </div>
      <Slider {...settings}>
        <InovasiCard no="#01" title="Djabes Genteng" img={hero} />
        <InovasiCard no="#02" title="Djabes Baja" img={hero} />
      </Slider>

      <div className="hidden md:absolute top-64 right-[8rem] w-[540px] h-[50px] bg-[#ACACAC]" />
      <div className="hidden md:absolute bottom-[2rem] right-[8rem] w-[540px] h-[50px] bg-[#ACACAC]" />
    </section>
  );
};

export default Inovasi;
