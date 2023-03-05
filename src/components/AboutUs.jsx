import React from "react";
import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <section id="about" className="py-[50px] md:py-[100px]">
      <div className="md:max-w-[1440px] max-w-[600px]  w-full h-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src={about} className="w-[350px] md:w-[800px] object-cover" />
          <div className="flex flex-col w-[350px] md:w-[504px] text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mt-2 md:mt-0">
              <div className="line" />
              <h3 className="text-[#323232]">TENTANG KAMI</h3>
            </div>
            <h1 className="font-bold text-3xl md:text-5xl mb-[36px]">
              Ketahanan Lebih <br></br> Lama Dari
              <span className="text-[#003b7b]"> Bangunannya</span>
            </h1>
            <p className="text-[#828282] text-sm md:text-start text-justify">
              <span className="font-medium ">PT Djabesmen</span> - Sejak tahun
              1971 telah memproduksi berbagai bentuk dan ukuran atap fiber semen
              dengan mutu sesuai dengan SNI (Standar Nasional Indonesia). Dengan
              pengalaman yang panjang sebagai produsen bahan bangunan, kami
              telah melalui ujian yang meliputi : segi kualitas, pangadaan,
              pelayanan, distribusi dan pola kerjasama dengan penyalur, agar
              bisa memenuhi kebutuhan-kebutuhan pasar yang semakin meningkat.
              Kini, atap Djabesmen telah digunakan di seluruh pelosok tanah air
              dalam berbagai proyek. Bahkan juga diekspor ke berbagai negara
              Kami mempersembahkan beberapa produk yang banyak digunakan untuk
              sebuah bangunan secara umum yaitu : Djabes 6 Gelombang Besar,
              Djabes 11 dan 14 Gelombang Kecil, Djabes Genteng, dan Aksesorisnya
              meliputi perlengkapan Nok, Karpus dan lain-lain. Atap Djabesmen
              mudah dalam pemasangan, nyaman dan aman digunakan dalam segala
              kondisi iklim Indonesia. Menggunakan atap Djabesmen berarti Anda
              telah memilih atap yang berdaya tinggi dan ekonomis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
