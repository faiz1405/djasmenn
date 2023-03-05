import React from "react";

const InovasiCard = ({ no, title, img }) => {
  return (
    <div className="md:max-w-[1440px] max-w-[600px]  w-full h-full mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-[350px] md:w-[566px]">
          <h3 className="font-medium text-white text-[46px] mb-[30px]">{no}</h3>
          <h2 className="font-bold text-white text-5xl mb-2">{title}</h2>
          <p className="font-normal text-white ">
            Give the maximum protection and comfort to your residence by
            choosing Djabes 11 and Djabes 14
          </p>
        </div>

        <img src={img} />
      </div>
    </div>
  );
};

export default InovasiCard;
