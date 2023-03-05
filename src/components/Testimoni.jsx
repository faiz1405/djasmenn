import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { ImQuotesRight } from "react-icons/im";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import bg from "../assets/Illustration.png";
import Slider from "react-slick";
import TestimoniCard from "./TestimoniCard";
import testimoni from "../assets/testimoni.png";

const Testimoni = () => {
  var settings = {
    lazyLoad: "ondemand",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          arrow: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <section
      id="testimoni"
      className="py-[100px]  bg-[#003B7B] relative overflow-hidden"
    >
      <div className="md:max-w-[1440px] max-w-[600px]  w-full h-full mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 ">
          <div className="w-[350px] md:w-[45%]">
            <h1 className="font-bold text-center md:text-start text-3xl md:text-5xl text-white mb-[30px]">
              Testimonial Dari Pelanggan Kami
            </h1>
            <p className="font-normal text-xl text-white/60 mb-[30px]">
              Sebagai produsen bahan bangunan yang berdiri sejak tahun 1971, PT.
              Djabesmen berkomitmen untuk selalu memberikan yang terbaik (baik
              dari segi kualitas, pelayanan, distribusi, pola kerjasama, dan
              lain-lain). 
            </p>
            <button className="flex items-center gap-4 p-3 bg-[#FFC631] font-semibold text-base rounded-sm">
              Lihat Pekerjaan Kami
              <FiArrowRight size={25} />
            </button>
          </div>

          <div className="w-[350px] md:w-[55%] z-10">
            <Slider {...settings}>
              <TestimoniCard />
              <TestimoniCard />
              <TestimoniCard />
            </Slider>
            <div className="hidden md:flex items-center justify-end gap-6 z-20 mr-4 mt-8">
              <BsArrowLeft size={25} className="text-white" />
              <div className="p-4 bg-white rounded-full">
                <BsArrowRight size={25} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-[3rem] right-[39rem] z-10 w-[96px] h-[96px] rounded-full  bg-[#EEEEEE] shadow-lg"></div>
        <div className=" absolute -top-[3rem] right-[39.5rem] z-10 w-[96px] h-[96px] rounded-full  bg-[#fff] shadow-lg">
          <ImQuotesRight
            size={30}
            className="absolute top-8 right-8 z-10 text-[#FFC631]"
          />
        </div>
      </div>
      <img src={bg} className="absolute top-10 right-10 z-0 " />
    </section>
  );
};

export default Testimoni;
