import React, { useState, useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hotspot from "../../components/Hotspot/Hotspot";
import Promotion from "../../components/Promotion/Promotion";
import RegisterForm from "../../components/Register/RegisterForm";
import StickyIcons from "../../components/StickyIcons/StickyIcons";
import "./HomePage.scss";
import ExclusiveContent from "../../components/ExclusiveContent/ExclusiveContent";
import Community from "../../components/Community/Community";

function HomePage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Calculate the current active section based on scroll position
      const newActiveSection = Math.ceil(scrollPosition / sectionHeight);

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <Header />
      <div className="home-page__container">
        <Hotspot />
        <div className="spacing"></div>
        <RegisterForm isActive={activeSection === 0} />

        <Community />
        <Promotion isActive={activeSection === 1} />
        <ExclusiveContent />
      </div>
      <div className="sticky-icons">
        <StickyIcons />
      </div>
      <Footer isActive={activeSection === 2} />
    </div>
  );
}

export default HomePage;
