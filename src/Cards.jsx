import Card from './Card'
import Row from 'react-bootstrap/Row'


function Cards(props) {
    // create a state for the data set
    // Syntax:
    // const [index, setIndex] = useState(0);
    // const [ cats ] = useState([ tom, jerry, miran, sudo ])

    return (
        <>  
            {/* Counter of how many cats we have */}

            <Row>
            {
                // Use .map to generate HTML markup for all cards
                props.cats.map((catItem, index) => {
                    return (
                        // Pass the item (in this case `cat`) as props to the child
                        <Card cat={catItem} info={"This is info from Cards passed to each card"} key={index}/>
                    )
                })
            }
            </Row>
        </>
    )
}

export default Cards