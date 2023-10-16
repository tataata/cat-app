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
  const [ playdates ] = useState([ milk ])

  return (
    <> 
      {/* Add counter with  amount of cats on the platform */}
      <p>We have {cats.length} cats registered on our plaform.</p>

      <Cards cats={cats} />

      {/* <ShoppingCart cartItems = {cart}/> */}

      <PlaydateList playDates = {playdates} />
    </>
  )
}

export default Platform
