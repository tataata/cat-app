// Import use State from React library so we can 
import { useState } from 'react'
import Card from './Card'
import Row from 'react-bootstrap/Row'

let tom = {
    name: 'Tom',
    description: 'Very playful cat',
    age: '1 year',
    location: 'Bilbao, Spain',
    photoURI: 'http://placekitten.com/300/300'
}

let jerry = {
    name: 'Jerry',
    description: 'Very colorful cat',
    age: '3 years',
    location: 'Porto Alegre, Brazil',
    photoURI: 'http://placekitten.com/300/200'
}

let miran = {
    name: 'Miran',
    description: 'Very wise cat',
    age: '11 years',
    location: 'Kuala Lumpur, Malaysia',
    photoURI: 'http://placekitten.com/300/340'
}

let sudo = {
    name: 'Sudo',
    description: 'Very rebellious cat',
    age: '11 years',
    location: 'Denver, USA',
    photoURI: 'http://placekitten.com/300/290'
}


function Cards() {
    // create a state for the data set
    // Syntax:
    // const [index, setIndex] = useState(0);
    const [ cats, setIndex ] = useState([ tom, jerry, miran, sudo ])

    return (
        <>
            <Row>
            {
                // Use .map to generate HTML markup for all cards
                cats.map((catItem, index) => {
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