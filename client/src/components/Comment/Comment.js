
   
import Card from 'react-bootstrap/Card';
import './Comment.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Comment(props) {
    const comment = props.comment
    console.log(comment)
    
    const itemList = comment.map((item) => (
        <div>
          <h1>{item.sender}</h1>{item.profileUrl}{item.description}

          <Card style={{ width: '18rem' }}>
            <img className="profilePic" src={item.profileUrl}></img>
                <Card.Body className="commentContent">
                
                    <Card.Title className="sender">{item.sender}</Card.Title>
                    <Card.Text className="body">
                    {item.description}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    ));

    return (
        <div className="tribContent">
          
          <div>
      {/* <p>{itemList}</p> */}
    </div>


            <Card style={{ width: '18rem' }}>
            <img className="profilePic" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
                <Card.Body className="commentContent">
                
                    <Card.Title className="sender">Jane</Card.Title>
                    <Card.Text className="body">
                        Such a fun night!! We should do it again!
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
     
    )
}
export default Comment;