import React, { useState } from "react";
import sign from "../assets/general/sign.png";
import user from "../assets/icons/user.png";
import Header from "./Header";
import firebase from "../firebasse/firestore";
import { Link, withRouter } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("+254");
  const [error, setError] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    const db = firebase.firestore();
    db.collection("clients").add({
      firstname: firstName,
      lastname: lastName,
      businessname: businessName,
      email: email,
      phonenumber: number,
    });
    alert(
      "Registration Successfull. Our team will reach out to you as soon as possible. Thank you."
    );
  };

  //Check if email is valid using regex

  function checkEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.trim())) {
      setError("Email is valid.");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setError("Email is not valid");
      setTimeout(() => {
        setError("");
      }, 10000);
    }
  }

  function twoCalls(e) {
    setEmail(e.target.value);
    checkEmail(email);
  }

  return (
    <div className="sign-up">
      <div className="invisible">
        <Header />
      </div>

      <div className="sign-up-container">
        <div className="sign-up-first">
          <div>
            <h1>Titan Market</h1>
            <h2>Sign Up for TitanMarket</h2>
          </div>
          <div className="or">
            <div className="tiny"></div>
            <div className="or-text">
              <p>Register here to get started</p>
            </div>
            <div className="tiny2"></div>
          </div>

          <div className="form-section">
            <form className="form" onSubmit={addUser}>
              <input
                type="text"
                name="firstname"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="text"
                name="businessname"
                placeholder="Your business' name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={twoCalls}
                required
              />
              <p>{error}</p>
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <button type="submit">
                {" "}
                <img className="user" src={user} alt="" />
                <p>Get Started</p>
              </button>
            </form>

            <p className="form-para">
              I agree to abide by Titan Market's
              <Link to="termsandconditions"> Terms of Service</Link>{" "}
            </p>
          </div>
        </div>
        <div className="border-right"></div>
        <div className="sign-up-second">
          <img className="sign-img" src={sign} alt="" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
