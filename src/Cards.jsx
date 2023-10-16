import Card from './Card'
import Row from 'react-bootstrap/Row'


function Cards(props) {
    return (
        <>  
            {/* Counter of how many cats we have */}

            <Row>
            {
                // Use .map to generate HTML markup for all cards
                props.cats.map((catItem, index) => {
                    return (
                        // Pass the item (in this case `cat`) as props to the child
                        <Card cat={catItem} bookPlaydate={props.bookPlaydate} key={index} />
                    )
                })
            }
            </Row>
        </>
    )
}

export default Cards