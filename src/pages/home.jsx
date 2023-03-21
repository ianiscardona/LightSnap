import React from "react";
import { HomeAbout } from "../landing_page/components/HomeAbout";
import { HomeBenefits } from "../landing_page/components/HomeBenefits";
import { HomeContact } from "../landing_page/components/HomeContact";
import { HomeHero } from "../landing_page/components/HomeHero";
import ProcessImages from "../lightsnap_app/components/ProcessImages";
import { Navbar } from "./navbar";

export const Home = () => {
  return (
    <div className="relative">
      {/* <Navbar />
          <HomeHero />
          <HomeAbout />
          <HomeBenefits />
          <HomeContact />  */}
      <ProcessImages />
    </div>
  );
};
