import Tag from '../Tag/Tag';

  export default function Tags(props) {
      const arrayOfObjects = props.tags
    return (
  
        <div>
        {arrayOfObjects.map(item => <Tag item={item}></Tag>)}
        <Tag item="+"></Tag>
          </div>
    );
  }