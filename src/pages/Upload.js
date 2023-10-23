import React from 'react'
import NavbarComp from '../components/NavbarComp'
import Footer from '../components/Footer'
import Uploadform from '../components/Uploadform'
import Herosection from '../components/Herosection'
import foodvector4 from '../Images/foodvector4.jpg'

export default function Upload() {
  return (
    <>
    <NavbarComp/>
    <Herosection imageSource={foodvector4} quote="Sharing a recipe is like passing down a delicious piece of history, a legacy of flavor, and a piece of one's heart on a plate."/>
    <Uploadform/>
    <Footer/>
    </>
  )
}
