import React from 'react'
import NavbarComp from '../components/NavbarComp'
import Herosection from '../components/Herosection'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

export default function home() {
  return (
    <>
        <NavbarComp />
        <Herosection/>
        <Cards/>
        <Footer />
    </>
    
  )
}
