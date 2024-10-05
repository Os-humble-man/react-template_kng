import React from 'react'
import Header from '../components/Header'
import EventCategory from '../components/EventCategory'
import EventList from '../components/EventList'
import Pagination from '../components/Pagination'
import Footer from '../layout/Footer'


export default function Home() {
  return (
    <div className='w-full'>
        <Header/>
        <EventCategory/>
        <EventList/>
        <div className='w-full flex justify-center items-center py-5'>
            <Pagination/>
        </div>
        <Footer/>
    </div>
  )
}
