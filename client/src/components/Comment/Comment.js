import Card from "react-bootstrap/Card";
import "./Comment.css";

function Comment({ profileUrl, sender, description }) {
  return (
    <div className="tribContent">
      <Card style={{ width: "18rem" }}>
        <img className="profilePic" src={profileUrl} alt="profile"></img>
        <Card.Body className="commentContent">
          <Card.Title className="sender">{sender}</Card.Title>
          <Card.Text className="body">{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Comment;
