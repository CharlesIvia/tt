import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import fourth from "../assets/facebook/fourth.png";
import second from "../assets/facebook/second.png";
import third from "../assets/facebook/third.png";
import first from "../assets/facebook/first.png";
import GetStartedBtn from "./GetStartedBtn";
import eighth from "../assets/facebook/eighth.png";
import Footer from "./Footer";
import SellEverywhere from "./SellEverywhere";
import PotentialCustomers from "./PotentialCustomers";
import ZeroCost from "./ZeroCost";
import FacebookCTA from "./FacebookCTA";

const Facebook = () => {
  return (
    <div className="facebook">
      <div>
        <Header />
      </div>
      <div className="container facebook">
        <div className="love-this">
          <div className="facebook-home">
            <h1 className="facebook-start">
              Start your Facebook Store in minutes.
            </h1>
            <p className="start-para">
              We will set up a Facebook Store and get you accessible to millions
              of customers. Forget social sharing. You’re ready for social
              selling.
            </p>

            <Link to="/pricing">
              <GetStartedBtn />
            </Link>
          </div>
          <div className="fourth-img-div">
            <img
              className="fourth-img"
              src={fourth}
              alt="Products on facebook feed"
            />
          </div>
        </div>
      </div>

      <div>
        <PotentialCustomers />
      </div>

      <div className="container f-second">
        <div>
          <div className="facebook-second">
            <div className="second-img-div">
              <img
                className="second-img"
                src={second}
                alt="A facebook page with a woman wearing sun glasses"
              />
            </div>

            <div className="facebook-manage">
              <h1>Start your marketing campaigns with ease</h1>
              <p>
                Easily add, promote, and sell products, or manage all your
                Facebook advertising in just a few clicks — right from your
                Facebook page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ZeroCost />
      </div>

      <div className="container advert">
        <div>
          <div className="facebook-advert">
            <div className="advert-para">
              <h1>You can sell more with Facebook advertising.</h1>
              <p>
                Convert window shoppers to paying customers with Facebook
                remarketing. In no time, we’ll create hyper-targeted ads to
                remind your customers about products they considered but didn’t
                buy.
              </p>
            </div>

            <div className="third-img-div">
              <img
                className="third-img"
                src={third}
                alt="Analytics graph showing increase in sales"
              />
            </div>
          </div>

          <div>
            <div className="facebook-connect">
              <div className="fa-connect">
                <img
                  className="third-img"
                  src={first}
                  alt="A facebook and an instagram post"
                />
              </div>

              <div className="connect-para">
                <h1>Connect your Facebook Store to Instagram</h1>
                <p>
                  Did we mention creating your Facebook store is the first step
                  to selling on Instagram? We will connect your Facebook store
                  to your Instagram Business Account.
                </p>
                <Link to="/pricing">
                  <GetStartedBtn />
                </Link>
              </div>

              <div className="f-connect">
                <img
                  className="third-img"
                  src={first}
                  alt="A facebook and an instagram post"
                />
              </div>
            </div>

            <div className="facebook-advert">
              <div className="advert-para insta-facebook">
                <h1>Tag your products in posts and stories.</h1>
                <p>
                  Make your posts and stories shoppable with product tags for
                  your Facebook store. If your followers spot a product they
                  like in one of your posts and click the tag, they’ll be
                  automatically transported to your checkout page to complete
                  their purchase.
                </p>

                <div className="f-link">
                  <Link to="/pricing">
                    <GetStartedBtn />
                  </Link>
                </div>
              </div>

              <div className="f-last">
                <img
                  className="third-img"
                  src={eighth}
                  alt="Facebook stories"
                />
              </div>
            </div>

            <div>
              <SellEverywhere />
            </div>
          </div>
        </div>
      </div>

      <div>
        <FacebookCTA />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Facebook);
