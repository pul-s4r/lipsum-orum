import './LargeEventModal.css';
import Comments from '../Comments/Comments';
import Comment from '../Comment/Comment';
import Tags from '../Tags/Tags';

function LargeEventModal(props) {
    // const profilePic = props.element[0].pictureUrl;
    // const arrayOfObjects = props.element[0].comments;
    // console.log(arrayOfObjects)
    // const imageLink = `../images/${profilePic}`;

    // const arrayOfObjects = [
    //     { sender: "Americano", message: "Single", profileUrl:"test" },
    //     { sender: "Espresso", message: "Single", profileUrl:"test2" },
    //   ];

      const result = props.element[0].comments.map((eventObj) => (
         eventObj.comments
      ))
console.log(result)
    return (
        <div className="content">
            <div className="header">
                <img className="photo" src="https://images.unsplash.com/photo-1533294160622-d5fece3e080d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                {/* <img src={require({imageLink})} /> */}
                <div className="header-info">
                    <p className="name">{props.element[0].eventName}</p>
                    <p className="date">{props.element[0].eventDate}</p>
                    <p className="subheading author">{props.element[0].author}</p>
                    <p className="body createDate">{props.element[0].createDate}</p>
                    <p className="body">{props.element[0].description}</p>
                    
                </div>
            </div>
                <div className="row">
                <div className="column left" >

                    <h3 className="subheading">Comments</h3>
                    {/* {arrayOfObjects.map(item => <p item={item}></p>)} */}

                {/* <p>{result}</p> */}
                <Comments comment={result}></Comments>


                    {/* <p>{arrayOfObjects.comments}</p> */}
                    {/* {arrayOfObjects.map(item => <p>{item}</p>)} */}
                    {/* {props.element[0].comments.map(item => <Comment item={item}></Comment>)} */}
                    {/* <Comment comment={props.element[0].comments}></Comment>
                    <Comment comment={props.element[0].comments}></Comment>
                    <Comment comment={props.element[0].comments}></Comment> */}
                </div>
                <div className="column right" >
                   
                    <h3 className="subheading">Tags</h3>
                    <Tags tags={props.element[0].tags}></Tags>
                </div>
                </div>



            
        </div>



    )
}
export default LargeEventModal;