import "./LargeEventModal.css";
import Comment from "../Comment/Comment";
import Tags from "../Tags/Tags";

function LargeEventModal(props) {
  const comments = props.event.comments.map((comment) => {
    return <Comment key={comment.id} {...comment} />;
  });

  return (
    <div className="content">
      <div className="header">
        <img
          className="photo"
          src="https://images.unsplash.com/photo-1533294160622-d5fece3e080d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <div className="header-info">
          <p className="name">{props.event.eventName}</p>
          <p className="date">{props.event.eventDate}</p>
          <p className="subheading author">{props.event.author}</p>
          <p className="body createDate">{props.event.createDate}</p>
          <p className="body">{props.event.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="column left">
          <h3 className="subheading">Comments</h3>
          {comments}
        </div>
        <div className="column right">
          <h3 className="subheading">Tags</h3>
          <Tags tags={props.event.tags}></Tags>
        </div>
      </div>
    </div>
  );
}
export default LargeEventModal;
