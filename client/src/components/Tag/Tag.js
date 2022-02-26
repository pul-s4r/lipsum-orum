
import './Tag.css';

const arrayOfObjects = [
    "hello",
    "hello2",
  ];
  
  export default function Tag(props) {
   return(
       <div className="tag">{props.item}</div>
   );
  }