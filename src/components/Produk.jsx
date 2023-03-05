import React from "react";
import meliuk from "../assets/Meliuk-liuk.png";
import titik from "../assets/Group 14.png";
import titik2 from "../assets/Group 20.png";
import Card from "./Card";
import imgCard1 from "../assets/kresna-asri-3.png";
import imgCard2 from "../assets/rumahibadah0.png";
import imgCard3 from "../assets/cluster_1-2.png";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Produk = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
          arrow: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <section id="produk" className="relative pb-[100px]">
      <div className="h-[800px] md:h-[631px] bg-[#003B7B] relative">
        <img className="absolute" src={meliuk} />
        <img className="absolute top-14 right-96" src={titik} />

        <div className="md:max-w-[1000px] max-w-[600px]  w-full h-full mx-auto">
          <div className="absolute z-10 py-[100px]">
            <div className="w-[381px] md:w-[674px]">
              <div className="flex justify-center md:justify-start items-center gap-2 mb-[28px]">
                <div className="line-produk" />
                <h3 className="text-[#fff]">Projek Terbaru</h3>
              </div>

              <h1 className="text-center md:text-start mx-auto font-bold text-3xl md:text-5xl mb-[36px] text-white mb-[66px]">
                MEWUJUDKAN IDE DAN
                <span className="text-[#FFC631]"> INOVASI ANDA</span>
              </h1>
            </div>
            <div className="w-[350px] ml-5 md:ml-0 md:w-[1120px] z-10">
              <Slider {...settings}>
                <Card
                  image={imgCard1}
                  category="Perumahan"
                  title="Perumahan Griya Reka"
                  map="Madura"
                  produk="Produk: Djabes Genteng"
                />
                <Card
                  image={imgCard2}
                  category="Perumahan"
                  title="Perumahan Griya Reka"
                  map="Madura"
                  produk="Produk: Djabes Genteng"
                />
                <Card
                  image={imgCard3}
                  category="Perumahan"
                  title="Perumahan Griya Reka"
                  map="Madura"
                  produk="Produk: Djabes Genteng"
                />
                <Card
                  image={imgCard3}
                  category="Perumahan"
                  title="Perumahan Griya Reka"
                  map="Madura"
                  produk="Produk: Djabes Genteng"
                />
              </Slider>
            </div>
          </div>
        </div>
        <div className="hidden absolute top-60 right-72 md:flex gap-10">
          <button>
            <AiOutlineArrowLeft size={20} className="text-[#130F26]" />
          </button>
          <button>
            <AiOutlineArrowRight size={35} className="text-white" />
          </button>
        </div>
      </div>
      <img src={titik2} className="hidden md:block mt-20 ml-72 " />
    </section>
  );
};

export default Produk;
