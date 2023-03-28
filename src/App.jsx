import React from "react";
import { Home } from "./pages/home";
import { Routes, Route} from "react-router-dom";
import { EventCode } from "./lightsnap_app/components/EventCode";
import { EventCodeError } from "./lightsnap_app/components/EventCodeError";
import { GetStartedCard } from "./lightsnap_app/components/GetStartedCard";
import { WalkthroughCard } from "./lightsnap_app/components/WalkthroughCard";
import { AppDashboard } from "./lightsnap_app/components/AppDashboard";
import { EventGallery } from "./lightsnap_app/components/EventGallery";
import { HomeContact } from "./landing_page/components/HomeContact";
import { PrivateRoutes } from "./pages/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventgallery" element={<EventGallery />} />
          <Route path="/eventcode" element={<EventCode />} />
          <Route path="/eventcodeerror" element={<EventCodeError/>} />
          <Route path ="/contact" element={<HomeContact/>}/>
          <Route path="/getstarted" element={<GetStartedCard />} />
          <Route path="/walkthrough" element={<WalkthroughCard />} />
          <Route path="/photobooth" element={<AppDashboard />} />
        </Routes>
        
      {/* <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventgallery" element={<EventGallery />} />
          <Route path="/eventcode" element={<EventCode />} />
          <Route path="/eventcodeerror" element={<EventCodeError/>} />
          <Route path ="/contact" element={<HomeContact/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path="/getstarted" element={<GetStartedCard />} />
            <Route path="/walkthrough" element={<WalkthroughCard />} />
            <Route path="/photobooth" element={<AppDashboard />} />
          </Route>
        </Routes>
      </AuthProvider> */}
    </>
  );
}

export default App;
