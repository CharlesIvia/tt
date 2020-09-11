import React from "react";
import Home from "./Home";
import Anywhere from "./Anywhere";
import GrowFaster from "./GrowFaster";
import Services from "./Services";
import Footer from "./Footer";
import SmallBiz from "./SmallBiz";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <div>
        <Anywhere />
      </div>
      <div>
        <GrowFaster />
      </div>
      <div>
        <SmallBiz />
      </div>
      <div id="services">
        <Services />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(App);
