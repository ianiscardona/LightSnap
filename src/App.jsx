import React from "react";
import { HomeAbout } from "./components/HomeAbout";
import { HomeBenefits } from "./components/HomeBenefits";
import { HomeContact } from "./components/HomeContact";
import { HomeHero } from "./components/HomeHero";

function App() {
  return (
    <div className="relative">
      <HomeHero />
      <HomeAbout />
      <HomeBenefits />
      <HomeContact />
    </div>
  );
}

export default App;
