import Modal from "../../UI/Modal";
import classes from "./InviteMemberModal.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const InviteMemberModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.modal}>
        <header className={classes.header}>Members</header>
        <div className={classes["member-container"]}>
          <div className={classes["member-container__title"]}>
            Your friends(10)
          </div>
          <div className={classes["member-container__content"]}>
            {/* Member Component */}
            <div className={classes["member"]}>
              <img
                className={classes["member-profile"]}
                src=""
                alt="member-profile"
              />
              <div className={classes["member-info"]}>
                <div className={classes["member-name"]}>Marie Powell</div>
                <div className={classes["member-email"]}>
                  MariePowell@email.com
                </div>
              </div>
              <div className={classes["member-settings-container"]}>
                <FontAwesomeIcon
                  className={classes["member-settings"]}
                  icon={faGear}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes["invite-member-container"]}>
          <div className={classes["invite-member__title"]}>
            Invite more people
          </div>
          <div className={classes["invite-member__content"]}>
            <div className={classes["invite-member__content__label"]}>
              Share Link
            </div>
            <div className={classes["invite-member__content__input-container"]}>
              <div className={classes["invite-member__content__input"]}></div>
              <button
                type="button"
                className={classes["invite-member__content__link"]}
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InviteMemberModal;
