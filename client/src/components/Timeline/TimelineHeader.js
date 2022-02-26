import classes from "./TimelineHeader.module.css";

import logo from "../../assets/ML-logo-hor.svg";

const TimelineHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-container"]}>
        <img className={classes.logo} src={logo} alt="Brand Logo" />
      </div>
    </header>
  );
};

export default TimelineHeader;
