import React from 'react'
import NavbarComp from '../components/NavbarComp'
import Herosection from '../components/Herosection'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import foodvector3 from '../Images/foodvector3.jpg'

export default function home() {
  return (
    <>
        <NavbarComp />
        <Herosection imageSource={foodvector3} quote="One cannot think well, love well, sleep well, if one has not dined well."/>
        <Cards/>
        <Footer />
    </>
    
  )
}
