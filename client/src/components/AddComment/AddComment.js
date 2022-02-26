import './AddComment.css';
import Comment from "../Comment/Comment";
export default function AddComment(props) {
    const user = {
        sender: "Comment",
        profileUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        message: ""
    }
    return (
        <div class="addCommentContainer">
            <Comment key={1} {...user} />
            <div className="commentContainer">
                <form className="commentField">
                    <input type="text" className="userInput" placeholder="Share your memory..." />
                    <button className="postButton" type="submit">Post</button>
                </form>
            </div>


        </div>


    );
}