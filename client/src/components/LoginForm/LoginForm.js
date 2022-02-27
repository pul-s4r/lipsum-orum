import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import LogoOutline from "../../assets/ML-logo-fill.svg";
import TimelineHeader from "../Timeline/TimelineHeader";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const emailHandler = (event) => {
    const updatedEmail = event.target.value;
    console.log(event.target.value);
    setFormData({ ...formData, email: updatedEmail });
    console.log(formData);
  };

  const pwHandler = (event) => {
    const updatedPw = event.target.value;
    console.log(event.target.value);
    setFormData({ ...formData, password: updatedPw });
    console.log(formData);
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const postRequest = async () => {
    const response = await fetch(
      "http://127.0.0.1:3000/user/login",
      requestOptions
    );

    if (response.ok) {
      console.log(response);
      return navigate("/timeline");
    }

    const data = await response.json();
  };

  const signInHandler = (e) => {
    e.preventDefault();
    postRequest();
  };

  return (
    <div className={styles.parent_container}>
      <TimelineHeader />
      <div className={styles.loginPage}>
        <h1>Welcome Back!</h1>
        <img alt="logo" className={styles.logo} src={LogoOutline}></img>

        <div className={styles.loginForm}>
          <form>
            <label for="email">
              <h4>Email</h4>
            </label>
            <input
              placeholder="Type your email"
              type="email"
              id="email"
              name="email"
              onChange={emailHandler}
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
              onChange={pwHandler}
            />
            <div className={styles.button}>
              <button onClick={signInHandler}>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
