import React from "react";
import Header from "./Header";
import GetStartedBtn from "./GetStartedBtn";
import { Link, withRouter } from "react-router-dom";
import home from "../assets/mailchimp/new.png";
import chimp from "../assets/mailchimp/chimp.png";
import lists from "../assets/mailchimp/lists.png";
import automated from "../assets/mailchimp/automated.png";
import Footer from "./Footer";

const Mailchimp = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="mailchimp">
        <div className="mailchimp-first">
          <div>
            <h1>Unleash the power of email with Mailchimp</h1>
            <p>
              Email is the ultimate marketing tool for small businesses. And now
              you can embrace the power of email marketing like never before
              with Mailchimp for your Online store.
            </p>

            <Link to="/pricing">
              <GetStartedBtn />
            </Link>
            <p className="mailchimp-italic">
              No list? No prob. We will help you build you list from scratch.
            </p>
          </div>

          <div>
            <img src={home} alt="A newletter with a chair" />
          </div>
        </div>

        <div className="mailchimp-second">
          <img src={chimp} alt="mailchimp logo" />
        </div>

        <div className="mailchimp-third">
          <div>
            <img src={lists} alt="A mailchimp newsletter" />
          </div>

          <div className="mailchimp-lists">
            <h1>Build your list while you sleep</h1>
            <p>
              Get the most out of your existing customers when you enable
              newsletter opt-in to automatically import new customer emails to
              Mailchimp.
            </p>
          </div>
        </div>

        <div className="mailchimp-third">
          <div className="automated-div-first">
            <img src={automated} alt="Sneakers on a mailchimp newsletter" />
          </div>
          <div>
            <h1>Short on time? We'll make 'em resusable</h1>
            <p>
              We'll create automated emails to send at just the right moment,
              like discount coupons for newsletter sign-ups or a “thank you”
              message after a customer’s first purchase. We'll set it up for
              you, don't worry.
            </p>
          </div>

          <div className="automated-div">
            <img src={automated} alt="Sneakers on a mailchimp newsletter" />
          </div>
        </div>

        <div className="mailchimp-fourth">
          <h1>Unleash the power of email with MailChimp</h1>
          <p>
            Email is the ultimate marketing tool for small businesses. And now
            you <br />
            can embrace the power of email marketing like never before with
            Mailсhimp.
          </p>

          <Link to="/pricing">
            <GetStartedBtn />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default withRouter(Mailchimp);
