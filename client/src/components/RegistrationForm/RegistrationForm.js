import { React, useState } from "react";
import { Link } from "react-router-dom";
import ExistingTimeline from "../ExistingTimeline/ExistingTimeline";
import styles from "./RegistrationForm.module.css";
import Smiley from "../../assets/new-user-carousel_1.png";

const RegistrationForm = () => {
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
        <div className={styles.registration}>
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
              Already have an account? <Link to="login">Log in Here</Link>
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
        <img src={Smiley} alt="Smiley face, bear and portrait" />
        <div className="box"></div>
        <p>Description of app</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
