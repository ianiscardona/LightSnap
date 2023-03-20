import React from "react";
import { HomeAbout } from "../landing_page/components/HomeAbout";
import { HomeBenefits } from "../landing_page/components/HomeBenefits";
import { HomeContact } from "../landing_page/components/HomeContact";
import { HomeHero } from "../landing_page/components/HomeHero";
import { GalleryModal } from "../lightsnap_app/components/GalleryModal";
import { Placeholder } from "../lightsnap_app/components/Placeholder";

export const Home = () => {
  return (
      <div className="relative">
          {/* <HomeHero />
          <HomeAbout />
          <HomeBenefits />
          <HomeContact /> */}
          <Placeholder/>
      </div>
  );
};
