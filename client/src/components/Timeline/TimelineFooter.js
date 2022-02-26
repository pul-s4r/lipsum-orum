import classes from "./TimelineFooter.module.css";
import logo from "../../assets/ML-logo-inverted.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendarPlus,
  faFilter,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const TimelineFooter = (props) => {
  return (
    <div className={classes.footer}>
      <div className={classes["control-panel"]}>
        <FontAwesomeIcon
          className={classes["control-panel__icon"]}
          icon={faUserGroup}
        />
        <FontAwesomeIcon
          className={classes["control-panel__icon"]}
          icon={faCalendarPlus}
        />
        <img className={classes.logo} src={logo} alt="brand-logo" />
        <FontAwesomeIcon
          className={classes["control-panel__icon"]}
          icon={faFilter}
        />
        <FontAwesomeIcon
          className={classes["control-panel__icon"]}
          icon={faBell}
        />
        <FontAwesomeIcon
          className={classes.icon}
          icon="fa-solid fa-bars-filter"
        />
      </div>
    </div>
  );
};

export default TimelineFooter;
