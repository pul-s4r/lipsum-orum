import classes from "./TimelineHeader.module.css";

import logo from "../../assets/ML-logo-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const TimelineHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-container"]}>
        <img className={classes.logo} src={logo} alt="Brand Logo" />
        <div className={classes.brandname}>Memory Lane</div>
      </div>
      <FontAwesomeIcon className={classes.user} icon={faCircleUser} />
    </header>
  );
};

export default TimelineHeader;
