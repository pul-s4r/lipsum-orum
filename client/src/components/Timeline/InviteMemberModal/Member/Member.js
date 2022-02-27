import classes from "./Member.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../../../assets/profilePic.jpg";

const Member = (props) => {
  return (
    <div className={classes["member"]}>
      <img
        className={classes["member-profile"]}
        src={profilePic}
        alt="member-profile"
      />
      <div className={classes["member-info"]}>
        <div className={classes["member-name"]}>Marie Powell</div>
        <div className={classes["member-email"]}>MariePowell@email.com</div>
      </div>
      <div className={classes["member-settings-container"]}>
        <FontAwesomeIcon className={classes["member-settings"]} icon={faGear} />
      </div>
    </div>
  );
};

export default Member;
