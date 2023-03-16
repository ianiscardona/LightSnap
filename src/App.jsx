import React from "react";
import { Home } from "./pages/home";
import { Routes, Route} from "react-router-dom";
import { EventCode } from "./lightsnap_app/components/EventCode";
import { EventCodeError } from "./lightsnap_app/components/EventCodeError";
import { GetStartedCard } from "./lightsnap_app/components/GetStartedCard";
import { WalkthroughCard } from "./lightsnap_app/components/WalkthroughCard";
import { AppDashboard } from "./lightsnap_app/components/AppDashboard";
import { AcceptRejectModal } from "./lightsnap_app/components/AcceptRejectModal";
import { ShareModal } from "./lightsnap_app/components/ShareModal";
import { HomeContact } from "./landing_page/components/HomeContact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/contact" element={<HomeContact/>} />
        <Route path="/eventcode" element={<EventCode />} />
        <Route path="/eventcodeerror" element={<EventCodeError/>} />
        <Route path="/getstarted" element={<GetStartedCard />} />
        <Route path="/walkthrough" element={<WalkthroughCard />} />
        <Route path="/photobooth" element={<AppDashboard />} />
        <Route path="/acceptrejectmodal" element={<AcceptRejectModal/>} />
        <Route path="/sharemodal" element={<ShareModal/>} />
      </Routes>
    </>
  );
}

export default App;
