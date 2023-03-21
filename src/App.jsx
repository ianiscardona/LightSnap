import React from "react";
import { Home } from "./pages/home";
import { Routes, Route} from "react-router-dom";
import { EventCode } from "./lightsnap_app/components/EventCode";
import { EventCodeError } from "./lightsnap_app/components/EventCodeError";
import { GetStartedCard } from "./lightsnap_app/components/GetStartedCard";
import { WalkthroughCard } from "./lightsnap_app/components/WalkthroughCard";
import { AppDashboard } from "./lightsnap_app/components/AppDashboard";
import { EventGallery } from "./lightsnap_app/components/EventGallery";
import { Testing } from "./pages/testing";
import { HomeContact } from "./landing_page/components/HomeContact";

function App() {
  return (
    <>
    {/* <Testing /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventgallery" element={<EventGallery />} />
        <Route path="/eventcode" element={<EventCode />} />
        <Route path="/eventcodeerror" element={<EventCodeError/>} />
        <Route path="/getstarted" element={<GetStartedCard />} />
        <Route path="/walkthrough" element={<WalkthroughCard />} />
        <Route path="/photobooth" element={<AppDashboard />} />
        <Route path ="/contact" element={<HomeContact/>}/>
      </Routes>
    </>
  );
}

export default App;
