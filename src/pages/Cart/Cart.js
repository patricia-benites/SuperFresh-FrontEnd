import React from 'react'
import { Announcement } from '../../components/Announcement/Announcement'
import { Footer } from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
// import { AuthContext } from "../../context/context";
// import { useContext } from "react";
import { useEffect, useState } from "react";
import { client } from "../../client";

export function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const result = await client.get("/carts/find");
    setCart(result.data);
  };

  useEffect(() => {
    getCart();
  }, []);


  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div className='cartContainer'>
        <h2>Your Shopping Cart</h2>
        <div className='leftContainer'>
        <code>{JSON.stringify(cart)}</code>
          
        </div>
        <div className='rightContainer'></div>
        </div>
        <Footer/>
    </div>
  )
}
