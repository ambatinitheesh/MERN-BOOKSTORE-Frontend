import React from 'react'
import './offers.css'
import exclusive from '../Assests/exclusive.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'></div>
        <img src={exclusive} alt=""/>
        </div>
  )
}
