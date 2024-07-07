import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
  
import Cards from '../Components/Cards'
import Addcards from '../Components/Addcards'
import Carsousel2 from '../Components/Carsousel2'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
    <Cards/>
    <Addcards/>
    <Carsousel2/>
    <Footer/>
    </div>
  )
}

export default Home
