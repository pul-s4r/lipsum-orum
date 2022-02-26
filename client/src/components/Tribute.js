import Card from 'react-bootstrap/Card';
import './Tribute.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tribute(props) {
    const message = props.message.map
    console.log(message)
    return (
        <div className="tribContent">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Jane</Card.Title>
                    <Card.Text>
                        test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Tribute;