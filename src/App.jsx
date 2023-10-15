import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cards from './Cards'
// Styles: bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Styles: custom
import './App.css'

function App() {

  return (
    <> 
        <Header />
        <Cards />
        <Footer />
    </>
  )
}

export default App
