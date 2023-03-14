import React from "react";
import { HomeAbout } from "./components/HomeAbout";
import { HomeBenefits } from "./components/HomeBenefits";
import { HomeContact } from "./components/HomeContact";
import { HomeHero } from "./components/HomeHero";
import { Walkthrough } from "./components/lightsnap_app/Walkthrough";

function App() {
  return (
    <div className="relative">
      <HomeHero />
      <HomeAbout />
      <HomeBenefits />
      <HomeContact />
      <Walkthrough />
    </div>
  );
}

export default App;
