import React, { useRef, useEffect } from "react";
import Header from "./Header";
import GetStartedBtn from "./GetStartedBtn";
import store from "../assets/general/store.png";
import stores from "../assets/general/stores.png";
import ScrollReveal from "scrollreveal";
const Home = () => {
  ScrollReveal().reveal(".start", {
    origin: "right",
    duration: 1000,
    distance: "10rem",
    delay: 400,
  });
  ScrollReveal().reveal(".start-para", {
    origin: "right",
    duration: 1000,
    distance: "10rem",
    delay: 700,
  });
  ScrollReveal().reveal(".s-button", {
    origin: "right",
    duration: 1000,
    distance: "10rem",
    delay: 800,
  });
  ScrollReveal().reveal(".stores-img-div", {
    origin: "bottom",
    duration: 1000,
    distance: "10rem",
    delay: 800,
  });

  // Typing

  const typedRef = useRef();
  const cursorRef = useRef();

  const textArray = ["Shopify", "Facebook", "Amazon", "Jumia", "Google"];
  const typingDelay = 100;
  const erasingDelay = 90;
  const newTextDelay = 750;
  let charIndex = 0;

  useEffect(() => {
    let textArrayIndex = 0;

    let cursorDiv = cursorRef.current;
    let typedDiv = typedRef.current;

    function type() {
      if (!cursorDiv.classList.contains("typing")) {
        cursorDiv.classList.add("typing");
      }
      // if last letter of a word is not typed
      if (charIndex < textArray[textArrayIndex].length) {
        typedDiv.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorDiv.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (!cursorDiv.classList.contains("typing")) {
        cursorDiv.classList.add("typing");
      }
      // if string is not entirely erased
      if (charIndex > 0) {
        typedDiv.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorDiv.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
          textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
      }
    }
    if (textArray.length) {
      setTimeout(type, newTextDelay + 250);
    }
  }, [charIndex]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container home">
        <div className="home-items">
          <div className="hero">
            <div>
              <h2 className="start">
                Start selling on <span class="typed-text" ref={typedRef}></span>
                <span class="cursor" ref={cursorRef}>
                  &nbsp;
                </span>
              </h2>
              {
                <p className="start-para">
                  We will establish your business online and help you grow your
                  sales. Sell anywhere you want in the world. Seriously.
                </p>
              }

              {/* <p className="start-para">
                I am a <span class="typed-text" ref={typedRef}></span>
                <span class="cursor" ref={cursorRef}>
                  &nbsp;
                </span>
              </p> */}
            </div>
            <div className="s-button">
              <a href="#services">
                <GetStartedBtn />
              </a>
            </div>
          </div>
          <div className="stores-img-div">
            <img className="store-img" src={store} alt="A store front" />
          </div>
          <div className="store-img-div">
            <img className="stores-img" src={stores} alt="A store front" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
