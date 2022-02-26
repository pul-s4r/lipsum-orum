import React from "react";
import styles from "./LoginForm.module.css";
import LogoOutline from "../../assets/ML-logo-fill.svg";
import TimelineHeader from "../Timeline/TimelineHeader";

const LoginForm = () => {
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
            <div className={styles.button}>
              <button>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
