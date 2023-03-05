import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import galeri1 from "../assets/new/cluster_1-2.png";
import galeri2 from "../assets/new/FOTO1 1.png";
import galeri3 from "../assets/new/Karang_Resik_7.png";
import galeri4 from "../assets/new/kresna-asri-3 (1).png";
import galeri5 from "../assets/new/kresna-asri-3.png";
import galeri6 from "../assets/new/rumahibadah0.png";

import djasmenLogo from "../assets/djasmenLogo.png";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-[100px]">
      <div className="md:max-w-[1440px] max-w-[600px]  w-full h-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 w-[350px] md:w-auto">
          <div className="">
            <img src={djasmenLogo} className="mb-6" />
            <p className="mb-6 text-base font-normal w-[350px] md:w-auto ml-3 md:ml-0">
              <span className="font-bold  text-[#333333]">PT Djabesmen</span>-
              Sejak tahun 1971 telah memproduksi berbagai bentuk dan ukuran atap
              fiber semen dengan mutu sesuai dengan SNI (Standar Nasional
              Indonesia)
            </p>
            <div className="flex gap-6 ml-3 md:ml-0">
              <div className="w-8 h-8 rounded-full bg-[#092155] p-2 flex items-center justify-center">
                <ImFacebook className="text-white z-10" size={30} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#092155] p-2 flex items-center justify-center">
                <AiFillInstagram className="text-white z-10" size={30} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#092155] p-2 flex items-center justify-center">
                <AiOutlineTwitter className="text-white z-10" size={30} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#092155] p-2 flex items-center justify-center">
                <AiFillYoutube className="text-white z-10" size={30} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#092155] p-2 flex items-center justify-center">
                <FaTiktok className="text-white z-10" size={30} />
              </div>
            </div>
          </div>
          <div className="flex items-start md:items-center flex-col ml-3 mt-3 md:mt-0">
            <h3 className="font-bold text-lg text-[#333333] mb-6">Links</h3>
            <ul className="ml-0 md:ml-[60px] flex flex-col gap-4">
              <li>
                <a className="font-normal text-sm text-[#828282]">Beranda</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Proyek</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Aplikasi</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">
                  Berita Dan Even
                </a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Karir</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Kontak</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Kalkulator</a>
              </li>
            </ul>
          </div>
          <div className="flex items-start md:items-center flex-col ml-3">
            <h3 className="font-bold text-lg text-[#333333] mb-6">
              Produk Kami
            </h3>
            <ul className="ml-0 md:-ml-[7px] flex flex-col gap-4">
              <li>
                <a className="font-normal text-sm text-[#828282]">
                  Djabes genteng
                </a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Djabes 6</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Djabes 14 </a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Djabes 11</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">Djabeskrup</a>
              </li>
              <li>
                <a className="font-normal text-sm text-[#828282]">DJABES NOK</a>
              </li>
            </ul>
          </div>
          <div className="flex items-start md:items-center flex-col ml-3">
            <h3 className="font-bold text-lg text-[#333333] mb-6">
              Galeri Kami
            </h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <img src={galeri1} className="cursor-pointer" />
              <img src={galeri2} className="cursor-pointer" />
              <img src={galeri3} className="cursor-pointer" />
              <img src={galeri4} className="cursor-pointer" />
              <img src={galeri5} className="cursor-pointer" />
              <img src={galeri6} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center py-6 bg-[#0A2155] mt-8" id="copy">
        <h3 className="text-white">© 2023 Djabesmen All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
