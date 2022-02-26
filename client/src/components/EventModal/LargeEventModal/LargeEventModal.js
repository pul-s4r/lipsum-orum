import classes from "./LargeEventModal.module.css";

import Comment from "../Comment/Comment";
import Modal from "../../UI/Modal";
import AddComment from "../AddComment/AddComment";
import Tags from "../Tags/Tags";
import Tag from "../Tag/Tag";

function LargeEventModal(props) {
  const comments = props.event.comments.map((comment) => {
    return <Comment key={comment.id} {...comment} />;
  });

  const tags = props.event.tags.map((item) => <Tag item={item} />);

  return (
    <Modal>
      <div className={classes.modal}>
        <div className={classes.main}>
          <img
            className={classes["photo"]}
            src="https://images.unsplash.com/photo-1533294160622-d5fece3e080d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="event"
          />
          <div className={classes["header-info"]}>
            <div className={`${classes["name"]} ${classes.highlight}`}>
              {props.event.eventName}
            </div>
            <div className={classes["event-date"]}>{props.event.eventDate}</div>
            <div className={classes["post-information"]}>
              <div className={`${classes["author"]} ${classes.highlight}`}>
                by {props.event.author}
              </div>
              <div className={classes["post-date"]}>
                {props.event.createDate}
              </div>
            </div>
            <div className={classes["description"]}>
              {props.event.description}
            </div>
          </div>
        </div>

        <div className={classes.details}>
          <div className={classes["details__comments"]}>
            <div
              className={`${classes["details__comments__title"]} 
                ${classes.highlight}`}
            >
              Comments
            </div>
            {comments}
            <AddComment></AddComment>
          </div>
          <div className={classes["details__tags"]}>
            <div
              className={`${classes["details__tags__title"]} 
              ${classes.highlight}`}
            >
              Tags
            </div>
            {tags}
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default LargeEventModal;
