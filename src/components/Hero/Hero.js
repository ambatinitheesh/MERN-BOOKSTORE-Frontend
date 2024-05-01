import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow from '../Assests/arrow.png'
import hero from '../Assests/hero.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Welcome to ReadIt Potter Bookstore </h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt=''/>
                </div>
                <p>ONLINE BOOKSTORE</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow} alt=''/>
            </div>
            </div>
            <div className='hero-right'>
            <img src={hero} alt=''/>
            </div>


    </div>
  )
}
