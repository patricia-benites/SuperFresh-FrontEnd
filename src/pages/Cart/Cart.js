import React from 'react'
import { Announcement } from '../../components/Announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'

export function Cart() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div className='cartContainer'>
        <h2>Your Shopping Cart</h2>
        </div>
        <h2>Cart</h2>
        <h3>Footer</h3>
    </div>
  )
}
