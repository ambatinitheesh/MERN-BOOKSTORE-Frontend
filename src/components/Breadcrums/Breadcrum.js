import React from 'react'
import './breadcrum.css'
import arrow from '../Assests/breadcrum_arrow.png'
export const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='breadcrum'>
        HOME
        <img src={arrow} alt=""/>
        Shop<img src={arrow} alt=""/>
        {product.category} <img src={arrow} alt=""/>{product.name}
    </div>
  )
}
export default Breadcrum