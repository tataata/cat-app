import { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Cards from './Cards'
import PlaydateList from './playdateList'
import Special from './Special'


let tom = {
  name: 'Tom',
  description: 'Very playful cat',
  age: '1 year',
  location: 'Bilbao, Spain',
  photoURI: 'http://placekitten.com/300/300',
  special: true
}

let jerry = {
  name: 'Jerry',
  description: 'Very colorful cat',
  age: '3 years',
  location: 'Porto Alegre, Brazil',
  photoURI: 'http://placekitten.com/300/200',
  special: false
}

let miran = {
  name: 'Miran',
  description: 'Very wise cat',
  age: '11 years',
  location: 'Kuala Lumpur, Malaysia',
  photoURI: 'http://placekitten.com/300/340',
  special: true
}

let sudo = {
  name: 'Sudo',
  description: 'Very rebellious cat',
  age: '4 years',
  location: 'Denver, USA',
  photoURI: 'http://placekitten.com/300/290',
  special: false
}

let milk = {
  name: 'Milk',
  description: 'Very gentle cat',
  age: '2 years',
  location: 'Cairo, Egypt',
  photoURI: 'http://placekitten.com/300/330',
  special: false
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
  

  // Filter cats not special
  let regularCats = cats.filter(cat => cat.special === false)
  // Filter cats on sale
  let specialCats = cats.filter(cat => cat.special === true)
  

  return (
    <> 
      {/* Add counter with  amount of cats on the platform */}
      <p><Badge pill bg="secondary">We have <strong>{cats.length}</strong> cats registered on our plaform.</Badge></p>
      
      {/* Show playdate list if playdates exist */}
      {playdate.length ? <PlaydateList playdate={playdate} cancelPlaydate={cancelPlaydate} />  : <></>}

      {/* Update the reference for the props  */}
      <Cards cats={regularCats} bookPlaydate={bookPlaydate} />

      {/* Special: pass only filtered  data */}
      <Special cats={specialCats} bookPlaydate={bookPlaydate} />

    </>
  )
}

export default Platform
