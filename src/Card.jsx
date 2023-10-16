import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import './Card.css'
import Col from 'react-bootstrap/Col'

// The function receives 'props' as a parameter function
function Card(props) {
    return (
        <Col sm={6} md={4} lg={3}>
            <article className="card border-0">
                {/* it uses the value of props by defining the parameter as props objects */}
                <img src={props.cat.photoURI} />
                <h3>{props.cat.name}</h3>
                <p><em>{props.cat.description}</em></p>
                {/* Conditional rendering: If the cat has special flag, display a text "Special mention" */}
                { props.cat.special ? (<p> <Badge pill bg="warning">Special mention</Badge> </p>): <></> }

                <p>{props.cat.age}</p>
                <p>{props.cat.location}</p>
                <Button 
                    variant="primary" 
                    className="btn-custom"
                    id={props.cat.name} 
                    onClick={()=>{props.bookPlaydate(props.cat)}}
                    >
                        Book a playdate
                </Button>{' '}
            </article>
        </Col>
    )
}

export default Card