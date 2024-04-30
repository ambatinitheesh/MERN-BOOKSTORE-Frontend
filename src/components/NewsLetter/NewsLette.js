import React from 'react'
import './news.css'
export const NewsLette = () => {
  return (
    <div className='newsletter'>
          <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div >
          <input type='email' placeholder='Your email address'/>
          <button>Subscribe</button>
        </div>
    </div>
  )
}
