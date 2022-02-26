import './FullPageProfile.css';
import Tribute from './Tribute';

function FullPageProfile(props) {
    const profilePic = props.element[0].picture;
    const imageLink = `../images/${profilePic}`;
    return (
        <div className="content">
           <div className="header">
                <img className="photo" src={require(`../images/${profilePic}`)} />
                {/* <img src={require({imageLink})} /> */}
                <div className="title">
                    <h1 className="name">{props.element[0].name}</h1>
                    <h2 className="date">{props.element[0].birthyear} - {props.element[0].deathyear}</h2>
                </div>
                </div>
                <div className="container">
                    <p className="description">{props.element[0].description}</p>
                    <div>
                        <h3>Tributes</h3>
                        <Tribute message={props.element[0].tribute}></Tribute>
                        <Tribute message={props.element[0].tribute}></Tribute>
                        <Tribute message={props.element[0].tribute}></Tribute>
                    </div>
                </div>
            

        </div>
    )
}
export default FullPageProfile;