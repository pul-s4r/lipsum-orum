import Comment from '../Comment/Comment';

export default function Comments(props) {
    const arrayOfObjects = props.comment
  return (

      <div>
          <p>hi</p>
      {arrayOfObjects.map(item => <Comment comment={[item]}>{[item]}</Comment>)}

        </div>
  );
}