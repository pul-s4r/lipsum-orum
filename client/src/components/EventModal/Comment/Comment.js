import classes from "./Comment.module.css";

function Comment({ profileUrl, sender, description }) {
  return (
    <div className={classes.comment}>
      <img
        className={classes["profile-picture"]}
        src={profileUrl}
        alt="profile"
      />
      <div className={classes["comment-info"]}>
        <div className={classes.sender}>{sender}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

export default Comment;
