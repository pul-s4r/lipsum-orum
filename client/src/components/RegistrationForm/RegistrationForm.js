import { React, useState } from "react";
import ExistingTimeline from "../ExistingTimeline/ExistingTimeline";
import styles from "./RegistrationForm.module.css";
import MemoryLogo from "../../assets/ML-logo-hor.svg";

const LoginForm = () => {
  const [existingMemory, setExistingMemory] = useState(false);

  const checkHandler = () => {
    setExistingMemory(!existingMemory);
  };

  console.log(existingMemory);

  const formHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.registration_page}>
      <div className={styles.container}>
        <img id="logo" src={MemoryLogo} alt="Memory logo" />
        <div className={styles.test}>
          <form>
            <h1>Create account</h1>
            <label for="firstName">
              <h4>Full name</h4>
            </label>
            <div className={styles.fullName}>
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
            <p>
              Already have an account? <a href="url">Log in here</a>
            </p>
          </form>
        </div>
        <ExistingTimeline
          handleCheck={checkHandler}
          memoryStatus={existingMemory}
        />
      </div>
      <div className={styles.info}>
        <h1>Start creating memories</h1>
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
