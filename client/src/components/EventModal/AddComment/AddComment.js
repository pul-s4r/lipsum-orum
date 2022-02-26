import classes from "./AddComment.module.css";

export default function AddComment(props) {
  const user = {
    sender: "Comment",
    profileUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    message: "",
  };
  return (
    <div className={classes["add-comment"]}>
      <img
        className={classes["profile-picture"]}
        src={user.profileUrl}
        alt="profile"
      />
      <form className={classes["comment-form"]}>
        <textarea
          type="text"
          className={classes["comment-input"]}
          placeholder="Share your memories..."
        />
        <button className={classes.postButton} type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
