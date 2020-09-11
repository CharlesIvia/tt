import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Facebook from "./components/Facebook";
import Amazon from "./components/Amazon";
import TitanMarket from "./components/TitanMarket";
import Shopify from "./components/Shopify";
import Google from "./components/Google";
import Airbnb from "./components/Airbnb";
import Jumia from "./components/Jumia";
import Mailchimp from "./components/Mailchimp";
import Website from "./components/Website";
import Pricing from "./components/Pricing";
import ServicesCompo from "./components/ServicesCompo";
import Help from "./components/Help";
import SignUp from "./components/SignUp";
import TermsOfService from "./components/TermsOfService";

import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Instagram from "./components/Instagram";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route exact path="/home" component={withRouter(HomePage)} />
          <Route exact path="/facebook" component={withRouter(Facebook)} />
          <Route exact path="/instagram" component={withRouter(Instagram)} />
          <Route exact path="/amazon" component={withRouter(Amazon)} />
          <Route exact path="/shop" component={withRouter(TitanMarket)} />
          <Route exact path="/shopify" component={withRouter(Shopify)} />
          <Route exact path="/google" component={withRouter(Google)} />
          <Route exact path="/airbnb" component={withRouter(Airbnb)} />
          <Route exact path="/jumia" component={withRouter(Jumia)} />
          <Route exact path="/mailchimp" component={withRouter(Mailchimp)} />
          <Route exact path="/website" component={withRouter(Website)} />
          <Route exact path="/pricing" component={withRouter(Pricing)} />
          <Route exact path="/services" component={withRouter(ServicesCompo)} />
          <Route exact path="/contact" component={withRouter(Help)} />
          <Route exact path="/signup" component={withRouter(SignUp)} />
          <Route
            exact
            path="/termsandconditions"
            component={withRouter(TermsOfService)}
          />
          <Route
            exact
            path="/all-services"
            component={withRouter(ServicesCompo)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
