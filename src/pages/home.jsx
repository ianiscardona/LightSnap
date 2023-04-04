import React, { useEffect } from "react";
import { HomeAbout } from "../landing_page/components/HomeAbout";
import { HomeBenefits } from "../landing_page/components/HomeBenefits";
import { HomeContact } from "../landing_page/components/HomeContact";
import { HomeHero } from "../landing_page/components/HomeHero";
import { Navbar } from "./navbar";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeBenefits />
      <HomeContact />
    </div>
  );
};
