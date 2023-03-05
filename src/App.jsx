import React, { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Inovasi from "./components/Inovasi";
import Navbar from "./components/Navbar";
import Produk from "./components/Produk";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Produk />
      <Inovasi />
      <Faq />
      <Testimoni />
      <Form />
      <Footer />
    </>
  );
}

export default App;
