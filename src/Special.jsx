import Card from './Card'
import Row from 'react-bootstrap/Row'

function Special (props) {
    return (
        <>
        <h2>Special mentions of our members</h2>
        <Row>
            {/* // Display the cards for items on Special here */}
        {/* Make this dynamic */}
        {props.cats.map((catItem, index) => {
              return ( 
                <Card cat={catItem} bookPlaydate={props.bookPlaydate} key={index} />
              )
            })}
        </Row>
        </>
    )
}

export default Special
