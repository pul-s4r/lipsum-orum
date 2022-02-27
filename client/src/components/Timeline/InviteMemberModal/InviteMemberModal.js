import Modal from "../../UI/Modal";
import classes from "./InviteMemberModal.module.css";

import Member from "./Member/Member";

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
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
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
              <input
                className={classes["invite-member__content__input"]}
                placeholder="memorylane.com/invite/230ujadf949adkshf ..."
              ></input>
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
