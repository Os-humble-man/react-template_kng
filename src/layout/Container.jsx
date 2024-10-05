import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Container({children}) {
  return (
    <div className='w-full'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
