import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BsTelephoneFill, BsFillPrinterFill, BsGlobe } from "react-icons/bs";

const Form = () => {
  return (
    <section id="form" className="py-[100px] bg-[#F8F9FA]">
      <div className="md:max-w-[1440px] max-w-[600px]  w-full h-full mx-auto ">
        <div className="flex flex-col md:flex-row items-center  gap-x-20">
          <div className="w-12/12 md:w-6/12">
            <h1 className="font-bold text-3xl mx-auto md:mx-0 w-[350px] md:w-auto md:text-5xl text-[#283646] mb-[16px]">
              Terhubung Dengan Kami
            </h1>
            <p className="font-normal text-[#999999] mx-auto md:mx-0  text-base w-[350px] md:w-[471px] mb-[21px]">
              Daftarkan diri Anda sekarang juga dan dapatkan semua informasi
              terbaru tentang Djabesmen.
            </p>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-12/12 md:w-6/12">
                <form>
                  <div className="mb-6">
                    <label
                      htmlFor="nama"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="nama"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukan Nama Anda"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="website-no"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      No. Telepone
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md  dark:text-gray-400 ">
                        +62
                      </span>
                      <input
                        type="text"
                        id="no"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-12/12 md:w-6/12">
                <form>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukan Email Anda"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="kota"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kota/Kabupaten
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Cari Kota/Kab"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="w-12/12">
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <ReCAPTCHA sitekey="6LetLdEkAAAAAEhKe3I_nyZViIZpF-V9VejEoelF" />
                <button className="mt-4 py-4 px-12 bg-[#0A2155] text-white rounded-md">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
          <div className="w-12/12 md:w-6/12 mt-6 md:mt-0">
            <h5 className="text-[#A9A9A9] mb-2">ALAMAT</h5>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-12/12 md:w-6/12">
                <div className="w-[350px]">
                  <h3 className="font-medium text-xl text-[#001F3F] mb-4">
                    Head Office
                  </h3>
                  <h4 className="mb-4 font-medium text-sm text-[#001F3F]">
                    PT. Djabesmen
                  </h4>
                  <p className="mb-4 font-normal text-sm text-[#737880]">
                    JL. Suryo Pranoto No. 28 Jakarta, 10130 <br /> Indonesia
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsTelephoneFill />
                    (6221) 6321818
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsFillPrinterFill />
                    (6221) 6321818
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsGlobe />
                    www.djabesmen.co.id
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-xl text-[#001F3F] mb-4">
                    Surabaya
                  </h3>
                  <h4 className="mb-4 font-medium text-sm text-[#001F3F]">
                    PT. Djabes Depo Fortuna Raya
                  </h4>
                  <p className="mb-4 font-normal text-sm text-[#737880]">
                    Gedung Graha Pacific Lt. 9, JL. Basuki <br /> Rahmat No. 87
                    -91 Surabaya
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsTelephoneFill />
                    (6221) 6321818
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsFillPrinterFill />
                    (6221) 6321818
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsGlobe />
                    www.djabesmen.co.id
                  </p>
                </div>
              </div>
              <div className="w-12/12 md:w-6/12">
                <div>
                  <h3 className="font-medium text-xl text-[#001F3F] mb-4">
                    Medan
                  </h3>
                  <h4 className="mb-4 font-medium text-sm text-[#001F3F]">
                    PT. Djabesdepo Fortuna Medan
                  </h4>
                  <p className="mb-4 font-normal text-sm text-[#737880]">
                    JL. Medan - Batang Kuis No. 26 Sei Rotan,
                    <br /> Kab. Deli Serdang - Sumatera Utara
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsTelephoneFill />
                    (6221) 6321818
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsFillPrinterFill />
                    (6221) 6321818
                  </p>
                  <p className="flex items-center gap-5 mb-8 font-light text-sm text-[#333333]">
                    <BsGlobe />
                    www.djabesmen.co.id
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
