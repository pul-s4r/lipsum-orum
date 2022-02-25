import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const formHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="registration-page">
      <div class="container">
        <form>
          <h1>Create account</h1>
          <label for="fullname">
            <h4>Full Name</h4>
          </label>
          <input type="text" id="fullname" name="fullname" />
          <label for="email">
            <h4>Email</h4>
          </label>
          <input type="email" id="email" name="email" />
          <label for="pw">
            <h4>Password</h4>
          </label>
          <input type="password" id="lname" name="password" />
          <input type="submit" value="Sign Up" />
        </form>
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
