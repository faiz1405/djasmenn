import React, { useState } from "react";
import djasmenLogo from "../assets/djasmenLogo.png";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";
import uk from "../assets/ukFlag.png";
import indo from "../assets/indonesiaFlag.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handlerClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="w-full h-[80px] border-b bg-white">
      <div className="md:max-w-[1440px] max-w-[600px]  w-full h-full mx-auto flex justify-between items-center">
        <img src={djasmenLogo} alt="logo" className="h-[40px]" />
        <div className="hidden md:flex items-center">
          <div className="flex flex-col">
            <div className="flex justify-end gap-2 py-2 ">
              <a>
                <img src={indo} />
              </a>
              <a>
                <img src={uk} />
              </a>
            </div>
            <ul className="flex gap-8">
              <li className="nav-item">
                <a className="nav-link active">BERANDA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">PROYEK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">APLIKASI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">BERITA DAN EVENT </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">KARIR</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">KONTAK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">KALKULATOR</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:hidden" onClick={handlerClick}>
          <img
            src={toggle ? close : hamburgerMenu}
            className=" transition duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="trasition duration-300 ease-in md:ease-out">
        <ul
          className={
            toggle
              ? "absolute z-10 p-4 px-8 bg-[#004893] w-full md:hidden"
              : "hidden"
          }
        >
          <li className="nav-item p-3">
            <a className="nav-link text-white active">BERANDA</a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link text-white">PROYEK</a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link text-white">APLIKASI</a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link text-white">BERITA DAN EVENT </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link text-white">KARIR</a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link text-white">KONTAK</a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link text-white">KALKULATOR</a>
          </li>
          <div className="flex justify-center gap-2 py-2 ">
            <a>
              <img src={indo} />
            </a>
            <a>
              <img src={uk} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
