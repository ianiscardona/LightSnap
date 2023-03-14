import React from "react";
import { AppDashboard } from "../components/AppDashboard";
import { HomeAbout } from "../components/HomeAbout";
import { HomeBenefits } from "../components/HomeBenefits";
import { HomeContact } from "../components/HomeContact";
import { HomeHero } from "../components/HomeHero";

export const Home = () => {
  return (
    <div className="relative">
      {/* <HomeHero />
      <HomeAbout />
      <HomeBenefits />
      <HomeContact /> */}
      <AppDashboard />
    </div>
  );
};
