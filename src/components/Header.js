import React, { useEffect } from "react";
import cart from "../assets/svgs/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  const stickyHeader = () => {
    if (window.pageYOffset > 500) {
      document.querySelector("#this-header").classList.remove("home-header");
    } else {
      document.querySelector("#this-header").classList.add("home-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  // useEffect(() => {
  //   let hd = document.querySelector("#mobile-menu");
  //   let hb = document.querySelector("#hamburger");
  //   hb.addEventListener("click", () => {
  //     hd.classList.toggle("active");
  //   });
  // }, []);

  return (
    <div className="header home-header" id="this-header">
      <div className="logo">
        <img className="cart-svg" src={cart} alt="" />
        <h1 className="logo-text">
          {" "}
          <Link to="/home">Titan</Link>
        </h1>
      </div>
      <div className="others">
        <div>
          <ul className="list-items">
            <li>
              {/* <a className="header-link" href="#services">
                Services
              </a> */}

              <Link to="/services" className="header-link">
                Services
              </Link>
            </li>

            <li>
              <Link to="/pricing">
                <p>Pricing</p>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <p>Help</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="stk">|</h1>
        </div>

        <div>
          <Link to="/signup">
            <button className="header-btn">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="mobile">
        <div className="mobile-menu" id="mobile-menu">
          <div className="hamburger" id="hamburger">
            <span className="ham ham-top"></span>
            <span className="ham ham-bottom"></span>
            <span className="ham ham-last"></span>
          </div>
        </div>
        <div className="mobile-items">
          <div>
            <ul className="list-items">
              <li>
                {/* <a className="header-link" href="#services">
                Services
              </a> */}

                <Link to="/services" className="header-link">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/pricing">
                  <p>Pricing</p>
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <p>Help</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/signup">
              <button className="header-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
