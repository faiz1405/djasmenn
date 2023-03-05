import React from "react";
import mapImg from "../assets/layers.png";
import produkImg from "../assets/place.png";

const Card = ({ image, category, title, map, produk }) => {
  return (
    <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mx-0 md:mx-auto my-4 relative w-[350px] h-[500px] md:w-[345px] md:h-[483px]">
      <img src={image} className="w-[350px] md:w-[345px] object-cover" />
      <div className=" p-5 my-5">
        <h1 className="text-[#1C3554] font-bold text-2xl mb-2">{title}</h1>
        <div className="flex gap-2 mb-4">
          <img src={mapImg} />
          <h4 className="text-[#727272]">{map}</h4>
        </div>
        <div className="flex gap-2">
          <img src={produkImg} />
          <h4 className="text-[#727272]">{produk}</h4>
        </div>

        <div className="absolute top-6 right-6 py-1 px-6 rounded-md bg-[#001845]">
          <h4 className="text-white">{category}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
