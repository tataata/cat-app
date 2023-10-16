import { useState } from 'react'

import Cards from './Cards'
import PlaydateList from './playdateList'


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
  age: '4 years',
  location: 'Denver, USA',
  photoURI: 'http://placekitten.com/300/290'
}

let milk = {
  name: 'Milk',
  description: 'Very gentle cat',
  age: '2 years',
  location: 'Cairo, Egypt',
  photoURI: 'http://placekitten.com/300/330'
}


function Platform() {
  // create a state for the cards
  const [ cats ] = useState([ tom, jerry, miran, sudo, milk ])
  // const [ playdate ] = useState([ milk, miran ])
  const [ playdate, setPlaydate ] = useState([])

  // Function: add item to the cart state
  // Pass this function to Card - Button
  const bookPlaydate = (clickedItem) => {
    // add clicked item to the array playdate
    // This does not work: playdate.push(clickedItem)
    // change state with setPlaydate
    setPlaydate([ 
      ...playdate, 
      clickedItem 
    ])
  }

  // Remove an item from the playdate list
  const cancelPlaydate = (indexOfItemToRemove) => {
    // Chanage state of playdate
    console.log('clicked', indexOfItemToRemove);
    let filteredPlaydate = playdate.filter((item, index) => {
      return index !== indexOfItemToRemove
    })
    setPlaydate(filteredPlaydate)
  }
  

  return (
    <> 
      <PlaydateList playdate={playdate} cancelPlaydate={cancelPlaydate} />

      {/* Add counter with  amount of cats on the platform */}
      <p>We have {cats.length} cats registered on our plaform.</p>

      <Cards cats={cats} bookPlaydate={bookPlaydate} />

      {/* <ShoppingCart cartItems = {cart}/> */}

    </>
  )
}

export default Platform
