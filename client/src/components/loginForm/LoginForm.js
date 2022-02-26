import React from "react";
import "./LoginForm.css";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  const formHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="registration-page">
      <div class="container">
        <form>
          <h1>Create account</h1>
          <label for="firstName">
            <h4>Full name</h4>
          </label>
          <div className="fullName">
            <input
              placeholder="First name"
              type="text"
              id="firstName"
              name="firstName"
              required
            />
            <input
              placeholder="Last name"
              type="text"
              id="lastName"
              name="lastName"
              required
            />
          </div>
          <label for="email">
            <h4>Email</h4>
          </label>
          <input
            placeholder="Type your email"
            type="email"
            id="email"
            name="email"
            required
          />
          <label for="pw">
            <h4>Password</h4>
          </label>
          <input
            placeholder="Password"
            type="password"
            id="lname"
            name="password"
            required
          />
          <input type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account? <a href="url">Log in here</a>
        </p>
      </div>
      <div className="info">
        <h1>Lorem Ipsum</h1>
        <div className="box"></div>
        <h2>Lorem ipsum.</h2>
        <p>
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsum
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
