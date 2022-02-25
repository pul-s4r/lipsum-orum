import './FullPageProfile.css';

function FullPageProfile(props) {
    const profilePic = props.element[0].picture;
    const imageLink = `../images/${profilePic}`;
    return (
        <div className="content">
           
                <img className="photo" src={require(`../images/${profilePic}`)} />
                {/* <img src={require({imageLink})} /> */}
                <div className="title">
                    <h1 className="name">{props.element[0].name}</h1>
                    <h2 className="date">{props.element[0].birthyear} - {props.element[0].deathyear}</h2>
                </div>
                <div className="container">
                    <p className="description">{props.element[0].description}</p>
                    <h3>Tributes</h3>
                </div>
            

        </div>
    )
}
export default FullPageProfile;