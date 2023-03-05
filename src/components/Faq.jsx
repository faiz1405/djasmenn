import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import hero from "../assets/Group 31630.png";
import { FiArrowDown } from "react-icons/fi";

const Faq = () => {
  return (
    <section id="faq">
      <div className="md:max-w-[1440px] max-w-[600px]  w-full h-full mx-auto py-[100px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src={hero} className="w-[350px] md:w-auto object-cover" />

          <div className="w-[674px]">
            <div className="flex justify-center md:justify-start mt-2 md:mt-0 items-center gap-2 mb-[28px] ">
              <div className="line-faq" />
              <h3 className="text-[#333]">FAQ</h3>
            </div>

            <h1 className="w-[350px] text-center md:text-start mx-auto md:mx-0 md:w-auto font-bold text-3xl md:text-5xl mb-[36px] text-[#282B38] mb-[60px]">
              Pertanyaan yang sering ditanyakan
            </h1>

            <div className="w-full">
              <div className=" w-[350px] mx-auto md:mx-0 md:w-full max-w-lg rounded-2xl bg-white p-2 flex flex-col gap-3">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-8 py-6 text-left text-sm font-medium text-[#282B38] border transition duration-500 ease-in">
                        <span>
                          Bagaimana cara memilih atap fiber semen yang baik?
                        </span>
                        <FiArrowDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Atap fiber semen adalah atap yang sangat baik untuk
                          melindungi isi rumah Anda. Atap berkualitas tinggi ini
                          memiliki daya tahan yang kuat, harga yang murah,
                          pemasangan yang mudah, dan cocok untuk segala kondisi
                          cuaca.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-8 py-6 text-left text-sm font-medium text-[#282B38] border transition duration-500 ease-in">
                        <span>
                          Bagaimana membedakan atap fiber semen Djabesmen dengan
                          merek lain?
                        </span>
                        <FiArrowDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Atap fiber semen adalah atap yang sangat baik untuk
                          melindungi isi rumah Anda. Atap berkualitas tinggi ini
                          memiliki daya tahan yang kuat, harga yang murah,
                          pemasangan yang mudah, dan cocok untuk segala kondisi
                          cuaca.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-8 py-6 text-left text-sm font-medium text-[#282B38] border transition duration-500 ease-in">
                        <span>
                          Bagaimana cara yang benar untuk mewarnai atap fiber
                          semen Djabesmen?
                        </span>
                        <FiArrowDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Atap fiber semen adalah atap yang sangat baik untuk
                          melindungi isi rumah Anda. Atap berkualitas tinggi ini
                          memiliki daya tahan yang kuat, harga yang murah,
                          pemasangan yang mudah, dan cocok untuk segala kondisi
                          cuaca.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-8 py-6 text-left text-sm font-medium text-[#282B38] border transition duration-500 ease-in">
                        <span>
                          Bagaimana cara yang benar untuk mewarnai atap fiber
                          semen Djabesmen?
                        </span>
                        <FiArrowDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Atap fiber semen adalah atap yang sangat baik untuk
                          melindungi isi rumah Anda. Atap berkualitas tinggi ini
                          memiliki daya tahan yang kuat, harga yang murah,
                          pemasangan yang mudah, dan cocok untuk segala kondisi
                          cuaca.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-8 py-6 text-left text-sm font-medium text-[#282B38] border transition duration-500 ease-in">
                        <span>
                          Bagaimana cara memilih atap fiber semen yang baik?
                        </span>
                        <FiArrowDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Atap fiber semen adalah atap yang sangat baik untuk
                          melindungi isi rumah Anda. Atap berkualitas tinggi ini
                          memiliki daya tahan yang kuat, harga yang murah,
                          pemasangan yang mudah, dan cocok untuk segala kondisi
                          cuaca.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
