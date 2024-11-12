import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
